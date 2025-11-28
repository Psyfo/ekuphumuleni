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
      className='bg-[var(--color-off-white)] px-4 py-16'
    >
      <motion.div
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={item} className='mb-10 text-center heading-2'>
          Establishment
        </motion.h2>

        <div className='items-start gap-10 grid md:grid-cols-2'>
          {/* Founder image placeholder (4:5 portrait). Replace src with your real image when ready */}
          <motion.div variants={item} className='md:order-1'>
            <div className='relative bg-[var(--color-warm-beige)] shadow pt-[125%] rounded-lg w-full overflow-hidden'>
              <Image
                src='/images/founder_01.jpg'
                alt='Founder Polyanna Mahlangu'
                fill
                sizes='(min-width:1024px) 520px, (min-width:768px) 50vw, 100vw'
                className='object-cover'
                priority={false}
              />
            </div>
            <p className='mt-2 text-[var(--color-deep-cocoa)]/80 text-center caption'>
              Founder: Polyanna Mahlangu
            </p>
          </motion.div>

          {/* Narrative */}
          <motion.div variants={item}>
            <h3 className='mb-3 heading-3'>Origins and Purpose</h3>
            <p className='mb-3 body-text'>
              The idea of Ekuphumuleni Geriatric Nursing Home originated with
              Polyanna Mahlangu while she was a nursing sister at Mpilo General
              Hospital. She first discussed the vision with colleagues in 1978,
              seeking a compassionate place of rest and recovery for older
              adults.
            </p>
            <p className='mb-3 body-text'>
              Ekuphumuleni opened at Vundu Clinic on 1 December 1983. By 19
              December 1984, the executive committee laid the foundation stone
              on a 1.57‑hectare piece of land granted by the Bulawayo City
              Council.
            </p>
            <div className='mb-4 p-4 rounded-lg surface'>
              <p className='body-text'>
                Ekuphumuleni is a nonprofit, non‑governmental organization
                registered under welfare societies as{' '}
                <strong>W/O 23/80.</strong> It is a convalescent home for
                elderly people discharged from hospital who are not yet well
                enough to be cared for in a family environment.
              </p>
            </div>
            <h4 className='mb-2 heading-3'>Why Families Choose Ekuphumuleni</h4>
            <ul className='space-y-2 pl-5 list-disc body-text'>
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
            <p className='mt-4 body-text'>
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
