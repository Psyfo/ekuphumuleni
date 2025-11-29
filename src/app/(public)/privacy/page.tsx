import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ekuphumuleni Geriatric Nursing Home. Learn how we protect and handle personal information, resident data, and maintain confidentiality in accordance with Zimbabwe privacy laws.',
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

export default function PrivacyPage() {
  return (
    <main className='flex justify-center items-center bg-[var(--color-warm-beige)] min-h-screen'>
      <div className='mx-auto px-4 py-16 max-w-4xl text-center'>
        <h1 className='mb-4 text-[var(--color-earth-brown)] heading-1'>
          Privacy Policy
        </h1>
        <p className='text-[var(--color-deep-cocoa)] body-text'>
          This page is currently being updated and will be available soon.
        </p>
      </div>
    </main>
  );
}
