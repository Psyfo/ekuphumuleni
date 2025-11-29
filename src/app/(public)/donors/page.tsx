import type { Metadata } from 'next';
import DonorsHeroSection from './DonorsHeroSection';
import SpecialMentionsSection from './SpecialMentionsSection';
import DonorWallSection from './DonorWallSection';

export const metadata: Metadata = {
  title: 'Our Generous Donors & Supporters',
  description:
    "Honoring the generous donors and supporters who have made our mission of compassionate elderly care possible. Recognize the individuals, organizations, and businesses who have contributed to Ekuphumuleni's 40+ years of service. Every contribution has touched countless lives.",
  keywords: [
    'Ekuphumuleni donors',
    'nursing home supporters',
    'elderly care donations',
    'geriatric care support',
    'Zimbabwe charity',
    'philanthropic support',
    'donor recognition',
  ],
  openGraph: {
    title: 'Our Generous Donors & Supporters | Ekuphumuleni',
    description:
      'Honoring the generous donors and supporters who have made our mission of compassionate elderly care possible. Every contribution has touched countless lives.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/donors',
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

export default function DonorsPage() {
  return (
    <main>
      <DonorsHeroSection />
      <DonorWallSection />
      <SpecialMentionsSection />
    </main>
  );
}
