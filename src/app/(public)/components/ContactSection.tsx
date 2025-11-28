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
      className='py-20 lg:py-24 px-4 bg-[var(--color-off-white)]'
      aria-label='Contact Us'
    >
      <motion.div
        className='max-w-6xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item} className='text-center mb-16'>
          <h2 className='heading-2 mb-4 !text-3xl lg:!text-4xl'>Contact Us</h2>
          <div className='w-16 h-1 bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full' />
          <p className='body-text !text-lg max-w-2xl mx-auto leading-relaxed'>
            We're here to answer your questions and provide the information you need
          </p>
        </motion.div>

        <div className='grid gap-6 lg:gap-8 md:grid-cols-3 mb-12'>
          <motion.div variants={item} className='bg-white p-8 rounded-xl shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 border border-subtle group'>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
              <EnvelopeIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='heading-3 !text-lg mb-3'>Email</h3>
            <a href='mailto:info@ekuphumuleni.org' className='body-text !text-[var(--color-muted-terracotta)] hover:underline font-medium'>
              info@ekuphumuleni.org
            </a>
          </motion.div>

          <motion.div variants={item} className='bg-white p-8 rounded-xl shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 border border-subtle group'>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
              <PhoneIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='heading-3 !text-lg mb-3'>Phone</h3>
            <a href='tel:+2639216877' className='body-text !text-[var(--color-muted-terracotta)] hover:underline font-medium'>
              +263 9 216 877
            </a>
          </motion.div>

          <motion.div variants={item} className='bg-white p-8 rounded-xl shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 border border-subtle group'>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
              <MapPinIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='heading-3 !text-lg mb-3'>Location</h3>
            <p className='body-text'>
              Old Falls Rd, Bulawayo
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div variants={item} className='mb-12 rounded-xl overflow-hidden shadow-warm-lg border-2 border-[var(--color-earth-brown)]/10' aria-label='Map'>
          <MapEmbed
            query='Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo'
            zoom={15}
          />
        </motion.div>

        <motion.div
          variants={item}
          whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          className='text-center'
        >
          <Link
            href='/contact'
            prefetch={false}
            className='px-8 py-4 rounded-lg font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2 inline-flex items-center gap-2'
          >
            Send a Message
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
