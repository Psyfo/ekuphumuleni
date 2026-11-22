import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import Navigation from '@/components/Navigation';
import UmamiAnalytics from '@/components/UmamiAnalytics';
import { resolveDonateContent } from '@/components/donate-content';
import { getDonateSettings } from '@/lib/cms';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Donate content is fetched once here and shared with the header and footer.
  // Falls back to the bundled defaults if the CMS is empty or unreachable.
  let donate;
  try {
    donate = resolveDonateContent(await getDonateSettings());
  } catch {
    donate = resolveDonateContent(null);
  }

  return (
    <MotionProvider>
      <Navigation donate={donate} />
      <div id='main-content' tabIndex={-1} className='focus:outline-none'>
        {children}
      </div>
      <Footer donate={donate} />
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      <UmamiAnalytics />
    </MotionProvider>
  );
}
