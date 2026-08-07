import Script from 'next/script';

/**
 * Self-hosted Umami page-view beacon (cookieless, no personal data collected).
 *
 * The website id is public by design (it ships in the page HTML) but is supplied
 * at build time via `NEXT_PUBLIC_UMAMI_WEBSITE_ID` so it stays out of the repo.
 * When the variable is unset, for example local dev, CI, or a preview build,
 * nothing renders and no beacon is sent.
 */
export default function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  const src =
    process.env.NEXT_PUBLIC_UMAMI_SRC ??
    'https://analytics.lab.mahlangu.dev/script.js';

  return <Script src={src} data-website-id={websiteId} strategy='afterInteractive' />;
}
