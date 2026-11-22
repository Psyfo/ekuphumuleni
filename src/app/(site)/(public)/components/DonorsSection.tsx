'use client';

import { m, Variants } from 'framer-motion';
import Link from 'next/link';

import { GiftIcon } from '@heroicons/react/24/outline';

interface DonorsSectionData {
  heading?: string;
  body?: string;
  ctaLabel?: string;
}

interface DonorsSectionProps {
  data?: DonorsSectionData;
}

export default function DonorsSection({ data }: DonorsSectionProps = {}) {
  const heading = data?.heading ?? 'Donors & Support';
  const body =
    data?.body ??
    'We acknowledge the donors and partners whose contributions help us maintain services, staffing, and facilities.';
  const ctaLabel = data?.ctaLabel ?? 'See Our Donors';

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='donors'
      className='relative bg-[var(--color-deep-cocoa)] px-4 py-20 lg:py-28 overflow-hidden'
      aria-label='Donors and Support'
    >
      {/* Decorative warm glows, echoing the footer */}
      <div
        className='top-0 right-0 absolute bg-[var(--color-muted-terracotta)]/10 blur-3xl rounded-full w-96 h-96'
        aria-hidden='true'
      />
      <div
        className='bottom-0 left-10 absolute bg-[var(--color-warm-beige)]/5 blur-3xl rounded-full w-72 h-72'
        aria-hidden='true'
      />

      <m.div
        className='relative mx-auto max-w-4xl text-center'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <m.div variants={item} className='inline-block mb-6'>
          <div className='flex justify-center items-center bg-[var(--color-warm-beige)]/10 mx-auto border border-white/10 rounded-2xl w-20 h-20'>
            <GiftIcon className='w-10 h-10 text-[var(--color-muted-terracotta)]' />
          </div>
        </m.div>

        <m.h2
          variants={item}
          className='mb-4 !text-[var(--color-off-white)] heading-2'
        >
          {heading}
        </m.h2>

        <m.div variants={item}>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
        </m.div>

        <m.p
          variants={item}
          className='mx-auto mb-10 max-w-2xl !text-[var(--color-off-white)]/85 !text-lg leading-relaxed body-text'
        >
          {body}
        </m.p>

        <m.div variants={item} className='inline-block'>
          <Link
            href='/donors'
            prefetch={false}
            className='btn btn-on-dark'
          >
            {ctaLabel}
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </Link>
        </m.div>
      </m.div>
    </section>
  );
}
