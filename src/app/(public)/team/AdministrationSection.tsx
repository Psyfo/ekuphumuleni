'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

type Member = {
  name: string;
  role: 'Administrator' | 'Administration Officer' | 'Bookkeeper';
  img?: string; // replace with real portrait paths when available
};

const ADMIN: Member[] = [
  { name: 'Administrator Name', role: 'Administrator' },
  { name: 'Administration Officer Name', role: 'Administration Officer' },
  { name: 'Bookkeeper Name', role: 'Bookkeeper' },
  // Example with images when ready:
  // { name: 'Administrator Name', role: 'Administrator', img: '/images/admin/admin_01.webp' },
];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.06,
      when: 'beforeChildren',
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function Portrait({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className='relative w-full pt-[125%] overflow-hidden rounded-lg bg-[var(--color-off-white)]'>
      {!failed && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(min-width:1024px) 320px, (min-width:768px) 33vw, 100vw'
          className={`object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className='absolute inset-0 grid place-items-center'>
          <div className='flex items-center justify-center h-20 w-20 rounded-full bg-[var(--color-warm-beige)] text-[var(--color-earth-brown)] shadow'>
            <UserIcon className='h-8 w-8' aria-hidden='true' />
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdministrationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id='administration'
      aria-label='Administration Team'
      className='py-16 px-4 bg-[var(--color-off-white)]'
    >
      <motion.div
        className='max-w-6xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 variants={item} className='heading-2 text-center mb-2'>
          Administration
        </motion.h2>
        <motion.p variants={item} className='body-text text-center mb-10'>
          The team that keeps Ekuphumuleni running smoothly.
        </motion.p>

        <motion.ul
          variants={container}
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {ADMIN.map((m, idx) => (
            <motion.li
              key={idx}
              variants={item}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { y: -4, scale: 1.01, transition: { duration: 0.15 } }
              }
              className='card rounded-xl p-4 shadow hover:shadow-lg transition-shadow'
            >
              <Portrait src={m.img} alt={m.name} />
              <div className='mt-4 text-center'>
                <h3 className='text-base md:text-lg font-semibold text-[var(--color-deep-cocoa)]'>
                  {m.name}
                </h3>
                <p className='caption text-[var(--color-deep-cocoa)]/80'>
                  {m.role}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
