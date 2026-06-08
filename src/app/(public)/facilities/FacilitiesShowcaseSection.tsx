'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  HomeModernIcon,
  SparklesIcon,
  SunIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'home-modern': HomeModernIcon,
  sparkles: SparklesIcon,
  sun: SunIcon,
  users: UsersIcon,
};

export interface FacilityHighlight {
  title?: string;
  description?: string;
  imageUrl?: string | null;
  alt?: string;
}

export interface FeatureGridItem {
  iconName?: string;
  title?: string;
  description?: string;
}

export interface ShowcaseSectionData {
  heading?: string;
  subtitle?: string;
  highlights?: FacilityHighlight[];
  featureGridHeading?: string;
  featureGridItems?: FeatureGridItem[];
}

interface FacilitiesShowcaseSectionProps {
  data?: ShowcaseSectionData;
}

export default function FacilitiesShowcaseSection({ data = {} }: FacilitiesShowcaseSectionProps) {
  const {
    heading = 'Comfortable Spaces & Amenities',
    subtitle = 'Every space at Ekuphumuleni is thoughtfully designed to promote comfort, dignity, and a true sense of home',
    highlights = [],
    featureGridHeading = 'What Makes Our Facilities Special',
    featureGridItems = [],
  } = data;

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id='facilities'
      aria-label='Facilities Showcase'
      className='bg-white px-4 py-20 lg:py-24'
    >
      <m.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>{heading}</h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>{subtitle}</p>
        </m.div>

        {/* Alternating Layout for Facilities */}
        <div className='space-y-20'>
          {highlights.map((facility, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <m.div
                variants={item}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
                  <div className='relative aspect-[4/3]'>
                    {facility.imageUrl && (
                      <Image
                        src={facility.imageUrl}
                        alt={facility.alt ?? facility.title ?? ''}
                        fill
                        sizes='(min-width:1024px) 50vw, 100vw'
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                        unoptimized
                      />
                    )}
                  </div>
                </div>
                {/* Decorative accent */}
                <div
                  className={`absolute w-32 h-32 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl -z-10 hidden lg:block ${
                    index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                  }`}
                />
              </m.div>

              <m.div
                variants={item}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h3 className='mb-4 !text-2xl heading-3'>{facility.title}</h3>
                <p className='text-[var(--color-deep-cocoa)]/90 leading-relaxed body-text'>
                  {facility.description}
                </p>
              </m.div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <m.div variants={item} className='mt-20'>
          <div className='bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 p-8 lg:p-12 border border-subtle rounded-2xl'>
            <h3 className='mb-8 !text-2xl text-center heading-3'>{featureGridHeading}</h3>
            <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
              {featureGridItems.map((feature, idx) => {
                const Icon = (feature.iconName && ICON_MAP[feature.iconName]) || HomeModernIcon;
                return (
                  <div key={idx} className='text-center'>
                    <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-14 h-14'>
                      <Icon className='w-7 h-7 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                    </div>
                    <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>{feature.title}</h4>
                    <p className='text-[var(--color-deep-cocoa)]/80 !text-sm body-text'>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
