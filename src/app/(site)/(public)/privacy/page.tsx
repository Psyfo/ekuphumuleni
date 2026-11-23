import { Metadata } from 'next';

import LegalDocument from '@/components/LegalDocument';
import { getPage } from '@/lib/cms';

import { FALLBACK_PRIVACY_PAGE_SETTINGS } from './fallback-data';

/** Rendered on request from the CMS (cached until an editor saves), so the
 * build never needs the database. */
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_PRIVACY_PAGE_SETTINGS.seo;
  try {
    const settings = await getPage('privacy-page');
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  return {
    title: seo?.metaTitle ?? FALLBACK_PRIVACY_PAGE_SETTINGS.seo.metaTitle,
    description: seo?.metaDescription ?? FALLBACK_PRIVACY_PAGE_SETTINGS.seo.metaDescription,
    keywords: ["privacy policy","data protection","cookies","Cyber and Data Protection Act","Ekuphumuleni"],
    openGraph: {
      title: 'Privacy Policy | Ekuphumuleni',
      description: 'How we collect and use personal information through this website, and your rights.',
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
    pageSettings = await getPage('privacy-page');
  } catch (err) {
    console.error('[PrivacyPage] CMS read failed, rendering fallback content:', err);
    pageSettings = FALLBACK_PRIVACY_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_PRIVACY_PAGE_SETTINGS;

  return (
    <main className='bg-[var(--color-warm-beige)] min-h-screen'>
      <article className='mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20 max-w-3xl'>
        <h1 className='mb-3 text-[var(--color-deep-cocoa)] heading-1'>{settings.heading}</h1>
        <LegalDocument body={settings.body} />
      </article>
    </main>
  );
}
