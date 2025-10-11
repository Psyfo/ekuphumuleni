/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-[var(--color-off-white)] px-4 py-16'
      aria-label='About Ekuphumuleni'
    >
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mb-10 text-center'
        >
          <h2 className='mb-3 heading-2'>About Ekuphumuleni</h2>
          <p className='body-text'>
            Ekuphumuleni means "place of rest", a sanctuary for elderly individuals requiring nursing care. Established in 1983 by Polyanna Mahlangu, it was founded to provide compassionate, professional care for older adults in a peaceful, dignified environment.
          </p>
        </motion.div>

        {/* Establishment */}
        <div className='items-start gap-8 grid md:grid-cols-2 mb-12'>
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
              className='bg-[var(--color-soft-sand)] shadow rounded-lg w-full h-64 object-cover'
              priority={false}
              unoptimized
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className='mb-2 heading-3'>Establishment</h3>
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
          className='gap-6 grid md:grid-cols-2'
        >
          <div className='shadow p-6 rounded-lg card'>
            <h3 className='mb-2 heading-3'>Mission</h3>
            <p className='body-text'>
              To create peaceful, nurturing environments where people find rest,
              healing, and restoration in body and spirit.
            </p>
          </div>
          <div className='shadow p-6 rounded-lg card'>
            <h3 className='mb-2 heading-3'>Vision</h3>
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
          <h3 className='mb-4 heading-3'>Core Values</h3>
          <ul className='gap-3 grid sm:grid-cols-2'>
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
