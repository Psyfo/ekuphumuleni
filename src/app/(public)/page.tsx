import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { HOME_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import DonorsSection from './components/DonorsSection';
import HeroSection from './components/HeroSection';
import MeetTheTeamSection from './components/MeetTheTeamSection';
import ServicesSection from './components/ServicesSection';
import { FALLBACK_HOME_PAGE_SETTINGS } from './fallback-data';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_HOME_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(HOME_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Home';
  const description =
    seo?.metaDescription ??
    'Ekuphumuleni Geriatric Nursing Home - Over 40 years of elderly care in Bulawayo, Zimbabwe. Professional nursing, rehabilitation services, and dignified senior living in a supportive environment.';

  return {
    title,
    description,
    keywords: [
      'geriatric care Zimbabwe',
      'nursing home Bulawayo',
      'elderly care',
      'senior care',
      'old age home',
      'Ekuphumuleni',
      'Zimbabwe elderly services',
    ],
    openGraph: {
      title: 'Ekuphumuleni Geriatric Nursing Home | Elderly Care in Bulawayo',
      description:
        'Over 40 years of excellence in geriatric care. Professional nursing, rehabilitation, and elderly care in Bulawayo, Zimbabwe.',
      type: 'website',
      url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ekuphumuleni.ngo',
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

export default async function Home() {
  let pageSettings;

  try {
    pageSettings = await client.fetch(HOME_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[Home] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_HOME_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_HOME_PAGE_SETTINGS;

  return (
    <main>
      <HeroSection data={settings.heroSection} />
      <AboutSection data={settings.aboutSection} />
      <ServicesSection data={settings.servicesSection} />
      <MeetTheTeamSection data={settings.teamSection} />
      <DonorsSection data={settings.donorsSection} />
      <ContactSection data={settings.contactSection} />
    </main>
  );
}
