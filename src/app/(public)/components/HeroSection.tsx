'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id='hero'
      className='bg-[var(--color-warm-beige)] px-4 py-16 text-center
                 min-h-[calc(100dvh-4rem)] grid place-items-center'
      aria-label='Hero Section'
    >
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-5xl mx-auto'
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
          className='mx-auto'
        >
          <Image
            src='/images/brand/ekuphumuleni_logo.png'
            alt='Ekuphumuleni logo'
            width={512}
            height={512}
            priority
            sizes='(min-width: 1024px) 256px, (min-width: 640px) 224px, 160px'
            className='mx-auto h-auto w-60 sm:w-56 lg:w-84 object-contain'
            unoptimized
          />
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className='heading-1 mt-5 mb-2 !text-[var(--color-muted-terracotta)] uppercase tracking-wider'
        >
          Ekuphumuleni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className='!text-2xl md:text-2xl font-semibold !font-sans !text-[var(--color-muted-terracotta)] mb-8'
        >
          Geriatric Nursing Home
        </motion.p>

        {/* CTAs */}
        <div className='flex items-center justify-center gap-4'>
          <Link
            href='#services'
            className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow'
            prefetch={false}
          >
            Explore Our Care
          </Link>
          <Link
            href='#contact'
            className='px-6 py-3 rounded font-bold border border-[var(--color-earth-brown)] text-[var(--color-earth-brown)] bg-white'
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
