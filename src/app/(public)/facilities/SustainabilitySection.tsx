'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  BoltIcon,
  BeakerIcon,
  SparklesIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

type SustainabilityFeature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  impact: string;
};

const INITIATIVES: SustainabilityFeature[] = [
  {
    icon: BoltIcon,
    title: 'Solar Energy',
    description:
      'Our solar panel installation provides clean, renewable energy, reducing our carbon footprint and ensuring reliable power for essential services.',
    impact: 'Reduces grid dependency by 60%',
  },
  {
    icon: BeakerIcon,
    title: 'Water Conservation',
    description:
      'Rainwater harvesting systems and efficient irrigation practices help us use water responsibly and sustainably.',
    impact: 'Conserves 1000s of liters monthly',
  },
  {
    icon: SparklesIcon,
    title: 'Vegetable Gardens',
    description:
      'Our on-site gardens provide fresh, nutritious produce while offering therapeutic activities and promoting food security.',
    impact: 'Fresh produce year-round',
  },
  {
    icon: GlobeAltIcon,
    title: 'Community Engagement',
    description:
      'We actively involve residents and local partners in sustainability projects, fostering purpose and environmental stewardship.',
    impact: 'Building a greener future together',
  },
];

export default function SustainabilitySection() {
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
      id='sustainability'
      aria-label='Sustainability Initiatives'
      className='bg-gradient-to-b from-[var(--color-soft-sand)]/30 to-white px-4 py-20 lg:py-24'
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
            Sustainability at Ekuphumuleni
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            We&apos;re committed to sustainable practices that benefit our
            residents, our community, and our planet
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4 mb-16'>
          {INITIATIVES.map((initiative, index) => (
            <motion.div
              key={index}
              variants={item}
              className='bg-white shadow-warm hover:shadow-warm-lg p-6 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
            >
              <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12'>
                <initiative.icon
                  className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                  aria-hidden='true'
                />
              </div>
              <h3 className='mb-2 font-bold text-[var(--color-deep-cocoa)] text-lg'>
                {initiative.title}
              </h3>
              <p className='mb-3 text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                {initiative.description}
              </p>
              <div className='pt-3 border-[var(--color-earth-brown)]/10 border-t'>
                <p className='font-semibold text-[var(--color-muted-terracotta)] text-xs'>
                  {initiative.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className='gap-6 grid sm:grid-cols-2 mb-12'>
          <motion.div
            variants={item}
            className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'
          >
            <div className='relative aspect-[4/3]'>
              <Image
                src='/images/facilities/facilities_07.webp'
                alt='Solar panels providing clean energy at Ekuphumuleni'
                fill
                sizes='(min-width:640px) 50vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
            <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-6'>
              <p className='drop-shadow-lg font-bold text-white text-lg'>
                Solar Energy System
              </p>
              <p className='text-white/90 text-sm'>
                Powering our home sustainably
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'
          >
            <div className='relative aspect-[4/3]'>
              <Image
                src='/images/facilities/sustainability/garden.jpg'
                alt='Organic vegetable garden producing fresh produce'
                fill
                sizes='(min-width:640px) 50vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
            <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-6'>
              <p className='drop-shadow-lg font-bold text-white text-lg'>
                Organic Vegetable Gardens
              </p>
              <p className='text-white/90 text-sm'>Fresh, nutritious produce</p>
            </div>
          </motion.div>
        </div>

        <div className='gap-6 grid sm:grid-cols-2'>
          <motion.div
            variants={item}
            className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'
          >
            <div className='relative aspect-[4/3]'>
              <Image
                src='/images/facilities/facilities_01.webp'
                alt='Water storage tanks for conservation'
                fill
                sizes='(min-width:640px) 50vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
            <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-6'>
              <p className='drop-shadow-lg font-bold text-white text-lg'>
                Water Conservation
              </p>
              <p className='text-white/90 text-sm'>
                Rainwater harvesting systems
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'
          >
            <div className='relative aspect-[4/3]'>
              <Image
                src='/images/facilities/facilities_08.webp'
                alt='Solar geysers for hot water'
                fill
                sizes='(min-width:640px) 50vw, 100vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                unoptimized
              />
            </div>
            <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-6'>
              <p className='drop-shadow-lg font-bold text-white text-lg'>
                Solar Water Heating
              </p>
              <p className='text-white/90 text-sm'>
                Sustainable hot water supply
              </p>
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div variants={item} className='mt-16'>
          <div className='bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm mx-auto p-8 lg:p-12 border border-subtle rounded-2xl max-w-4xl text-center'>
            <h3 className='mb-4 !text-2xl heading-3'>
              Our Commitment to the Environment
            </h3>
            <p className='leading-relaxed body-text'>
              Sustainability isn&apos;t just about technology — it&apos;s about
              creating a better future for our residents and our community.
              Through renewable energy, water conservation, and food security
              initiatives, we&apos;re reducing our environmental impact while
              enhancing the quality of life for everyone at Ekuphumuleni.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
