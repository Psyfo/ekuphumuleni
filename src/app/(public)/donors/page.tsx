import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { DONORS_PAGE_SETTINGS_QUERY, DONOR_YEARS_QUERY } from '@/sanity/lib/queries';

import DonorsHeroSection from './DonorsHeroSection';
import SpecialMentionsSection from './SpecialMentionsSection';
import DonorWallSection from './DonorWallSection';
import { FALLBACK_DONORS_PAGE_SETTINGS, FALLBACK_DONOR_YEARS } from './fallback-data';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_DONORS_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(DONORS_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Our Generous Donors & Supporters';
  const description =
    seo?.metaDescription ??
    "Honoring the donors and supporters who help sustain our elderly care services. Recognize the individuals, organizations, and businesses who have contributed to Ekuphumuleni's 40+ years of service.";

  return {
    title,
    description,
    keywords: [
      'Ekuphumuleni donors',
      'nursing home supporters',
      'elderly care donations',
      'geriatric care support',
      'Zimbabwe charity',
      'philanthropic support',
      'donor recognition',
    ],
    openGraph: {
      title: 'Our Generous Donors & Supporters | Ekuphumuleni',
      description:
        'Honoring the donors and supporters who make our elderly care services possible at Ekuphumuleni.',
      type: 'website',
      url: 'https://ekuphumuleni.ngo/donors',
      images: [
        {
          url: '/images/brand/ekuphumuleni-og.png',
          width: 1200,
          height: 630,
          alt: "Ekuphumuleni Geriatric Nursing Home, caring for Bulawayo's elders since 1980",
        },
      ],
    },
  };
}

export default async function DonorsPage() {
  let pageSettings;
  let donorYears;

  try {
    [pageSettings, donorYears] = await Promise.all([
      client.fetch(DONORS_PAGE_SETTINGS_QUERY),
      client.fetch(DONOR_YEARS_QUERY),
    ]);
  } catch (err) {
    console.error('[DonorsPage] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_DONORS_PAGE_SETTINGS;
    donorYears = FALLBACK_DONOR_YEARS;
  }

  const settings = pageSettings ?? FALLBACK_DONORS_PAGE_SETTINGS;
  const years =
    donorYears && donorYears.length > 0 ? donorYears : FALLBACK_DONOR_YEARS;

  return (
    <main>
      <DonorsHeroSection
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        quote={settings.heroQuote}
      />
      <DonorWallSection data={settings.donorWallSection} years={years} />
      <SpecialMentionsSection data={settings.specialMentionsSection} />
    </main>
  );
}
