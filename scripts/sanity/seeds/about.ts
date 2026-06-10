/**
 * scripts/sanity/seeds/about.ts
 *
 * Seeds the Sanity aboutPageSettings singleton for the /about page.
 * Called by the orchestrator via `npm run sanity:seed`.
 * Idempotent — uses createOrReplace, safe to run multiple times.
 */

import { client, uploadImage } from '../lib';
import type { SanityAboutPageSettingsDoc } from '../../types';

async function seedAboutPageSettings() {
  console.log('\n── About › page settings ──');

  const founderImage = await uploadImage('/images/founder_01.jpg');

  const doc: SanityAboutPageSettingsDoc = {
    _id: 'aboutPageSettings',
    _type: 'aboutPageSettings',

    heroTitle: 'About Ekuphumuleni',
    heroSubtitle: 'A legacy of geriatric nursing, dignity, and restoration since 1983',
    heroQuote:
      "Ekuphumuleni means 'place of rest' — a sanctuary where dignity, skilled care, and respect come together to honor every individual",

    seo: {
      metaTitle: 'About Us | Ekuphumuleni Geriatric Nursing Home',
      metaDescription:
        'Over 40 years of geriatric care in Bulawayo, Zimbabwe. Learn about our mission, vision, values, and legacy of excellence in elderly care.',
    },

    establishmentSection: {
      heading: 'Our Establishment',
      subtitle: 'A journey that began with vision and dedication in 1983',
      ...(founderImage ? { founderImage } : {}),
      founderName: 'Polyanna Mahlangu',
      founderTitle: 'Founder & Visionary',
      narrativeHeading: 'Origins and Purpose',
      narrativeParagraph1:
        'The idea of Ekuphumuleni Geriatric Nursing Home originated with Polyanna Mahlangu while she was a nursing sister at Mpilo General Hospital. She first discussed the vision with colleagues in 1978, seeking a compassionate place of rest and recovery for older adults.',
      narrativeParagraph2:
        'Ekuphumuleni opened at Vundu Clinic on 1 December 1983. By 19 December 1984, the executive committee laid the foundation stone on a 1.57‑hectare piece of land granted by the Bulawayo City Council.',
      registrationHeading: 'Official Registration',
      registrationBody:
        'Ekuphumuleni is a nonprofit, non‑governmental organization registered under welfare societies as W/O 23/80. It is a convalescent home for elderly people discharged from hospital who are not yet well enough to be cared for in a family environment.',
      whyChooseHeading: 'Why Families Choose Ekuphumuleni',
      whyChooseCards: [
        {
          _key: 'why-choose-0',
          iconName: 'heart',
          title: 'Professional Care',
          description:
            'Expert nursing care when loved ones need recovery and families lack the resources or knowledge to provide it at home',
        },
        {
          _key: 'why-choose-1',
          iconName: 'home',
          title: 'Warm Environment',
          description:
            'A culturally sensitive environment focused on dignity, rest, and rehabilitation in a family-like atmosphere',
        },
        {
          _key: 'why-choose-2',
          iconName: 'shield-check',
          title: 'Personalized Service',
          description:
            "Innovative nursing services tailored to meet each resident's unique needs with compassion and excellence",
        },
      ],
      closingStatement:
        "As an older persons' nursing home, our chief concern is meeting residents' needs through highly personalized, professional care—serving both the elderly and the wider community.",
    },

    missionVisionSection: {
      heading: 'Mission, Vision & Core Values',
      subtitle: 'Guided by a clear mandate, focused on quality, and accountable for outcomes',
      missionHeading: 'Our Mission',
      missionBody:
        'Ekuphumuleni Geriatric Nursing Home strives to deliver high‑quality geriatric nursing care and cost‑effective medical and non‑medical support that meets the diverse needs of individuals and families.',
      missionBullets: [
        'High‑quality, professional geriatric nursing.',
        'Cost‑effective medical and non‑medical care.',
        'Support tailored to individuals and families.',
      ],
      visionHeading: 'Our Vision',
      visionBody: 'To be the best provider of geriatric nursing services in the country.',
      visionFootnote:
        'We envision a future where every older person who needs our services receives consistent, appropriate care that protects their dignity and supports daily living.',
      coreValuesHeading: 'Core Values',
      coreValues: [
        { _key: 'core-value-0', iconName: 'heart', label: 'Compassion' },
        { _key: 'core-value-1', iconName: 'shield-check', label: 'Integrity' },
        { _key: 'core-value-2', iconName: 'lock-closed', label: 'Confidentiality' },
        { _key: 'core-value-3', iconName: 'hand-thumb-up', label: 'Trust' },
        { _key: 'core-value-4', iconName: 'user-group', label: 'Team Work' },
      ],
    },

    impactSection: {
      heading: 'Our Legacy of Care',
      subtitle: 'Over four decades of residential nursing, rehabilitation, and support for older adults',
      establishmentYear: 1983,
      bedsAvailable: 100,
      staffCount: 50,
      satisfactionPercent: 98,
      contextParagraph1:
        'Since our founding in 1983, Ekuphumuleni has remained steadfast in our commitment to providing exceptional geriatric care.',
      contextParagraph2:
        'Our modern 100-bed facility, combined with our experienced team of healthcare professionals, provides structured nursing, daily living support, and rehabilitation services in a stable environment.',
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ aboutPageSettings upserted (_id: ${result._id})`);
  console.log(`  ✓ ${founderImage ? 1 : 0} image(s) uploaded`);
}

export async function seedAbout() {
  console.log('\nSeeding Sanity — About page');
  await seedAboutPageSettings();
}
