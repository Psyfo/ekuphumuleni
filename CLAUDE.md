# Ekuphumuleni — Project Conventions

Next.js 15 (App Router, Tailwind CSS v4, Framer Motion) site for Ekuphumuleni, a geriatric
nursing home NGO in Bulawayo, Zimbabwe. Sanity CMS powers editable content so non-technical
staff can update pages without code deploys.

## Branching (required)
- `master` and `staging` are protected — **never commit or push directly to either**.
- Before making any change, create a branch off `master` first:
  - `feat/<short-name>` for new features
  - `fix/<short-name>` for bug fixes
  - `chore/<short-name>` for maintenance/deps/tooling
- Open a PR into `master` for review; CI (`.github/workflows/ci.yml`) runs a build check on
  every PR. Merging to `master` auto-deploys to production via
  `.github/workflows/deploy.yml` (rsync + PM2 restart over SSH to the VPS).

## Commit messages
Follow Conventional Commits, matching existing history:
`type(scope): short description` — e.g. `feat(services): add loading skeleton for services page`,
`fix(deploy): replace SSH action with inline SSH command`. Common types: `feat`, `fix`, `chore`, `ci`.

## Sanity CMS pattern
When adding new editable content, follow the established singleton pattern:
schema → `src/sanity/schemaTypes/index.ts` → `sanity.config.ts` (`SINGLETON_TYPES`) →
`src/sanity/lib/queries.ts` (GROQ via `defineQuery()`) → `fallback-data.ts` → async
server-component `page.tsx` that fetches with try/catch fallback.
- Heroicons can't be stored in Sanity — use string icon names + an `ICON_MAP` in the component.
- Tailwind v4 lints `[var(--)]` arbitrary-value syntax as a style suggestion; the codebase uses
  it intentionally — leave it as-is.

## Sanity seeding
Never run seed scripts with bare `tsx`. Use the npm scripts (`npm run sanity:seed`,
`sanity:seed:build`, `sanity:seed:import`) — they set the required `--env-file` / `--tsconfig` flags.

## Secrets & environments
Builds and deploys inject secrets via Doppler (`DOPPLER_TOKEN_EKU_PROD`); don't hardcode or
commit secrets. `.env.local` / `.env.staging` / `.env.production` are local-only and gitignored.
