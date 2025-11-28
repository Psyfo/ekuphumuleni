'use client';

import { motion, Variants } from 'framer-motion';
import { BuildingLibraryIcon, UsersIcon } from '@heroicons/react/24/outline';

// Custom Church/Cross icon component
const ChurchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 3v3m0 0v3m0-3h3m-3 0H9m3 6l-6 6v6h12v-6l-6-6z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 9h6v3l-3 3-3-3V9z'
    />
  </svg>
);

const specialMentions = [
  {
    name: 'Beit Trust',
    icon: BuildingLibraryIcon,
    description: 'Foundational support and enduring partnership',
  },
  {
    name: 'Jesus Latter Day',
    icon: ChurchIcon,
    description: 'Faith-driven commitment to compassionate care',
  },
  {
    name: 'Many Individual Well-Wishers',
    icon: UsersIcon,
    description: 'Countless acts of kindness from generous hearts',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function SpecialMentionsSection() {
  return (
    <section className='relative bg-gradient-to-br from-warm-beige via-off-white to-soft-sand py-20 overflow-hidden'>
      {/* Decorative elements */}
      <div className='top-0 left-0 absolute bg-earth-brown/5 blur-3xl rounded-full w-96 h-96' />
      <div className='right-0 bottom-0 absolute bg-terracotta/5 blur-3xl rounded-full w-96 h-96' />

      <div className='z-10 relative mx-auto px-4 container'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 font-serif text-deep-cocoa text-4xl md:text-5xl'>
            Special Mentions
          </h2>
          <div className='bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mb-6 w-24 h-1' />
          <p className='mx-auto max-w-2xl text-earth-brown text-lg'>
            We extend our deepest gratitude to these remarkable supporters whose
            extraordinary contributions have shaped our mission
          </p>
        </motion.div>

        {/* Special mentions cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl'
        >
          {specialMentions.map((mention) => {
            const IconComponent = mention.icon;
            return (
              <motion.div
                key={mention.name}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group'
              >
                <div className='flex flex-col items-center bg-white shadow-warm-lg hover:shadow-warm-xl p-8 border border-soft-sand hover:border-terracotta/30 rounded-2xl h-full text-center transition-all duration-300'>
                  {/* Icon */}
                  <div className='flex justify-center items-center bg-gradient-to-br from-terracotta/20 to-earth-brown/10 mb-6 rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-300'>
                    <IconComponent className='w-10 h-10 text-terracotta' />
                  </div>

                  {/* Name */}
                  <h3 className='mb-4 font-serif text-deep-cocoa group-hover:text-terracotta text-2xl transition-colors duration-300'>
                    {mention.name}
                  </h3>

                  {/* Description */}
                  <p className='text-earth-brown leading-relaxed'>
                    {mention.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <div className='bg-white/60 shadow-warm-lg backdrop-blur-sm mx-auto p-8 border border-soft-sand rounded-2xl max-w-3xl'>
            <p className='text-earth-brown text-lg italic leading-relaxed'>
              Every contribution, whether grand or humble, has woven threads of
              hope into the fabric of our community. Your generosity illuminates
              the path forward for those in our care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
