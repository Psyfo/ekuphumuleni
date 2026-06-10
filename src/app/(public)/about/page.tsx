import React from 'react';
import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { ABOUT_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';

import AboutHeroSection from './AboutHeroSection';
import EstablishmentSection from './EstablishmentSection';
import MissionVisionSection from './MissionVisionSection';
import ImpactStatisticsSection from './ImpactStatisticsSection';
import { FALLBACK_ABOUT_PAGE_SETTINGS } from './fallback-data';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_ABOUT_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(ABOUT_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'About Us | Ekuphumuleni Geriatric Nursing Home';
  const description =
    seo?.metaDescription ??
    'Over 40 years of geriatric care in Bulawayo, Zimbabwe. Learn about our mission, vision, values, and legacy of excellence in elderly care.';

  return {
    title,
    description,
    keywords: [
      'about Ekuphumuleni',
      'geriatric care history',
      'elderly care mission',
      'nursing home values',
      'Zimbabwe elderly care history',
      'Bulawayo nursing home',
      'elderly care philosophy',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://ekuphumuleni.ngo/about',
      images: [
        {
          url: 'https://ekuphumuleni.ngo/images/brand/ekuphumuleni_logo.png',
          width: 512,
          height: 512,
          alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
        },
      ],
    },
  };
}

export default async function AboutPage() {
  let pageSettings;

  try {
    pageSettings = await client.fetch(ABOUT_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[AboutPage] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_ABOUT_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_ABOUT_PAGE_SETTINGS;

  return (
    <main>
      <AboutHeroSection
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        quote={settings.heroQuote}
      />
      <EstablishmentSection data={settings.establishmentSection} />
      <MissionVisionSection data={settings.missionVisionSection} />
      <ImpactStatisticsSection data={settings.impactSection} />
    </main>
  );
}
