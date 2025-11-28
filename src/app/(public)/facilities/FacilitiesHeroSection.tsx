'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function FacilitiesHeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      aria-label='Facilities Page Header'
      className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-16 lg:py-20'
    >
      <motion.div
        className='mx-auto max-w-5xl'
        variants={container}
        initial='hidden'
        animate='show'
      >
        {/* Breadcrumb */}
        <motion.nav variants={item} aria-label='Breadcrumb' className='mb-8'>
          <ol className='flex items-center gap-2 text-sm'>
            <li>
              <Link
                href='/'
                className='flex items-center gap-1.5 text-[var(--color-deep-cocoa)]/70 hover:text-[var(--color-muted-terracotta)] transition-colors duration-200'
              >
                <HomeIcon className='w-4 h-4' aria-hidden='true' />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <ChevronRightIcon
                className='w-4 h-4 text-[var(--color-deep-cocoa)]/40'
                aria-hidden='true'
              />
            </li>
            <li>
              <span className='font-medium text-[var(--color-deep-cocoa)]'>
                Facilities
              </span>
            </li>
          </ol>
        </motion.nav>

        {/* Page Title */}
        <motion.h1
          variants={item}
          className='mb-6 !text-4xl md:!text-5xl lg:!text-6xl text-center heading-1'
        >
          Our Facilities
        </motion.h1>

        {/* Accent Divider */}
        <motion.div
          variants={item}
          className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-20 h-1.5'
        />

        {/* Subtitle */}
        <motion.p
          variants={item}
          className='mx-auto max-w-3xl !text-lg lg:!text-xl text-center leading-relaxed body-text'
        >
          Modern, comfortable spaces thoughtfully designed to create a warm,
          home-like environment where residents feel safe, valued, and at peace
        </motion.p>

        {/* Decorative Quote */}
        <motion.div variants={item} className='mx-auto mt-12 max-w-2xl'>
          <div className='bg-white/60 shadow-warm backdrop-blur-sm p-8 border border-subtle rounded-2xl'>
            <p className='!text-[var(--color-deep-cocoa)] text-lg text-center italic leading-relaxed'>
              &ldquo;A place designed not just for living, but for thriving —
              where comfort meets care&rdquo;
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
