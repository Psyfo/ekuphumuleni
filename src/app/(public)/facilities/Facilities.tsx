'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Facilities() {
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
      id='facilities'
      className='bg-[var(--color-off-white)] px-4 py-16 min-h-[70vh]'
      aria-label='Facilities'
    >
      <motion.div
        className='mx-auto max-w-5xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='mb-8 text-center heading-2'>
          Comfortable Spaces &amp; Amenities
        </motion.h1>
        <motion.p
          variants={item}
          className='mx-auto mb-12 max-w-2xl text-center body-text'
        >
          Ekuphumuleni offers a welcoming environment with thoughtfully designed
          spaces and amenities to support comfort, dignity, and a sense of
          community for all residents.
        </motion.p>

        <div className='items-start gap-10 grid md:grid-cols-2'>
          {/* Lounge / Common Area */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities_10.webp'
              alt='Spacious lounge area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Spacious lounge for relaxation and socializing
            </div>
          </motion.div>

          {/* Laundry Facilities */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities/laundry.jpg'
              alt='Dining area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Bulk laundry facilities for residents
            </div>
          </motion.div>
        </div>

        <div className='items-start gap-10 grid md:grid-cols-2 mt-12'>
          {/* Bedroom */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/facilities/facilities_09.webp'
              alt='Resident bedroom'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Comfortable, private bedrooms
            </div>
          </motion.div>

          {/* Garden / Outdoor Area */}
          <motion.div
            variants={item}
            className='relative bg-[var(--color-warm-beige)] shadow pt-[66%] rounded-lg w-full min-h-[180px] overflow-hidden'
          >
            <Image
              src='/images/building/building_02.webp'
              alt='Outdoor garden area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='right-0 bottom-0 left-0 absolute bg-black/40 py-2 font-semibold text-white text-sm text-center'>
              Tranquil gardens for fresh air and activity
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className='mx-auto mt-12 max-w-3xl'>
          <h2 className='mb-3 text-center heading-3'>
            Amenities &amp; Features
          </h2>
          <ul className='space-y-2 pl-6 list-disc body-text'>
            <li>Spacious lounges and communal areas</li>
            <li>Accessible dining rooms and nutritious meals</li>
            <li>Comfortable, private or shared bedrooms</li>
            <li>Beautiful gardens and outdoor seating</li>
            <li>On-site laundry and bathing facilities</li>
            <li>24/7 security and support staff</li>
            <li>Activity rooms for recreation and therapy</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
