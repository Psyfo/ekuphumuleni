'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Link from 'next/link';

import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function MeetTheTeamSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id='team'
      className='py-20 lg:py-24 px-4 bg-[var(--color-off-white)]'
      aria-label='Meet the Team'
    >
      <motion.div
        className='max-w-4xl mx-auto text-center'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item} className='inline-block mb-6'>
          <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 flex items-center justify-center mx-auto shadow-warm'>
            <UserGroupIcon className='w-10 h-10 text-[var(--color-muted-terracotta)]' />
          </div>
        </motion.div>

        <motion.h2 variants={item} className='heading-2 mb-4 !text-3xl lg:!text-4xl'>
          Meet the Team
        </motion.h2>

        <motion.div variants={item}>
          <div className='w-16 h-1 bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full' />
        </motion.div>

        <motion.p variants={item} className='body-text !text-lg mb-10 leading-relaxed max-w-2xl mx-auto'>
          Dedicated professionals and board members committed to excellence and
          compassionate service.
        </motion.p>

        <motion.div
          variants={item}
          whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          className='inline-block'
        >
          <Link
            href='/team'
            prefetch={false}
            className='px-8 py-4 rounded-lg font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2 inline-flex items-center gap-2'
          >
            View Team
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
