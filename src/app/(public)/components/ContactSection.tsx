'use client';

import { motion } from 'framer-motion';

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='py-16 px-4 bg-[var(--color-off-white)]'
      aria-label='Contact Us'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='heading-2 text-center mb-8'
        >
          Contact Us
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className='card p-6 rounded-lg shadow'
          >
            <EnvelopeIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Email</p>
            <p className='body-text'>info@ekuphumuleni.org</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className='card p-6 rounded-lg shadow'
          >
            <PhoneIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Phone</p>
            <p className='body-text'>+27 00 000 0000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='card p-6 rounded-lg shadow'
          >
            <MapPinIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Location</p>
            <p className='body-text'>123 Peaceful Lane, Bulawayo</p>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className='mt-8 h-64 rounded-lg shadow bg-[var(--color-soft-sand)] flex items-center justify-center'
          aria-label='Map placeholder'
        >
          <span className='body-text'>Map placeholder (embed later)</span>
        </motion.div>

        <div className='text-center mt-8'>
          <a
            href='/contact'
            className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] text-white shadow'
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
