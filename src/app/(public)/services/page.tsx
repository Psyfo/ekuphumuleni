import React from 'react';
import type { Metadata } from 'next';

import ServicesHeroSection from './ServicesHeroSection';
import CoreServicesSection from './CoreServicesSection';
import NursingCareSection from './NursingCareSection';
import RehabilitationSection from './RehabilitationSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive geriatric care services at Ekuphumuleni: 24/7 skilled nursing care, physical rehabilitation, occupational therapy, personal care assistance, medication management, nutritional support, dementia care, palliative care, and wellness programs designed to enhance quality of life for seniors in Bulawayo, Zimbabwe.',
  keywords: [
    'geriatric care services',
    'skilled nursing care',
    'elderly rehabilitation',
    'dementia care Zimbabwe',
    'palliative care',
    'senior wellness programs',
    'occupational therapy elderly',
    'nursing home services Bulawayo',
    'medication management',
    'personal care assistance',
  ],
  openGraph: {
    title: 'Our Services | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Comprehensive geriatric care: 24/7 skilled nursing, rehabilitation, personal care assistance, dementia care, palliative care, and wellness programs.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/services',
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

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <CoreServicesSection />
      <NursingCareSection />
      <RehabilitationSection />
    </main>
  );
}
