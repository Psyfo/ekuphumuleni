/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import {
  ArrowPathIcon,
  HeartIcon,
  HomeModernIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: 'easeOut' },
  }),
};

function FadeImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='group relative bg-gradient-to-br from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] mb-4 pt-[80%] rounded-lg w-full overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(min-width:1024px) 320px, (min-width:768px) 50vw, 100vw'
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        priority={false}
        unoptimized
      />
      {/* Overlay gradient on hover */}
      <div className='absolute inset-0 bg-gradient-to-t from-[var(--color-deep-cocoa)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='z-0 relative bg-gradient-to-b from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] px-4 py-20 lg:py-24'
      aria-label='Our Services'
    >
      <div className='mx-auto max-w-[1400px]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Our Services
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>
            Comprehensive care tailored to your loved ones' unique needs,
            delivered with compassion and professionalism
          </p>
        </motion.div>

        <div className='gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* Nursing Care */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 lg:p-8 border border-subtle rounded-xl text-center transition-all hover:-translate-y-2 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14 group-hover:scale-110 transition-transform duration-300'>
              <HeartIcon
                aria-hidden='true'
                className='w-8 h-8 text-[var(--color-muted-terracotta)]'
              />
            </div>
            <FadeImage
              src='/images/services/nursing/IMG_8799.JPG'
              alt='Nursing care in a calm setting'
            />
            <h3 className='mb-3 !text-xl heading-3'>Nursing Care</h3>
            <p className='!text-sm leading-relaxed body-text'>
              Compassionate, round‑the‑clock care tailored to each resident's
              needs.
            </p>
          </motion.div>

          {/* Rehabilitation */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 lg:p-8 border border-subtle rounded-xl text-center transition-all hover:-translate-y-2 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14 group-hover:scale-110 transition-transform duration-300'>
              <ArrowPathIcon
                aria-hidden='true'
                className='w-8 h-8 text-[var(--color-muted-terracotta)]'
              />
            </div>
            <FadeImage
              src='/images/services/nursing/IMG_8845.JPG'
              alt='Rehabilitation and mobility support'
            />
            <h3 className='mb-3 !text-xl heading-3'>Rehabilitation</h3>
            <p className='!text-sm leading-relaxed body-text'>
              Supportive therapies that restore mobility, independence, and
              well‑being.
            </p>
          </motion.div>

          {/* Sustainability */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 lg:p-8 border border-subtle rounded-xl text-center transition-all hover:-translate-y-2 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14 group-hover:scale-110 transition-transform duration-300'>
              <SparklesIcon
                aria-hidden='true'
                className='w-8 h-8 text-[var(--color-muted-terracotta)]'
              />
            </div>
            <FadeImage
              src='/images/facilities/facilities_19.webp'
              alt='Sustainability initiatives at the home'
            />
            <h3 className='mb-3 !text-xl heading-3'>Sustainability</h3>
            <p className='!text-sm leading-relaxed body-text'>
              Eco‑friendly practices that care for our residents and our planet.
            </p>
          </motion.div>

          {/* Facilities */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 lg:p-8 border border-subtle rounded-xl text-center transition-all hover:-translate-y-2 duration-300'
          >
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14 group-hover:scale-110 transition-transform duration-300'>
              <HomeModernIcon
                aria-hidden='true'
                className='w-8 h-8 text-[var(--color-muted-terracotta)]'
              />
            </div>
            <FadeImage
              src='/images/facilities/facilities_11.webp'
              alt='Comfortable living facilities and communal spaces'
            />
            <h3 className='mb-3 !text-xl heading-3'>Facilities</h3>
            <p className='!text-sm leading-relaxed body-text'>
              Comfortable spaces and amenities designed for community and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
