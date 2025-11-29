'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.12,
        when: 'beforeChildren' as const,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id='hero'
      aria-label='Hero Section'
      className='relative flex justify-center items-center bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 min-h-[calc(100vh-4rem)]'
    >
      <motion.div
        className='mx-auto max-w-5xl text-center'
        variants={container}
        initial='hidden'
        animate='show'
      >
        {/* Logo */}
        <motion.div variants={item} className='mx-auto mb-10'>
          <Image
            src='/images/brand/ekuphumuleni_master_terracotta.svg'
            alt='Ekuphumuleni logo'
            width={320}
            height={320}
            priority
            sizes='(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px'
            className='mx-auto w-60 sm:w-70 lg:w-80 h-auto object-contain'
          />
        </motion.div>

        {/* Page Title */}
        <motion.h1
          variants={item}
          className='mb-4 !font-bold !text-5xl md:!text-6xl lg:!text-7xl text-center heading-1'
        >
          Ekuphumuleni
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className='mb-12 !font-semibold !text-[var(--color-muted-terracotta)] !text-2xl md:!text-3xl lg:!text-4xl text-center'
        >
          Geriatric Nursing Home
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
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
    </section>
  );
}
