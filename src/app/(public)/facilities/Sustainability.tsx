'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Sustainability() {
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
      id='sustainability'
      className='bg-[var(--color-off-white)] px-4 py-16 min-h-[70vh]'
      aria-label='Sustainability'
    >
      <motion.div
        className='mx-auto max-w-5xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='mb-8 text-center heading-2'>
          Sustainability at Ekuphumuleni
        </motion.h1>
        <motion.p
          variants={item}
          className='mx-auto mb-12 max-w-2xl text-center body-text'
        >
          We are committed to sustainable practices that benefit our residents,
          our community, and the environment. Our initiatives include renewable
          energy, water conservation, and food security through our own
          vegetable gardens.
        </motion.p>

        <div className='items-start gap-10 grid md:grid-cols-2'>
          {/* Solar Panel Image */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities_07.webp'
              alt='Solar panels at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Solar panels powering our home
            </div>
          </motion.div>

          {/* Vegetable Garden Image */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/sustainability/garden.jpg'
              alt='Vegetable garden at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Fresh produce from our vegetable garden
            </div>
          </motion.div>
        </div>

        <div className='items-start gap-10 grid md:grid-cols-2 mt-8'>
          {/* Water Storage Tanks Image */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities_01.webp'
              alt='Water storage tanks at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Water tanks for efficient storage
            </div>
          </motion.div>

          {/* Solar Geysers Image */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities_08.webp'
              alt='Solar geysers at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Solar geysers providing hot water sustainably
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className='mx-auto mt-12 max-w-3xl'>
          <h2 className='mb-3 text-center heading-3'>
            Our Sustainability Efforts
          </h2>
          <ul className='space-y-2 pl-6 list-disc body-text'>
            <li>
              <strong>Solar Energy:</strong> We use solar panels to reduce our
              reliance on the grid and ensure a reliable, eco-friendly power
              supply for our residents.
            </li>
            <li>
              <strong>Vegetable Gardens:</strong> Our gardens provide fresh,
              nutritious produce for our kitchen, promote food security, and
              offer therapeutic activities for residents.
            </li>
            <li>
              <strong>Water Conservation:</strong> Rainwater harvesting and
              efficient irrigation help us use water wisely.
            </li>
            <li>
              <strong>Community Engagement:</strong> We involve residents and
              local partners in sustainability projects, fostering a sense of
              purpose and connection.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
