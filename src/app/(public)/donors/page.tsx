import type { Metadata } from 'next';
import DonorsHeroSection from './DonorsHeroSection';
import SpecialMentionsSection from './SpecialMentionsSection';
import DonorWallSection from './DonorWallSection';

export const metadata: Metadata = {
  title: 'Our Generous Donors & Supporters | Ekuphumuleni',
  description:
    'Honoring the generous donors and supporters who have made our mission of compassionate elderly care possible. Every contribution has touched countless lives.',
  openGraph: {
    title: 'Our Generous Donors & Supporters | Ekuphumuleni',
    description:
      'Honoring the generous donors and supporters who have made our mission of compassionate elderly care possible.',
    type: 'website',
  },
};

export default function DonorsPage() {
  return (
    <main>
      <DonorsHeroSection />
      <DonorWallSection />
      <SpecialMentionsSection />
    </main>
  );
}
