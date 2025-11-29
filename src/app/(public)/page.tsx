import React from 'react';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import DonorsSection from './components/DonorsSection';
import HeroSection from './components/HeroSection';
import MeetTheTeamSection from './components/MeetTheTeamSection';
import ServicesSection from './components/ServicesSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ekuphumuleni Geriatric Nursing Home - Over 40 years of elderly care in Bulawayo, Zimbabwe. Professional nursing, rehabilitation services, and dignified senior living in a supportive environment.',
  keywords: [
    'geriatric care Zimbabwe',
    'nursing home Bulawayo',
    'elderly care',
    'senior care',
    'old age home',
    'Ekuphumuleni',
    'Zimbabwe elderly services',
  ],
  openGraph: {
    title: 'Ekuphumuleni Geriatric Nursing Home | Elderly Care in Bulawayo',
    description:
      'Over 40 years of excellence in geriatric care. Professional nursing, rehabilitation, and elderly care in Bulawayo, Zimbabwe.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo',
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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MeetTheTeamSection />
      <DonorsSection />
      <ContactSection />
    </main>
  );
}
