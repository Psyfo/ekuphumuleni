'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function NursingCare() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='nursing-care'
      className='bg-[var(--color-off-white)] px-4 py-16'
      aria-label='Nursing Care'
    >
      <motion.div
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='!mb-12 text-center heading-2'>
          Nursing Care & Rehabilitation
        </motion.h1>

        {/* Hero Section - Full Width Feature Image */}
        <motion.div
          variants={item}
          className='relative bg-[var(--color-warm-beige)] shadow-lg mb-12 rounded-lg w-full aspect-[21/15] md:aspect-[16/9] overflow-hidden'
        >
          <Image
            src='/images/services/nursing/100_5427.JPG'
            alt='Professional nursing care at Ekuphumuleni'
            fill
            sizes='100vw'
            className='object-cover'
            priority
            unoptimized
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.div variants={item} className='mx-auto mb-16 max-w-4xl'>
          <h2 className='mb-4 text-center heading-3'>Compassionate, Professional Care</h2>
          <p className='mb-4 text-center body-text'>
            Our nursing team provides round-the-clock, individualized care for
            every resident. We focus on comfort, dignity, and holistic
            well-being, ensuring each person receives the medical and personal
            support they need.
          </p>
          <ul className='space-y-2 mx-auto pl-5 max-w-2xl list-disc body-text'>
            <li>24/7 skilled nursing supervision</li>
            <li>Medication management and administration</li>
            <li>Assistance with daily living activities</li>
            <li>Wound care and rehabilitation support</li>
            <li>Coordination with doctors and families</li>
          </ul>
        </motion.div>

        {/* Two Column Grid - Equal Height Images */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mb-16'>
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg aspect-[4/5] overflow-hidden'
          >
            <Image
              src='/images/services/nursing/100_5440.JPG'
              alt='Nursing staff providing care'
              fill
              sizes='(min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
          </motion.div>
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg aspect-[4/5] overflow-hidden'
          >
            <Image
              src='/images/services/nursing/100_5551.JPG'
              alt='Patient care and comfort'
              fill
              sizes='(min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
          </motion.div>
        </div>

        {/* Asymmetric Grid - Featured Layout */}
        <div className='gap-6 grid grid-cols-1 lg:grid-cols-3 mb-16'>
          {/* Large Feature Image - Spans 2 columns, fit to height */}
          <motion.div
            variants={item}
            className='relative flex items-stretch lg:col-span-2 bg-[var(--color-warm-beige)] shadow-lg rounded-lg aspect-[16/10] overflow-hidden'
          >
            <Image
              src='/images/services/nursing/100_5556.JPG'
              alt='Comprehensive nursing care services'
              fill
              sizes='(min-width:1024px) 66vw, 100vw'
              className='h-full object-center object-cover'
              style={{ objectFit: 'cover', objectPosition: 'center', height: '100%' }}
              unoptimized
            />
          </motion.div>

          {/* Portrait Image Stack */}
          <div className='flex flex-col gap-6 h-full'>
            <motion.div
              variants={item}
              className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg h-full aspect-auto overflow-x-visible overflow-y-hidden'
              style={{ minHeight: 0 }}
            >
              <Image
                src='/images/services/nursing/100_5564.JPG'
                alt='Personalized care approach'
                fill
                sizes='(min-width:1024px) 33vw, 100vw'
                className='object-cover'
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Rehabilitation Section Header */}
        <motion.div variants={item} className='mx-auto mb-12 max-w-4xl'>
          <h2 className='mb-4 text-center heading-3'>Rehabilitation & Wellness</h2>
          <p className='text-center body-text'>
            We provide comprehensive rehabilitation support to help residents
            maintain or regain independence, mobility, and quality of life through
            personalized therapy programs and activities.
          </p>
        </motion.div>

        {/* Three Column Equal Grid */}
        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16'>
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg aspect-square overflow-hidden'
          >
            <Image
              src='/images/services/nursing/100_5582.JPG'
              alt='Rehabilitation activities'
              fill
              sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
          </motion.div>
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg aspect-square overflow-hidden'
          >
            <Image
              src='/images/patients/patients_01.webp'
              alt='Therapeutic care'
              fill
              sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
          </motion.div>
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow-md rounded-lg aspect-square overflow-hidden'
          >
            <Image
              src='/images/patients/patients_02.webp'
              alt='Wellness programs'
              fill
              sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
          </motion.div>
        </div>

        {/* Final Wide Banner Spread */}
        <motion.div
          variants={item}
          className='relative bg-[var(--color-warm-beige)] shadow-lg rounded-lg w-full aspect-[21/9] overflow-hidden'
        >
          <Image
            src='/images/patients/patients_03.webp'
            alt='Community and compassionate care at Ekuphumuleni'
            fill
            sizes='100vw'
            className='object-cover'
            unoptimized
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
