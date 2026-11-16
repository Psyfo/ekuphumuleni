# ekuphumuleni.ngo production image (Coolify).
#
# Three stages so the image that runs carries only what the server needs:
# Next's standalone output (.next/standalone, a traced subset of node_modules
# plus server.js), the static assets, and public/. No npm, no dev
# dependencies, no source. The Nixpacks image this replaces was 2.49 GB and
# Coolify keeps old images until its cleanup runs, which is how the server's
# disk filled on 2026-11-15.
#
# Secrets (ZEPTOMAIL_TOKEN and friends) are runtime-only env vars in Coolify
# and are read by the contact API route at request time. The build needs none
# of them (Sanity content is read from a public dataset), so none are declared
# here; anything declared as an ARG ends up readable in `docker history`.

FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# The VPS has intermittent DNS failures reaching the npm registry
# (EAI_AGAIN), so retry instead of failing the deploy on the first blip.
RUN set -eu; \
    for attempt in 1 2 3; do \
      if npm ci --no-audit --no-fund; then exit 0; fi; \
      echo "npm ci failed (attempt ${attempt}/3), retrying"; \
      sleep $((attempt * 10)); \
    done; \
    exit 1

FROM node:22-slim AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* values are inlined into the client bundle at build time, so
# they must reach `next build`. They are public by definition (they ship in
# the page), which is why they are safe as build args.
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ARG NEXT_PUBLIC_SANITY_API_VERSION
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID
ARG NEXT_PUBLIC_UMAMI_SRC
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_SANITY_API_VERSION=$NEXT_PUBLIC_SANITY_API_VERSION
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
ENV NEXT_PUBLIC_UMAMI_SRC=$NEXT_PUBLIC_UMAMI_SRC
ENV NEXT_TELEMETRY_DISABLED=1
# Prerenders pages from Sanity (ISR, 300 s) and runs the postbuild
# next-sitemap step, which writes into public/.
RUN npm run build

FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
# Fail the image build, not production, if tracing missed sharp's libvips.
RUN node -e " \
  const sharp = require('sharp'); \
  sharp({ create: { width: 1, height: 1, channels: 3, background: '#000' } }) \
    .png().toBuffer() \
    .then(() => console.log('sharp loads libvips', sharp.versions.vips)) \
    .catch((e) => { console.error(e); process.exit(1); });"
# Docker sets HOSTNAME to the container id, and server.js binds to HOSTNAME,
# so pin it to all interfaces or the proxy cannot reach the app.
ENV HOSTNAME=0.0.0.0
ENV PORT=3001
EXPOSE 3001
CMD ["node", "server.js"]
