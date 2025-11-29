import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ekuphumuleni',
  description: 'Privacy Policy - Coming Soon',
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
