import React from 'react';
import type { Metadata } from 'next';

import AboutHeroSection from './AboutHeroSection';

import ImpactStatisticsSection from './ImpactStatisticsSection';
import EstablishmentSection from './EstablishmentSection';
import MissionVisionSection from './MissionVisionSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Ekuphumuleni Geriatric Nursing Home - over 40 years of compassionate geriatric care in Bulawayo, Zimbabwe. Discover our mission to provide dignified, professional elderly care, our vision for excellence, and the values that guide our dedicated team.',
  keywords: [
    'about Ekuphumuleni',
    'geriatric care history',
    'elderly care mission',
    'nursing home values',
    'Zimbabwe elderly care history',
    'Bulawayo nursing home',
    'compassionate care philosophy',
  ],
  openGraph: {
    title: 'About Us | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Over 40 years of compassionate geriatric care in Bulawayo, Zimbabwe. Learn about our mission, vision, values, and legacy of excellence in elderly care.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/about',
    images: [
      {
        url: 'https://ekuphumuleni.ngo/images/brand/ekuphumuleni_logo.png',
        width: 512,
        height: 512,
        alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <EstablishmentSection />
      <MissionVisionSection />
      <ImpactStatisticsSection />
    </main>
  );
}
