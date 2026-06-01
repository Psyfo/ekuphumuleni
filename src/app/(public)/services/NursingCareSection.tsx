'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  HomeModernIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'heart': HeartIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'user-group': UserGroupIcon,
  'sparkles': SparklesIcon,
  'home-modern': HomeModernIcon,
  'chat-bubble': ChatBubbleBottomCenterTextIcon,
  'clock': ClockIcon,
  'shield-check': ShieldCheckIcon,
};

export type CmsNursingFeatureCard = {
  iconName?: string | null;
  title: string;
  description: string;
};

export type CmsGalleryImage = {
  imageUrl?: string | null;
  alt: string;
};

export type CmsNursingSection = {
  heading?: string | null;
  subtitle?: string | null;
  featuredImageUrl?: string | null;
  featuredHeading?: string | null;
  featuredBody?: string | null;
  bulletItems?: string[] | null;
  featureCards?: CmsNursingFeatureCard[] | null;
  galleryImages?: CmsGalleryImage[] | null;
};

interface NursingCareSectionProps {
  data: CmsNursingSection;
}

export default function NursingCareSection({ data }: NursingCareSectionProps) {
  const featureCards = data.featureCards ?? [];
  const galleryImages = data.galleryImages ?? [];
  const bulletItems = data.bulletItems ?? [];

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
      id='nursing-care'
      aria-label='Professional Nursing Care'
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
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            {data.heading}
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            {data.subtitle}
          </p>
        </m.div>

        {/* Feature Image with Overlapping Content */}
        <div className='items-center gap-8 lg:gap-12 grid lg:grid-cols-2 mb-16'>
          <m.div variants={item} className='relative'>
            <div className='relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
              <div className='relative aspect-[4/3]'>
                {data.featuredImageUrl ? (
                  <Image
                    src={data.featuredImageUrl}
                    alt='Professional nursing care at Ekuphumuleni'
                    fill
                    sizes='(min-width:1024px) 50vw, 100vw'
                    className='object-cover'
                    priority
                    unoptimized
                  />
                ) : (
                  <Image
                    src='/images/services/nursing/100_5427.JPG'
                    alt='Professional nursing care at Ekuphumuleni'
                    fill
                    sizes='(min-width:1024px) 50vw, 100vw'
                    className='object-cover'
                    priority
                    unoptimized
                  />
                )}
              </div>
            </div>
            {/* Decorative accent */}
            <div className='-right-4 -bottom-4 -z-10 absolute bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl w-32 h-32' />
          </m.div>

          <m.div variants={item}>
            <h3 className='mb-6 !text-2xl heading-3'>
              {data.featuredHeading}
            </h3>
            <p className='mb-6 leading-relaxed body-text'>
              {data.featuredBody}
            </p>
            {bulletItems.length > 0 && (
              <ul className='space-y-3'>
                {bulletItems.map((bulletItem, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6'>
                      <svg
                        className='w-4 h-4 text-[var(--color-muted-terracotta)]'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <span className='!text-sm body-text'>{bulletItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </m.div>
        </div>

        {/* Feature Cards */}
        {featureCards.length > 0 && (
          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4 mb-16'>
            {featureCards.map((feature, index) => {
              const IconComponent = (feature.iconName && ICON_MAP[feature.iconName]) || HeartIcon;
              return (
                <m.div
                  key={index}
                  variants={item}
                  className='bg-white shadow-warm hover:shadow-warm-lg p-6 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'
                >
                  <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12'>
                    <IconComponent
                      className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>
                  <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)] text-base'>
                    {feature.title}
                  </h4>
                  <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        )}

        {/* Image Gallery */}
        {galleryImages.length > 0 && (
          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
            {galleryImages.map((photo, index) => (
              <m.div
                key={index}
                variants={item}
                className={`group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden${
                  index === galleryImages.length - 1 && galleryImages.length === 3
                    ? ' sm:col-span-2 lg:col-span-1'
                    : ''
                }`}
              >
                <div className='relative aspect-square'>
                  <Image
                    src={photo.imageUrl ?? '/images/services/nursing/100_5440.JPG'}
                    alt={photo.alt}
                    fill
                    sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                    unoptimized
                  />
                </div>
              </m.div>
            ))}
          </div>
        )}
      </m.div>
    </section>
  );
}
