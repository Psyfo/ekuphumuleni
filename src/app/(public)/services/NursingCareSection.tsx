'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  ClockIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const NURSING_FEATURES: Feature[] = [
  {
    icon: ClockIcon,
    title: 'Round-the-Clock Care',
    description:
      'Our dedicated nursing staff provides 24/7 supervision, ensuring immediate response to any medical need or emergency.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Professional Excellence',
    description:
      'Highly trained registered nurses and healthcare professionals committed to maintaining the highest standards of care.',
  },
  {
    icon: HeartIcon,
    title: 'Compassionate Approach',
    description:
      'Every interaction is grounded in empathy, respect, and genuine concern for the wellbeing of our residents.',
  },
  {
    icon: UserGroupIcon,
    title: 'Individualized Plans',
    description:
      'Customized care plans tailored to each resident&apos;s unique medical history, needs, and personal preferences.',
  },
];

export default function NursingCareSection() {
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
      id='nursing-care'
      aria-label='Professional Nursing Care'
      className='bg-gradient-to-b from-[var(--color-soft-sand)]/30 to-white px-4 py-20 lg:py-24'
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
            Professional Nursing Care
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Our expert nursing team delivers compassionate, evidence-based care
            designed to support health, dignity, and independence
          </p>
        </motion.div>

        {/* Feature Image with Overlapping Content */}
        <div className='items-center gap-8 lg:gap-12 grid lg:grid-cols-2 mb-16'>
          <motion.div variants={item} className='relative'>
            <div className='relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
              <div className='relative aspect-[4/3]'>
                <Image
                  src='/images/services/nursing/100_5427.JPG'
                  alt='Professional nursing care at Ekuphumuleni'
                  fill
                  sizes='(min-width:1024px) 50vw, 100vw'
                  className='object-cover'
                  priority
                  unoptimized
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className='-right-4 -bottom-4 -z-10 absolute bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl w-32 h-32' />
          </motion.div>

          <motion.div variants={item}>
            <h3 className='mb-6 !text-2xl heading-3'>
              Dedicated to Your Wellbeing
            </h3>
            <p className='mb-6 leading-relaxed body-text'>
              Our nursing team provides comprehensive medical care and personal
              support, ensuring every resident receives the attention and
              expertise they deserve. From medication management to wound care,
              we handle all aspects of geriatric nursing with professionalism
              and compassion.
            </p>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6'>
                  <svg
                    className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='!text-sm body-text'>
                  Skilled medication administration and monitoring
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6'>
                  <svg
                    className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='!text-sm body-text'>
                  Wound care and post-surgical recovery support
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6'>
                  <svg
                    className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='!text-sm body-text'>
                  Vital signs monitoring and health assessments
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6'>
                  <svg
                    className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='!text-sm body-text'>
                  Coordination with physicians and healthcare providers
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4 mb-16'>
          {NURSING_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className='bg-white shadow-warm hover:shadow-warm-lg p-6 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
            >
              <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12'>
                <feature.icon
                  className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                  aria-hidden='true'
                />
              </div>
              <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)] text-base'>
                {feature.title}
              </h4>
              <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
          <motion.div
            variants={item}
            className='group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
          >
            <div className='relative aspect-square'>
              <Image
                src='/images/services/nursing/100_5440.JPG'
                alt='Nursing staff providing personalized care'
                fill
                sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
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
                src='/images/services/nursing/100_5551.JPG'
                alt='Compassionate patient care and comfort'
                fill
                sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className='group relative sm:col-span-2 lg:col-span-1 shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
          >
            <div className='relative aspect-square'>
              <Image
                src='/images/services/nursing/100_5582.JPG'
                alt='Rehabilitation and wellness activities'
                fill
                sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
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
