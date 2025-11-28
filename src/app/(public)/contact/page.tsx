import type { Metadata } from 'next';
import ContactHeroSection from './ContactHeroSection';
import ContactForm from './ContactForm';
import ContactInfoSection from './ContactInfoSection';

export const metadata: Metadata = {
  title: 'Contact Us | Ekuphumuleni Geriatric Nursing Home',
  description:
    "Get in touch with Ekuphumuleni. We're here to answer your questions about our geriatric care services, facilities, and admission process in Bulawayo, Zimbabwe.",
  openGraph: {
    title: 'Contact Us | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Reach out to our team for inquiries about elderly care services in Bulawayo, Zimbabwe.',
    type: 'website',
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
