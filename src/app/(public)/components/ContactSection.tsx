/* eslint-disable react/no-unescaped-entities */
'use client';

import { m, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import MapEmbed from '@/components/MapEmbed';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

interface ContactSectionData {
  heading?: string;
  subtitle?: string;
  email?: string;
  phoneNumbers?: string[];
  locationLines?: string[];
  mapQuery?: string;
  ctaLabel?: string;
}

interface ContactSectionProps {
  data?: ContactSectionData;
}

export default function ContactSection({ data }: ContactSectionProps = {}) {
  const heading = data?.heading ?? 'Contact Us';
  const subtitle =
    data?.subtitle ?? "We're here to answer your questions and provide the information you need";
  const email = data?.email ?? 'administration@ekuphumuleni.ngo';
  const phoneNumbers = data?.phoneNumbers ?? ['+263 292 216877', '+263 778 719166'];
  const locationLines = data?.locationLines ?? ['Stand 7165 Old Falls Road', 'P O Box 1667', 'Bulawayo'];
  const mapQuery =
    data?.mapQuery ?? 'Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo';
  const ctaLabel = data?.ctaLabel ?? 'Send a Message';

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='contact'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
      aria-label='Contact Us'
    >
      <m.div
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>{heading}</h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>
            {subtitle}
          </p>
        </m.div>

        <div className='gap-6 lg:gap-8 grid md:grid-cols-3 mb-12'>
          <m.div
            variants={item}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <EnvelopeIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='mb-3 !text-lg heading-3'>Email</h3>
            <a
              href={`mailto:${email}`}
              className='font-medium !text-[var(--color-muted-terracotta)] hover:underline body-text'
            >
              {email}
            </a>
          </m.div>

          <m.div
            variants={item}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <PhoneIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='mb-3 !text-lg heading-3'>Phone</h3>
            <div className='space-y-1'>
              {phoneNumbers.map((number, i) => (
                <a
                  key={i}
                  href={`tel:${number.replace(/\s+/g, '')}`}
                  className='block font-medium !text-[var(--color-muted-terracotta)] hover:underline body-text'
                >
                  {number}
                </a>
              ))}
            </div>
          </m.div>

          <m.div
            variants={item}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <MapPinIcon className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
            </div>
            <h3 className='mb-3 !text-lg heading-3'>Location</h3>
            <div className='space-y-1 body-text'>
              {locationLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </m.div>
        </div>

        {/* Map */}
        <m.div
          variants={item}
          className='shadow-warm-lg mb-12 border-[var(--color-earth-brown)]/10 border-2 rounded-xl overflow-hidden'
          aria-label='Map'
        >
          <MapEmbed query={mapQuery} zoom={15} />
        </m.div>

        <m.div
          variants={item}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className='text-center'
        >
          <Link
            href='/contact'
            prefetch={false}
            className='inline-flex items-center gap-2 bg-[var(--color-terracotta-deep)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 font-bold !text-white hover:!text-white focus-visible:!text-white transition-all duration-300'
          >
            {ctaLabel}
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </Link>
        </m.div>
      </m.div>
    </section>
  );
}
