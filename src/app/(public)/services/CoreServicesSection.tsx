'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  HomeModernIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

type ServiceHighlight = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const SERVICES: ServiceHighlight[] = [
  {
    icon: HeartIcon,
    title: '24/7 Skilled Nursing Care',
    description:
      'Round-the-clock professional nursing supervision ensuring medical needs are met with compassion and expertise at all times.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Medication Management',
    description:
      'Precise administration and monitoring of medications, ensuring safety, compliance, and optimal health outcomes for every resident.',
  },
  {
    icon: UserGroupIcon,
    title: 'Personal Care Assistance',
    description:
      'Dignified support with daily living activities including bathing, dressing, grooming, and mobility assistance.',
  },
  {
    icon: SparklesIcon,
    title: 'Rehabilitation Services',
    description:
      'Personalized therapy programs designed to maintain or improve mobility, strength, and independence through expert guidance.',
  },
  {
    icon: HomeModernIcon,
    title: 'Comfortable Accommodation',
    description:
      'Well-appointed private and shared rooms designed for comfort, safety, and accessibility in a warm, home-like environment.',
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Family Communication',
    description:
      'Regular updates and open dialogue with families, fostering partnership in care planning and decision-making.',
  },
];

export default function CoreServicesSection() {
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
      id='core-services'
      aria-label='Core Services'
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
            Comprehensive Care Services
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Every service we provide is designed with one goal: enhancing the
            quality of life for our residents through exceptional, personalized
            care
          </p>
        </motion.div>

        <div className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3'>
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className='group bg-gradient-to-br from-[var(--color-soft-sand)]/20 to-[var(--color-warm-beige)]/20 hover:shadow-warm-lg p-8 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
            >
              <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-6 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                <service.icon
                  className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                  aria-hidden='true'
                />
              </div>
              <h3 className='mb-3 !text-xl heading-3'>{service.title}</h3>
              <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={item} className='mt-16 text-center'>
          <div className='bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm mx-auto p-8 lg:p-12 border border-subtle rounded-2xl max-w-4xl'>
            <h3 className='mb-4 !text-2xl heading-3'>
              Have Questions About Our Services?
            </h3>
            <p className='mx-auto mb-6 max-w-2xl leading-relaxed body-text'>
              Our team is here to answer your questions and help you understand
              how we can best support your loved one&apos;s needs.
            </p>
            <Link
              href='/contact'
              prefetch={false}
              className='inline-flex items-center gap-2 bg-[var(--color-muted-terracotta)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 font-bold !text-white hover:!text-white focus-visible:!text-white transition-all duration-300'
            >
              Get in Touch
              <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m8.25 4.5 7.5 7.5-7.5 7.5'
      />
    </svg>
  );
}
