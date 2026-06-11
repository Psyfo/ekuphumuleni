import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import Navigation from '@/components/Navigation';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <Navigation />
      <div id='main-content' tabIndex={-1} className='focus:outline-none'>
        {children}
      </div>
      <Footer />
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
    </MotionProvider>
  );
}
