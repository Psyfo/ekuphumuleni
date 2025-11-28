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
  { name: 'Mrs Nokuthula Moyo', role: 'Administrator', img: '/images/team/administration/administrator.jpg' },
  { name: 'Ms Simangele Ncube', role: 'Administration Officer', img: '/images/team/administration/administration_officer.jpg' },
  { name: 'Mrs Nomsa Gumpo', role: 'Bookkeeper', img: '/images/team/administration/book-keeper.jpg' },
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
    <div className='relative bg-[var(--color-off-white)] pt-[125%] rounded-lg w-full overflow-hidden'>
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
        <div className='absolute inset-0 place-items-center grid'>
          <div className='flex justify-center items-center bg-[var(--color-warm-beige)] shadow rounded-full w-20 h-20 text-[var(--color-earth-brown)]'>
            <UserIcon className='w-8 h-8' aria-hidden='true' />
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
      className='bg-[var(--color-off-white)] px-4 py-16'
    >
      <motion.div
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 variants={item} className='mb-2 text-center heading-2'>
          Administration
        </motion.h2>
        <motion.p variants={item} className='mb-10 text-center body-text'>
          The team that keeps Ekuphumuleni running smoothly.
        </motion.p>

        <motion.ul
          variants={container}
          className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'
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
              className='shadow hover:shadow-lg p-4 rounded-xl transition-shadow card'
            >
              <Portrait src={m.img} alt={m.name} />
              <div className='mt-4 text-center'>
                <h3 className='font-semibold text-[var(--color-deep-cocoa)] text-base md:text-lg'>
                  {m.name}
                </h3>
                <p className='text-[var(--color-deep-cocoa)]/80 caption'>
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
