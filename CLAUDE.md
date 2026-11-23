# Ekuphumuleni: Project Conventions

Next.js 16 (App Router, Tailwind CSS v4, Framer Motion) site for Ekuphumuleni, a geriatric
nursing home NGO in Bulawayo, Zimbabwe. Payload CMS (self-hosted, inside this same app)
powers editable content so non-technical staff can update pages without code deploys.

## Branching (required)
- **`master` is the only protected branch**: never commit or push directly to it. It ships
  to production. `staging` is the shared integration branch and is intentionally **not**
  protected; it deploys to `https://ekuphumuleni.lab.mahlangu.dev` (Coolify) for testing.
  Nothing runs on Vercel any more.
- Before making any change, create a branch off `master` (never off `staging` or another
  feature branch):
  - `feat/<short-name>` for new features
  - `fix/<short-name>` for bug fixes
  - `chore/<short-name>` for maintenance/deps/tooling
- Workflow: feature branch → merge into `staging` → verify on the staging site → open a PR
  into `master`. `staging` is periodically reset to `master`, so treat anything that only
  lives there as disposable.
- CI (`.github/workflows/ci.yml`) runs a build check on every PR into `master`. Merging to
  `master` auto-deploys to production on Coolify, which builds the repo's `Dockerfile`
  (Next standalone output; secrets are runtime-only env vars, never build args).

## Commit messages
Follow Conventional Commits, matching existing history:
`type(scope): short description`, e.g. `feat(services): add loading skeleton for services page`,
`fix(deploy): replace SSH action with inline SSH command`. Common types: `feat`, `fix`, `chore`, `ci`.

## Payload CMS pattern
Content lives in Postgres (`ekuphumuleni_{dev,stg,prd}` on the shared Coolify instance) and
uploads in the private B2 bucket `ekuphumuleni-media` (one prefix per environment). To add
editable content:
field config in `src/payload/globals/*` (pages, wrapped by `pageGlobal`) or
`src/payload/collections/*` (records, wrapped by `contentCollection`) → register in
`src/payload.config.ts` → `npm run migrate:create -- <name>` and commit the migration →
`npm run generate:types` → read it through `src/lib/cms.ts` → `fallback-data.ts` → async
server-component `page.tsx` that reads with try/catch fallback.
- Never edit the database schema by hand or turn on `push`: schema changes ship as migrations,
  which run automatically when the production server starts.
- Pages render on request (`dynamic = 'force-dynamic'`) and reads are cached under the `cms`
  tag until an editor saves, so the build never needs the database.
- Postgres names cap at 63 characters; nested lists and options get short names from
  `src/payload/db-names.ts`. Keep using the wrappers so that keeps working.
- Heroicons can't be stored in the CMS: use string icon names + an `ICON_MAP` in the component.
- After changing admin components, run `npx payload generate:importmap`.
- Tailwind v4 lints `[var(--)]` arbitrary-value syntax as a style suggestion; the codebase uses
  it intentionally, so leave it as-is.

## Scripts that touch a database
Always use the npm scripts, which run through Doppler with the right config:
`npm run migrate` / `migrate:staging` / `migrate:production`, and the one-off Sanity import
`cms:import` / `cms:import:staging` / `cms:import:production` (refuses to overwrite existing
content unless `CMS_IMPORT_REPLACE=yes`). After importing into a running server, restart it
so its cache is cleared. `cms:owner` / `cms:owner:staging` / `cms:owner:production -- <email>`
gives someone an owner account (the only way to make the first one).

## Emails
Every email the site sends (account invites and resets, contact-form notification and
confirmation) is built with `brandedEmail()` and its blocks in `src/lib/email/layout.ts`, so
they share one look. New emails use it too: inline styles only, escape all user input with
`escapeHtml`, and point people at the home's real contact details, never the no-reply sender.
Mail goes through ZeptoMail (agent `ekuphumuleni_agent`), which only accepts sends from
allow-listed server IPs; a new server address must be added there or every email fails.

## Secrets & environments
Doppler project `ekuphumuleni` (configs `dev` / `stg` / `prd`) is the source of truth; the
folder has no default, so scripts pass `-p ekuphumuleni -c <cfg>` explicitly. Coolify holds
the runtime copies for staging and production, and nothing syncs them: when a value changes
in Doppler, update the Coolify copy, restart the app, and check it works on the live site.
Don't hardcode or commit secrets.
`.env.local` / `.env.staging` / `.env.production` are local-only and gitignored.
