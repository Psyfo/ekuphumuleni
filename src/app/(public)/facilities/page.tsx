import React from 'react';
import type { Metadata } from 'next';

import FacilitiesHeroSection from './FacilitiesHeroSection';
import FacilitiesShowcaseSection from './FacilitiesShowcaseSection';
import SustainabilitySection from './SustainabilitySection';

export const metadata: Metadata = {
  title: 'Our Facilities | Ekuphumuleni Geriatric Nursing Home',
  description:
    'Explore our modern, comfortable facilities designed for senior care. From spacious living areas to sustainable initiatives including solar energy and organic gardens.',
  openGraph: {
    title: 'Our Facilities | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Explore our modern, comfortable facilities designed for senior care. From spacious living areas to sustainable initiatives including solar energy and organic gardens.',
    type: 'website',
  },
};

export default function FacilitiesPage() {
  return (
    <main>
      <FacilitiesHeroSection />
      <FacilitiesShowcaseSection />
      <SustainabilitySection />
    </main>
  );
}
