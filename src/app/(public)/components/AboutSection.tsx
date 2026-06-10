/* eslint-disable react/no-unescaped-entities */
'use client';

import SectionHeading from '@/components/SectionHeading';

import { m } from 'framer-motion';
import Image from 'next/image';

interface AboutSectionData {
  heading?: string;
  intro?: string;
  founderImageUrl?: string | null;
  founderName?: string | null;
  founderRole?: string | null;
  establishmentHeading?: string;
  establishmentBody?: string;
  missionHeading?: string;
  missionBody?: string;
  visionHeading?: string;
  visionBody?: string;
  coreValuesHeading?: string;
  coreValues?: string[];
}

interface AboutSectionProps {
  data?: AboutSectionData;
}

export default function AboutSection({ data }: AboutSectionProps = {}) {
  const heading = data?.heading ?? 'About Ekuphumuleni';
  const intro =
    data?.intro ??
    'Ekuphumuleni means "place of rest", a sanctuary for elderly individuals requiring nursing care. Established in 1983 by Polyanna Mahlangu, it was founded to provide reliable, professional care for older adults in a peaceful, dignified environment.';
  const founderImageUrl = data?.founderImageUrl ?? '/images/founder_01.jpg';
  const founderName = data?.founderName ?? 'Polyanna Mahlangu';
  const founderRole = data?.founderRole ?? 'Founder · Est. 1983';
  const establishmentHeading = data?.establishmentHeading ?? 'Our Establishment';
  const establishmentBody =
    data?.establishmentBody ??
    'Founded to provide dependable care, our home blends professional excellence with a stable, family-like environment. Over four decades, we have remained committed to honoring the dignity and individuality of every resident.';
  const missionHeading = data?.missionHeading ?? 'Our Mission';
  const missionBody =
    data?.missionBody ??
    'To create peaceful, nurturing environments where people find rest, healing, and restoration in body and spirit.';
  const visionHeading = data?.visionHeading ?? 'Our Vision';
  const visionBody =
    data?.visionBody ??
    'A community where elders thrive with dignity, safety, and joy through consistent, culturally sensitive care.';
  const coreValuesHeading = data?.coreValuesHeading ?? 'Our Core Values';
  const coreValues = data?.coreValues ?? [
    'Compassion',
    'Tranquility',
    'Reliability',
    'Cultural Sensitivity',
    'Excellence',
  ];

  return (
    <section
      id='about'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
      aria-label='About Ekuphumuleni'
    >
      <div className='mx-auto max-w-7xl'>
        <m.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mb-16 text-center'
        >
          <SectionHeading title={heading} lede={intro} />
        </m.div>

        {/* Establishment */}
        <div className='items-center gap-10 lg:gap-16 grid md:grid-cols-2 mb-20'>
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='order-2 md:order-1 w-full'
          >
            <figure className='relative mx-auto max-w-sm'>
              {/* Decorative border effect */}
              <div
                className='absolute -inset-2 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 blur-sm rounded-2xl'
                aria-hidden='true'
              />
              {/* Photograph-style mat and caption */}
              <div className='relative bg-white shadow-warm-lg p-3 border border-subtle rounded-2xl'>
                <Image
                  src={founderImageUrl}
                  alt={`Portrait of ${founderName}, ${founderRole}`}
                  width={603}
                  height={603}
                  className='img-warm rounded-xl w-full aspect-square object-cover'
                  priority={false}
                />
                <figcaption className='pt-4 pb-2 text-center'>
                  <span className='block font-serif font-bold text-[var(--color-deep-cocoa)] text-lg'>
                    {founderName}
                  </span>
                  <span className='block mt-0.5 text-[var(--color-deep-cocoa)]/70 text-sm'>
                    {founderRole}
                  </span>
                </figcaption>
              </div>
            </figure>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='order-1 md:order-2'
          >
            <h3 className='mb-4 heading-3'>{establishmentHeading}</h3>
            <div className='bg-[var(--color-muted-terracotta)] mb-4 rounded-full w-12 h-1' />
            <p className='!text-base leading-relaxed body-text'>
              {establishmentBody}
            </p>
          </m.div>
        </div>

        {/* Mission and Vision */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='gap-6 lg:gap-8 grid md:grid-cols-2 mb-16'
        >
          <div className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'>
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <svg
                className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='mb-3 heading-3'>{missionHeading}</h3>
            <p className='leading-relaxed body-text'>
              {missionBody}
            </p>
          </div>
          <div className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-xl transition-all hover:-translate-y-1 duration-300'>
            <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-4 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
              <svg
                className='w-6 h-6 text-[var(--color-muted-terracotta)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            </div>
            <h3 className='mb-3 heading-3'>{visionHeading}</h3>
            <p className='leading-relaxed body-text'>
              {visionBody}
            </p>
          </div>
        </m.div>

        {/* Core Values */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='bg-gradient-to-br from-[var(--color-soft-sand)]/50 to-[var(--color-warm-beige)]/50 p-8 lg:p-12 border border-subtle rounded-2xl'
        >
          <h3 className='mb-6 text-center heading-3'>
            {coreValuesHeading}
          </h3>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-16 h-1' />
          <ul className='flex flex-wrap justify-center gap-4 mx-auto max-w-4xl'>
            {coreValues.map((value, index) => (
              <m.li
                key={value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='flex items-center gap-3 bg-white/60 shadow-warm hover:shadow-warm-lg backdrop-blur-sm px-4 py-3 rounded-lg transition-all hover:-translate-y-0.5 duration-300'
              >
                <div className='flex-shrink-0 bg-[var(--color-muted-terracotta)] rounded-full w-2 h-2' />
                <span className='font-semibold !text-[var(--color-deep-cocoa)] body-text'>
                  {value}
                </span>
              </m.li>
            ))}
          </ul>
        </m.div>
      </div>
    </section>
  );
}
