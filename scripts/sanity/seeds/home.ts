/**
 * scripts/sanity/seeds/home.ts
 *
 * Seeds the Sanity homePageSettings singleton for the / (home) page.
 * Called by the orchestrator via `npm run sanity:seed`.
 * Idempotent — uses createOrReplace, safe to run multiple times.
 */

import { client, uploadImage } from '../lib';
import type {
  SanityHomePageSettingsDoc,
  SanityHomeServiceCard,
} from '../../types';

async function seedHomePageSettings() {
  console.log('\n── Home › page settings ──');

  const establishmentImage = await uploadImage('/images/building/building_01.webp');

  const cardSources = [
    {
      iconName: 'heart',
      path: '/images/services/nursing/IMG_8799.JPG',
      alt: 'Nursing care in a calm setting',
      title: 'Nursing Care',
      description: 'Round‑the‑clock nursing care, observation, and support for each resident.',
      key: 'card-0',
    },
    {
      iconName: 'arrow-path',
      path: '/images/services/nursing/IMG_8845.JPG',
      alt: 'Rehabilitation and mobility support',
      title: 'Rehabilitation',
      description: 'Supportive therapies that restore mobility, independence, and well‑being.',
      key: 'card-1',
    },
    {
      iconName: 'sparkles',
      path: '/images/facilities/facilities_19.webp',
      alt: 'Sustainability initiatives at the home',
      title: 'Sustainability',
      description: 'Eco‑friendly practices that care for our residents and our planet.',
      key: 'card-2',
    },
    {
      iconName: 'home-modern',
      path: '/images/facilities/facilities_11.webp',
      alt: 'Comfortable living facilities and communal spaces',
      title: 'Facilities',
      description: 'Comfortable spaces and amenities designed for community and care.',
      key: 'card-3',
    },
  ];

  const cards: SanityHomeServiceCard[] = [];
  for (const { iconName, path, alt, title, description, key } of cardSources) {
    const image = await uploadImage(path);
    cards.push({ _key: key, iconName, alt, title, description, ...(image ? { image } : {}) });
  }

  const doc: SanityHomePageSettingsDoc = {
    _id: 'homePageSettings',
    _type: 'homePageSettings',

    seo: {
      metaTitle: 'Home',
      metaDescription:
        'Ekuphumuleni Geriatric Nursing Home - Over 40 years of elderly care in Bulawayo, Zimbabwe. Professional nursing, rehabilitation services, and dignified senior living in a supportive environment.',
    },

    heroSection: {
      title: 'Ekuphumuleni',
      subtitle: 'Geriatric Nursing Home',
      primaryCtaLabel: 'Explore Our Care',
      secondaryCtaLabel: 'Contact Us',
    },

    aboutSection: {
      heading: 'About Ekuphumuleni',
      intro:
        'Ekuphumuleni means "place of rest", a sanctuary for elderly individuals requiring nursing care. Established in 1983 by Polyanna Mahlangu, it was founded to provide reliable, professional care for older adults in a peaceful, dignified environment.',
      ...(establishmentImage ? { establishmentImage } : {}),
      establishmentHeading: 'Our Establishment',
      establishmentBody:
        'Founded to provide dependable care, our home blends professional excellence with a stable, family-like environment. Over four decades, we have remained committed to honoring the dignity and individuality of every resident.',
      missionHeading: 'Our Mission',
      missionBody:
        'To create peaceful, nurturing environments where people find rest, healing, and restoration in body and spirit.',
      visionHeading: 'Our Vision',
      visionBody:
        'A community where elders thrive with dignity, safety, and joy through consistent, culturally sensitive care.',
      coreValuesHeading: 'Our Core Values',
      coreValues: ['Compassion', 'Tranquility', 'Reliability', 'Cultural Sensitivity', 'Excellence'],
    },

    servicesSection: {
      heading: 'Our Services',
      subtitle:
        "Comprehensive care tailored to each resident's needs, delivered by a skilled, multidisciplinary team",
      cards,
    },

    teamSection: {
      heading: 'Meet the Team',
      body: 'Clinical, administrative, and board professionals responsible for the day‑to‑day running and governance of the home.',
      ctaLabel: 'View Team',
    },

    donorsSection: {
      heading: 'Donors & Support',
      body: 'We acknowledge the donors and partners whose contributions help us maintain services, staffing, and facilities.',
      ctaLabel: 'See Our Donors',
    },

    contactSection: {
      heading: 'Contact Us',
      subtitle: "We're here to answer your questions and provide the information you need",
      email: 'administration@ekuphumuleni.ngo',
      phoneNumbers: ['+263 292 216877', '+263 778 719166'],
      locationLines: ['Stand 7165 Old Falls Road', 'P O Box 1667', 'Bulawayo'],
      mapQuery: 'Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo',
      ctaLabel: 'Send a Message',
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ homePageSettings upserted (_id: ${result._id})`);
  const imageCount = (establishmentImage ? 1 : 0) + cards.filter((c) => c.image).length;
  console.log(`  ✓ ${imageCount} image(s) uploaded`);
}

export async function seedHome() {
  console.log('\nSeeding Sanity — Home page');
  await seedHomePageSettings();
}
