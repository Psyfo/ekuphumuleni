import React from 'react';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import DonorsSection from './components/DonorsSection';
import HeroSection from './components/HeroSection';
import MeetTheTeamSection from './components/MeetTheTeamSection';
import ServicesSection from './components/ServicesSection';

export const metadata = {
  title: 'Ekuphumuleni | Home',
  description: 'Geriatric Nursing Home',
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
