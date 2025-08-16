'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    alert('Thank you! We will keep you updated.');
    setEmail('');
  }

  return (
    <footer className='bg-[var(--color-deep-cocoa)] text-[var(--color-off-white)]'>
      <div className='max-w-7xl mx-auto px-4 py-14'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className='heading-2 text-[var(--color-warm-beige)] mb-3'>
              Ekuphumuleni
            </h2>
            <p className='body-text text-[var(--color-off-white)]/90'>
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
            <h3 className='heading-3 text-[var(--color-warm-beige)] mb-3'>
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
            <h3 className='heading-3 text-[var(--color-warm-beige)] mb-3'>
              Care & Facilities
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services#nursing-care'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Nursing Care
                </Link>
              </li>
              <li>
                <Link
                  href='/services#rehabilitation'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  Rehabilitation
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

          {/* Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className='heading-3 text-[var(--color-warm-beige)] mb-3'>
              Get in Touch
            </h3>
            <ul className='space-y-3 mb-4'>
              <li className='flex items-start gap-2'>
                <EnvelopeIcon className='h-5 w-5 mt-0.5 text-[var(--color-warm-beige)]' />
                <a
                  href='mailto:info@ekuphumuleni.org'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  info@ekuphumuleni.org
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <PhoneIcon className='h-5 w-5 mt-0.5 text-[var(--color-warm-beige)]' />
                <a
                  href='tel:+27000000000'
                  className='hover:text-[var(--color-muted-terracotta)] transition-colors'
                >
                  +263 9 216 877
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <MapPinIcon className='h-5 w-5 mt-0.5 text-[var(--color-warm-beige)]' />
                <address className='not-italic'>
                  Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd,
                  Bulawayo
                </address>
              </li>
            </ul>

            <form
              className='mt-3'
              onSubmit={onSubscribe}
              aria-label='Newsletter subscription'
            >
              <label htmlFor='newsletter-email' className='sr-only'>
                Email address
              </label>
              <div className='flex gap-2'>
                <input
                  id='newsletter-email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Your email'
                  className='flex-1 rounded-md px-3 py-2 text-[var(--color-deep-cocoa)] bg-[var(--color-off-white)] placeholder:text-[var(--color-deep-cocoa)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
                />
                <button
                  type='submit'
                  className='inline-flex items-center gap-1 px-4 py-2 rounded-md font-semibold bg-[var(--color-muted-terracotta)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
                >
                  Subscribe
                  <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <hr className='mt-12 border-[var(--color-off-white)]/20' />

        <div className='mt-6 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between'>
          <p className='text-sm text-[var(--color-off-white)]/90'>
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
            <li>
              <Link
                href='/contact'
                className='hover:text-[var(--color-muted-terracotta)] transition-colors'
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
