//// filepath: c:\dev\ekuphumuleni\src\app\(public)\about\EstablishmentSection.tsx
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
          Establishment
        </motion.h2>

        <div className='grid gap-10 md:grid-cols-2 items-start'>
          {/* Founder image placeholder (4:5 portrait). Replace src with your real image when ready */}
          <motion.div variants={item} className='md:order-1'>
            <div className='relative w-full pt-[125%] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'>
              <Image
                src='/images/founder_01.jpg'
                alt='Founder Polyanna Mahlangu'
                fill
                sizes='(min-width:1024px) 520px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                priority={false}
              />
            </div>
            <p className='caption mt-2 text-center text-[var(--color-deep-cocoa)]/80'>
              Founder: Polyanna Mahlangu
            </p>
          </motion.div>

          {/* Narrative */}
          <motion.div variants={item}>
            <h3 className='heading-3 mb-3'>Origins and Purpose</h3>
            <p className='body-text mb-3'>
              The idea of Ekuphumuleni Geriatric Nursing Home originated with
              Polyanna Mahlangu while she was a nursing sister at Mpilo General
              Hospital. She first discussed the vision with colleagues in 1978,
              seeking a compassionate place of rest and recovery for older
              adults.
            </p>
            <p className='body-text mb-3'>
              Ekuphumuleni opened at Vundu Clinic on 1 December 1983. By 19
              December 1984, the executive committee laid the foundation stone
              on a 1.57‑hectare piece of land granted by the Bulawayo City
              Council.
            </p>
            <div className='surface rounded-lg p-4 mb-4'>
              <p className='body-text'>
                Ekuphumuleni is a nonprofit, non‑governmental organization
                registered under welfare societies as{' '}
                <strong>W/O 23/80.</strong> It is a convalescent home for
                elderly people discharged from hospital who are not yet well
                enough to be cared for in a family environment.
              </p>
            </div>
            <h4 className='heading-3 mb-2'>Why Families Choose Ekuphumuleni</h4>
            <ul className='list-disc pl-5 space-y-2 body-text'>
              <li>
                Professional nursing care when loved ones need recovery and
                families lack the resources or knowledge to provide it at home.
              </li>
              <li>
                A warm, culturally sensitive environment focused on dignity,
                rest, and rehabilitation.
              </li>
              <li>
                Personalized and innovative nursing services that meet each
                resident’s unique needs.
              </li>
            </ul>
            <p className='body-text mt-4'>
              As an older persons’ nursing home, our chief concern is meeting
              residents’ needs through highly personalized, professional
              care—serving both the elderly and the wider community.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
