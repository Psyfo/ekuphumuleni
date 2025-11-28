import React from 'react';
import type { Metadata } from 'next';

import TeamHeroSection from './TeamHeroSection';
import BoardSection from './BoardSection';
import AdministrationSection from './AdministrationSection';
import StaffSection from './StaffSection';

export const metadata: Metadata = {
  title: 'Meet the Team | Ekuphumuleni Geriatric Nursing Home',
  description:
    'Meet the dedicated team at Ekuphumuleni - from our board of trustees to our compassionate staff, every member plays a vital role in providing exceptional geriatric care.',
  openGraph: {
    title: 'Meet the Team | Ekuphumuleni Geriatric Nursing Home',
    description:
      'Meet the dedicated team at Ekuphumuleni - from our board of trustees to our compassionate staff, every member plays a vital role in providing exceptional geriatric care.',
    type: 'website',
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
