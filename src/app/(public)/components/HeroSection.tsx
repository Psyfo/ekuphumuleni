'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id='hero'
      className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-warm-beige)] to-[var(--color-soft-sand)] px-4 py-20 text-center
                 min-h-[calc(100dvh-4rem)] grid place-items-center overflow-hidden'
      aria-label='Hero Section'
    >
      {/* Subtle decorative gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--color-off-white)]/20 pointer-events-none' />

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative max-w-5xl mx-auto z-10'
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
          <div className='relative inline-block'>
            {/* Subtle glow effect behind logo */}
            <div className='absolute inset-0 blur-3xl bg-[var(--color-muted-terracotta)]/10 scale-110' />
            <Image
              src='/images/brand/ekuphumuleni_logo.png'
              alt='Ekuphumuleni logo'
              width={512}
              height={512}
              priority
              sizes='(min-width: 1024px) 288px, (min-width: 640px) 256px, 192px'
              className='relative mx-auto h-auto w-48 sm:w-64 lg:w-72 object-contain drop-shadow-lg'
              unoptimized
            />
          </div>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className='heading-1 mt-2 mb-3 !font-serif uppercase tracking-[0.2em] !text-3xl sm:!text-4xl lg:!text-5xl'
        >
          Ekuphumuleni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className='!text-xl sm:!text-2xl lg:!text-3xl font-semibold !font-sans !text-[var(--color-muted-terracotta)] mb-4'
        >
          Geriatric Nursing Home
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
          className='text-base sm:text-lg !text-[var(--color-deep-cocoa)]/80 max-w-2xl mx-auto mb-10 font-medium'
        >
          A sanctuary of compassionate care, where dignity meets comfort in every moment
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <Link
            href='#services'
            className='w-full sm:w-auto px-8 py-4 rounded-lg font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2'
            prefetch={false}
          >
            Explore Our Care
          </Link>
          <Link
            href='#contact'
            className='w-full sm:w-auto px-8 py-4 rounded-lg font-bold border-2 border-[var(--color-earth-brown)] text-[var(--color-earth-brown)] bg-white/80 backdrop-blur-sm hover:bg-[var(--color-warm-beige)] hover:border-[var(--color-earth-brown)]/80 transition-all duration-300 hover:scale-105 active:scale-95 shadow-warm hover:shadow-warm-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-earth-brown)] focus-visible:ring-offset-2'
            prefetch={false}
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-off-white)]/30 to-transparent pointer-events-none' />
    </section>
  );
}
