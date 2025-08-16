'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='py-16 px-4 bg-[var(--color-off-white)]'
      aria-label='About Ekuphumuleni'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='text-center mb-10'
        >
          <h2 className='heading-2 mb-3'>About Ekuphumuleni</h2>
          <p className='body-text'>
            Ekuphumuleni means “place of rest” — a sanctuary where elders find
            comfort, healing, and dignity. We nurture body and spirit in a
            peaceful, supportive community.
          </p>
        </motion.div>

        {/* Establishment */}
        <div className='grid gap-8 md:grid-cols-2 items-start mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className='w-full'
          >
            <Image
              src='/images/building/building_01.webp'
              alt='Historic exterior of Ekuphumuleni nursing home'
              width={800}
              height={400}
              className='w-full h-64 object-cover rounded-lg shadow bg-[var(--color-soft-sand)]'
              priority={false}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className='heading-3 mb-2'>Establishment</h3>
            <p className='body-text'>
              Founded to provide dependable, compassionate care, our home blends
              professional excellence with a warm, family-like environment.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className='grid gap-6 md:grid-cols-2'
        >
          <div className='card p-6 rounded-lg shadow'>
            <h3 className='heading-3 mb-2'>Mission</h3>
            <p className='body-text'>
              To create peaceful, nurturing environments where people find rest,
              healing, and restoration in body and spirit.
            </p>
          </div>
          <div className='card p-6 rounded-lg shadow'>
            <h3 className='heading-3 mb-2'>Vision</h3>
            <p className='body-text'>
              A community where elders thrive with dignity, safety, and joy
              through compassionate, culturally sensitive care.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className='mt-12'
        >
          <h3 className='heading-3 mb-4'>Core Values</h3>
          <ul className='grid gap-3 sm:grid-cols-2'>
            <li className='body-text'>Compassion</li>
            <li className='body-text'>Tranquility</li>
            <li className='body-text'>Reliability</li>
            <li className='body-text'>Cultural Sensitivity</li>
            <li className='body-text'>Excellence</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
