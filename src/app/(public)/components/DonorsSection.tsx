'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';

import { GiftIcon } from '@heroicons/react/24/outline';

export default function DonorsSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='donors'
      className='py-16 px-4 bg-[var(--color-soft-sand)]'
      aria-label='Donors and Support'
    >
      <motion.div
        className='max-w-5xl mx-auto text-center'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item} className='inline-block mb-4'>
          <GiftIcon className='w-14 h-14 text-[var(--color-earth-brown)] mx-auto' />
        </motion.div>

        <motion.h2 variants={item} className='heading-2 mb-3'>
          Donors &amp; Support
        </motion.h2>

        <motion.p variants={item} className='body-text mb-6'>
          We are grateful to our generous donors and partners whose support
          brings comfort and hope.
        </motion.p>

        <motion.div
          variants={item}
          whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          className='inline-block'
        >
          <Link
            href='/donors'
            prefetch={false}
            className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
          >
            See Our Donors
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
