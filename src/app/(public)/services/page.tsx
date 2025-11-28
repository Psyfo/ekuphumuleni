import React from 'react';
import type { Metadata } from 'next';

import ServicesHeroSection from './ServicesHeroSection';
import CoreServicesSection from './CoreServicesSection';
import NursingCareSection from './NursingCareSection';
import RehabilitationSection from './RehabilitationSection';

export const metadata: Metadata = {
  title: 'Our Services | Ekuphumuleni Geriatric Nursing Home',
  description:
    'Comprehensive geriatric care services including 24/7 skilled nursing, rehabilitation, personal care assistance, and wellness programs designed to enhance quality of life.',
  openGraph: {
    title: 'Our Services | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Comprehensive geriatric care services including 24/7 skilled nursing, rehabilitation, personal care assistance, and wellness programs designed to enhance quality of life.',
    type: 'website',
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
