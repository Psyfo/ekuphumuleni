/**
 * scripts/sanity/seeds/facilities.ts
 *
 * Seeds the Sanity facilitiesPageSettings singleton for the /facilities page.
 * Called by the orchestrator via `npm run sanity:seed`.
 * Idempotent — uses createOrReplace, safe to run multiple times.
 */

import { client, uploadImage } from '../lib';
import type {
  SanityFacilitiesPageSettingsDoc,
  SanityFacilityHighlight,
  SanitySustainabilityShowcaseImage,
} from '../../types';

async function seedFacilitiesPageSettings() {
  console.log('\n── Facilities › page settings ──');

  const highlightSources = [
    {
      title: 'Comfortable Living Spaces',
      description:
        'Well-appointed private and shared bedrooms designed for comfort, accessibility, and personal expression.',
      path: '/images/facilities/facilities_09.webp',
      alt: 'Comfortable resident bedroom with modern amenities',
      key: 'highlight-0',
    },
    {
      title: 'Spacious Lounges',
      description:
        'Bright, inviting communal areas perfect for relaxation, socializing, and spending quality time with loved ones.',
      path: '/images/facilities/facilities_10.webp',
      alt: 'Spacious lounge area for resident activities',
      key: 'highlight-1',
    },
    {
      title: 'Tranquil Gardens',
      description:
        'Beautiful outdoor spaces with accessible pathways, seating areas, and lush greenery for fresh air and relaxation.',
      path: '/images/building/building_02.webp',
      alt: 'Peaceful gardens with walking paths',
      key: 'highlight-2',
    },
    {
      title: 'Modern Amenities',
      description:
        'On-site laundry facilities, accessible bathing areas, and well-equipped spaces ensuring comfort and convenience.',
      path: '/images/facilities/facilities/laundry.jpg',
      alt: 'Modern laundry facilities',
      key: 'highlight-3',
    },
  ];

  const highlights: SanityFacilityHighlight[] = [];
  for (const { title, description, path, alt, key } of highlightSources) {
    const image = await uploadImage(path);
    highlights.push({ _key: key, title, description, alt, ...(image ? { image } : {}) });
  }

  const showcaseImageSources = [
    {
      path: '/images/facilities/facilities_07.webp',
      alt: 'Solar panels providing clean energy at Ekuphumuleni',
      caption: 'Solar Energy System',
      subcaption: 'Powering our home sustainably',
      key: 'sustainability-image-0',
    },
    {
      path: '/images/facilities/sustainability/garden.JPG',
      alt: 'Organic vegetable garden producing fresh produce',
      caption: 'Organic Vegetable Gardens',
      subcaption: 'Fresh, nutritious produce',
      key: 'sustainability-image-1',
    },
    {
      path: '/images/facilities/facilities_01.webp',
      alt: 'Water storage tanks for conservation',
      caption: 'Water Conservation',
      subcaption: 'Rainwater harvesting systems',
      key: 'sustainability-image-2',
    },
    {
      path: '/images/facilities/facilities_08.webp',
      alt: 'Solar geysers for hot water',
      caption: 'Solar Water Heating',
      subcaption: 'Sustainable hot water supply',
      key: 'sustainability-image-3',
    },
  ];

  const showcaseImages: SanitySustainabilityShowcaseImage[] = [];
  for (const { path, alt, caption, subcaption, key } of showcaseImageSources) {
    const image = await uploadImage(path);
    showcaseImages.push({ _key: key, alt, caption, subcaption, ...(image ? { image } : {}) });
  }

  const doc: SanityFacilitiesPageSettingsDoc = {
    _id: 'facilitiesPageSettings',
    _type: 'facilitiesPageSettings',

    heroTitle: 'Our Facilities',
    heroSubtitle:
      'Modern, comfortable spaces designed for residential nursing, daily living, and visiting families, with attention to safety and access',
    heroQuote:
      'A facility designed to combine accommodation, nursing stations, and shared spaces so daily care is easier to deliver and receive.',

    seo: {
      metaTitle: 'Our Facilities | Ekuphumuleni Geriatric Nursing Home',
      metaDescription:
        "Explore Ekuphumuleni's modern, comfortable facilities designed for exceptional senior care in Bulawayo. Features include spacious private and shared rooms, accessible common areas, sustainable solar energy, therapeutic organic gardens, and secure outdoor spaces for residents.",
    },

    showcaseSection: {
      heading: 'Comfortable Spaces & Amenities',
      subtitle:
        'Every space at Ekuphumuleni is thoughtfully designed to promote comfort, dignity, and a true sense of home',
      highlights,
      featureGridHeading: 'What Makes Our Facilities Special',
      featureGridItems: [
        { _key: 'feature-0', iconName: 'home-modern', title: 'Fully Accessible', description: 'Wheelchair-friendly design throughout' },
        { _key: 'feature-1', iconName: 'sparkles', title: 'Always Clean', description: 'Daily housekeeping and maintenance' },
        { _key: 'feature-2', iconName: 'sun', title: 'Bright & Airy', description: 'Natural light and fresh air circulation' },
        { _key: 'feature-3', iconName: 'users', title: 'Community Focus', description: 'Spaces that encourage connection' },
      ],
    },

    sustainabilitySection: {
      heading: 'Sustainability at Ekuphumuleni',
      subtitle:
        "We're committed to sustainable practices that benefit our residents, our community, and our planet",
      initiatives: [
        {
          _key: 'initiative-0',
          iconName: 'bolt',
          title: 'Solar Energy',
          description:
            'Our solar panel installation provides clean, renewable energy, reducing our carbon footprint and ensuring reliable power for essential services.',
          impact: 'Reduces grid dependency by 60%',
        },
        {
          _key: 'initiative-1',
          iconName: 'beaker',
          title: 'Water Conservation',
          description:
            'Rainwater harvesting systems and efficient irrigation practices help us use water responsibly and sustainably.',
          impact: 'Conserves 1000s of liters monthly',
        },
        {
          _key: 'initiative-2',
          iconName: 'sparkles',
          title: 'Vegetable Gardens',
          description:
            'Our on-site gardens provide fresh, nutritious produce while offering therapeutic activities and promoting food security.',
          impact: 'Fresh produce year-round',
        },
        {
          _key: 'initiative-3',
          iconName: 'globe-alt',
          title: 'Community Engagement',
          description:
            'We actively involve residents and local partners in sustainability projects, fostering purpose and environmental stewardship.',
          impact: 'Building a greener future together',
        },
      ],
      showcaseImages,
      commitmentHeading: 'Our Commitment to the Environment',
      commitmentBody:
        "Sustainability isn't just about technology — it's about creating a better future for our residents and our community. Through renewable energy, water conservation, and food security initiatives, we're reducing our environmental impact while enhancing the quality of life for everyone at Ekuphumuleni.",
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ facilitiesPageSettings upserted (_id: ${result._id})`);
  const imageCount = highlights.filter((h) => h.image).length + showcaseImages.filter((s) => s.image).length;
  console.log(`  ✓ ${imageCount} image(s) uploaded`);
}

export async function seedFacilities() {
  console.log('\nSeeding Sanity — Facilities page');
  await seedFacilitiesPageSettings();
}
