import { Metadata } from 'next';

import LegalDocument from '@/components/LegalDocument';
import { getPage } from '@/lib/cms';

import { FALLBACK_TERMS_PAGE_SETTINGS } from './fallback-data';

/** Rendered on request from the CMS (cached until an editor saves), so the
 * build never needs the database. */
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_TERMS_PAGE_SETTINGS.seo;
  try {
    const settings = await getPage('terms-page');
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  return {
    title: seo?.metaTitle ?? FALLBACK_TERMS_PAGE_SETTINGS.seo.metaTitle,
    description: seo?.metaDescription ?? FALLBACK_TERMS_PAGE_SETTINGS.seo.metaDescription,
    keywords: ["terms of use","website terms","Ekuphumuleni"],
    openGraph: {
      title: 'Terms of Use | Ekuphumuleni',
      description: 'The terms for using the Ekuphumuleni website.',
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
    pageSettings = await getPage('terms-page');
  } catch (err) {
    console.error('[TermsPage] CMS read failed, rendering fallback content:', err);
    pageSettings = FALLBACK_TERMS_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_TERMS_PAGE_SETTINGS;

  return (
    <main className='bg-[var(--color-warm-beige)] min-h-screen'>
      <article className='mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20 max-w-3xl'>
        <h1 className='mb-3 text-[var(--color-deep-cocoa)] heading-1'>{settings.heading}</h1>
        <LegalDocument body={settings.body} />
      </article>
    </main>
  );
}
