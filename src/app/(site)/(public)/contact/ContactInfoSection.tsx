'use client';

import { m, Variants } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import MapEmbed from '@/components/MapEmbed';
import SectionHeading from '@/components/SectionHeading';

const ICON_MAP: Record<string, typeof MapPinIcon> = {
  'map-pin': MapPinIcon,
  phone: PhoneIcon,
  envelope: EnvelopeIcon,
  clock: ClockIcon,
};

interface ContactDetail {
  iconName: string;
  title: string;
  lines: string[];
  link?: string | null;
}

interface ContactInfoSectionData {
  heading: string;
  subtitle: string;
  details: ContactDetail[];
  mapQuery: string;
  additionalInfoHeading: string;
  additionalInfoBody: string;
}

const FALLBACK_DETAILS: ContactDetail[] = [
  {
    iconName: 'map-pin',
    title: 'Our Location',
    lines: ['Stand 7165 Old Falls Road', 'P O Box 1667', 'Bulawayo, Zimbabwe'],
    link: null,
  },
  {
    iconName: 'phone',
    title: 'Phone',
    lines: ['Tel: +263 292 216877', 'Mobile: +263 778 719166'],
    link: null,
  },
  {
    iconName: 'envelope',
    title: 'Email',
    lines: ['administration@ekuphumuleni.ngo'],
    link: 'mailto:administration@ekuphumuleni.ngo',
  },
  {
    iconName: 'clock',
    title: 'Visiting Hours',
    lines: [
      'Patient Visits: Daily 8:00 AM - 4:00 PM',
      'Office Hours: Mon - Fri 8:00 AM - 4:00 PM',
    ],
    link: null,
  },
];

interface ContactInfoSectionProps {
  data?: Partial<ContactInfoSectionData>;
}

/**
 * Render a detail line, auto-linking phone numbers and email addresses so
 * they are tappable — many visitors reach this page specifically to call.
 * Time ranges and street numbers don't match the phone pattern (they never
 * have 7+ consecutive digits/spaces).
 */
function DetailLine({ line }: { line: string }) {
  const linkClass =
    'text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] transition-colors duration-200';

  const phoneMatch = line.match(/\+?\d[\d\s]{7,}\d/);
  if (phoneMatch) {
    return (
      <a
        href={`tel:${phoneMatch[0].replace(/\s+/g, '')}`}
        className={`block py-0.5 text-sm ${linkClass}`}
      >
        {line}
      </a>
    );
  }

  const emailMatch = line.match(/\S+@\S+\.\S+/);
  if (emailMatch) {
    return (
      <a
        href={`mailto:${emailMatch[0]}`}
        className={`block py-0.5 text-sm break-all ${linkClass}`}
      >
        {line}
      </a>
    );
  }

  return <span className='block text-sm'>{line}</span>;
}

export default function ContactInfoSection({ data }: ContactInfoSectionProps = {}) {
  const heading = data?.heading ?? 'Contact Information';
  const subtitle =
    data?.subtitle ??
    'Find us at our location or reach out through any of the channels below';
  const details = data?.details ?? FALLBACK_DETAILS;
  const mapQuery =
    data?.mapQuery ??
    'Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo';
  const additionalInfoHeading = data?.additionalInfoHeading ?? 'Planning a visit?';
  const additionalInfoBody =
    data?.additionalInfoBody ??
    'We recommend calling ahead to schedule your visit and ensure we can provide you with the attention and information you need. Our team is here to assist you with any questions about our services and facilities.';

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-off-white)] to-[var(--color-soft-sand)] px-4 py-20'>
      <div className='mx-auto max-w-7xl'>
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <SectionHeading title={heading} lede={subtitle} />
        </m.div>

        {/* Contact Details Cards */}
        <m.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12'
        >
          {details.map((detail, index) => {
            const IconComponent = ICON_MAP[detail.iconName] ?? MapPinIcon;
            return (
              <m.div
                key={index}
                variants={item}
                className='group flex flex-col bg-white shadow-warm hover:shadow-warm-lg p-6 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
              >
                <div className='flex flex-col items-center gap-4 text-center'>
                  <div className='flex-shrink-0'>
                    <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 group-hover:from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/5 group-hover:to-[var(--color-earth-brown)]/10 rounded-xl w-12 h-12 transition-colors duration-300'>
                      <IconComponent className='w-6 h-6 text-[var(--color-muted-terracotta)]' />
                    </div>
                  </div>
                  <div className='flex-grow'>
                    <h3 className='mb-2 heading-3'>{detail.title}</h3>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className='block text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] transition-colors duration-200'
                      >
                        {detail.lines.map((line, i) => (
                          <span key={i} className='block text-sm break-all'>
                            {line}
                          </span>
                        ))}
                      </a>
                    ) : (
                      <div className='text-[var(--color-deep-cocoa)]'>
                        {detail.lines.map((line, i) => (
                          <DetailLine key={i} line={line} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>

        {/* Map */}
        <m.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='shadow-warm-xl border border-subtle rounded-2xl overflow-hidden'
        >
          <MapEmbed query={mapQuery} />
        </m.div>

        {/* Additional Info Card */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mx-auto mt-16 max-w-4xl'
        >
          <div className='bg-white/60 shadow-warm backdrop-blur-sm p-8 border border-subtle rounded-2xl text-center'>
            <p className='text-[var(--color-deep-cocoa)] text-lg leading-relaxed'>
              <span className='font-semibold text-[var(--color-deep-cocoa)]'>
                {additionalInfoHeading}
              </span>{' '}
              {additionalInfoBody}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
