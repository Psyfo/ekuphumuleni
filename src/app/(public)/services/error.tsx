'use client';

import { useRouter } from 'next/navigation';

interface ServicesErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ServicesError({ reset }: ServicesErrorProps) {
  const router = useRouter();

  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-off-white)] px-4 py-16'>
      <div className='max-w-lg w-full text-center'>
        <h1 className='heading-2 mb-4'>Services Page Unavailable</h1>
        <p className='body-text mb-6 text-[var(--color-deep-cocoa)]'>
          We&apos;re having trouble loading the services information right now. Please try again in a
          moment.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <button
            onClick={reset}
            className='btn btn-primary'
          >
            Try Again
          </button>
          <button
            onClick={() => router.push('/')}
            className='btn btn-secondary'
          >
            Go Home
          </button>
        </div>
      </div>
    </main>
  );
}
