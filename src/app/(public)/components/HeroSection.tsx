'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='py-16 px-4 text-center bg-[var(--color-warm-beige)]'
      aria-label='Hero Section'
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-5xl mx-auto'
      >
        <Image
          src='/images/staff/staff_21.webp'
          alt='Peaceful garden walkway symbolizing rest and restoration'
          width={1200}
          height={288}
          className='mx-auto mb-8 rounded-lg shadow-lg w-full max-w-3xl object-cover h-72 bg-[var(--color-soft-sand)]'
          priority
        />
        <h1 className='heading-1 mb-4'>A Place of Rest and Restoration</h1>
        <p className='body-text mb-8'>
          Compassionate geriatric care in a tranquil, culturally sensitive
          environment. Discover comfort, dignity, and community at Ekuphumuleni.
        </p>
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
