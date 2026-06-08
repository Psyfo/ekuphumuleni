import { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { TERMS_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';

import { FALLBACK_TERMS_PAGE_SETTINGS } from './fallback-data';

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_TERMS_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(TERMS_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Terms of Service';
  const description =
    seo?.metaDescription ??
    'Terms of Service for Ekuphumuleni Geriatric Nursing Home. Review our terms and conditions, admission requirements, visitor policies, and guidelines for using our services and facilities in Bulawayo, Zimbabwe.';

  return {
    title,
    description,
    keywords: [
      'terms of service',
      'admission requirements',
      'nursing home policies',
      'visitor guidelines',
      'service terms',
    ],
    openGraph: {
      title: 'Terms of Service | Ekuphumuleni',
      description:
        'Review our terms and conditions, admission requirements, and service guidelines.',
      type: 'website',
      url: 'https://ekuphumuleni.ngo/terms',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsPage() {
  let pageSettings;

  try {
    pageSettings = await client.fetch(TERMS_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[TermsPage] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_TERMS_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_TERMS_PAGE_SETTINGS;

  return (
    <main className='flex justify-center items-center bg-[var(--color-warm-beige)] min-h-screen'>
      <div className='mx-auto px-4 py-16 max-w-4xl text-center'>
        <h1 className='mb-4 text-[var(--color-earth-brown)] heading-1'>
          {settings.heading}
        </h1>
        <p className='text-[var(--color-deep-cocoa)] body-text'>{settings.body}</p>
      </div>
    </main>
  );
}
