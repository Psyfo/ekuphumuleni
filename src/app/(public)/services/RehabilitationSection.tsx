'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';

export type CmsProgramItem = {
  title: string;
  description?: string | null;
};

export type CmsRehabGalleryImage = {
  imageUrl?: string | null;
  alt: string;
};

export type CmsRehabilitationSection = {
  heading?: string | null;
  subtitle?: string | null;
  featuredImageUrl?: string | null;
  featuredHeading?: string | null;
  featuredBody?: string | null;
  programs?: CmsProgramItem[] | null;
  galleryImages?: CmsRehabGalleryImage[] | null;
};

interface RehabilitationSectionProps {
  data: CmsRehabilitationSection;
}

export default function RehabilitationSection({ data }: RehabilitationSectionProps) {
  const programs = data.programs ?? [];
  const galleryImages = data.galleryImages ?? [];

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
      id='rehabilitation'
      aria-label='Rehabilitation and Wellness'
      className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20 lg:py-24'
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

        {/* Main Content with Image */}
        <div className='items-center gap-8 lg:gap-12 grid lg:grid-cols-2 mb-12'>
          <m.div variants={item} className='relative lg:order-2'>
            <div className='relative shadow-warm-xl border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
              <div className='relative aspect-[3/4]'>
                <Image
                  src={data.featuredImageUrl ?? '/images/services/nursing/100_5556.JPG'}
                  alt='Rehabilitation and therapeutic activities'
                  fill
                  sizes='(min-width:1024px) 50vw, 100vw'
                  className='img-warm object-cover'
                  unoptimized
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className='hidden lg:block -bottom-4 -left-4 -z-10 absolute bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 rounded-2xl w-32 h-32' />
          </m.div>

          <m.div variants={item} className='lg:order-1'>
            <h3 className='mb-6 !text-2xl heading-3'>
              {data.featuredHeading}
            </h3>
            <p className='mb-6 leading-relaxed body-text'>
              {data.featuredBody}
            </p>

            {programs.length > 0 && (
              <div className='space-y-4'>
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className='bg-white shadow-warm p-5 border border-subtle rounded-xl'
                  >
                    <h4 className='mb-2 font-bold text-[var(--color-deep-cocoa)]'>
                      {program.title}
                    </h4>
                    {program.description && (
                      <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                        {program.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </m.div>
        </div>

        {/* Image Grid */}
        {galleryImages.length > 0 && (
          <div className='gap-6 grid sm:grid-cols-3'>
            {galleryImages.map((photo, index) => (
              <m.div
                key={index}
                variants={item}
                className='group relative shadow-warm-lg border border-subtle rounded-xl overflow-hidden'
              >
                <div className='relative aspect-square'>
                  <Image
                    src={photo.imageUrl ?? '/images/services/nursing/100_5564.JPG'}
                    alt={photo.alt}
                    fill
                    sizes='(min-width:640px) 33vw, 100vw'
                    className='img-warm object-cover group-hover:scale-105 transition-transform duration-500'
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
