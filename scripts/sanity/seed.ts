/**
 * scripts/sanity/seed.ts — ORCHESTRATOR
 *
 * Entry point for `npm run sanity:seed`.
 *
 * To add a new page seed:
 *   1. Create  scripts/sanity/seeds/<page>.ts  exporting `seed<Page>()`
 *   2. Import and call it in main() below
 *
 * Usage:
 *   npm run sanity:seed
 */

import { projectId, dataset, token } from './lib';
import { seedTeam } from './seeds/team';

// ---------------------------------------------------------------------------
// Project-level setup (runs once per seed, not per page)
// ---------------------------------------------------------------------------

async function renameProject() {
  console.log('\n── Project setup: rename ──');
  try {
    const res = await fetch(
      `https://api.sanity.io/v2021-06-07/projects/${projectId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ displayName: 'Ekuphumuleni' }),
      },
    );
    if (res.ok) {
      console.log('  ✓ Project renamed to "Ekuphumuleni"');
    } else {
      const body = await res.text();
      console.warn(`  ⚠  Could not rename project (${res.status}): ${body}`);
      console.warn('  ⚠  Continuing — token may not have Administrator role.');
    }
  } catch (err) {
    console.warn('  ⚠  Project rename failed (network error):', err);
  }
}

// ---------------------------------------------------------------------------
// Main — add new page seeds here
// ---------------------------------------------------------------------------

async function main() {
  if (!token) {
    console.error('ERROR: SANITY_API_TOKEN is not set in .env.local');
    process.exit(1);
  }

  console.log(`\nSeeding Sanity project: ${projectId} / ${dataset}\n`);

  await renameProject();

  // ── Page seeds ──────────────────────────────────────────────────────────
  await seedTeam();
  // await seedHome();      // future: scripts/sanity/seeds/home.ts
  // await seedServices();  // future: scripts/sanity/seeds/services.ts
  // ────────────────────────────────────────────────────────────────────────

  console.log('\n✅  Seed complete.\n');
}

main().catch((err) => {
  console.error('\n❌  Seed failed:', err);
  process.exit(1);
});
