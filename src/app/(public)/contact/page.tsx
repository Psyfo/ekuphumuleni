import type { Metadata } from 'next';
import ContactHeroSection from './ContactHeroSection';
import ContactForm from './ContactForm';
import ContactInfoSection from './ContactInfoSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ekuphumuleni Geriatric Nursing Home. Contact us at +263 292 216 877 or administration@ekuphumuleni.ngo for inquiries about our elderly care services, facilities, admission process, and visiting arrangements in Bulawayo, Zimbabwe.',
  keywords: [
    'contact Ekuphumuleni',
    'nursing home contact',
    'Bulawayo elderly care contact',
    'geriatric care inquiries',
    'nursing home admission',
    'elderly care information Zimbabwe',
  ],
  openGraph: {
    title: 'Contact Us | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Reach out to our team for inquiries about elderly care services, admission process, and facilities in Bulawayo, Zimbabwe. Call +263 292 216 877.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/contact',
    images: [
      {
        url: '/images/brand/ekuphumuleni_logo.png',
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
