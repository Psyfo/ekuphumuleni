'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  Variants,
} from 'framer-motion';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type StaffImage = { src: string; alt: string; caption?: string };

const IMAGES: StaffImage[] = [
  {
    src: '/images/team/staff/staff_01.jpg',
    alt: 'Full staff photo - day shift',
    caption: 'Staff',
  },
  {
    src: '/images/team/staff/staff_02.jpg',
    alt: 'Full staff photo - night shift',
    caption: 'Staff',
  },
  {
    src: '/images/team/staff/staff_03.jpg',
    alt: 'Full staff photo - night shift',
    caption: 'Staff',
  },

  // If you only have one photo, remove the second entry above.
];

const fade: Variants = {
  enter: { opacity: 0.0, scale: 0.995 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0.0,
    scale: 1.005,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function StaffSection() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const hasMultiple = IMAGES.length > 1;

  const current = useMemo(() => IMAGES[index % IMAGES.length], [index]);

  function prev() {
    if (!hasMultiple) return;
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }
  function next() {
    if (!hasMultiple) return;
    setIndex((i) => (i + 1) % IMAGES.length);
  }

  return (
    <section
      id='staff'
      aria-label='Our Staff'
      className='bg-[var(--color-off-white)] px-4 py-16'
    >
      <div className='mx-auto max-w-6xl'>
        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='mb-8 text-center heading-2'
        >
          Our Staff
        </motion.h2>

        <div
          className='relative bg-[var(--color-warm-beige)] shadow rounded-xl w-full h-[60dvh] max-h-[720px] overflow-hidden'
          // Tall, immersive image area
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
          }}
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={current.src}
              variants={prefersReducedMotion ? undefined : fade}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute inset-0'
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes='100vw'
                className='object-cover'
                priority={false}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          {current.caption ? (
            <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/40 to-transparent p-3 sm:p-4'>
              <p className='drop-shadow font-semibold text-white text-sm sm:text-base'>
                {current.caption}
              </p>
            </div>
          ) : null}

          {/* Controls (only if multiple images) */}
          {hasMultiple && (
            <>
              <button
                type='button'
                aria-label='Previous photo'
                onClick={prev}
                className='inline-flex top-1/2 left-3 absolute justify-center items-center bg-[var(--color-muted-terracotta)]/90 hover:opacity-90 shadow rounded-full focus:outline-none focus:ring-[var(--color-muted-terracotta)] focus:ring-2 w-10 h-10 text-white -translate-y-1/2'
              >
                <ChevronLeftIcon className='w-6 h-6' aria-hidden='true' />
              </button>
              <button
                type='button'
                aria-label='Next photo'
                onClick={next}
                className='inline-flex top-1/2 right-3 absolute justify-center items-center bg-[var(--color-muted-terracotta)]/90 hover:opacity-90 shadow rounded-full focus:outline-none focus:ring-[var(--color-muted-terracotta)] focus:ring-2 w-10 h-10 text-white -translate-y-1/2'
              >
                <ChevronRightIcon className='w-6 h-6' aria-hidden='true' />
              </button>

              {/* Dots */}
              <div className='right-0 bottom-3 left-0 absolute flex justify-center items-center gap-2'>
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    aria-label={`Go to photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      i === index
                        ? 'bg-[var(--color-muted-terracotta)] scale-110'
                        : 'bg-white/70 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <p className='mt-3 text-[var(--color-deep-cocoa)]/80 text-center caption'>
          Our dedicated staff work tirelessly to provide compassionate care and
          support to all our residents, ensuring a warm and welcoming
          environment every day.
        </p>
      </div>
    </section>
  );
}
