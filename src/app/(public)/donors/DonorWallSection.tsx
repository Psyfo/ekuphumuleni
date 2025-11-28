'use client';

import { motion } from 'framer-motion';

const donors2003 = [
  'A J Moyo',
  'Addington Hospital',
  'Allan Gray Trust',
  'Ann Glennie',
  'Barbara Parker',
  'Beira-Corridor Group',
  'Bridfords',
  'Bulawayo Jaycees',
  'C Vambe',
  'CBC Building Society',
  'Chris & Caroline Andersen',
  'Colleen Goredema',
  'Dave Moyo',
  'Dawn Harris',
  'Diana Harvey and Peter MacMillan',
  'Dr & Mrs D Roberts',
  'Dr H Madzimbamuto',
  'Dr R D Pargeter',
  'Dutch Reformed Church in Africa',
  'E A Stockil',
  'Elizabeth Pittaway',
  'F T Mandiringana',
  'Frances Atkinson',
  'Freda Tait',
  'Fred Kunaka',
  'Gail Bruce',
  'Gweru Club',
  'H J van Niekerk',
  'The late Isabel Shaw',
  'J F Stephenson',
  'J Gibson-Cornish',
  'Jennifer Sutton',
  'Joyce Giles',
  'June Greenfield',
  'Katherine MacMillan',
  'L D Black',
  'L J M Walker',
  'Liberty Life',
  'M W P Passaportis',
  'Manuel Albas',
  'Margaret Haddon',
  'Matthew Rusike Foundation',
  'Midlands Association for the Disabled',
  'Mrs L Stevenson',
  'Mrs R Gibbs',
  'Myra Sullivan',
  'Old Mutual',
  'Operating Theatre Staff Memorial Fund',
  'P E Moore',
  'P J De Beer',
  'P K van der Merwe',
  'R W Creber',
  'RAWU Gweru Branch',
  'Rotary Club of Gweru',
  'Sally Hunt',
  'Scots Kirk',
  "St Monica's Guild",
  'Susie Cowie',
  'The Standard Bank Foundation',
  'The Tait Family',
  'The late Tom Shaw',
  'V Chitiyo',
  'W.P. Farrow',
  'W.T. Pinn',
  'Wadzanai Holland',
];

const donors2004 = [
  'Brian Conolly',
  'C Gandanzara',
  'Chaplin Club',
  'Chris Brown',
  'D M Fereday',
  'D Maravanyika',
  'Dave Sanderson',
  'Dutch Reformed Church in Zimbabwe',
  'E A Moyo',
  'Ernst & Young',
  'First Banking Corporation',
  'G Muzondiwa',
  'Gweru Combined Churches',
  'Gweru Round Table',
  'J V Kok',
  'Jill Chikunguwo',
  'Joe and Irene Mhaka',
  'Josiah Tungamirai',
  'Kingdom Bank',
  'Muriel Conolly',
  'National Social Security Authority',
  'Neatline',
  'NMB',
  'P J de Beer',
  'Raymond Blose',
  'S Mutemererwa',
  'Saving Grace Christian Church',
  'Scotch and Soda Night Club',
  'T F Thebe',
  'Vasty Mazhindu',
  'WT Pinn',
  'Z Katsande',
  'ZB Building Society',
  'ZB Life Assurance',
];

export default function DonorWallSection() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto px-4 container'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 !text-3xl lg:!text-4xl heading-2'>
            Wall of Gratitude
          </h2>
          <div className='bg-gradient-to-r from-transparent via-[var(--color-muted-terracotta)] to-transparent mx-auto mb-6 rounded-full w-24 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>
            Honoring those whose generosity has sustained our mission of
            compassionate care
          </p>
        </motion.div>

        {/* 2003 Donors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <h3 className='mb-8 font-serif text-[var(--color-deep-cocoa)] text-2xl md:text-3xl text-center'>
            2003
          </h3>
          <div className='bg-white shadow-warm-lg p-8 md:p-12 border border-subtle rounded-2xl'>
            <div className='gap-x-8 gap-y-3 columns-1 sm:columns-2 md:columns-3 lg:columns-4'>
              {donors2003.map((donor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.015 }}
                  className='group mb-3 break-inside-avoid'
                >
                  <p className='text-[var(--color-earth-brown)] group-hover:text-[var(--color-muted-terracotta)] leading-relaxed transition-colors duration-200'>
                    {donor}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2004 Donors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className='mb-8 font-serif text-[var(--color-deep-cocoa)] text-2xl md:text-3xl text-center'>
            2004
          </h3>
          <div className='bg-white shadow-warm-lg p-8 md:p-12 border border-subtle rounded-2xl'>
            <div className='gap-x-8 gap-y-3 columns-1 sm:columns-2 md:columns-3 lg:columns-4'>
              {donors2004.map((donor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.015 }}
                  className='group mb-3 break-inside-avoid'
                >
                  <p className='text-[var(--color-earth-brown)] group-hover:text-[var(--color-muted-terracotta)] leading-relaxed transition-colors duration-200'>
                    {donor}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
