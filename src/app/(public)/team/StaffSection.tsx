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
    src: '/images/staff/staff_14.webp',
    alt: 'Full staff photo - day shift',
    caption: 'Staff',
  },
  {
    src: '/images/staff/staff_20.webp',
    alt: 'Full staff photo - night shift',
    caption: 'Staff',
  },
  {
    src: '/images/staff/staff_22.webp',
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
      className='py-16 px-4 bg-[var(--color-off-white)]'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='heading-2 text-center mb-8'
        >
          Our Staff
        </motion.h2>

        <div
          className='relative w-full rounded-xl shadow overflow-hidden bg-[var(--color-warm-beige)] h-[60dvh] max-h-[720px]'
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
            <div className='absolute left-0 right-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/40 to-transparent'>
              <p className='text-sm sm:text-base font-semibold text-white drop-shadow'>
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
                className='absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full h-10 w-10 bg-[var(--color-muted-terracotta)]/90 text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
              >
                <ChevronLeftIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <button
                type='button'
                aria-label='Next photo'
                onClick={next}
                className='absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full h-10 w-10 bg-[var(--color-muted-terracotta)]/90 text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
              >
                <ChevronRightIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Dots */}
              <div className='absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2'>
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

        <p className='caption text-center mt-3 text-[var(--color-deep-cocoa)]/80'>
          Our dedicated staff work tirelessly to provide compassionate care and
          support to all our residents, ensuring a warm and welcoming
          environment every day.
        </p>
      </div>
    </section>
  );
}
