'use client';

import { motion, useReducedMotion, Variants, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import {
  HomeModernIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

interface StatisticProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      // Ease-out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Statistic({
  icon: Icon,
  label,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
}: StatisticProps) {
  const prefersReducedMotion = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={item}
      className='group bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle rounded-2xl text-center transition-all hover:-translate-y-1 duration-300'
    >
      <div className='flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/10 to-[var(--color-earth-brown)]/10 mx-auto mb-6 rounded-xl w-16 h-16 group-hover:scale-110 transition-transform duration-300'>
        <Icon
          className='w-9 h-9 text-[var(--color-muted-terracotta)]'
          aria-hidden='true'
        />
      </div>
      <div className='mb-3 font-serif font-bold text-[var(--color-deep-cocoa)] text-4xl lg:text-5xl'>
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          duration={duration}
        />
      </div>
      <p className='font-medium text-[var(--color-earth-brown)] !text-base body-text'>
        {label}
      </p>
    </motion.div>
  );
}

export default function ImpactStatisticsSection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
        when: 'beforeChildren',
      },
    },
  };

  const titleVariant: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Calculate years since establishment (1983)
  const yearsSinceEstablishment = new Date().getFullYear() - 1983;

  return (
    <section
      id='impact-statistics'
      aria-label='Impact and Legacy'
      className='bg-white px-4 py-20 lg:py-24'
    >
      <motion.div
        className='mx-auto max-w-7xl'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={titleVariant} className='mb-16 text-center'>
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Our Legacy of Care
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
          <p className='mx-auto max-w-3xl !text-lg leading-relaxed body-text'>
            Over four decades of residential nursing, rehabilitation, and
            support for older adults
          </p>
        </motion.div>

        <div className='gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-4'>
          <Statistic
            icon={HomeModernIcon}
            label='Years of Service'
            value={yearsSinceEstablishment}
            suffix='+'
            duration={2.5}
          />
          <Statistic
            icon={HeartIcon}
            label='Beds Available'
            value={100}
            duration={2}
          />
          <Statistic
            icon={UserGroupIcon}
            label='Dedicated Staff'
            value={50}
            suffix='+'
            duration={2.2}
          />
          <Statistic
            icon={SparklesIcon}
            label='Patient Satisfaction'
            value={98}
            suffix='%'
            duration={2.3}
          />
        </div>

        {/* Additional Context */}
        <motion.div
          variants={titleVariant}
          className='bg-gradient-to-br from-[var(--color-soft-sand)]/50 to-[var(--color-warm-beige)]/50 mt-16 p-8 lg:p-10 border border-subtle rounded-2xl'
        >
          <div className='mx-auto max-w-4xl text-center'>
            <p className='mb-4 !text-lg leading-relaxed body-text'>
              Since our founding in 1983, Ekuphumuleni has remained steadfast in
              our commitment to providing exceptional geriatric care.
            </p>
            <p className='text-[var(--color-deep-cocoa)]/80 leading-relaxed body-text'>
              Our modern 100-bed facility, combined with our experienced team of
              healthcare professionals, provides structured nursing, daily
              living support, and rehabilitation services in a stable
              environment.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
