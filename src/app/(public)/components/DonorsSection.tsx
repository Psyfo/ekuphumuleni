'use client';

import { motion } from 'framer-motion';

import { GiftIcon } from '@heroicons/react/24/outline';

export default function DonorsSection() {
  return (
    <section
      id='donors'
      className='py-16 px-4 bg-[var(--color-soft-sand)]'
      aria-label='Donors and Support'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='inline-block mb-4'
        >
          <GiftIcon className='w-14 h-14 text-[var(--color-earth-brown)] mx-auto' />
        </motion.div>
        <h2 className='heading-2 mb-3'>Donors &amp; Support</h2>
        <p className='body-text mb-6'>
          We are grateful to our generous donors and partners whose support
          brings comfort and hope.
        </p>
        <a
          href='/donors'
          className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] text-white shadow'
        >
          See Our Donors
        </a>
      </div>
    </section>
  );
}
