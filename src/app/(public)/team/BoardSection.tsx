'use client';

import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

type Member = {
  name: string;
  role?: string;
  img?: string; // replace with actual portrait paths when available
};

const BOARD: Member[] = Array.from({ length: 9 }).map((_, i) => ({
  name: `Trustee Name ${i + 1}`,
  role: 'Trustee',
  img: `/images/trustees/trustees_0${i + 1}.webp`,
}));

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
    <div className='relative w-full pt-[125%] min-h-[120px] overflow-hidden rounded-lg bg-[var(--color-off-white)]'>
      {!failed && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(min-width:1024px) 320px, (min-width:768px) 33vw, 100vw'
          className={`object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading='lazy'
          unoptimized
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

export default function BoardSection() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  // Trigger when ~12% enters viewport; account for sticky header with a negative top margin.
  const inView = useInView(rootRef, {
    once: true,
    amount: 0.0,
    margin: '-64px 0px -15% 0px',
  });

  return (
    <section
      id='board'
      aria-label='Board of Trustees'
      className='py-16 px-4 bg-[var(--color-off-white)]'
    >
      <motion.div
        ref={rootRef}
        className='max-w-6xl mx-auto'
        variants={container}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.h2 variants={item} className='heading-2 text-center mb-2'>
          Board of Trustees
        </motion.h2>
        <motion.p variants={item} className='body-text text-center mb-10'>
          Nine dedicated trustees guiding Ekuphumuleni’s mission and service.
        </motion.p>

        <motion.ul
          variants={container}
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {BOARD.map((m, idx) => (
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
                  {m.role ?? 'Trustee'}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
