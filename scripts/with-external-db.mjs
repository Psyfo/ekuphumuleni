// Runs a command against the staging or production database from a developer
// machine. Inside Coolify the site reaches the database by its internal name;
// from outside it needs the public address, which Doppler keeps as
// DATABASE_URL_EXTERNAL. Usage: node scripts/with-external-db.mjs <command...>
import { spawnSync } from 'node:child_process';

const external = process.env.DATABASE_URL_EXTERNAL;
if (!external) {
  console.error('DATABASE_URL_EXTERNAL is not set. Run through `doppler run -p ekuphumuleni -c stg` (or prd).');
  process.exit(1);
}
const [cmd, ...args] = process.argv.slice(2);
const result = spawnSync(cmd, args, {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, DATABASE_URL: external },
});
process.exit(result.status ?? 1);
