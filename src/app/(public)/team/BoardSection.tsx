'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';
import teamMembers from '@/content/teamMembers.json';

type Member = {
  name: string;
  role?: string;
  img?: string;
};

export type CmsMember = {
  _id: string;
  name: string;
  role?: string | null;
  imageUrl?: string | null;
};

const BOARD: Member[] = teamMembers.board;

function Portrait({
  src,
  alt,
  priority = false,
}: {
  src?: string;
  alt: string;
  priority?: boolean;
}) {
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
          priority={priority}
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

export default function BoardSection({ members }: { members?: CmsMember[] }) {
  const boardByName = new Map(
    BOARD.map((member) => [member.name.toLowerCase(), member]),
  );

  const displayMembers: Member[] = members
    ? members.map((m) => {
        const fallback = boardByName.get(m.name.toLowerCase());
        return {
          name: m.name,
          role: m.role ?? fallback?.role,
          img: m.imageUrl ?? fallback?.img,
        };
      })
    : BOARD;

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id='board'
      aria-label='Board of Trustees'
      className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20 lg:py-24'
    >
      <m.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Executive Board Members
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            The current executive board members guiding Ekuphumuleni&apos;s
            mission and service excellence
          </p>
        </m.div>

        <m.ul
          variants={container}
          className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3'
        >
          {displayMembers.map((member, idx) => (
            <m.li
              key={idx}
              variants={item}
              className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
            >
              <Portrait
                src={member.img}
                alt={member.name}
                priority={idx === 0}
              />
              <div className='mt-6 text-center'>
                <h3 className='mb-1.5 font-serif font-bold text-[var(--color-deep-cocoa)] text-lg'>
                  {member.name}
                </h3>
                <p className='font-medium text-[var(--color-earth-brown)] text-sm'>
                  {member.role ?? 'Trustee'}
                </p>
              </div>
            </m.li>
          ))}
        </m.ul>
      </m.div>
    </section>
  );
}
