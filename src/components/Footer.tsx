'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-[var(--color-deep-cocoa)] text-[var(--color-off-white)]'>
      <div className='mx-auto px-4 py-14 max-w-7xl'>
        <div className='gap-10 grid sm:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className='mb-3 text-[var(--color-warm-beige)] heading-2'>
              Ekuphumuleni
            </h2>
            <p className='text-[var(--color-off-white)]/90 body-text'>
              A place of rest and restoration. Compassionate geriatric care in a
              tranquil, culturally sensitive environment.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            aria-label='Footer - Quick Links'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            <h3 className='mb-3 text-[var(--color-warm-beige)] heading-3'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/team'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/donors'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Donors
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.nav
            aria-label='Footer - Services'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className='mb-3 text-[var(--color-warm-beige)] heading-3'>
              Care & Facilities
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services#nursing-care'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Nursing Care & Rehabilitation
                </Link>
              </li>
              <li>
                <Link
                  href='/services#sustainability'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href='/services#facilities'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Facilities
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className='mb-3 text-[var(--color-warm-beige)] heading-3'>
              Get in Touch
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2'>
                <EnvelopeIcon className='mt-0.5 w-5 h-5 text-[var(--color-warm-beige)]' />
                <a
                  href='mailto:info@ekuphumuleni.org'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  info@ekuphumuleni.org
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <PhoneIcon className='mt-0.5 w-5 h-5 text-[var(--color-warm-beige)]' />
                <a
                  href='tel:+27000000000'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  263 292 216 877
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <MapPinIcon className='mt-0.5 w-5 h-5 text-[var(--color-warm-beige)]' />
                <address className='not-italic'>
                  Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd,
                  Bulawayo
                </address>
              </li>
            </ul>
          </motion.div>
        </div>

        <hr className='mt-12 border-[var(--color-off-white)]/20' />

        <div className='flex md:flex-row flex-col-reverse md:justify-between md:items-center gap-3 mt-6'>
          <p className='text-[var(--color-off-white)]/90 text-sm'>
            © {year} Ekuphumuleni. All rights reserved.
          </p>
          <ul className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'>
            <li>
              <Link
                href='/privacy'
                className='hover:text-[var(--color-muted-terracotta)] transition-colors'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/terms'
                className='hover:text-[var(--color-muted-terracotta)] transition-colors'
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
