'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
      when: 'beforeChildren',
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function DonorsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main>
      <section
        id='donors'
        className='py-16 px-4 bg-[var(--color-off-white)] min-h-[70vh]'
        aria-label='Donors & Supporters'
      >
        <motion.div
          className='max-w-4xl mx-auto'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={item} className='heading-2 text-center mb-6'>
            Our Donors &amp; Well-Wishers
          </motion.h1>
          <motion.p
            variants={item}
            className='body-text text-center mb-10 max-w-2xl mx-auto'
          >
            Ekuphumuleni does not have regular donors, but is deeply grateful
            for the generosity of well-wishers, organizations, and community
            members who have supported our mission over the years.
          </motion.p>

          <motion.div variants={item} className='mb-12'>
            <h2 className='heading-3 text-center mb-4'>Notable Supporters</h2>
            <ul className='flex flex-col items-center gap-2 text-lg font-semibold text-[var(--color-earth-brown)]'>
              <li>Beit Trust</li>
              <li>Jesus Latter Day</li>
              <li>Many individual well-wishers</li>
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className='grid gap-8 md:grid-cols-2 mt-8'
          >
            {/* Donor Wall 1 */}
            <div className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'>
              <Image
                src='/images/building/donor-board_01.webp'
                alt='Donor Wall 1'
                fill
                sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                unoptimized
              />
              <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
                Historic Donor Wall
              </div>
            </div>
            {/* Donor Wall 2 */}
            <div className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'>
              <Image
                src='/images/building/donor-board_02.webp'
                alt='Donor Wall 2'
                fill
                sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                unoptimized
              />
              <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
                Donor Wall Honoring Past Supporters
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='mt-12 max-w-2xl mx-auto text-center'
          >
            <h2 className='heading-3 mb-3'>Become a Well-Wisher</h2>
            <p className='body-text mb-4'>
              Every contribution, large or small, helps us provide comfort and
              care to the elderly. If you would like to support Ekuphumuleni,
              please get in touch.
            </p>
            <a
              href='/contact'
              className='inline-block px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
