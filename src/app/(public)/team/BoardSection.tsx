'use client';

import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

type Member = {
  name: string;
  role?: string;
  img?: string; // replace with actual portrait paths when available
};

const BOARD: Member[] = [
    { name: 'Mr P Ncube', role: 'Board Chairperson', img: '/images/team/board/ncube.jpg' },
    { name: 'Ms F Ndlovu', role: 'H R Chairperson', img: '/images/team/board/ndlovu.jpg' },
    { name: 'Mr J M Nyoni', role: 'Board Member', img: '/images/team/board/nyoni.jpg' },
    { name: 'Ms G N Mahlangu', role: 'Board Member', img: '/images/team/board/mahlangu.jpg' },
    { name: 'Mrs H M Mahachi', role: 'Vice Chair Person', img: '/images/team/board/mahachi.jpg' },
    { name: 'Mr Miclose', role: 'Board Person Treasury', img: '/images/team/board/miclose.jpg' },
    { name: 'Mr J L Ncube Sikosana', role: 'Committee Member', img: '/images/team/board/sikosana.jpg' },
    { name: 'Mr L Mpofu', role: 'Committee Member', img: '/images/team/board/mpofu.jpg' },
    { name: 'Ms S S Hove', role: 'Committee Member', img: '/images/team/board/' },
];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.06,
      when: 'beforeChildren',
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function Portrait({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className='relative bg-[var(--color-off-white)] pt-[125%] rounded-lg w-full min-h-[120px] overflow-hidden'>
      {!failed && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(min-width:1024px) 320px, (min-width:768px) 33vw, 100vw'
          className={`object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading='lazy'
          unoptimized
        />
      ) : (
        <div className='absolute inset-0 place-items-center grid'>
          <div className='flex justify-center items-center bg-[var(--color-warm-beige)] shadow rounded-full w-20 h-20 text-[var(--color-earth-brown)]'>
            <UserIcon className='w-8 h-8' aria-hidden='true' />
          </div>
        </div>
      )}
    </div>
  );
}

export default function BoardSection() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  // Trigger when ~12% enters viewport; account for sticky header with a negative top margin.
  const inView = useInView(rootRef, {
    once: true,
    amount: 0.0,
    margin: '-64px 0px -15% 0px',
  });

  return (
    <section
      id='board'
      aria-label='Board of Trustees'
      className='bg-[var(--color-off-white)] px-4 py-16'
    >
      <motion.div
        ref={rootRef}
        className='mx-auto max-w-6xl'
        variants={container}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.h2 variants={item} className='mb-2 text-center heading-2'>
          Executive Board Members
        </motion.h2>
        <motion.p variants={item} className='mb-10 text-center body-text'>
          The current executive board members guiding Ekuphumuleni’s mission and service.
        </motion.p>

        <motion.ul
          variants={container}
          className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'
        >
          {BOARD.map((m, idx) => (
            <motion.li
              key={idx}
              variants={item}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { y: -4, scale: 1.01, transition: { duration: 0.15 } }
              }
              className='shadow hover:shadow-lg p-4 rounded-xl transition-shadow card'
            >
              <Portrait src={m.img} alt={m.name} />
              <div className='mt-4 text-center'>
                <h3 className='font-semibold text-[var(--color-deep-cocoa)] text-base md:text-lg'>
                  {m.name}
                </h3>
                <p className='text-[var(--color-deep-cocoa)]/80 caption'>
                  {m.role ?? 'Trustee'}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
