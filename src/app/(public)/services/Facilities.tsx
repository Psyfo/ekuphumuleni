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
      className='py-16 px-4 bg-[var(--color-off-white)] min-h-[70vh]'
      aria-label='Facilities'
    >
      <motion.div
        className='max-w-5xl mx-auto'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={item} className='heading-2 text-center mb-8'>
          Comfortable Spaces &amp; Amenities
        </motion.h1>
        <motion.p
          variants={item}
          className='body-text text-center mb-12 max-w-2xl mx-auto'
        >
          Ekuphumuleni offers a welcoming environment with thoughtfully designed
          spaces and amenities to support comfort, dignity, and a sense of
          community for all residents.
        </motion.p>

        <div className='grid gap-10 md:grid-cols-2 items-start'>
          {/* Lounge / Common Area */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_10.webp'
              alt='Spacious lounge area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Spacious lounge for relaxation and socializing
            </div>
          </motion.div>

          {/* Laundry Facilities */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_12.webp'
              alt='Dining area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Bulk laundry facilities for residents
            </div>
          </motion.div>
        </div>

        <div className='grid gap-10 md:grid-cols-2 items-start mt-12'>
          {/* Bedroom */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/facilities/facilities_09.webp'
              alt='Resident bedroom'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Comfortable, private bedrooms
            </div>
          </motion.div>

          {/* Garden / Outdoor Area */}
          <motion.div
            variants={item}
            className='relative w-full pt-[66%] min-h-[180px] rounded-lg overflow-hidden shadow bg-[var(--color-warm-beige)]'
          >
            <Image
              src='/images/building/building_02.webp'
              alt='Outdoor garden area'
              fill
              sizes='(min-width:1024px) 480px, (min-width:768px) 50vw, 100vw'
              className='object-cover'
              unoptimized
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-semibold'>
              Tranquil gardens for fresh air and activity
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className='mt-12 max-w-3xl mx-auto'>
          <h2 className='heading-3 mb-3 text-center'>
            Amenities &amp; Features
          </h2>
          <ul className='list-disc pl-6 space-y-2 body-text'>
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
