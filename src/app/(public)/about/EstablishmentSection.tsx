'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function EstablishmentSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
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
      id='establishment'
      aria-label='Establishment of Ekuphumuleni'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
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
            Our Establishment
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            A journey that began with vision and dedication in 1983
          </p>
        </motion.div>

        <div className='items-center gap-12 lg:gap-16 grid lg:grid-cols-2 mb-20'>
          {/* Founder image */}
          <motion.div variants={item} className='lg:order-1'>
            <div className='group relative'>
              {/* Decorative border effect */}
              <div className='absolute -inset-3 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 blur-sm group-hover:blur-md rounded-2xl transition-all duration-300' />
              <div className='relative border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
                <div className='relative bg-gradient-to-br from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] pt-[125%] w-full'>
                  <Image
                    src='/images/founder_01.jpg'
                    alt='Founder Polyanna Mahlangu'
                    fill
                    sizes='(min-width:1024px) 520px, (min-width:768px) 50vw, 100vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <motion.div
              variants={item}
              className='bg-white/60 shadow-warm backdrop-blur-sm mt-4 p-4 rounded-lg text-center'
            >
              <p className='font-semibold text-[var(--color-deep-cocoa)] text-lg'>
                Polyanna Mahlangu
              </p>
              <p className='text-[var(--color-deep-cocoa)]/70 text-sm'>
                Founder & Visionary
              </p>
            </motion.div>
          </motion.div>

          {/* Origins narrative */}
          <motion.div variants={item} className='lg:order-2'>
            <div className='space-y-6'>
              <div>
                <h3 className='mb-4 !text-2xl heading-3'>
                  Origins and Purpose
                </h3>
                <div className='bg-[var(--color-muted-terracotta)] mb-4 rounded-full w-12 h-1' />
                <p className='mb-4 leading-relaxed body-text'>
                  The idea of Ekuphumuleni Geriatric Nursing Home originated
                  with Polyanna Mahlangu while she was a nursing sister at Mpilo
                  General Hospital. She first discussed the vision with
                  colleagues in 1978, seeking a compassionate place of rest and
                  recovery for older adults.
                </p>
                <p className='leading-relaxed body-text'>
                  Ekuphumuleni opened at Vundu Clinic on{' '}
                  <strong>1 December 1983</strong>. By{' '}
                  <strong>19 December 1984</strong>, the executive committee
                  laid the foundation stone on a 1.57‑hectare piece of land
                  granted by the Bulawayo City Council.
                </p>
              </div>

              <div className='bg-gradient-to-br from-[var(--color-soft-sand)]/50 to-[var(--color-warm-beige)]/50 shadow-warm p-6 lg:p-8 border border-subtle rounded-xl'>
                <div className='flex items-start gap-3 mb-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-10 h-10'>
                    <svg
                      className='w-5 h-5 text-[var(--color-muted-terracotta)]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='mb-2 font-semibold text-[var(--color-earth-brown)]'>
                      Official Registration
                    </h4>
                    <p className='!text-sm leading-relaxed body-text'>
                      Ekuphumuleni is a nonprofit, non‑governmental organization
                      registered under welfare societies as{' '}
                      <strong className='text-[var(--color-muted-terracotta)]'>
                        W/O 23/80
                      </strong>
                      . It is a convalescent home for elderly people discharged
                      from hospital who are not yet well enough to be cared for
                      in a family environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Families Choose Us */}
        <motion.div variants={item} className='mx-auto max-w-6xl'>
          <div className='bg-white shadow-warm-lg p-8 lg:p-12 border border-subtle rounded-2xl'>
            <div className='mb-10 text-center'>
              <h3 className='mb-4 !text-2xl heading-3'>
                Why Families Choose Ekuphumuleni
              </h3>
              <div className='bg-[var(--color-muted-terracotta)] mx-auto rounded-full w-16 h-1' />
            </div>

            <div className='gap-6 lg:gap-8 grid md:grid-cols-3'>
              <div className='group text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 !text-lg heading-3'>Professional Care</h4>
                <p className='!text-sm leading-relaxed body-text'>
                  Expert nursing care when loved ones need recovery and families
                  lack the resources or knowledge to provide it at home
                </p>
              </div>

              <div className='group text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 !text-lg heading-3'>Warm Environment</h4>
                <p className='!text-sm leading-relaxed body-text'>
                  A culturally sensitive environment focused on dignity, rest,
                  and rehabilitation in a family-like atmosphere
                </p>
              </div>

              <div className='group text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <h4 className='mb-3 !text-lg heading-3'>
                  Personalized Service
                </h4>
                <p className='!text-sm leading-relaxed body-text'>
                  Innovative nursing services tailored to meet each
                  resident&apos;s unique needs with compassion and excellence
                </p>
              </div>
            </div>

            <div className='mt-10 pt-8 border-[var(--color-earth-brown)]/10 border-t'>
              <p className='mx-auto max-w-3xl text-center leading-relaxed body-text'>
                As an older persons&apos; nursing home, our chief concern is
                meeting residents&apos; needs through highly personalized,
                professional care—serving both the elderly and the wider
                community.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
