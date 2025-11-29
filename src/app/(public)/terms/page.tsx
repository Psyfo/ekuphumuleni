import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service | Ekuphumuleni',
  description:
    'Terms of Service - Coming Soon',
};

export default function TermsPage() {
  return (
    <main className='bg-[var(--color-warm-beige)] min-h-screen flex items-center justify-center'>
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
