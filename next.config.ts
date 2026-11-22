import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Standalone output keeps the production image small: `next build` traces
  // the files the server actually needs into .next/standalone with its own
  // server.js, and the Dockerfile ships only that, not the whole install.
  output: 'standalone',
  experimental: {
    // The site and the Payload admin each have their own root layout, so an
    // address that matches neither needs one global 404 page.
    // See src/app/global-not-found.tsx.
    globalNotFound: true,
  },
  // sharp (used by next/image and by Payload for uploads) loads its native
  // libvips through the dynamic linker, which file tracing cannot follow, so
  // include it explicitly. The Dockerfile loads sharp during the image build,
  // so a gap here fails the deploy rather than every image in production.
  outputFileTracingIncludes: {
    // Linux for the server image; Windows so a local production build runs too
    // (on Linux that pattern matches nothing).
    '/**': ['./node_modules/@img/sharp-libvips-linux*/lib/**/*', './node_modules/@img/sharp-win32*/**/*'],
  },
  images: {
    // The home hero requests quality 80; Next 16 only allows qualities
    // listed here (default [75]) and warns on every page load otherwise
    qualities: [75, 80],
    // Uploaded photos are served by Payload from the private bucket.
    localPatterns: [{ pathname: '/api/media/file/**' }, { pathname: '/images/**' }],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      // The admin and API must never appear in search results.
      { source: '/admin/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
