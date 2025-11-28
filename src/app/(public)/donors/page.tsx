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
    <main className=''>
      <section
        id='donors'
        className='bg-[var(--color-off-white)] px-4 py-16 min-h-[70vh]'
        aria-label='Donors & Supporters'
      >
        <motion.div
          className='mx-auto max-w-4xl'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={item} className='mb-6 text-center heading-2'>
            Our Donors &amp; Well-Wishers
          </motion.h1>
          <motion.p
            variants={item}
            className='mx-auto mb-10 max-w-2xl text-center body-text'
          >
            Ekuphumuleni does not have regular donors, but is deeply grateful
            for the generosity of well-wishers, organizations, and community
            members who have supported our mission over the years.
          </motion.p>

          <motion.div variants={item} className='mb-12'>
            <h2 className='mb-4 text-center heading-3'>Notable Supporters</h2>
            <ul className='flex flex-col items-center gap-2 font-semibold text-[var(--color-earth-brown)] text-lg'>
              <li>Beit Trust</li>
              <li>Jesus Latter Day</li>
              <li>Many individual well-wishers</li>
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className='gap-8 grid md:grid-cols-2 mt-8'
          >
            {/* Donor Wall 1 */}
            <div className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'>
              <Image
                src='/images/building/donor-board_01.webp'
                alt='Donor Wall 1'
                fill
                sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                unoptimized
              />
              <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
                Historic Donor Wall
              </div>
            </div>
            {/* Donor Wall 2 */}
            <div className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'>
              <Image
                src='/images/building/donor-board_02.webp'
                alt='Donor Wall 2'
                fill
                sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                unoptimized
              />
              <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
                Donor Wall Honoring Past Supporters
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='mx-auto mt-12 max-w-2xl text-center'
          >
            <h2 className='mb-3 heading-3'>Become a Well-Wisher</h2>
            <p className='mb-4 body-text'>
              Every contribution, large or small, helps us provide comfort and
              care to the elderly. If you would like to support Ekuphumuleni,
              please get in touch.
            </p>
            <a
              href='/contact'
              className='inline-block bg-[var(--color-muted-terracotta)] shadow px-6 py-3 rounded focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 font-bold !text-white hover:!text-white focus-visible:!text-white'
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
