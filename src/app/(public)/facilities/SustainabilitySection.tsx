'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  BoltIcon,
  BeakerIcon,
  SparklesIcon,
  GlobeAltIcon,
  HomeModernIcon,
  SunIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  bolt: BoltIcon,
  beaker: BeakerIcon,
  sparkles: SparklesIcon,
  'globe-alt': GlobeAltIcon,
  'home-modern': HomeModernIcon,
  sun: SunIcon,
  users: UsersIcon,
};

export interface SustainabilityInitiative {
  iconName?: string;
  title?: string;
  description?: string;
  impact?: string;
}

export interface SustainabilityShowcaseImage {
  imageUrl?: string | null;
  alt?: string;
  caption?: string;
  subcaption?: string;
}

export interface SustainabilitySectionData {
  heading?: string;
  subtitle?: string;
  initiatives?: SustainabilityInitiative[];
  showcaseImages?: SustainabilityShowcaseImage[];
  commitmentHeading?: string;
  commitmentBody?: string;
}

interface SustainabilitySectionProps {
  data?: SustainabilitySectionData;
}

export default function SustainabilitySection({ data = {} }: SustainabilitySectionProps) {
  const {
    heading = 'Sustainability at Ekuphumuleni',
    subtitle = "We're committed to sustainable practices that benefit our residents, our community, and our planet",
    initiatives = [],
    showcaseImages = [],
    commitmentHeading = 'Our Commitment to the Environment',
    commitmentBody = "Sustainability isn't just about technology — it's about creating a better future for our residents and our community. Through renewable energy, water conservation, and food security initiatives, we're reducing our environmental impact while enhancing the quality of life for everyone at Ekuphumuleni.",
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

  // Pair up showcase images into 2-column rows, mirroring the original layout
  const imageRows: SustainabilityShowcaseImage[][] = [];
  for (let i = 0; i < showcaseImages.length; i += 2) {
    imageRows.push(showcaseImages.slice(i, i + 2));
  }

  return (
    <section
      id='sustainability'
      aria-label='Sustainability Initiatives'
      className='bg-gradient-to-b from-[var(--color-soft-sand)]/30 to-white px-4 py-20 lg:py-24'
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

        {/* Feature Cards */}
        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4 mb-16'>
          {initiatives.map((initiative, index) => {
            const Icon = (initiative.iconName && ICON_MAP[initiative.iconName]) || SparklesIcon;
            return (
              <m.div
                key={index}
                variants={item}
                className='bg-white shadow-warm hover:shadow-warm-lg p-6 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
              >
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12'>
                  <Icon className='w-6 h-6 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                </div>
                <h3 className='mb-2 font-bold text-[var(--color-deep-cocoa)] text-lg'>{initiative.title}</h3>
                <p className='mb-3 text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                  {initiative.description}
                </p>
                <div className='pt-3 border-[var(--color-earth-brown)]/10 border-t'>
                  <p className='font-semibold text-[var(--color-muted-terracotta)] text-xs'>{initiative.impact}</p>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Image Showcase */}
        {imageRows.map((row, rowIdx) => (
          <div key={rowIdx} className={`gap-6 grid sm:grid-cols-2 ${rowIdx < imageRows.length - 1 ? 'mb-6' : 'mb-12'}`}>
            {row.map((image, idx) => (
              <m.div
                key={idx}
                variants={item}
                className='group relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'
              >
                <div className='relative aspect-[4/3]'>
                  {image.imageUrl && (
                    <Image
                      src={image.imageUrl}
                      alt={image.alt ?? image.caption ?? ''}
                      fill
                      sizes='(min-width:640px) 50vw, 100vw'
                      className='img-warm object-cover group-hover:scale-105 transition-transform duration-500'
                      unoptimized
                    />
                  )}
                </div>
                <div className='right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-6'>
                  <p className='drop-shadow-lg font-bold text-white text-lg'>{image.caption}</p>
                  <p className='text-white/90 text-sm'>{image.subcaption}</p>
                </div>
              </m.div>
            ))}
          </div>
        ))}

        {/* Impact Statement */}
        <m.div variants={item} className='mt-16'>
          <div className='bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm mx-auto p-8 lg:p-12 border border-subtle rounded-2xl max-w-4xl text-center'>
            <h3 className='mb-4 !text-2xl heading-3'>{commitmentHeading}</h3>
            <p className='leading-relaxed body-text'>{commitmentBody}</p>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
