'use client';

import { AnimatePresence, m, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export type CmsStaffPhoto = {
  _id: string;
  imageUrl?: string | null;
  alt: string;
  caption?: string | null;
  order?: number | null;
};

interface StaffSectionProps {
  photos: CmsStaffPhoto[];
  heading?: string | null;
  description?: string | null;
}

const fade: Variants = {
  enter: { opacity: 0.0, scale: 0.98 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0.0,
    scale: 1.02,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function StaffSection({
  photos,
  heading,
  description,
}: StaffSectionProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = photos.length > 1;

  const current = useMemo(
    () => photos[index % Math.max(photos.length, 1)],
    [index, photos],
  );

  function prev() {
    if (!hasMultiple) return;
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }
  function next() {
    if (!hasMultiple) return;
    setIndex((i) => (i + 1) % photos.length);
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id='staff'
      aria-label='Our Staff'
      className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20 lg:py-24'
    >
      <m.div
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          {heading ? (
            <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>{heading}</h2>
          ) : null}
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          {description ? (
            <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
              {description}
            </p>
          ) : null}
        </m.div>

        {photos.length === 0 ? (
          <m.p variants={item} className='text-center body-text'>
            Staff photos will be available soon.
          </m.p>
        ) : (
          <m.div variants={item}>
            <div
              className='relative bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl w-full h-[60dvh] max-h-[720px] overflow-hidden'
              tabIndex={0}
              role='region'
              aria-label='Staff photo carousel'
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') prev();
                if (e.key === 'ArrowRight') next();
              }}
            >
              <AnimatePresence mode='wait' initial={false}>
                {current && (
                  <m.div
                    key={current._id}
                    variants={fade}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    className='absolute inset-0'
                  >
                    {current.imageUrl ? (
                      <Image
                        src={current.imageUrl}
                        alt={current.alt}
                        fill
                        sizes='100vw'
                        className='object-cover'
                        priority={index === 0}
                        unoptimized
                      />
                    ) : null}
                  </m.div>
                )}
              </AnimatePresence>

              {/* Caption */}
              {current?.caption ? (
                <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6'>
                  <p className='drop-shadow-lg font-bold text-white text-lg sm:text-xl'>
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
                    className='inline-flex top-1/2 left-4 absolute justify-center items-center bg-white/95 hover:bg-white shadow-warm-lg rounded-full focus:outline-none focus:ring-[var(--color-muted-terracotta)] focus:ring-2 focus:ring-offset-2 w-12 sm:w-14 h-12 sm:h-14 text-[var(--color-deep-cocoa)] hover:text-[var(--color-muted-terracotta)] hover:scale-110 transition-all -translate-y-1/2 duration-200'
                  >
                    <ChevronLeftIcon
                      className='w-6 sm:w-7 h-6 sm:h-7'
                      aria-hidden='true'
                    />
                  </button>
                  <button
                    type='button'
                    aria-label='Next photo'
                    onClick={next}
                    className='inline-flex top-1/2 right-4 absolute justify-center items-center bg-white/95 hover:bg-white shadow-warm-lg rounded-full focus:outline-none focus:ring-[var(--color-muted-terracotta)] focus:ring-2 focus:ring-offset-2 w-12 sm:w-14 h-12 sm:h-14 text-[var(--color-deep-cocoa)] hover:text-[var(--color-muted-terracotta)] hover:scale-110 transition-all -translate-y-1/2 duration-200'
                  >
                    <ChevronRightIcon
                      className='w-6 sm:w-7 h-6 sm:h-7'
                      aria-hidden='true'
                    />
                  </button>

                  {/* Dots */}
                  <div className='right-0 bottom-4 left-0 absolute flex justify-center items-center gap-2.5'>
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        type='button'
                        aria-label={`Go to photo ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === index
                            ? 'bg-white w-8 h-3 shadow-lg'
                            : 'bg-white/70 hover:bg-white/90 w-3 h-3 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </m.div>
        )}

        <m.div variants={item} className='mt-8'>
          <div className='bg-white shadow-warm mx-auto p-6 lg:p-8 border border-subtle rounded-2xl max-w-4xl'>
            <p className='text-center leading-relaxed body-text'>
              Staff work across day, night, and weekend shifts to provide
              hands‑on care, supervision, and practical support. Their focus is
              on safety, clinical tasks, and daily living needs for residents.
            </p>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
