'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id='hero'
      className='relative place-items-center grid bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-warm-beige)] to-[var(--color-soft-sand)] px-4 py-20 min-h-[calc(100dvh-4rem)] overflow-hidden text-center'
      aria-label='Hero Section'
    >
      {/* Subtle decorative gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--color-off-white)]/20 pointer-events-none' />

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='z-10 relative mx-auto max-w-5xl'
      >
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.95,
            y: prefersReducedMotion ? 0 : 8,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='mx-auto mb-6'
        >
          <div className='inline-block relative'>
            {/* Subtle glow effect behind logo */}
            <div className='absolute inset-0 bg-[var(--color-muted-terracotta)]/10 blur-3xl scale-110' />
            <Image
              src='/images/brand/ekuphumuleni_logo.png'
              alt='Ekuphumuleni logo'
              width={512}
              height={512}
              priority
              sizes='(min-width: 1024px) 288px, (min-width: 640px) 256px, 192px'
              className='relative drop-shadow-lg mx-auto w-48 sm:w-64 lg:w-72 h-auto object-contain'
              unoptimized
            />
          </div>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className='mt-2 mb-3 !font-serif !text-3xl sm:!text-4xl lg:!text-5xl uppercase tracking-[0.2em] heading-1'
        >
          Ekuphumuleni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className='mb-4 !font-sans font-semibold !text-[var(--color-muted-terracotta)] !text-xl sm:!text-2xl lg:!text-3xl'
        >
          Geriatric Nursing Home
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
          className='mx-auto mb-10 max-w-2xl font-medium !text-[var(--color-deep-cocoa)]/80 text-base sm:text-lg'
        >
          A dedicated geriatric nursing home where dignity, safety, and daily
          care are at the centre of life
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
          className='flex sm:flex-row flex-col justify-center items-center gap-4'
        >
          <Link
            href='#services'
            className='bg-[var(--color-muted-terracotta)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto font-bold !text-white hover:!text-white focus-visible:!text-white hover:scale-105 active:scale-95 transition-all duration-300'
            prefetch={false}
          >
            Explore Our Care
          </Link>
          <Link
            href='#contact'
            className='bg-white/80 hover:bg-[var(--color-warm-beige)] shadow-warm hover:shadow-warm-lg backdrop-blur-sm px-8 py-4 border-[var(--color-earth-brown)] border-2 hover:border-[var(--color-earth-brown)]/80 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-earth-brown)] focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto font-bold text-[var(--color-earth-brown)] hover:scale-105 active:scale-95 transition-all duration-300'
            prefetch={false}
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative bottom fade */}
      <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-[var(--color-off-white)]/30 to-transparent h-24 pointer-events-none' />
    </section>
  );
}
