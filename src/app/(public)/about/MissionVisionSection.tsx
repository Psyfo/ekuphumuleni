'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';

import {
  CheckCircleIcon,
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function MissionVisionSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      id='mission-vision'
      aria-label='Mission, Vision and Core Values'
      className='py-16 px-4 bg-[var(--color-off-white)]'
    >
      <motion.div
        className='max-w-6xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={item} className='heading-2 text-center mb-10'>
          Mission, Vision &amp; Core Values
        </motion.h2>

        <div className='grid gap-10 md:grid-cols-2 items-start'>
          {/* Mission + Vision (right column visually, first in DOM for correct reading order) */}
          <motion.div variants={item} className='space-y-6 md:order-1'>
            {/* Mission */}
            <div className='card rounded-lg p-6 shadow'>
              <div className='flex items-start gap-3 mb-3'>
                <HeartIcon
                  className='w-7 h-7 text-[var(--color-earth-brown)]'
                  aria-hidden='true'
                />
                <h3 className='heading-3'>Our Mission</h3>
              </div>
              <p className='body-text mb-3'>
                Ekuphumuleni Geriatric Nursing Home strives to deliver
                high‑quality geriatric nursing care and cost‑effective medical
                and non‑medical support that meets the diverse needs of
                individuals and families.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-start gap-2'>
                  <CheckCircleIcon
                    className='w-5 h-5 mt-0.5 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text'>
                    High‑quality, professional geriatric nursing.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircleIcon
                    className='w-5 h-5 mt-0.5 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text'>
                    Cost‑effective medical and non‑medical care.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircleIcon
                    className='w-5 h-5 mt-0.5 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text'>
                    Support tailored to individuals and families.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className='card rounded-lg p-6 shadow'>
              <div className='flex items-start gap-3 mb-3'>
                <EyeIcon
                  className='w-7 h-7 text-[var(--color-earth-brown)]'
                  aria-hidden='true'
                />
                <h3 className='heading-3'>Our Vision</h3>
              </div>
              <p className='body-text'>
                To be the best provider of geriatric nursing services in the
                country.
              </p>
            </div>
          </motion.div>

          {/* Core Values (left column visually, second in DOM) */}
          <motion.div variants={item} className='md:order-2'>
            <div className='card rounded-lg p-6 shadow'>
              <h3 className='heading-3 mb-4'>Core Values</h3>
              <ul className='grid sm:grid-cols-2 gap-3'>
                <li className='surface rounded-md p-3 flex items-center gap-3'>
                  <HeartIcon
                    className='w-6 h-6 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text font-semibold'>Compassion</span>
                </li>
                <li className='surface rounded-md p-3 flex items-center gap-3'>
                  <ShieldCheckIcon
                    className='w-6 h-6 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text font-semibold'>Integrity</span>
                </li>
                <li className='surface rounded-md p-3 flex items-center gap-3'>
                  <LockClosedIcon
                    className='w-6 h-6 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text font-semibold'>
                    Confidentiality
                  </span>
                </li>
                <li className='surface rounded-md p-3 flex items-center gap-3'>
                  <HandThumbUpIcon
                    className='w-6 h-6 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text font-semibold'>Trust</span>
                </li>
                <li className='surface rounded-md p-3 flex items-center gap-3 sm:col-span-2'>
                  <UserGroupIcon
                    className='w-6 h-6 text-[var(--color-earth-brown)]'
                    aria-hidden='true'
                  />
                  <span className='body-text font-semibold'>Team Work</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
