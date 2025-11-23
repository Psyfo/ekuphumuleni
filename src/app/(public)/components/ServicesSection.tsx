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
    // Taller and closer to square using a 5:4 aspect ratio (height = 80% of width)
    <div className='relative bg-[var(--color-off-white)] mb-3 pt-[80%] rounded w-full overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(min-width:1024px) 280px, (min-width:768px) 50vw, 100vw'
        className={`object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadingComplete={() => setLoaded(true)}
        priority={false}
        unoptimized
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='z-0 relative bg-[var(--color-soft-sand)] px-4 py-16'
      aria-label='Our Services'
    >
      <div className='mx-auto max-w-[1400px]'>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-10 text-center heading-2'
        >
          Our Services
        </motion.h2>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* Nursing Care */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='shadow p-6 rounded-lg text-center card'
          >
            <HeartIcon
              aria-hidden='true'
              className='mx-auto mb-3 w-10 h-10 text-[var(--color-earth-brown)]'
            />
            <FadeImage
              src='/images/services/nursing/IMG_8799.JPG'
              alt='Nursing care in a calm setting'
            />
            <h3 className='mb-2 heading-3'>Nursing Care</h3>
            <p className='body-text'>
              Compassionate, round‑the‑clock care tailored to each resident’s
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
            className='shadow p-6 rounded-lg text-center card'
          >
            <ArrowPathIcon
              aria-hidden='true'
              className='mx-auto mb-3 w-10 h-10 text-[var(--color-earth-brown)]'
            />
            <FadeImage
              src='/images/services/nursing/IMG_8845.JPG'
              alt='Rehabilitation and mobility support'
            />
            <h3 className='mb-2 heading-3'>Rehabilitation</h3>
            <p className='body-text'>
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
            className='shadow p-6 rounded-lg text-center card'
          >
            <SparklesIcon
              aria-hidden='true'
              className='mx-auto mb-3 w-10 h-10 text-[var(--color-earth-brown)]'
            />
            <FadeImage
              src='/images/facilities/facilities_19.webp'
              alt='Sustainability initiatives at the home'
            />
            <h3 className='mb-2 heading-3'>Sustainability</h3>
            <p className='body-text'>
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
            className='bg-[var(--color-off-white)] shadow p-6 rounded-lg text-[var(--color-earth-brown)] text-center card'
          >
            <HomeModernIcon
              aria-hidden='true'
              className='mx-auto mb-3 w-10 h-10 text-[var(--color-earth-brown)]'
            />
            <FadeImage
              src='/images/facilities/facilities_11.webp'
              alt='Comfortable living facilities and communal spaces'
            />
            <h3 className='mb-2 heading-3'>Facilities</h3>
            <p className='body-text'>
              Comfortable spaces and amenities designed for community and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
