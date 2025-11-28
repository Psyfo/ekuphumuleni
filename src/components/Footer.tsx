'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className='relative bg-gradient-to-br from-[var(--color-deep-cocoa)] via-[var(--color-deep-cocoa)] to-[#5a4040] overflow-hidden text-[var(--color-off-white)]'>
      {/* Decorative background elements */}
      <div className='top-0 right-0 absolute bg-[var(--color-muted-terracotta)]/10 blur-3xl rounded-full w-96 h-96' />
      <div className='bottom-0 left-0 absolute bg-[var(--color-warm-beige)]/5 blur-3xl rounded-full w-96 h-96' />

      <div className='z-10 relative mx-auto px-4 py-16 lg:py-20 max-w-7xl'>
        {/* Main Footer Content */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-50px' }}
          className='gap-10 lg:gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 mb-12'
        >
          {/* Brand Section */}
          <motion.div variants={item} className='lg:col-span-3'>
            <div className='flex flex-col items-start gap-4'>
              <Image
                src='/images/brand/ekuphumuleni_logo.png'
                alt='Ekuphumuleni logo'
                width={80}
                height={80}
                className='drop-shadow-lg w-20 h-20 object-contain'
                unoptimized
              />
              <h2 className='font-serif font-bold text-[var(--color-warm-beige)] !text-2xl'>
                Ekuphumuleni
              </h2>
              <div className='flex items-center gap-2 text-[var(--color-warm-beige)] text-sm italic'>
                <HeartIcon className='w-4 h-4' aria-hidden='true' />
                <span>Caring since 1983</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            variants={item}
            aria-label='Footer - Quick Links'
            className='lg:col-span-2'
          >
            <h3 className='mb-5 font-serif font-bold text-[var(--color-warm-beige)] !text-xl'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/team', label: 'Our Team' },
                { href: '/services', label: 'Services' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/donors', label: 'Donors' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='group inline-flex items-center gap-2 transition-all duration-200'
                  >
                    <span className='bg-[var(--color-muted-terracotta)] rounded-full w-1.5 group-hover:w-2 h-1.5 transition-all duration-200' />
                    <span className='text-[var(--color-off-white)]/90 group-hover:text-[var(--color-muted-terracotta)] transition-all group-hover:translate-x-1 duration-200'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Care & Facilities */}
          <motion.nav
            variants={item}
            aria-label='Footer - Care & Facilities'
            className='lg:col-span-3'
          >
            <h3 className='mb-5 font-serif font-bold text-[var(--color-warm-beige)] !text-xl'>
              Care & Facilities
            </h3>
            <ul className='space-y-3'>
              {[
                { href: '/services#nursing-care', label: 'Nursing Care' },
                {
                  href: '/services#rehabilitation',
                  label: 'Rehabilitation',
                },
                {
                  href: '/facilities#sustainability',
                  label: 'Sustainability',
                },
                { href: '/facilities#garden', label: 'Gardens & Grounds' },
                { href: '/facilities#accommodation', label: 'Accommodation' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='group inline-flex items-center gap-2 transition-all duration-200'
                  >
                    <span className='bg-[var(--color-muted-terracotta)] rounded-full w-1.5 group-hover:w-2 h-1.5 transition-all duration-200' />
                    <span className='text-[var(--color-off-white)]/90 group-hover:text-[var(--color-muted-terracotta)] transition-all group-hover:translate-x-1 duration-200'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact Information */}
          <motion.div variants={item} className='lg:col-span-4'>
            <h3 className='mb-5 font-serif font-bold text-[var(--color-warm-beige)] !text-xl'>
              Get in Touch
            </h3>
            <ul className='space-y-4'>
              <li className='group'>
                <a
                  href='mailto:administration@ekuphumuleni.ngo'
                  className='flex items-start gap-3 transition-all duration-200'
                >
                  <div className='flex flex-shrink-0 justify-center items-center bg-[var(--color-muted-terracotta)]/20 group-hover:bg-[var(--color-muted-terracotta)]/30 mt-0.5 rounded-lg w-9 h-9 transition-colors duration-200'>
                    <EnvelopeIcon
                      className='w-5 h-5 text-[var(--color-muted-terracotta)] transition-colors duration-200'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='mb-0.5 font-sans font-semibold text-[var(--color-warm-beige)] text-xs uppercase tracking-wider'>
                      Email
                    </p>
                    <p className='font-sans text-[var(--color-off-white)] group-hover:text-[var(--color-muted-terracotta)] text-sm break-all transition-colors duration-200'>
                      administration@ekuphumuleni.ngo
                    </p>
                  </div>
                </a>
              </li>
              <li className='group'>
                <a
                  href='tel:+263292216877'
                  className='flex items-start gap-3 transition-all duration-200'
                >
                  <div className='flex flex-shrink-0 justify-center items-center bg-[var(--color-muted-terracotta)]/20 group-hover:bg-[var(--color-muted-terracotta)]/30 mt-0.5 rounded-lg w-9 h-9 transition-colors duration-200'>
                    <PhoneIcon
                      className='w-5 h-5 text-[var(--color-muted-terracotta)] transition-colors duration-200'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='mb-0.5 font-sans font-semibold text-[var(--color-warm-beige)] text-xs uppercase tracking-wider'>
                      Phone
                    </p>
                    <p className='font-sans text-[var(--color-off-white)] group-hover:text-[var(--color-muted-terracotta)] text-sm transition-colors duration-200'>
                      +263 292 216 877
                    </p>
                  </div>
                </a>
              </li>
              <li className='group'>
                <div className='flex items-start gap-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-[var(--color-muted-terracotta)]/20 mt-0.5 rounded-lg w-9 h-9'>
                    <MapPinIcon
                      className='w-5 h-5 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='mb-0.5 font-sans font-semibold text-[var(--color-warm-beige)] text-xs uppercase tracking-wider'>
                      Location
                    </p>
                    <address className='font-sans text-[var(--color-off-white)] text-sm not-italic leading-relaxed'>
                      Ekuphumuleni Geriatric Nursing Home
                      <br />
                      VHCG+86V, Old Falls Rd
                      <br />
                      Bulawayo, Zimbabwe
                    </address>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <div className='relative h-px'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-warm-beige)]/30 to-transparent' />
            <div className='top-1/2 left-1/2 absolute bg-[var(--color-muted-terracotta)] rounded-full w-2 h-2 -translate-x-1/2 -translate-y-1/2' />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className='flex md:flex-row flex-col-reverse md:justify-between md:items-center gap-4'
        >
          <div className='flex sm:flex-row flex-col items-start sm:items-center gap-2 sm:gap-4'>
            <p className='font-sans text-[var(--color-off-white)]/80 text-sm'>
              © {year} Ekuphumuleni. All rights reserved.
            </p>
          </div>

          <ul className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='font-sans font-medium text-[var(--color-off-white)] hover:text-[var(--color-muted-terracotta)] text-sm transition-colors duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
