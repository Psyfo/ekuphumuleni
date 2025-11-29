import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Ekuphumuleni Geriatric Nursing Home. Review our terms and conditions, admission requirements, visitor policies, and guidelines for using our services and facilities in Bulawayo, Zimbabwe.',
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

export default function TermsPage() {
  return (
    <main className='flex justify-center items-center bg-[var(--color-warm-beige)] min-h-screen'>
      <div className='mx-auto px-4 py-16 max-w-4xl text-center'>
        <h1 className='mb-4 text-[var(--color-earth-brown)] heading-1'>
          Terms of Service
        </h1>
        <p className='text-[var(--color-deep-cocoa)] body-text'>
          This page is currently being updated and will be available soon.
        </p>
      </div>
    </main>
  );
}
