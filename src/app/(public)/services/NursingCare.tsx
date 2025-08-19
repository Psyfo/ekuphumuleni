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
      className='py-16 px-4 bg-[var(--color-off-white)] min-h-[70vh]'
      aria-label='Nursing Care'
    >
      <motion.div
        className='max-w-5xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='heading-2 text-center !mb-8'>
          Nursing Care & Rehabilitation
        </motion.h1>
        <div className='grid gap-10 md:grid-cols-2 items-start'>
          {/* Image placeholder 1 */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)] mb-4'
          >
            <Image
              src='/images/staff/staff_20.webp'
              alt='Nursing care in action'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              style={{ opacity: 1 }}
              unoptimized
            />
          </motion.div>

          {/* Description */}
          <motion.div variants={item}>
            <h2 className='heading-3 mb-3'>Compassionate, Professional Care</h2>
            <p className='body-text mb-3'>
              Our nursing team provides round-the-clock, individualized care for
              every resident. We focus on comfort, dignity, and holistic
              well-being, ensuring each person receives the medical and personal
              support they need.
            </p>
            <ul className='list-disc pl-5 space-y-2 body-text'>
              <li>24/7 skilled nursing supervision</li>
              <li>Medication management and administration</li>
              <li>Assistance with daily living activities</li>
              <li>Wound care and rehabilitation support</li>
              <li>Coordination with doctors and families</li>
            </ul>
          </motion.div>
        </div>

        {/* Image placeholder 2 */}
        <motion.div
          variants={item}
          className='relative w-full max-w-4xl mx-auto mt-12 aspect-[4/3] md:aspect-[16/9] min-h-[120px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
        >
          <Image
            src='/images/staff/staff_21.webp'
            alt='Nursing staff with residents'
            fill
            sizes='(min-width:1024px) 640px, 100vw'
            className='object-cover'
            style={{ opacity: 1 }}
            unoptimized
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
