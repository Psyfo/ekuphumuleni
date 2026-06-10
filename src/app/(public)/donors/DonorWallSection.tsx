'use client';

import { m } from 'framer-motion';

interface DonorYear {
  _id?: string;
  year: number;
  donorNames: string[];
}

interface DonorWallSectionData {
  heading?: string;
  subtitle?: string;
}

interface DonorWallSectionProps {
  data?: DonorWallSectionData;
  years: DonorYear[];
}

export default function DonorWallSection({ data, years }: DonorWallSectionProps) {
  const heading = data?.heading ?? 'Wall of Gratitude';
  const subtitle =
    data?.subtitle ??
    'Honoring those whose generosity has sustained our mission of compassionate care';

  return (
    <section className='bg-white py-20'>
      <div className='mx-auto px-4 container'>
        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            {heading}
          </h2>
          <div className='bg-gradient-to-r from-transparent via-[var(--color-muted-terracotta)] to-transparent mx-auto mb-6 rounded-full w-24 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>
            {subtitle}
          </p>
        </m.div>

        {years.map((yearEntry, yearIndex) => (
          <m.div
            key={yearEntry._id ?? yearEntry.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: yearIndex === 0 ? 0 : 0.2 }}
            className={yearIndex < years.length - 1 ? 'mb-16' : ''}
          >
            <h3 className='mb-8 font-serif text-[var(--color-deep-cocoa)] text-2xl md:text-3xl text-center'>
              {yearEntry.year}
            </h3>
            <div className='bg-white shadow-warm-lg p-8 md:p-12 border border-subtle rounded-2xl'>
              <div className='gap-x-8 gap-y-3 columns-1 sm:columns-2 md:columns-3 lg:columns-4'>
                {yearEntry.donorNames.map((donor, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.015 }}
                    className='group mb-3 break-inside-avoid'
                  >
                    <p className='text-[var(--color-deep-cocoa)] group-hover:text-[var(--color-terracotta-deep)] leading-relaxed transition-colors duration-200'>
                      {donor}
                    </p>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
