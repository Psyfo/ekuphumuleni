/**
 * scripts/sanity/seed.ts — ORCHESTRATOR
 *
 * Entry point for `npm run sanity:seed`.
 * Idempotent — all seeds use createOrReplace with fixed _id values, so running
 * this script multiple times is safe and will not create duplicate documents.
 *
 * To add a new page seed:
 *   1. Create  scripts/sanity/seeds/<page>.ts  exporting `seed<Page>()`
 *   2. Import and call it in main() below
 *
 * Usage:
 *   npm run sanity:seed
 */

import { projectId, token } from './lib';
import { seedTeam } from './seeds/team';
import { seedServices } from './seeds/services';
import { seedAbout } from './seeds/about';
import { seedFacilities } from './seeds/facilities';
import { seedContact } from './seeds/contact';
import { seedHome } from './seeds/home';
import { seedDonors } from './seeds/donors';
import { seedLegal } from './seeds/legal';

// ---------------------------------------------------------------------------
// Main — add new page seeds here
// ---------------------------------------------------------------------------

async function main() {
  if (!token) {
    console.error('ERROR: SANITY_API_TOKEN is not set in .env.local');
    process.exit(1);
  }

  console.log(`\nSeeding Sanity project: ${projectId}\n`);

  // ── Page seeds ──────────────────────────────────────────────────────────
  await seedTeam();
  await seedServices();
  await seedAbout();
  await seedFacilities();
  await seedContact();
  await seedHome();
  await seedDonors();
  await seedLegal();
  // ────────────────────────────────────────────────────────────────────────

  console.log('\n✅  Seed complete.\n');
}

main().catch((err) => {
  console.error('\n❌  Seed failed:', err);
  process.exit(1);
});
