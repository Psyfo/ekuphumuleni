'use client';

import { m, Variants } from 'framer-motion';
import {
  BuildingLibraryIcon,
  UsersIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP: Record<string, typeof BuildingLibraryIcon> = {
  'building-library': BuildingLibraryIcon,
  heart: HeartIcon,
  users: UsersIcon,
};

interface SpecialMention {
  name: string;
  iconName: string;
  description: string;
}

interface SpecialMentionsSectionData {
  heading?: string;
  subtitle?: string;
  mentions?: SpecialMention[];
  closingMessage?: string;
}

interface SpecialMentionsSectionProps {
  data?: SpecialMentionsSectionData;
}

const FALLBACK_MENTIONS: SpecialMention[] = [
  {
    name: 'Beit Trust',
    iconName: 'building-library',
    description:
      'Foundational support and enduring partnership that has strengthened our mission',
  },
  {
    name: 'Jesus Latter Day',
    iconName: 'heart',
    description:
      'Faith-driven commitment illuminating our path with compassionate care',
  },
  {
    name: 'Many Individual Well-Wishers',
    iconName: 'users',
    description:
      'Countless acts of kindness woven into the fabric of our community',
  },
];

export default function SpecialMentionsSection({ data }: SpecialMentionsSectionProps = {}) {
  const heading = data?.heading ?? 'Special Mentions';
  const subtitle =
    data?.subtitle ??
    'We extend our deepest gratitude to these remarkable supporters whose extraordinary contributions have shaped our mission';
  const mentions = data?.mentions ?? FALLBACK_MENTIONS;
  const closingMessage =
    data?.closingMessage ??
    'Every contribution, whether grand or humble, has woven threads of hope into the fabric of our community. Your generosity illuminates the path forward for those in our care.';

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-off-white)] to-[var(--color-soft-sand)] py-20 lg:py-24 overflow-hidden'>
      {/* Decorative elements */}
      <div className='top-10 left-10 absolute bg-[var(--color-muted-terracotta)]/5 blur-3xl rounded-full w-96 h-96' />
      <div className='right-10 bottom-10 absolute bg-[var(--color-earth-brown)]/5 blur-3xl rounded-full w-96 h-96' />

      <div className='z-10 relative mx-auto px-4 max-w-7xl'>
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 lg:mb-20 text-center'
        >
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            {heading}
          </h2>
          <div className='bg-gradient-to-r from-transparent via-[var(--color-muted-terracotta)] to-transparent mx-auto mb-6 rounded-full w-24 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>
            {subtitle}
          </p>
        </m.div>

        {/* Special mentions cards */}
        <m.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          className='gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl'
        >
          {mentions.map((mention) => {
            const IconComponent = ICON_MAP[mention.iconName] ?? BuildingLibraryIcon;
            return (
              <m.div
                key={mention.name}
                variants={cardVariant}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group'
              >
                <div className='relative flex flex-col items-center bg-white shadow-warm-lg hover:shadow-warm-xl p-8 lg:p-10 border border-subtle hover:border-[var(--color-muted-terracotta)]/30 rounded-2xl h-full overflow-hidden text-center transition-all duration-300'>
                  {/* Gradient overlay on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-[var(--color-muted-terracotta)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  {/* Icon */}
                  <div className='z-10 relative flex justify-center items-center bg-gradient-to-br from-[var(--color-muted-terracotta)]/20 to-[var(--color-earth-brown)]/10 mb-6 rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-300'>
                    <IconComponent
                      className='w-10 h-10 text-[var(--color-muted-terracotta)]'
                      aria-hidden='true'
                    />
                  </div>

                  {/* Name */}
                  <h3 className='z-10 relative mb-4 font-serif text-[var(--color-deep-cocoa)] group-hover:text-[var(--color-terracotta-deep)] text-2xl transition-colors duration-300'>
                    {mention.name}
                  </h3>

                  {/* Description */}
                  <p className='z-10 relative text-[var(--color-deep-cocoa)] leading-relaxed'>
                    {mention.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </m.div>

        {/* Closing message */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 lg:mt-20 text-center'
        >
          <div className='bg-white/70 shadow-warm-lg backdrop-blur-sm mx-auto p-8 lg:p-10 border border-subtle rounded-2xl max-w-3xl'>
            <p className='font-serif text-[var(--color-deep-cocoa)] text-lg lg:text-xl italic leading-relaxed'>
              {closingMessage}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
