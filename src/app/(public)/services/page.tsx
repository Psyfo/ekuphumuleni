import React from 'react';
import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { SERVICES_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { FALLBACK_SERVICES_PAGE_SETTINGS } from './fallback-data';

import ServicesHeroSection from './ServicesHeroSection';
import CoreServicesSection from './CoreServicesSection';
import NursingCareSection from './NursingCareSection';
import RehabilitationSection from './RehabilitationSection';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_SERVICES_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(SERVICES_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Our Services | Ekuphumuleni Geriatric Nursing Home';
  const description =
    seo?.metaDescription ??
    'Comprehensive geriatric care: 24/7 skilled nursing, rehabilitation, personal care assistance, dementia care, palliative care, and wellness programs.';

  return {
    title,
    description,
    keywords: [
      'geriatric care services',
      'skilled nursing care',
      'elderly rehabilitation',
      'dementia care Zimbabwe',
      'palliative care',
      'senior wellness programs',
      'occupational therapy elderly',
      'nursing home services Bulawayo',
      'medication management',
      'personal care assistance',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://ekuphumuleni.ngo/services',
      images: [
        {
          url: '/images/brand/ekuphumuleni-og.png',
          width: 1200,
          height: 630,
          alt: "Ekuphumuleni Geriatric Nursing Home, caring for Bulawayo's elders since 1983",
        },
      ],
    },
  };
}

export default async function ServicesPage() {
  let settings = null;

  try {
    settings = await client.fetch(SERVICES_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[ServicesPage] Sanity fetch failed — rendering fallback content:', err);
  }

  const fb = FALLBACK_SERVICES_PAGE_SETTINGS;
  const heroTitle = settings?.heroTitle ?? fb.heroTitle;
  const heroSubtitle = settings?.heroSubtitle ?? fb.heroSubtitle;
  const heroQuote = settings?.heroQuote ?? fb.heroQuote;
  const coreServicesSection = settings?.coreServicesSection ?? fb.coreServicesSection;
  const nursingSection = settings?.nursingSection ?? fb.nursingSection;
  const rehabilitationSection = settings?.rehabilitationSection ?? fb.rehabilitationSection;

  return (
    <main>
      <ServicesHeroSection
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        heroQuote={heroQuote}
      />
      <CoreServicesSection data={coreServicesSection} />
      <NursingCareSection data={nursingSection} />
      <RehabilitationSection data={rehabilitationSection} />
    </main>
  );
}
