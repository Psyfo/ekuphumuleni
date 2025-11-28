'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-warm-beige)] to-[var(--color-soft-sand)] px-4 py-20 lg:py-28 overflow-hidden'
      aria-label='About Page Hero'
    >
      {/* Subtle decorative gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--color-off-white)]/20 pointer-events-none' />

      <div className='z-10 relative mx-auto max-w-5xl text-center'>
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='mb-6'
          aria-label='Breadcrumb'
        >
          <ol className='flex justify-center items-center gap-2 text-sm'>
            <li>
              <Link
                href='/'
                className='text-[var(--color-deep-cocoa)]/60 hover:text-[var(--color-muted-terracotta)] transition-colors'
              >
                Home
              </Link>
            </li>
            <li className='text-[var(--color-deep-cocoa)]/40'>/</li>
            <li className='font-semibold text-[var(--color-muted-terracotta)]'>
              About
            </li>
          </ol>
        </motion.nav>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className='mb-6 !font-serif !text-4xl sm:!text-5xl lg:!text-6xl heading-1'
        >
          About Ekuphumuleni
        </motion.h1>

        {/* Accent divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: prefersReducedMotion ? 1 : 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-24 h-1.5'
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className='mx-auto max-w-3xl font-medium !text-[var(--color-deep-cocoa)]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed'
        >
          A legacy of compassionate care, dignity, and restoration since 1983
        </motion.p>

        {/* Decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className='mx-auto mt-12 max-w-2xl'
        >
          <div className='bg-white/60 shadow-warm-lg backdrop-blur-sm p-8 border border-subtle rounded-2xl'>
            <svg
              className='mx-auto mb-4 w-8 h-8 text-[var(--color-muted-terracotta)]/30'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
            </svg>
            <p className='!text-[var(--color-deep-cocoa)] text-base sm:text-lg italic leading-relaxed'>
              Ekuphumuleni means &ldquo;place of rest&rdquo; — a sanctuary where
              dignity, care, and compassion come together to honor every
              individual
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-[var(--color-off-white)]/30 to-transparent h-24 pointer-events-none' />
    </section>
  );
}
