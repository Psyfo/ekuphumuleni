import type { Metadata } from 'next';
import './styles/globals.css';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Ekuphumuleni | Home',
  description: 'Ekuphumuleni geriatric nursing home',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Navigation />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
