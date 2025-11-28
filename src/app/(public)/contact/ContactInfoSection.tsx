'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import MapEmbed from '@/components/MapEmbed';

const contactDetails = [
  {
    icon: MapPinIcon,
    title: 'Our Location',
    content: ['Old Falls Rd', 'Bulawayo, Zimbabwe'],
    link: null,
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: ['+263 292 216 877'],
    link: 'tel:+263292216877',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: ['administration@ekuphumuleni.ngo'],
    link: 'mailto:administration@ekuphumuleni.ngo',
  },
  {
    icon: ClockIcon,
    title: 'Visiting Hours',
    content: [
      'Monday - Friday: 9:00 AM - 5:00 PM',
      'Saturday: 9:00 AM - 1:00 PM',
      'Sunday: Closed',
    ],
    link: null,
  },
];

export default function ContactInfoSection() {
  const prefersReducedMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 !text-4xl md:!text-5xl heading-2'>
            Contact Information
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-20 h-1.5' />
          <p className='mx-auto max-w-2xl text-[var(--color-earth-brown)] text-lg'>
            Find us at our location or reach out through any of the channels
            below
          </p>
        </motion.div>

        {/* Contact Details Cards */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12'
        >
          {contactDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
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
                    <h3 className='mb-2 !text-lg heading-3'>{detail.title}</h3>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className='block text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] transition-colors duration-200'
                      >
                        {detail.content.map((line, i) => (
                          <span key={i} className='block text-sm'>
                            {line}
                          </span>
                        ))}
                      </a>
                    ) : (
                      <div className='text-[var(--color-earth-brown)]'>
                        {detail.content.map((line, i) => (
                          <span key={i} className='block text-sm'>
                            {line}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.95,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='shadow-warm-xl border border-subtle rounded-2xl overflow-hidden'
        >
          <MapEmbed query='Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo' />
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mx-auto mt-16 max-w-4xl'
        >
          <div className='bg-white/60 shadow-warm backdrop-blur-sm p-8 border border-subtle rounded-2xl text-center'>
            <p className='text-[var(--color-earth-brown)] text-lg leading-relaxed'>
              <span className='font-semibold text-[var(--color-deep-cocoa)]'>
                Planning a visit?
              </span>{' '}
              We recommend calling ahead to schedule your visit and ensure we
              can provide you with the attention and information you need. Our
              team is here to assist you with any questions about our services
              and facilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
