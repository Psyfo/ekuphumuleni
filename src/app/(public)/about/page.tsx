import React from 'react';
import type { Metadata } from 'next';

import AboutHeroSection from './AboutHeroSection';

import ImpactStatisticsSection from './ImpactStatisticsSection';
import EstablishmentSection from './EstablishmentSection';
import MissionVisionSection from './MissionVisionSection';

export const metadata: Metadata = {
  title: 'About Us | Ekuphumuleni Geriatric Nursing Home',
  description:
    'Learn about Ekuphumuleni Geriatric Nursing Home - over 40 years of compassionate geriatric care in Soweto. Our mission, vision, values, and legacy of excellence.',
  openGraph: {
    title: 'About Us | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Learn about Ekuphumuleni Geriatric Nursing Home - over 40 years of compassionate geriatric care in Soweto. Our mission, vision, values, and legacy of excellence.',
    type: 'website',
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
