import React from 'react';
import type { Metadata } from 'next';

import TeamHeroSection from './TeamHeroSection';
import BoardSection from './BoardSection';
import AdministrationSection from './AdministrationSection';
import StaffSection from './StaffSection';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet the team at Ekuphumuleni Geriatric Nursing Home. Our board of trustees, administrators, nursing staff, and care workers manage the day-to-day running of the home and delivery of elderly care in Bulawayo, Zimbabwe.',
  keywords: [
    'nursing home staff',
    'geriatric care team',
    'healthcare professionals',
    'nursing staff Bulawayo',
    'elderly care team',
    'board of trustees',
    'nursing home administration',
    'skilled caregivers',
  ],
  openGraph: {
    title: 'Meet the Team | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Meet our team - board of trustees, administrators, nursing staff, and care workers responsible for the operation of Ekuphumuleni and delivery of geriatric care.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/team',
    images: [
      {
        url: 'https://ekuphumuleni.ngo/images/brand/ekuphumuleni_logo-seo.png',
        width: 512,
        height: 512,
        alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
      },
    ],
  },
};

export default function TeamPage() {
  return (
    <main>
      <TeamHeroSection />
      <BoardSection />
      <AdministrationSection />
      <StaffSection />
    </main>
  );
}
