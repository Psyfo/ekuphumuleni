'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import MapEmbed from '@/components/MapEmbed';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function ContactSection() {
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
      id='contact'
      className='py-16 px-4 bg-[var(--color-off-white)]'
      aria-label='Contact Us'
    >
      <motion.div
        className='max-w-6xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={item} className='heading-2 text-center mb-8'>
          Contact Us
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-3'>
          <motion.div variants={item} className='card p-6 rounded-lg shadow'>
            <EnvelopeIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Email</p>
            <p className='body-text'>info@ekuphumuleni.org</p>
          </motion.div>

          <motion.div variants={item} className='card p-6 rounded-lg shadow'>
            <PhoneIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Phone</p>
            <p className='body-text'>+263 9 216 877</p>
          </motion.div>

          <motion.div variants={item} className='card p-6 rounded-lg shadow'>
            <MapPinIcon className='w-6 h-6 text-[var(--color-earth-brown)] mb-2' />
            <p className='body-text'>Location</p>
            <p className='body-text'>
              Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd,
              Bulawayo
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div variants={item} className='mt-8' aria-label='Map'>
          <MapEmbed
            query='Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo'
            zoom={15}
          />
        </motion.div>

        <motion.div
          variants={item}
          whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          className='text-center mt-8'
        >
          <Link
            href='/contact'
            prefetch={false}
            className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
          >
            Send a Message
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
