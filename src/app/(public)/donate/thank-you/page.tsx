import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thank you for supporting Ekuphumuleni Geriatric Nursing Home.',
  robots: { index: false, follow: false },
};

export default function DonateThankYouPage() {
  return (
    <main className='section-container flex flex-col justify-center items-center py-24 min-h-[70vh] text-center'>
      <span
        aria-hidden='true'
        className='flex justify-center items-center mb-6 rounded-full w-20 h-20'
        style={{ background: 'rgba(176, 90, 60, 0.12)', color: 'var(--color-terracotta-deep)' }}
      >
        <HeartIcon className='w-10 h-10' />
      </span>

      <h1 className='heading-1 mb-4' style={{ color: 'var(--color-deep-cocoa)', marginBottom: '1rem' }}>
        Thank you for your gift
      </h1>

      <p className='mx-auto mb-2 max-w-xl' style={{ color: 'var(--color-deep-cocoa)' }}>
        Your generosity helps us provide dignified care, meals and a place of rest for elders in
        Bulawayo. A receipt has been emailed to you by our secure payment provider.
      </p>
      <p className='mx-auto mb-8 max-w-xl text-sm' style={{ color: 'var(--color-earth-brown)' }}>
        If you set up a monthly gift, you can manage or cancel it any time using the link in that
        email.
      </p>

      <div className='flex flex-wrap justify-center gap-3'>
        <Link href='/' className='btn btn-primary'>
          Back to home
        </Link>
        <Link href='/services' className='btn btn-secondary'>
          Explore our care
        </Link>
      </div>
    </main>
  );
}
