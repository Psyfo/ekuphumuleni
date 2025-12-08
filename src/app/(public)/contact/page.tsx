import type { Metadata } from 'next';
import ContactHeroSection from './ContactHeroSection';
import ContactForm from './ContactForm';
import ContactInfoSection from './ContactInfoSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ekuphumuleni Geriatric Nursing Home. Located at Stand 7165 Old Falls Road, Bulawayo. Call +263 292 216877 or +263 778 719166, or email administration@ekuphumuleni.ngo. Patient visits daily 8AM-4PM. Office hours Mon-Fri 8AM-4PM.',
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

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />

      {/* Contact Form Section */}
      <section className='bg-[var(--color-off-white)] px-4 py-20'>
        <div className='mx-auto max-w-4xl'>
          <ContactForm />
        </div>
      </section>

      <ContactInfoSection />
    </main>
  );
}
