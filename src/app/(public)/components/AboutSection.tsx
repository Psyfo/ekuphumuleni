/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
      aria-label='About Ekuphumuleni'
    >
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            About Ekuphumuleni
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Ekuphumuleni means "place of rest", a sanctuary for elderly
            individuals requiring nursing care. Established in 1983 by Polyanna
            Mahlangu, it was founded to provide compassionate, professional care
            for older adults in a peaceful, dignified environment.
          </p>
        </motion.div>

        {/* Establishment */}
        <div className='items-center gap-10 lg:gap-16 grid md:grid-cols-2 mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='order-2 md:order-1 w-full'
          >
            <div className='group relative'>
              {/* Decorative border effect */}
              <div className='absolute -inset-2 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 blur-sm group-hover:blur-md rounded-xl transition-all duration-300' />
              <div className='relative border-[var(--color-earth-brown)]/10 border-2 rounded-xl overflow-hidden'>
                <Image
                  src='/images/building/building_01.webp'
                  alt='Historic exterior of Ekuphumuleni nursing home'
                  width={800}
                  height={600}
                  className='w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500'
                  priority={false}
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='order-1 md:order-2'
          >
            <h3 className='mb-4 !text-2xl heading-3'>Our Establishment</h3>
            <div className='bg-[var(--color-muted-terracotta)] mb-4 rounded-full w-12 h-1' />
            <p className='!text-base leading-relaxed body-text'>
              Founded to provide dependable, compassionate care, our home blends
              professional excellence with a warm, family-like environment. Over
              four decades, we have remained committed to honoring the dignity
              and individuality of every resident.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='gap-6 lg:gap-8 grid md:grid-cols-2 mb-16'
        >
          <div className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'>
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <svg
                className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='mb-3 !text-xl heading-3'>Our Mission</h3>
            <p className='leading-relaxed body-text'>
              To create peaceful, nurturing environments where people find rest,
              healing, and restoration in body and spirit.
            </p>
          </div>
          <div className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'>
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <svg
                className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            </div>
            <h3 className='mb-3 !text-xl heading-3'>Our Vision</h3>
            <p className='leading-relaxed body-text'>
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
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='bg-gradient-to-br from-[var(--color-soft-sand)]/50 to-[var(--color-warm-beige)]/50 p-8 lg:p-12 border border-subtle rounded-2xl'
        >
          <h3 className='mb-6 !text-2xl text-center heading-3'>
            Our Core Values
          </h3>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-16 h-1' />
          <ul className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl'>
            {[
              'Compassion',
              'Tranquility',
              'Reliability',
              'Cultural Sensitivity',
              'Excellence',
            ].map((value, index) => (
              <motion.li
                key={value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='flex items-center gap-3 bg-white/60 shadow-warm hover:shadow-warm-lg backdrop-blur-sm px-4 py-3 rounded-lg transition-all hover:-translate-y-0.5 duration-300'
              >
                <div className='flex-shrink-0 bg-[var(--color-muted-terracotta)] rounded-full w-2 h-2' />
                <span className='font-semibold !text-[var(--color-deep-cocoa)] body-text'>
                  {value}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
