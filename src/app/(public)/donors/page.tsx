import type { Metadata } from 'next';
import DonorsHeroSection from './DonorsHeroSection';
import SpecialMentionsSection from './SpecialMentionsSection';
import DonorWallSection from './DonorWallSection';

export const metadata: Metadata = {
  title: 'Our Generous Donors & Supporters',
  description:
    "Honoring the donors and supporters who help sustain our elderly care services. Recognize the individuals, organizations, and businesses who have contributed to Ekuphumuleni's 40+ years of service.",
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
      'Honoring the donors and supporters who make our elderly care services possible at Ekuphumuleni.',
    type: 'website',
    url: 'https://ekuphumuleni.ngo/donors',
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

export default function DonorsPage() {
  return (
    <main>
      <DonorsHeroSection />
      <DonorWallSection />
      <SpecialMentionsSection />
    </main>
  );
}
