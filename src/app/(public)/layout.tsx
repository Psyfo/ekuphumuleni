import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import Navigation from '@/components/Navigation';
import { resolveDonateContent } from '@/components/donate-content';
import { client } from '@/sanity/lib/client';
import { DONATE_SETTINGS_QUERY } from '@/sanity/lib/queries';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Donate content is fetched once here and shared with the header and footer.
  // Falls back to the bundled defaults if the CMS is empty or unreachable.
  let donate;
  try {
    donate = resolveDonateContent(await client.fetch(DONATE_SETTINGS_QUERY));
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
    </MotionProvider>
  );
}
