/**
 * scripts/sanity/seeds/services.ts
 *
 * Seeds the Sanity servicesPageSettings singleton for the /services page.
 * Called by the orchestrator via `npm run sanity:seed`.
 * Idempotent — uses createOrReplace, safe to run multiple times.
 */

import { client, uploadImage } from '../lib';
import type {
  SanityServicesPageSettingsDoc,
  SanityGalleryImageItem,
  SanityAssetRef,
} from '../../types';

async function seedServicesPageSettings() {
  console.log('\n── Services › page settings ──');

  // Upload featured images
  const nursingFeatured = await uploadImage('/images/services/nursing/100_5427.JPG');
  const rehabFeatured = await uploadImage('/images/services/nursing/100_5556.JPG');

  // Upload nursing gallery images
  const nursingGallery: SanityGalleryImageItem[] = [];
  const nursingGalleryPaths = [
    { path: '/images/services/nursing/100_5440.JPG', alt: 'Nursing staff providing personalized care', key: 'nursing-gallery-0' },
    { path: '/images/services/nursing/100_5551.JPG', alt: 'Compassionate patient care and comfort', key: 'nursing-gallery-1' },
    { path: '/images/services/nursing/100_5582.JPG', alt: 'Rehabilitation and wellness activities', key: 'nursing-gallery-2' },
  ];
  for (const { path, alt, key } of nursingGalleryPaths) {
    const ref = await uploadImage(path);
    if (ref) nursingGallery.push({ _key: key, image: ref, alt });
  }

  // Upload rehab gallery images
  const rehabGallery: SanityGalleryImageItem[] = [];
  const rehabGalleryPaths = [
    { path: '/images/services/nursing/100_5564.JPG', alt: 'Personalized therapy sessions', key: 'rehab-gallery-0' },
    { path: '/images/patients/patients_01.webp', alt: 'Group wellness activities', key: 'rehab-gallery-1' },
    { path: '/images/patients/patients_02.webp', alt: 'Therapeutic recreation programs', key: 'rehab-gallery-2' },
  ];
  for (const { path, alt, key } of rehabGalleryPaths) {
    const ref = await uploadImage(path);
    if (ref) rehabGallery.push({ _key: key, image: ref, alt });
  }

  const doc: SanityServicesPageSettingsDoc = {
    _id: 'servicesPageSettings',
    _type: 'servicesPageSettings',

    heroTitle: 'Our Services',
    heroSubtitle:
      'Comprehensive geriatric care designed to promote dignity, independence, and quality of life for every resident',
    heroQuote: "Excellence in care is not just what we do — it's who we are",

    seo: {
      metaTitle: 'Our Services | Ekuphumuleni Geriatric Nursing Home',
      metaDescription:
        'Comprehensive geriatric care: 24/7 skilled nursing, rehabilitation, personal care assistance, dementia care, palliative care, and wellness programs.',
    },

    coreServicesSection: {
      heading: 'Comprehensive Care Services',
      subtitle:
        'Every service we provide is designed with one goal: enhancing the quality of life for our residents through exceptional, personalized care',
      ctaHeading: 'Have Questions About Our Services?',
      ctaBody:
        "Our team is here to answer your questions and help you understand how we can best support your loved one's needs.",
      ctaButtonLabel: 'Get in Touch',
      services: [
        { _key: 'service-0', iconName: 'heart', title: '24/7 Skilled Nursing Care', description: 'Round-the-clock professional nursing supervision ensuring medical needs are met with compassion and expertise at all times.' },
        { _key: 'service-1', iconName: 'clipboard-document-check', title: 'Medication Management', description: 'Precise administration and monitoring of medications, ensuring safety, compliance, and optimal health outcomes for every resident.' },
        { _key: 'service-2', iconName: 'user-group', title: 'Personal Care Assistance', description: 'Dignified support with daily living activities including bathing, dressing, grooming, and mobility assistance.' },
        { _key: 'service-3', iconName: 'sparkles', title: 'Rehabilitation Services', description: 'Personalized therapy programs designed to maintain or improve mobility, strength, and independence through expert guidance.' },
        { _key: 'service-4', iconName: 'home-modern', title: 'Comfortable Accommodation', description: 'Well-appointed private and shared rooms designed for comfort, safety, and accessibility in a warm, home-like environment.' },
        { _key: 'service-5', iconName: 'chat-bubble', title: 'Family Communication', description: 'Regular updates and open dialogue with families, fostering partnership in care planning and decision-making.' },
      ],
    },

    nursingSection: {
      heading: 'Professional Nursing Care',
      subtitle:
        "Our nursing team delivers evidence-based geriatric care designed to support residents' health, safety, and level of independence",
      ...(nursingFeatured ? { featuredImage: nursingFeatured } : {}),
      featuredHeading: 'Dedicated to Your Wellbeing',
      featuredBody:
        'Our nursing team provides medical care and personal support through medication administration, observations, and practical assistance. From wound care to monitoring long-term conditions, we handle core geriatric nursing tasks in a structured, safe environment.',
      bulletItems: [
        'Skilled medication administration and monitoring',
        'Wound care and post-surgical recovery support',
        'Vital signs monitoring and health assessments',
        'Coordination with physicians and healthcare providers',
      ],
      featureCards: [
        { _key: 'nursing-card-0', iconName: 'clock', title: 'Round-the-Clock Care', description: 'Our dedicated nursing staff provides 24/7 supervision, ensuring immediate response to any medical need or emergency.' },
        { _key: 'nursing-card-1', iconName: 'shield-check', title: 'Professional Excellence', description: 'Highly trained registered nurses and healthcare professionals committed to maintaining the highest standards of care.' },
        { _key: 'nursing-card-2', iconName: 'heart', title: 'Bedside Care', description: 'Nurses and care assistants provide bedside support, monitoring, and assistance with daily living tasks.' },
        { _key: 'nursing-card-3', iconName: 'user-group', title: 'Individualized Plans', description: "Customized care plans tailored to each resident's unique medical history, needs, and personal preferences." },
      ],
      galleryImages: nursingGallery,
    },

    rehabilitationSection: {
      heading: 'Rehabilitation & Wellness Programs',
      subtitle:
        'Personalized therapy and wellness activities designed to maintain mobility, strength, and independence while enhancing overall quality of life',
      ...(rehabFeatured ? { featuredImage: rehabFeatured } : {}),
      featuredHeading: 'Empowering Recovery & Independence',
      featuredBody:
        'Our comprehensive rehabilitation programs combine physical therapy, occupational therapy, and wellness activities to help residents regain or maintain their independence. Each program is carefully designed to meet individual needs and abilities.',
      programs: [
        { _key: 'program-0', title: 'Physical Therapy', description: 'Targeted exercises and techniques to improve mobility, balance, and strength under expert supervision.' },
        { _key: 'program-1', title: 'Occupational Therapy', description: 'Training and adaptive techniques to enhance daily living skills and maintain independence.' },
        { _key: 'program-2', title: 'Wellness Activities', description: 'Engaging programs including group exercises, recreational activities, and social gatherings.' },
      ],
      galleryImages: rehabGallery,
    },
  };

  const result = await client.createOrReplace(doc);
  console.log(`  ✓ servicesPageSettings upserted (_id: ${result._id})`);
  const imageCount = (nursingFeatured ? 1 : 0) + nursingGallery.length + (rehabFeatured ? 1 : 0) + rehabGallery.length;
  console.log(`  ✓ ${imageCount} image(s) uploaded`);
}

export async function seedServices() {
  console.log('\nSeeding Sanity — Services page');
  await seedServicesPageSettings();
}
