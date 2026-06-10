'use client';

import { m, Variants } from 'framer-motion';
import Link from 'next/link';

import { UserGroupIcon } from '@heroicons/react/24/outline';

interface MeetTheTeamSectionData {
  heading?: string;
  body?: string;
  ctaLabel?: string;
}

interface MeetTheTeamSectionProps {
  data?: MeetTheTeamSectionData;
}

export default function MeetTheTeamSection({ data }: MeetTheTeamSectionProps = {}) {
  const heading = data?.heading ?? 'Meet the Team';
  const body =
    data?.body ??
    'Clinical, administrative, and board professionals responsible for the day‑to‑day running and governance of the home.';
  const ctaLabel = data?.ctaLabel ?? 'View Team';

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
      id='team'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
      aria-label='Meet the Team'
    >
      <m.div
        className='mx-auto max-w-4xl text-center'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <m.div variants={item} className='inline-block mb-6'>
          <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 shadow-warm mx-auto rounded-2xl w-20 h-20'>
            <UserGroupIcon className='w-10 h-10 text-[var(--color-muted-terracotta)]' />
          </div>
        </m.div>

        <m.h2
          variants={item}
          className='mb-4 heading-2'
        >
          {heading}
        </m.h2>

        <m.div variants={item}>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
        </m.div>

        <m.p
          variants={item}
          className='mx-auto mb-10 max-w-2xl !text-lg leading-relaxed body-text'
        >
          {body}
        </m.p>

        <m.div
          variants={item}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className='inline-block'
        >
          <Link
            href='/team'
            prefetch={false}
            className='btn btn-primary'
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
