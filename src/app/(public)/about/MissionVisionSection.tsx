'use client';

import SectionHeading from '@/components/SectionHeading';
import { m, Variants } from 'framer-motion';

import {
  CheckCircleIcon,
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
  HomeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  heart: HeartIcon,
  home: HomeIcon,
  'shield-check': ShieldCheckIcon,
  'lock-closed': LockClosedIcon,
  'hand-thumb-up': HandThumbUpIcon,
  'user-group': UserGroupIcon,
};

export interface CoreValue {
  iconName?: string;
  label?: string;
}

export interface MissionVisionSectionData {
  heading?: string;
  subtitle?: string;
  missionHeading?: string;
  missionBody?: string;
  missionBullets?: string[];
  visionHeading?: string;
  visionBody?: string;
  visionFootnote?: string;
  coreValuesHeading?: string;
  coreValues?: CoreValue[];
}

interface MissionVisionSectionProps {
  data?: MissionVisionSectionData;
}

export default function MissionVisionSection({ data = {} }: MissionVisionSectionProps) {
  const {
    heading = 'Mission, Vision & Core Values',
    subtitle = 'Guided by a clear mandate, focused on quality, and accountable for outcomes',
    missionHeading = 'Our Mission',
    missionBody = 'Ekuphumuleni Geriatric Nursing Home strives to deliver high‑quality geriatric nursing care and cost‑effective medical and non‑medical support that meets the diverse needs of individuals and families.',
    missionBullets = [
      'High‑quality, professional geriatric nursing.',
      'Cost‑effective medical and non‑medical care.',
      'Support tailored to individuals and families.',
    ],
    visionHeading = 'Our Vision',
    visionBody = 'To be the best provider of geriatric nursing services in the country.',
    visionFootnote = 'We envision a future where every older person who needs our services receives consistent, appropriate care that protects their dignity and supports daily living.',
    coreValuesHeading = 'Core Values',
    coreValues = [
      { iconName: 'heart', label: 'Compassion' },
      { iconName: 'shield-check', label: 'Integrity' },
      { iconName: 'lock-closed', label: 'Confidentiality' },
      { iconName: 'hand-thumb-up', label: 'Trust' },
      { iconName: 'user-group', label: 'Team Work' },
    ],
  } = data;

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='mission-vision'
      aria-label='Mission, Vision and Core Values'
      className='bg-gradient-to-b from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] px-4 py-20 lg:py-24'
    >
      <m.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          <SectionHeading title={heading} lede={subtitle} />
        </m.div>

        <div className='items-start gap-8 lg:gap-10 grid lg:grid-cols-2 mb-12'>
          {/* Mission */}
          <m.div variants={item}>
            <div className='bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-2xl h-full transition-all hover:-translate-y-1 duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-xl w-14 h-14'>
                  <HeartIcon className='w-8 h-8 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                </div>
                <h3 className='heading-3'>{missionHeading}</h3>
              </div>
              <p className='mb-6 leading-relaxed body-text'>{missionBody}</p>
              <ul className='space-y-3'>
                {missionBullets.map((bullet, idx) => (
                  <li key={idx} className='group flex items-start gap-3'>
                    <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mt-0.5 rounded-full w-6 h-6 group-hover:scale-110 transition-transform duration-300'>
                      <CheckCircleIcon className='w-4 h-4 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                    </div>
                    <span className='!text-sm body-text'>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

          {/* Vision */}
          <m.div variants={item}>
            <div className='flex flex-col bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-2xl h-full transition-all hover:-translate-y-1 duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-xl w-14 h-14'>
                  <EyeIcon className='w-8 h-8 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                </div>
                <h3 className='heading-3'>{visionHeading}</h3>
              </div>
              <p className='flex-grow leading-relaxed body-text'>{visionBody}</p>
              <div className='mt-6 pt-6 border-[var(--color-earth-brown)]/10 border-t'>
                <p className='text-[var(--color-deep-cocoa)]/70 !text-sm italic body-text'>{visionFootnote}</p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Core Values */}
        <m.div variants={item}>
          <div className='bg-white shadow-warm-lg p-8 lg:p-12 border border-subtle rounded-2xl'>
            <div className='mb-10 text-center'>
              <h3 className='mb-4 heading-3'>{coreValuesHeading}</h3>
              <div className='bg-[var(--color-muted-terracotta)] mx-auto rounded-full w-16 h-1' />
            </div>
            <div className='gap-4 lg:gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
              {coreValues.map((value, idx) => {
                const Icon = (value.iconName && ICON_MAP[value.iconName]) || HeartIcon;
                const isLastOdd = idx === coreValues.length - 1 && coreValues.length % 3 === 1;
                return (
                  <div
                    key={idx}
                    className={`group flex items-center gap-4 bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 hover:shadow-warm p-6 rounded-xl transition-all hover:-translate-y-0.5 duration-300 ${
                      isLastOdd ? 'sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-12 h-12 group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='w-6 h-6 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                    </div>
                    <span className='font-semibold body-text'>{value.label}</span>
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
