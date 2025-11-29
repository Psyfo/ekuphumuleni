import type { Metadata } from 'next';
import './styles/globals.css';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://ekuphumuleni.ngo'),
  title: {
    default:
      'Ekuphumuleni Geriatric Nursing Home | Compassionate Elderly Care in Bulawayo, Zimbabwe',
    template: '%s | Ekuphumuleni',
  },
  description:
    'Ekuphumuleni Geriatric Nursing Home provides compassionate, professional elderly care in Bulawayo, Zimbabwe. Over 40 years of excellence in geriatric nursing, skilled medical care, rehabilitation services, and dignified senior living in a warm, caring environment.',
  keywords: [
    'geriatric care Zimbabwe',
    'nursing home Bulawayo',
    'elderly care Zimbabwe',
    'senior care Bulawayo',
    'old age home Zimbabwe',
    'geriatric nursing home',
    'elderly nursing care',
    'senior living Bulawayo',
    'Zimbabwe elderly care',
    'compassionate geriatric care',
    'skilled nursing facility',
    'rehabilitation services elderly',
    'palliative care Zimbabwe',
    'dementia care Bulawayo',
    'Ekuphumuleni',
    'geriatric services Zimbabwe',
    'elderly healthcare',
    'senior wellness programs',
    'respite care Zimbabwe',
  ],
  authors: [{ name: 'Ekuphumuleni Geriatric Nursing Home' }],
  creator: 'Ekuphumuleni Geriatric Nursing Home',
  publisher: 'Ekuphumuleni Geriatric Nursing Home',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ekuphumuleni.ngo',
    siteName: 'Ekuphumuleni Geriatric Nursing Home',
    title:
      'Ekuphumuleni Geriatric Nursing Home | Compassionate Elderly Care in Bulawayo, Zimbabwe',
    description:
      'Over 40 years of excellence in geriatric care. Professional nursing, rehabilitation, and compassionate elderly care in Bulawayo, Zimbabwe.',
    images: [
      {
        url: '/images/brand/ekuphumuleni_logo.png',
        width: 512,
        height: 512,
        alt: 'Ekuphumuleni Geriatric Nursing Home Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Ekuphumuleni Geriatric Nursing Home | Compassionate Elderly Care in Bulawayo, Zimbabwe',
    description:
      'Over 40 years of excellence in geriatric care. Professional nursing, rehabilitation, and compassionate elderly care in Bulawayo, Zimbabwe.',
    images: ['/images/brand/ekuphumuleni_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Ekuphumuleni Geriatric Nursing Home',
              alternateName: 'Ekuphumuleni',
              url: 'https://ekuphumuleni.ngo',
              logo: 'https://ekuphumuleni.ngo/images/brand/ekuphumuleni_logo.png',
              description:
                'Non-profit organization providing compassionate geriatric nursing care and elderly support services in Bulawayo, Zimbabwe.',
              foundingDate: '1980',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'VHCG+86V, Old Falls Rd',
                addressLocality: 'Bulawayo',
                addressCountry: 'ZW',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-20.17095',
                longitude: '28.62589',
              },
              telephone: '+263-292-216-877',
              email: 'administration@ekuphumuleni.ngo',
              sameAs: [
                // Add social media profiles when available
                // 'https://www.facebook.com/ekuphumuleni',
                // 'https://twitter.com/ekuphumuleni',
              ],
              areaServed: {
                '@type': 'Country',
                name: 'Zimbabwe',
              },
              serviceType: [
                'Geriatric Nursing Care',
                'Elderly Care Services',
                'Skilled Nursing Facility',
                'Rehabilitation Services',
                'Palliative Care',
                'Senior Wellness Programs',
              ],
              additionalType: 'https://schema.org/HealthAndBeautyBusiness',
              nonprofitStatus: 'Nonprofit501c3',
              slogan: 'A Place of Rest and Restoration',
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
