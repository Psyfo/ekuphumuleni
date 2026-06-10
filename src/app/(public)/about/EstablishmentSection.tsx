'use client';

import SectionHeading from '@/components/SectionHeading';
import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  HandThumbUpIcon,
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

export interface WhyChooseCard {
  iconName?: string;
  title?: string;
  description?: string;
}

export interface EstablishmentSectionData {
  heading?: string;
  subtitle?: string;
  founderImageUrl?: string | null;
  founderName?: string;
  founderTitle?: string;
  narrativeHeading?: string;
  narrativeParagraph1?: string;
  narrativeParagraph2?: string;
  registrationHeading?: string;
  registrationBody?: string;
  whyChooseHeading?: string;
  whyChooseCards?: WhyChooseCard[];
  closingStatement?: string;
}

interface EstablishmentSectionProps {
  data?: EstablishmentSectionData;
}

export default function EstablishmentSection({ data = {} }: EstablishmentSectionProps) {
  const {
    heading = 'Our Establishment',
    subtitle = 'A journey that began with vision and dedication in 1983',
    founderImageUrl = '/images/founder_01.jpg',
    founderName = 'Polyanna Mahlangu',
    founderTitle = 'Founder & Visionary',
    narrativeHeading = 'Origins and Purpose',
    narrativeParagraph1 = 'The idea of Ekuphumuleni Geriatric Nursing Home originated with Polyanna Mahlangu while she was a nursing sister at Mpilo General Hospital. She first discussed the vision with colleagues in 1978, seeking a compassionate place of rest and recovery for older adults.',
    narrativeParagraph2 = 'Ekuphumuleni opened at Vundu Clinic on 1 December 1983. By 19 December 1984, the executive committee laid the foundation stone on a 1.57‑hectare piece of land granted by the Bulawayo City Council.',
    registrationHeading = 'Official Registration',
    registrationBody = 'Ekuphumuleni is a nonprofit, non‑governmental organization registered under welfare societies as W/O 23/80. It is a convalescent home for elderly people discharged from hospital who are not yet well enough to be cared for in a family environment.',
    whyChooseHeading = 'Why Families Choose Ekuphumuleni',
    whyChooseCards = [],
    closingStatement = "As an older persons' nursing home, our chief concern is meeting residents' needs through highly personalized, professional care—serving both the elderly and the wider community.",
  } = data;

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
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
      id='establishment'
      aria-label='Establishment of Ekuphumuleni'
      className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'
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

        <div className='items-center gap-12 lg:gap-16 grid lg:grid-cols-2 mb-20'>
          {/* Founder image */}
          <m.div variants={item} className='lg:order-1'>
            <div className='group relative'>
              {/* Decorative border effect */}
              <div className='absolute -inset-3 bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/20 blur-sm group-hover:blur-md rounded-2xl transition-all duration-300' />
              <div className='relative border-[var(--color-earth-brown)]/10 border-2 rounded-2xl overflow-hidden'>
                <div className='relative bg-gradient-to-br from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] pt-[125%] w-full'>
                  <Image
                    src={founderImageUrl || '/images/founder_01.jpg'}
                    alt={`Founder ${founderName}`}
                    fill
                    sizes='(min-width:1024px) 520px, (min-width:768px) 50vw, 100vw'
                    className='img-warm object-cover group-hover:scale-105 transition-transform duration-500'
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <m.div
              variants={item}
              className='bg-white/60 shadow-warm backdrop-blur-sm mt-4 p-4 rounded-lg text-center'
            >
              <p className='font-semibold text-[var(--color-deep-cocoa)] text-lg'>{founderName}</p>
              <p className='text-[var(--color-deep-cocoa)]/70 text-sm'>{founderTitle}</p>
            </m.div>
          </m.div>

          {/* Origins narrative */}
          <m.div variants={item} className='lg:order-2'>
            <div className='space-y-6'>
              <div>
                <h3 className='mb-4 heading-3'>{narrativeHeading}</h3>
                <div className='bg-[var(--color-muted-terracotta)] mb-4 rounded-full w-12 h-1' />
                <p className='mb-4 leading-relaxed body-text'>{narrativeParagraph1}</p>
                <p className='leading-relaxed body-text'>{narrativeParagraph2}</p>
              </div>

              <div className='bg-gradient-to-br from-[var(--color-soft-sand)]/50 to-[var(--color-warm-beige)]/50 shadow-warm p-6 lg:p-8 border border-subtle rounded-xl'>
                <div className='flex items-start gap-3 mb-3'>
                  <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 rounded-lg w-10 h-10'>
                    <svg
                      className='w-5 h-5 text-[var(--color-muted-terracotta)]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='mb-2 font-semibold text-[var(--color-deep-cocoa)]'>
                      {registrationHeading}
                    </h4>
                    <p className='!text-sm leading-relaxed body-text'>{registrationBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Why Families Choose Us */}
        <m.div variants={item} className='mx-auto max-w-6xl'>
          <div className='bg-white shadow-warm-lg p-8 lg:p-12 border border-subtle rounded-2xl'>
            <div className='mb-10 text-center'>
              <h3 className='mb-4 heading-3'>{whyChooseHeading}</h3>
              <div className='bg-[var(--color-muted-terracotta)] mx-auto rounded-full w-16 h-1' />
            </div>

            <div className='gap-6 lg:gap-8 grid md:grid-cols-3'>
              {whyChooseCards.map((card, idx) => {
                const Icon = (card.iconName && ICON_MAP[card.iconName]) || HeartIcon;
                return (
                  <div key={idx} className='group text-center'>
                    <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-4 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='w-8 h-8 text-[var(--color-muted-terracotta)]' aria-hidden='true' />
                    </div>
                    <h4 className='mb-3 heading-3'>{card.title}</h4>
                    <p className='!text-sm leading-relaxed body-text'>{card.description}</p>
                  </div>
                );
              })}
            </div>

            <div className='mt-10 pt-8 border-[var(--color-earth-brown)]/10 border-t'>
              <p className='mx-auto max-w-3xl text-center leading-relaxed body-text'>{closingStatement}</p>
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
