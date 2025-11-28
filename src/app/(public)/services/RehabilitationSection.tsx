'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function RehabilitationSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id='rehabilitation'
      aria-label='Rehabilitation and Wellness'
      className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20 lg:py-24'
    >
      <motion.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Rehabilitation & Wellness Programs
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Personalized therapy and wellness activities designed to maintain
            mobility, strength, and independence while enhancing overall quality
            of life
          </p>
        </motion.div>

        {/* Main Content with Image */}
        <div className='items-center gap-8 lg:gap-12 grid lg:grid-cols-2 mb-12'>
          <motion.div variants={item} className='lg:order-2'>
            <div className='relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
              <div className='relative aspect-[3/4]'>
                <Image
                  src='/images/services/nursing/100_5556.JPG'
                  alt='Rehabilitation and therapeutic activities'
                  fill
                  sizes='(min-width:1024px) 50vw, 100vw'
                  className='object-cover'
                  unoptimized
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className='hidden lg:block -bottom-4 -left-4 -z-10 absolute bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl w-32 h-32' />
          </motion.div>

          <motion.div variants={item} className='lg:order-1'>
            <h3 className='mb-6 !text-2xl heading-3'>
              Empowering Recovery & Independence
            </h3>
            <p className='mb-6 leading-relaxed body-text'>
              Our comprehensive rehabilitation programs combine physical
              therapy, occupational therapy, and wellness activities to help
              residents regain or maintain their independence. Each program is
              carefully designed to meet individual needs and abilities.
            </p>

            <div className='space-y-4'>
              <div className='bg-white shadow-warm p-5 border border-subtle rounded-xl'>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Physical Therapy
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                  Targeted exercises and techniques to improve mobility,
                  balance, and strength under expert supervision.
                </p>
              </div>

              <div className='bg-white shadow-warm p-5 border border-subtle rounded-xl'>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Occupational Therapy
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                  Training and adaptive techniques to enhance daily living
                  skills and maintain independence.
                </p>
              </div>

              <div className='bg-white shadow-warm p-5 border border-subtle rounded-xl'>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Wellness Activities
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                  Engaging programs including group exercises, recreational
                  activities, and social gatherings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className='gap-6 grid sm:grid-cols-3'>
          <motion.div
            variants={item}
            className='group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
          >
            <div className='relative aspect-square'>
              <Image
                src='/images/services/nursing/100_5564.JPG'
                alt='Personalized therapy sessions'
                fill
                sizes='(min-width:640px) 33vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
          >
            <div className='relative aspect-square'>
              <Image
                src='/images/patients/patients_01.webp'
                alt='Group wellness activities'
                fill
                sizes='(min-width:640px) 33vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
          >
            <div className='relative aspect-square'>
              <Image
                src='/images/patients/patients_02.webp'
                alt='Therapeutic recreation programs'
                fill
                sizes='(min-width:640px) 33vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
