'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

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

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='py-16 px-4 bg-[var(--color-soft-sand)]'
      aria-label='Our Services'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='heading-2 text-center mb-10'
        >
          Our Services
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Nursing Care */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='card p-6 rounded-lg shadow text-center'
          >
            <HeartIcon className='w-10 h-10 text-[var(--color-earth-brown)] mx-auto mb-3' />
            <div className='w-full h-28 relative rounded bg-[var(--color-off-white)] mb-3'>
              <Image
                src='/images/nursing.jpg'
                alt='Nursing care in a calm setting'
                fill
                className='object-cover rounded'
              />
            </div>
            <h3 className='heading-3 mb-2'>Nursing Care</h3>
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
            className='card p-6 rounded-lg shadow text-center'
          >
            <ArrowPathIcon className='w-10 h-10 text-[var(--color-earth-brown)] mx-auto mb-3' />
            <Image
              src='/images/rehabilitation.jpg'
              alt='Rehabilitation and mobility support'
              fill
              className='object-cover rounded bg-[var(--color-off-white)] mb-3'
            />
            <h3 className='heading-3 mb-2'>Rehabilitation</h3>
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
            className='card p-6 rounded-lg shadow text-center'
          >
            <SparklesIcon className='w-10 h-10 text-[var(--color-earth-brown)] mx-auto mb-3' />
            <Image
              src='/images/sustainability.jpg'
              alt='Sustainability initiatives at the home'
              fill
              className='object-cover rounded bg-[var(--color-off-white)] mb-3'
            />
            <h3 className='heading-3 mb-2'>Sustainability</h3>
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
            className='card p-6 rounded-lg shadow text-center'
          >
            <HomeModernIcon className='w-10 h-10 text-[var(--color-earth-brown)] mx-auto mb-3' />
            <Image
              src='/images/facilities.jpg'
              alt='Comfortable living facilities and communal spaces'
              fill
              className='object-cover rounded bg-[var(--color-off-white)] mb-3'
            />
            <h3 className='heading-3 mb-2'>Facilities</h3>
            <p className='body-text'>
              Comfortable spaces and amenities designed for community and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
