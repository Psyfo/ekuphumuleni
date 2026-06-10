import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import { CONTACT_PAGE_SETTINGS_QUERY } from '@/sanity/lib/queries';

import ContactHeroSection from './ContactHeroSection';
import ContactForm from './ContactForm';
import ContactInfoSection from './ContactInfoSection';
import { FALLBACK_CONTACT_PAGE_SETTINGS } from './fallback-data';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_CONTACT_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(CONTACT_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Contact Us';
  const description =
    seo?.metaDescription ??
    'Get in touch with Ekuphumuleni Geriatric Nursing Home. Located at Stand 7165 Old Falls Road, Bulawayo. Call +263 292 216877 or +263 778 719166, or email administration@ekuphumuleni.ngo. Patient visits daily 8AM-4PM. Office hours Mon-Fri 8AM-4PM.';

  return {
    title,
    description,
    keywords: [
      'contact Ekuphumuleni',
      'nursing home contact',
      'Bulawayo elderly care contact',
      'geriatric care inquiries',
      'nursing home admission',
      'elderly care information Zimbabwe',
      'Old Falls Road Bulawayo',
      'Stand 7165 Old Falls Road',
      'visiting hours',
      'patient visits',
    ],
    openGraph: {
      title: 'Contact Us | Ekuphumuleni Geriatric Nursing Home',
      description:
        'Reach out to our team for inquiries about elderly care services, admission process, and facilities in Bulawayo, Zimbabwe. Call +263 292 216877 or +263 778 719166. Patient visits daily 8AM-4PM.',
      type: 'website',
      url: 'https://ekuphumuleni.ngo/contact',
      images: [
        {
          url: 'https://ekuphumuleni.ngo/images/brand/ekuphumuleni_logo-seo.png',
          width: 512,
          height: 512,
          alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
        },
      ],
    },
  };
}

export default async function ContactPage() {
  let pageSettings;

  try {
    pageSettings = await client.fetch(CONTACT_PAGE_SETTINGS_QUERY);
  } catch (err) {
    console.error('[ContactPage] Sanity fetch failed — rendering fallback content:', err);
    pageSettings = FALLBACK_CONTACT_PAGE_SETTINGS;
  }

  const settings = pageSettings ?? FALLBACK_CONTACT_PAGE_SETTINGS;

  return (
    <main>
      <ContactHeroSection
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        quote={settings.heroQuote}
      />

      {/* Contact Form Section */}
      <section className='bg-[var(--color-off-white)] px-4 py-20'>
        <div className='mx-auto max-w-4xl'>
          <ContactForm data={settings.formSection} />
        </div>
      </section>

      <ContactInfoSection data={settings.infoSection} />
    </main>
  );
}
