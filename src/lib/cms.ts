import 'server-only';

import config from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { cache } from 'react';

import { CMS_TAG } from '@/payload/revalidate';

/**
 * The site's only door to the CMS. Pages ask for a page's content or a list of
 * records and get back the same plain shapes they used under Sanity: photo
 * fields arrive as a ready-to-use address ("image" becomes "imageUrl",
 * "founderImage" becomes "founderImageUrl"), and records carry an `_id`.
 *
 * Reads go through Payload's Local API, in the same process as the site, so
 * there is no network hop. Results are cached until an editor saves, at which
 * point the Payload hooks in src/payload/revalidate.ts clear the CMS_TAG.
 */

// The content is free-form JSON that the page components already know how to
// read, exactly as they did with Sanity's untyped query results.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CmsData = any;

type PageSlug =
  | 'home-page'
  | 'about-page'
  | 'services-page'
  | 'facilities-page'
  | 'team-page'
  | 'donors-page'
  | 'contact-page'
  | 'privacy-page'
  | 'terms-page';

const DROP = new Set(['createdAt', 'updatedAt', 'globalType']);

const isMedia = (v: unknown): v is { url: string; mimeType?: string } =>
  !!v && typeof v === 'object' && typeof (v as { url?: unknown }).url === 'string' && 'mimeType' in v;

/** Serve uploads from the site's own address, whatever host saved them. */
const relative = (url: string) => url.replace(/^https?:\/\/[^/]+/, '');

function toSiteShape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(toSiteShape);
  if (!value || typeof value !== 'object') return value;
  const out: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(value)) {
    if (DROP.has(key)) continue;
    if (key === 'image' || /Image$/.test(key)) {
      out[`${key}Url`] = isMedia(v) ? relative(v.url) : null;
      continue;
    }
    out[key] = toSiteShape(v);
  }
  return out;
}

const withId = (doc: Record<string, unknown>) => ({ ...(toSiteShape(doc) as object), _id: String(doc.id) });

const cached = <A extends unknown[], R>(key: string, fn: (...args: A) => Promise<R>) =>
  cache(unstable_cache(fn, ['cms', key], { tags: [CMS_TAG] }));

export const getPage = cached('page', async (slug: PageSlug): Promise<CmsData> => {
  const payload = await getPayload({ config });
  const doc = await payload.findGlobal({ slug, depth: 1 });
  return toSiteShape(doc);
});

/** The Donate button and dialog settings; empty fields fall back in donate-content.ts. */
export const getDonateSettings = cached('donate', async (): Promise<CmsData> => {
  const payload = await getPayload({ config });
  return toSiteShape(await payload.findGlobal({ slug: 'donate', depth: 0 }));
});

export const getTeamMembers = cached('team-members', async (department: string): Promise<CmsData[]> => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: 'team-members',
    where: { department: { equals: department } },
    sort: ['order', 'name'],
    depth: 1,
    limit: 200,
  });
  return docs.map((d) => withId(d as unknown as Record<string, unknown>));
});

export const getStaffPhotos = cached('staff-photos', async (): Promise<CmsData[]> => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: 'staff-photos', sort: 'order', depth: 1, limit: 200 });
  return docs.map((d) => withId(d as unknown as Record<string, unknown>));
});

export const getDonorYears = cached('donor-years', async (): Promise<CmsData[]> => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: 'donor-years', sort: 'order', depth: 0, limit: 200 });
  return docs.map((d) => withId(d as unknown as Record<string, unknown>));
});
