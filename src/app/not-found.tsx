'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-off-white)] px-4 py-16'>
      <div className='max-w-lg w-full text-center'>
        <h1 className='text-6xl font-bold text-[var(--color-muted-terracotta)] mb-4'>
          404
        </h1>
        <h2 className='heading-2 mb-2'>Page Not Found</h2>
        <p className='body-text mb-6 text-[var(--color-deep-cocoa)]'>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
