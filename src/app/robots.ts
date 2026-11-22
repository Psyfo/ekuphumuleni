import type { MetadataRoute } from 'next';

/**
 * Lets search engines in on the real site only. Any other address (the
 * staging copy on lab.mahlangu.dev, a local build) asks them to stay out, so a
 * test copy never competes with ekuphumuleni.ngo in search results.
 */
const CANONICAL = 'https://ekuphumuleni.ngo';

export default function robots(): MetadataRoute.Robots {
  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? CANONICAL).replace(/\/+$/, '');
  if (site !== CANONICAL) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/admin'] }],
    sitemap: `${CANONICAL}/sitemap.xml`,
    host: CANONICAL,
  };
}
