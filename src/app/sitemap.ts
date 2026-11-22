import type { MetadataRoute } from 'next';

/**
 * The sitemap search engines read. Pages render on request from the CMS, so
 * they are listed here by hand rather than discovered from the build. Always
 * points at the canonical domain, even when served from staging.
 */
const SITE = 'https://ekuphumuleni.ngo';

type Entry = [path: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number];

const PAGES: Entry[] = [
  ['', 'daily', 1.0],
  ['/about', 'weekly', 0.9],
  ['/services', 'weekly', 0.9],
  ['/facilities', 'weekly', 0.9],
  ['/contact', 'weekly', 0.9],
  ['/team', 'monthly', 0.7],
  ['/donors', 'monthly', 0.7],
  ['/privacy', 'yearly', 0.5],
  ['/terms', 'yearly', 0.5],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(([path, changeFrequency, priority]) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
