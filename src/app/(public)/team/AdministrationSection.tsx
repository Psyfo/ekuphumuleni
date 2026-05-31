'use client';

import { m, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

export type CmsMember = {
  _id: string;
  name: string;
  role?: string | null;
  imageUrl?: string | null;
};

interface AdministrationSectionProps {
  members: CmsMember[];
  heading?: string | null;
  description?: string | null;
}

function Portrait({ src, alt }: { src?: string | null; alt: string }) {
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

export default function AdministrationSection({
  members,
  heading,
  description,
}: AdministrationSectionProps) {
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
      id='administration'
      aria-label='Administration Team'
      className='bg-gradient-to-b from-[var(--color-soft-sand)]/30 to-white px-4 py-20 lg:py-24'
    >
      <m.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <m.div variants={item} className='mb-16 text-center'>
          {heading ? (
            <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>{heading}</h2>
          ) : null}
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          {description ? (
            <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
              {description}
            </p>
          ) : null}
        </m.div>

        {members.length === 0 ? (
          <m.p variants={item} className='text-center body-text'>
            Administration member information will be available soon.
          </m.p>
        ) : (
          <m.ul
            variants={container}
            className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl'
          >
            {members.map((member) => (
              <m.li
                key={member._id}
                variants={item}
                className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-6 border border-subtle rounded-2xl transition-all hover:-translate-y-1 duration-300'
              >
                <Portrait src={member.imageUrl} alt={member.name} />
                <div className='mt-6 text-center'>
                  <h3 className='mb-1.5 font-serif font-bold text-[var(--color-deep-cocoa)] text-lg'>
                    {member.name}
                  </h3>
                  <p className='font-medium text-[var(--color-earth-brown)] text-sm'>
                    {member.role ?? 'Administrator'}
                  </p>
                </div>
              </m.li>
            ))}
          </m.ul>
        )}
      </m.div>
    </section>
  );
}
