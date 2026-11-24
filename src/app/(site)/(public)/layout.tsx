import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import Navigation from '@/components/Navigation';
import UmamiAnalytics from '@/components/UmamiAnalytics';

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
      <UmamiAnalytics />
    </MotionProvider>
  );
}
