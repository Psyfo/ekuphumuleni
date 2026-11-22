/**
 * Gives someone an owner account on the editor (/admin).
 *
 * The site never lets the first account be made through the website (see
 * src/payload/collections/Users.ts), so a fresh database gets its first owner
 * from here. After that, owners add everyone else from inside the admin.
 *
 * The account gets a long random password that is never shown or stored
 * anywhere. The new owner sets their own by choosing "Forgot password?" on the
 * sign-in page, which emails them a link.
 *
 * Usage (email as the last argument):
 *   npm run cms:owner -- person@example.org
 *   npm run cms:owner:staging -- person@example.org
 *   npm run cms:owner:production -- person@example.org
 */
import { randomBytes } from 'node:crypto';

import config from '@payload-config';
import { getPayload } from 'payload';

const email = process.argv.at(-1)?.trim().toLowerCase() ?? '';
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error('Pass the new owner\'s email address, e.g. npm run cms:owner -- person@example.org');
  process.exit(1);
}

const payload = await getPayload({ config });

const existing = await payload.find({ collection: 'users', where: { email: { equals: email } }, limit: 1 });
const found = existing.docs[0];

if (found) {
  if (found.role === 'owner') {
    console.log(`${email} is already an owner. Nothing changed.`);
  } else {
    await payload.update({ collection: 'users', id: found.id, data: { role: 'owner' } });
    console.log(`${email} already had an account; it is now an owner.`);
  }
} else {
  await payload.create({
    collection: 'users',
    data: { email, role: 'owner', password: randomBytes(32).toString('base64url') },
  });
  console.log(`Created owner account for ${email}. They set a password with "Forgot password?" on the sign-in page.`);
}

const owners = await payload.count({ collection: 'users', where: { role: { equals: 'owner' } } });
console.log(`Owners on this site: ${owners.totalDocs}`);
process.exit(0);
