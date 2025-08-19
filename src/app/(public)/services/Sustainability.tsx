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
      className='py-16 px-4 bg-[var(--color-off-white)] min-h-[70vh]'
      aria-label='Sustainability'
    >
      <motion.div
        className='max-w-5xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='heading-2 text-center mb-8'>
          Sustainability at Ekuphumuleni
        </motion.h1>
        <motion.p
          variants={item}
          className='body-text text-center mb-12 max-w-2xl mx-auto'
        >
          We are committed to sustainable practices that benefit our residents,
          our community, and the environment. Our initiatives include renewable
          energy, water conservation, and food security through our own
          vegetable gardens.
        </motion.p>

        <div className='grid gap-10 md:grid-cols-2 items-start'>
          {/* Solar Panel Image */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_07.webp'
              alt='Solar panels at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Solar panels powering our home
            </div>
          </motion.div>

          {/* Vegetable Garden Image */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_04.webp'
              alt='Vegetable garden at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Fresh produce from our vegetable garden
            </div>
          </motion.div>
        </div>

        <div className='grid gap-10 md:grid-cols-2 items-start mt-8'>
          {/* Water Storage Tanks Image */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_01.webp'
              alt='Water storage tanks at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Water tanks for efficient storage
            </div>
          </motion.div>

          {/* Solar Geysers Image */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_08.webp'
              alt='Solar geysers at Ekuphumuleni'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Solar geysers providing hot water sustainably
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className='mt-12 max-w-3xl mx-auto'>
          <h2 className='heading-3 mb-3 text-center'>
            Our Sustainability Efforts
          </h2>
          <ul className='list-disc pl-6 space-y-2 body-text'>
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
