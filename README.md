# Ekuphumuleni Geriatric Nursing Home

Website for [Ekuphumuleni](https://ekuphumuleni.ngo), a geriatric nursing home NGO in
Bulawayo, Zimbabwe, serving the elderly since 1983. *Ekuphumuleni* means **"a place of
rest"** — the site exists to build trust with families of residents, reach donors, and
let the home's own staff keep content current without code deploys.

- **Production:** https://ekuphumuleni.ngo (VPS, deployed automatically from `master`)
- **Staging:** https://ekuphumuleni.vercel.app (Vercel, from `staging`)

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 + custom design tokens (`src/app/styles/`) |
| Motion | CSS entrance animations (above the fold) + Framer Motion (scroll-triggered) |
| CMS | Sanity (embedded Studio at `/studio`) |
| Language | TypeScript |
| Secrets | Doppler |
| Hosting | VPS (rsync + PM2) for production, Vercel for staging |

## State of the Application

The site is feature-complete and in production. All public pages are CMS-driven with
hard-coded fallbacks, and the 2026 aesthetic overhaul (six phases) has landed:

1. **Contrast pass** — WCAG-compliant palette: Deep Cocoa (`#6B4F4F`) for text/headings,
   Deep Terracotta (`#B05A3C`, 4.8:1 with white) for buttons and links; Muted Terracotta
   and Earth Brown are decorative-only.
2. **Motion pass** — heroes render at first paint via CSS-only `animate-rise` entrances
   (no JS gating of LCP content), `prefers-reduced-motion` respected, calm lift-style
   hovers instead of scaling.
3. **Hero redesign** — photo-led home hero (the building's *Siyakwamukela* — "we welcome
   you" — entrance) with the mission and "since 1983" above the fold; founder portrait
   with caption in the About section.
4. **Section rhythm & photography** — a Deep Cocoa donors band anchors the home page;
   all content photos share one warm grade (`.img-warm`); missing team portraits show
   branded serif initials instead of empty boxes.
5. **Consistency pass** — fluid `clamp()` type scale, a single `.btn` system
   (primary / secondary / on-dark / sm), shared `SectionHeading` component, unified
   containers, brand-muted form-feedback colors.
6. **Docs sync** — [docs/BRAND.md](docs/BRAND.md) is the single source of truth for the
   design system and matches the implementation.

**Content freshness:** every public page uses ISR (`revalidate = 300`), so Sanity Studio
edits reach production within ~5 minutes — no redeploy needed.

## Pages

`/` (home), `/about`, `/team`, `/services`, `/facilities`, `/donors`, `/contact`,
`/privacy`, `/terms`, plus the embedded Sanity Studio at `/studio`.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Create `.env.local` with the Sanity connection (values live in Doppler):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-28
```

Without Sanity credentials the site still runs — every page falls back to the static
content in its `fallback-data.ts`.

### Useful scripts

```bash
npm run build              # production build (postbuild generates the sitemap)
npm run start              # serve the production build on :3001
npm run lint               # eslint
npm run sanity:typegen     # extract schema + generate types
npm run sanity:seed        # seed Sanity content (never run seed scripts with bare tsx)
npm run sanity:seed:import # build + import the team-members seed
```

## Content Editing (Sanity)

Non-technical staff edit everything at `/studio`. Each page is a **singleton** document
(e.g. `homePageSettings`) plus a few collections (team members, staff photos, donor
years). The established pattern for adding editable content:

```
schema (src/sanity/schemaTypes/) → schemaTypes/index.ts → sanity.config.ts (SINGLETON_TYPES)
→ GROQ query via defineQuery() (src/sanity/lib/queries.ts) → fallback-data.ts
→ async server-component page.tsx with try/catch fallback
```

Notes:

- Heroicons can't be stored in Sanity — store string icon names and map them with an
  `ICON_MAP` in the component.
- New schema fields should be optional with fallbacks so existing documents need no
  migration.

## Design System

[docs/BRAND.md](docs/BRAND.md) is the source of truth. The implementation lives in
`src/app/styles/`:

- `_variables.css` — color/spacing/radius/duration tokens (single source of truth)
- `_typography.css` — fluid `clamp()` type scale
- `_components.css` — the `.btn` system, cards, section utilities
- `_utilities.css` — warm shadows, borders, `.img-warm` photo grade, `animate-rise`
  entrances
- `src/components/SectionHeading.tsx` — canonical section header

Tailwind v4 lints `[var(--…)]` arbitrary-value syntax as a style suggestion; the
codebase uses it intentionally.

## Branching & Deployment

- `master` and `staging` are **protected** — never commit or push to either directly.
- Branch from fresh `master` using `feat/<name>`, `fix/<name>`, or `chore/<name>`, and
  open a PR into `master`. CI (`.github/workflows/ci.yml`) runs a build check on every PR.
- Merging to `master` auto-deploys to production via
  `.github/workflows/deploy-production.yml`: Doppler-injected build on CI, rsync to the
  VPS, PM2 reload. The workflow clears Next's persisted fetch cache before each build so
  prerendered pages never bake stale CMS content.
- Commit messages follow Conventional Commits (`type(scope): description`).

## Secrets

Builds and deploys inject secrets via Doppler (`DOPPLER_TOKEN_EKU_PROD`). Never hardcode
or commit secrets; `.env.local` / `.env.staging` / `.env.production` are local-only and
gitignored.
