import React from 'react';
import type { Metadata } from 'next';

import { getPage } from '@/lib/cms';

import FacilitiesHeroSection from './FacilitiesHeroSection';
import FacilitiesShowcaseSection from './FacilitiesShowcaseSection';
import SustainabilitySection from './SustainabilitySection';
import { FALLBACK_FACILITIES_PAGE_SETTINGS } from './fallback-data';

/** Rendered on request from the CMS (cached until an editor saves), so the
 * build never needs the database. */
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_FACILITIES_PAGE_SETTINGS.seo;
  try {
    const settings = await getPage('facilities-page');
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Our Facilities | Ekuphumuleni Geriatric Nursing Home';
  const description =
    seo?.metaDescription ??
    "Explore Ekuphumuleni's modern, comfortable facilities designed for exceptional senior care in Bulawayo. Features include spacious private and shared rooms, accessible common areas, sustainable solar energy, therapeutic organic gardens, and secure outdoor spaces for residents.";

  return {
    title,
    description,
    keywords: [
      'nursing home facilities',
      'geriatric care facilities',
      'elderly care amenities',
      'senior living spaces',
      'accessible nursing home',
      'sustainable elderly care',
      'Bulawayo nursing home facilities',
      'therapeutic gardens',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://ekuphumuleni.ngo/facilities',
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

export default async function FacilitiesPage() {
  let pageSettings;

  try {
    pageSettings = await getPage('facilities-page');
  } catch (err) {
    console.error('[FacilitiesPage] CMS read failed, rendering fallback content:', err);
    pageSettings = FALLBACK_FACILITIES_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_FACILITIES_PAGE_SETTINGS;

  return (
    <main>
      <FacilitiesHeroSection
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        quote={settings.heroQuote}
      />
      <FacilitiesShowcaseSection data={settings.showcaseSection} />
      <SustainabilitySection data={settings.sustainabilitySection} />
    </main>
  );
}
