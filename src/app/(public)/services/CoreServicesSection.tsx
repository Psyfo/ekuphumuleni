'use client';

import { m, Variants } from 'framer-motion';
import Link from 'next/link';
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

// Maps the icon name stored in Sanity to the actual Heroicon component.
// To add a new icon: add it to this map and to the schema's SERVICE_ICON_OPTIONS list.
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

export type CmsServiceItem = {
  iconName?: string | null;
  title: string;
  description: string;
};

export type CmsCoreServicesSection = {
  heading?: string | null;
  subtitle?: string | null;
  ctaHeading?: string | null;
  ctaBody?: string | null;
  ctaButtonLabel?: string | null;
  services?: CmsServiceItem[] | null;
};

interface CoreServicesSectionProps {
  data: CmsCoreServicesSection;
}

export default function CoreServicesSection({ data }: CoreServicesSectionProps) {
  const services = data.services ?? [];

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
      id='core-services'
      aria-label='Core Services'
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
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            {data.heading}
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            {data.subtitle}
          </p>
        </m.div>

        <div className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => {
            const IconComponent = (service.iconName && ICON_MAP[service.iconName]) || HeartIcon;
            return (
              <m.div
                key={index}
                variants={item}
                className='group bg-gradient-to-br from-[var(--color-soft-sand)]/20 to-[var(--color-warm-beige)]/20 hover:shadow-warm-lg p-8 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
              >
                <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mb-6 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
                  <IconComponent
                    className='w-8 h-8 text-[var(--color-muted-terracotta)]'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='mb-3 !text-xl heading-3'>{service.title}</h3>
                <p className='text-[var(--color-deep-cocoa)]/80 !text-sm leading-relaxed body-text'>
                  {service.description}
                </p>
              </m.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <m.div variants={item} className='mt-16 text-center'>
          <div className='bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm mx-auto p-8 lg:p-12 border border-subtle rounded-2xl max-w-4xl'>
            <h3 className='mb-4 !text-2xl heading-3'>
              {data.ctaHeading}
            </h3>
            <p className='mx-auto mb-6 max-w-2xl leading-relaxed body-text'>
              {data.ctaBody}
            </p>
            <Link
              href='/contact'
              prefetch={false}
              className='inline-flex items-center gap-2 bg-[var(--color-muted-terracotta)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 font-bold !text-white hover:!text-white focus-visible:!text-white transition-all duration-300'
            >
              {data.ctaButtonLabel ?? 'Get in Touch'}
              <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
            </Link>
          </div>
        </m.div>
      </m.div>
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
