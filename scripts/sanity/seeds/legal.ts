/**
 * scripts/sanity/seeds/legal.ts
 *
 * Seeds the Sanity privacyPageSettings and termsPageSettings singletons
 * for the /privacy and /terms pages. Called by the orchestrator via
 * `npm run sanity:seed`. Idempotent — uses createOrReplace, safe to run
 * multiple times.
 */

import { client } from '../lib';
import type {
  SanityPrivacyPageSettingsDoc,
  SanityTermsPageSettingsDoc,
} from '../../types';

async function seedPrivacyPageSettings() {
  console.log('\n── Privacy › page settings ──');

  const doc: SanityPrivacyPageSettingsDoc = {
    _id: 'privacyPageSettings',
    _type: 'privacyPageSettings',

    heading: 'Privacy Policy',
    body: 'This page is currently being updated and will be available soon.',

    seo: {
      metaTitle: 'Privacy Policy',
      metaDescription:
        'Privacy Policy for Ekuphumuleni Geriatric Nursing Home. Learn how we protect and handle personal information, resident data, and maintain confidentiality in accordance with Zimbabwe privacy laws.',
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ privacyPageSettings upserted (_id: ${result._id})`);
}

async function seedTermsPageSettings() {
  console.log('\n── Terms › page settings ──');

  const doc: SanityTermsPageSettingsDoc = {
    _id: 'termsPageSettings',
    _type: 'termsPageSettings',

    heading: 'Terms of Service',
    body: 'This page is currently being updated and will be available soon.',

    seo: {
      metaTitle: 'Terms of Service',
      metaDescription:
        'Terms of Service for Ekuphumuleni Geriatric Nursing Home. Review our terms and conditions, admission requirements, visitor policies, and guidelines for using our services and facilities in Bulawayo, Zimbabwe.',
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ termsPageSettings upserted (_id: ${result._id})`);
}

export async function seedLegal() {
  console.log('\nSeeding Sanity — Privacy & Terms pages');
  await seedPrivacyPageSettings();
  await seedTermsPageSettings();
}
