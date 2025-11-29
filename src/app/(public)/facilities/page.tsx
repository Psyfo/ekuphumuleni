import React from 'react';
import type { Metadata } from 'next';

import FacilitiesHeroSection from './FacilitiesHeroSection';
import FacilitiesShowcaseSection from './FacilitiesShowcaseSection';
import SustainabilitySection from './SustainabilitySection';

export const metadata: Metadata = {
  title: 'Our Facilities',
  description:
    "Explore Ekuphumuleni's modern, comfortable facilities designed for exceptional senior care in Bulawayo. Features include spacious private and shared rooms, accessible common areas, sustainable solar energy, therapeutic organic gardens, and secure outdoor spaces for residents.",
  keywords: [
    'nursing home facilities',
    'geriatric care facilities',
    'elderly care amenities',
    'senior living spaces',
    'accessible nursing home',
    'sustainable elderly care',
    'Bulawayo nursing home facilities',
    'therapeutic gardens',
  ],
  openGraph: {
    title: 'Our Facilities | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Modern, comfortable facilities designed for senior care. Spacious living areas, sustainable solar energy, therapeutic organic gardens, and more.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/facilities',
    images: [
      {
        url: '/images/brand/ekuphumuleni_logo.png',
        width: 512,
        height: 512,
        alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
      },
    ],
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
