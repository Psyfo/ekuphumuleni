import { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { PRIVACY_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';

import { FALLBACK_PRIVACY_PAGE_SETTINGS } from './fallback-data';

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_PRIVACY_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(PRIVACY_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Privacy Policy';
  const description =
    seo?.metaDescription ??
    'Privacy Policy for Ekuphumuleni Geriatric Nursing Home. Learn how we protect and handle personal information, resident data, and maintain confidentiality in accordance with Zimbabwe privacy laws.';

  return {
    title,
    description,
    keywords: [
      'privacy policy',
      'data protection',
      'patient confidentiality',
      'nursing home privacy',
      'Zimbabwe privacy laws',
    ],
    openGraph: {
      title: 'Privacy Policy | Ekuphumuleni',
      description:
        'Learn how we protect and handle personal information and maintain confidentiality.',
      type: 'website',
      url: 'https://ekuphumuleni.ngo/privacy',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivacyPage() {
  let pageSettings;

  try {
    pageSettings = await client.fetch(PRIVACY_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[PrivacyPage] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_PRIVACY_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_PRIVACY_PAGE_SETTINGS;

  return (
    <main className='flex justify-center items-center bg-[var(--color-warm-beige)] min-h-screen'>
      <div className='mx-auto px-4 py-16 max-w-4xl text-center'>
        <h1 className='mb-4 text-[var(--color-deep-cocoa)] heading-1'>
          {settings.heading}
        </h1>
        <p className='text-[var(--color-deep-cocoa)] body-text'>{settings.body}</p>
      </div>
    </main>
  );
}
