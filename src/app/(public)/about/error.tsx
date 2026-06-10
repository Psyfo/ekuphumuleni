'use client';

import { useRouter } from 'next/navigation';

interface AboutErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AboutError({ reset }: AboutErrorProps) {
  const router = useRouter();

  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-off-white)] px-4 py-16'>
      <div className='max-w-lg w-full text-center'>
        <h1 className='heading-2 mb-4'>About Page Unavailable</h1>
        <p className='body-text mb-6 text-[var(--color-deep-cocoa)]'>
          We&apos;re having trouble loading this page right now. Please try again in a moment.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <button
            onClick={reset}
            className='inline-block px-6 py-3 rounded font-bold bg-[var(--color-terracotta-deep)] !text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
          >
            Try Again
          </button>
          <button
            onClick={() => router.push('/')}
            className='inline-block px-6 py-3 rounded font-bold border border-[var(--color-terracotta-deep)] text-[var(--color-terracotta-deep)] hover:bg-[var(--color-terracotta-deep)] hover:!text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
          >
            Go Home
          </button>
        </div>
      </div>
    </main>
  );
}
