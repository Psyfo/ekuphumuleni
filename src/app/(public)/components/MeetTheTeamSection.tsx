'use client';

import { motion } from 'framer-motion';

import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function MeetTheTeamSection() {
  return (
    <section
      id='team'
      className='py-16 px-4 bg-[var(--color-off-white)]'
      aria-label='Meet the Team'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='inline-block mb-4'
        >
          <UserGroupIcon className='w-14 h-14 text-[var(--color-earth-brown)] mx-auto' />
        </motion.div>
        <h2 className='heading-2 mb-3'>Meet the Team</h2>
        <p className='body-text mb-6'>
          Dedicated professionals and board members committed to excellence and
          compassionate service.
        </p>
        <a
          href='/team'
          className='px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] text-white shadow'
        >
          View Team
        </a>
      </div>
    </section>
  );
}
