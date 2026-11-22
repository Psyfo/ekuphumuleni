import type { Metadata } from 'next';
import Link from 'next/link';

import './styles/globals.css';

/*
 * The 404 for any address that matches no route. The site and the admin each
 * have their own root layout, so this page brings its own <html> and the
 * site's stylesheet, without reading the CMS.
 */

export const metadata: Metadata = {
  title: 'Page not found | Ekuphumuleni',
  description: 'Sorry, the page you are looking for does not exist or has been moved.',
};

export default function GlobalNotFound() {
  return (
    <html lang='en'>
      <body>
        <main className='min-h-screen flex flex-col items-center justify-center bg-[var(--color-off-white)] px-4 py-16'>
          <div className='max-w-lg w-full text-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/brand/ekuphumuleni_mark.svg'
              alt=''
              width={72}
              height={72}
              className='mx-auto mb-6'
            />
            <h1 className='text-6xl font-bold text-[var(--color-muted-terracotta)] mb-4'>404</h1>
            <h2 className='heading-2 mb-2'>Page Not Found</h2>
            <p className='body-text mb-6 text-[var(--color-deep-cocoa)]'>
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link href='/' className='btn btn-primary'>
              Go Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
