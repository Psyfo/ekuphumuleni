'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

type Member = {
  name: string;
  role?: string;
  img?: string;
};

const BOARD: Member[] = [
  {
    name: 'Mr P Ncube',
    role: 'Board Chairperson',
    img: '/images/team/board/ncube.jpg',
  },
  {
    name: 'Ms F Ndlovu',
    role: 'H R Chairperson',
    img: '/images/team/board/ndlovu.jpg',
  },
  {
    name: 'Mr J M Nyoni',
    role: 'Board Member',
    img: '/images/team/board/nyoni.jpg',
  },
  {
    name: 'Ms G N Mahlangu',
    role: 'Board Member',
    img: '/images/team/board/mahlangu.jpg',
  },
  {
    name: 'Mrs H M Mahachi',
    role: 'Vice Chair Person',
    img: '/images/team/board/mahachi.jpg',
  },
  {
    name: 'Mr Miclose',
    role: 'Board Person Treasury',
    img: '/images/team/board/miclose.jpg',
  },
  {
    name: 'Mr J L Ncube Sikosana',
    role: 'Committee Member',
    img: '/images/team/board/sikosana.jpg',
  },
  {
    name: 'Mr L Mpofu',
    role: 'Committee Member',
    img: '/images/team/board/mpofu.jpg',
  },
  { name: 'Ms S S Hove', role: 'Committee Member', img: '/images/team/board/' },
];

function Portrait({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className='group relative bg-gradient-to-br from-[var(--color-soft-sand)]/30 to-[var(--color-warm-beige)]/30 pt-[125%] rounded-xl w-full overflow-hidden'>
      {/* Decorative border effect */}
      <div className='absolute inset-0 border-[var(--color-earth-brown)]/10 border-2 group-hover:border-[var(--color-muted-terracotta)]/30 rounded-xl transition-colors duration-300' />

      {!failed && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(min-width:1024px) 320px, (min-width:768px) 33vw, 100vw'
          className={`object-cover rounded-xl transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading='lazy'
          unoptimized
        />
      ) : (
        <div className='absolute inset-0 place-items-center grid'>
          <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-warm rounded-full w-20 h-20 text-[var(--color-earth-brown)]'>
            <UserIcon className='w-9 h-9' aria-hidden='true' />
          </div>
        </div>
      )}
    </div>
  );
}

export default function BoardSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
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
      id='board'
      aria-label='Board of Trustees'
      className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20 lg:py-24'
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
            Executive Board Members
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            The current executive board members guiding Ekuphumuleni&apos;s
            mission and service excellence
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3'
        >
          {BOARD.map((member, idx) => (
            <motion.li
              key={idx}
              variants={item}
              className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
            >
              <Portrait src={member.img} alt={member.name} />
              <div className='mt-6 text-center'>
                <h3 className='mb-1.5 font-serif font-bold text-[var(--color-deep-cocoa)] text-lg'>
                  {member.name}
                </h3>
                <p className='font-medium text-[var(--color-earth-brown)] text-sm'>
                  {member.role ?? 'Trustee'}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
