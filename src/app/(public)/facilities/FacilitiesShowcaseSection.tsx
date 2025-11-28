'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  HomeModernIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

type FacilityHighlight = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const FACILITIES: FacilityHighlight[] = [
  {
    title: 'Comfortable Living Spaces',
    description:
      'Well-appointed private and shared bedrooms designed for comfort, accessibility, and personal expression.',
    image: '/images/facilities/facilities_09.webp',
    alt: 'Comfortable resident bedroom with modern amenities',
  },
  {
    title: 'Spacious Lounges',
    description:
      'Bright, inviting communal areas perfect for relaxation, socializing, and spending quality time with loved ones.',
    image: '/images/facilities/facilities_10.webp',
    alt: 'Spacious lounge area for resident activities',
  },
  {
    title: 'Tranquil Gardens',
    description:
      'Beautiful outdoor spaces with accessible pathways, seating areas, and lush greenery for fresh air and relaxation.',
    image: '/images/building/building_02.webp',
    alt: 'Peaceful gardens with walking paths',
  },
  {
    title: 'Modern Amenities',
    description:
      'On-site laundry facilities, accessible bathing areas, and well-equipped spaces ensuring comfort and convenience.',
    image: '/images/facilities/facilities/laundry.jpg',
    alt: 'Modern laundry facilities',
  },
];

export default function FacilitiesShowcaseSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id='facilities'
      aria-label='Facilities Showcase'
      className='bg-white px-4 py-20 lg:py-24'
    >
      <motion.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Comfortable Spaces & Amenities
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Every space at Ekuphumuleni is thoughtfully designed to promote
            comfort, dignity, and a true sense of home
          </p>
        </motion.div>

        {/* Alternating Layout for Facilities */}
        <div className='space-y-20'>
          {FACILITIES.map((facility, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                variants={item}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
                  <div className='relative aspect-[4/3]'>
                    <Image
                      src={facility.image}
                      alt={facility.alt}
                      fill
                      sizes='(min-width:1024px) 50vw, 100vw'
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                      unoptimized
                    />
                  </div>
                </div>
                {/* Decorative accent */}
                <div
                  className={`absolute w-32 h-32 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl -z-10 hidden lg:block ${
                    index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                  }`}
                />
              </motion.div>

              <motion.div
                variants={item}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h3 className='mb-4 !text-2xl heading-3'>{facility.title}</h3>
                <p className='text-[var(--color-deep-cocoa)]/90 leading-relaxed body-text'>
                  {facility.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <motion.div variants={item} className='mt-20'>
          <div className='bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 p-8 lg:p-12 border border-subtle rounded-2xl'>
            <h3 className='mb-8 !text-2xl text-center heading-3'>
              What Makes Our Facilities Special
            </h3>
            <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
              <div className='text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14'>
                  <HomeModernIcon
                    className='w-7 h-7 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Fully Accessible
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm body-text'>
                  Wheelchair-friendly design throughout
                </p>
              </div>

              <div className='text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14'>
                  <SparklesIcon
                    className='w-7 h-7 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Always Clean
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm body-text'>
                  Daily housekeeping and maintenance
                </p>
              </div>

              <div className='text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14'>
                  <SunIcon
                    className='w-7 h-7 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Bright & Airy
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm body-text'>
                  Natural light and fresh air circulation
                </p>
              </div>

              <div className='text-center'>
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14'>
                  <UsersIcon
                    className='w-7 h-7 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                  Community Focus
                </h4>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm body-text'>
                  Spaces that encourage connection
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
