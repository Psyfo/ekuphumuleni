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
      className='bg-gradient-to-b from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] px-4 py-20 lg:py-24'
    >
      <motion.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Mission, Vision &amp; Core Values
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Guided by a clear mandate, focused on quality, and accountable for
            outcomes
          </p>
        </motion.div>

        <div className='items-start gap-8 lg:gap-10 grid lg:grid-cols-2 mb-12'>
          {/* Mission */}
          <motion.div variants={item}>
            <div className='bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-2xl h-full transition-all hover:-translate-y-1 duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-xl w-14 h-14'>
                  <HeartIcon
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='!text-2xl heading-3'>Our Mission</h3>
              </div>
              <p className='mb-6 leading-relaxed body-text'>
                Ekuphumuleni Geriatric Nursing Home strives to deliver
                high‑quality geriatric nursing care and cost‑effective medical
                and non‑medical support that meets the diverse needs of
                individuals and families.
              </p>
              <ul className='space-y-3'>
                <li className='group flex items-start gap-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6 group-hover:scale-110 transition-transform duration-300'>
                    <CheckCircleIcon
                      className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>
                  <span className='!text-sm body-text'>
                    High‑quality, professional geriatric nursing.
                  </span>
                </li>
                <li className='group flex items-start gap-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6 group-hover:scale-110 transition-transform duration-300'>
                    <CheckCircleIcon
                      className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>
                  <span className='!text-sm body-text'>
                    Cost‑effective medical and non‑medical care.
                  </span>
                </li>
                <li className='group flex items-start gap-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6 group-hover:scale-110 transition-transform duration-300'>
                    <CheckCircleIcon
                      className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>
                  <span className='!text-sm body-text'>
                    Support tailored to individuals and families.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={item}>
            <div className='flex flex-col bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-2xl h-full transition-all hover:-translate-y-1 duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-xl w-14 h-14'>
                  <EyeIcon
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='!text-2xl heading-3'>Our Vision</h3>
              </div>
              <p className='flex-grow leading-relaxed body-text'>
                To be the best provider of geriatric nursing services in the
                country.
              </p>
              <div className='mt-6 pt-6 border-[var(--color-earth-brown)]/10 border-t'>
                <p className='text-[var(--color-deep-cocoa)]/70 !text-sm italic body-text'>
                  We envision a future where every older person who needs our
                  services receives consistent, appropriate care that protects
                  their dignity and supports daily living.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div variants={item}>
          <div className='bg-white shadow-warm-lg p-8 lg:p-12 border border-subtle rounded-2xl'>
            <div className='mb-10 text-center'>
              <h3 className='mb-4 !text-2xl heading-3'>Core Values</h3>
              <div className='bg-[var(--color-muted-terracotta)] mx-auto rounded-full w-16 h-1' />
            </div>
            <div className='gap-4 lg:gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
              <div className='group flex items-center gap-4 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                  <HeartIcon
                    className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <span className='font-semibold body-text'>Compassion</span>
              </div>
              <div className='group flex items-center gap-4 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                  <ShieldCheckIcon
                    className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <span className='font-semibold body-text'>Integrity</span>
              </div>
              <div className='group flex items-center gap-4 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                  <LockClosedIcon
                    className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <span className='font-semibold body-text'>Confidentiality</span>
              </div>
              <div className='group flex items-center gap-4 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                  <HandThumbUpIcon
                    className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <span className='font-semibold body-text'>Trust</span>
              </div>
              <div className='group flex items-center gap-4 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                  <UserGroupIcon
                    className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <span className='font-semibold body-text'>Team Work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
