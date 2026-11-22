/* eslint-disable @typescript-eslint/no-explicit-any -- one-off migration over untyped Sanity JSON */
/**
 * Copies all published content from Sanity into Payload: the 9 page globals,
 * team members, staff photos, donor years, and every image they use (downloaded
 * from Sanity's CDN and re-uploaded into the private Backblaze bucket).
 *
 * Run through the npm scripts so Doppler supplies the right environment:
 *   npm run cms:import              (dev database)
 *   npm run cms:import:staging      (staging, from this machine)
 *   npm run cms:import:production   (production, from this machine)
 *
 * It replaces what is in Payload. If the target already holds content, it
 * refuses unless CMS_IMPORT_REPLACE=yes is set, so it cannot silently wipe
 * edits made in the new admin after the switch-over.
 */
import { DeleteObjectsCommand, ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
import config from '@payload-config';
import { createClient } from '@sanity/client';
import { getPayload, type Payload } from 'payload';

type Any = Record<string, any>;

const GLOBALS: Record<string, string> = {
  homePageSettings: 'home-page',
  aboutPageSettings: 'about-page',
  servicesPageSettings: 'services-page',
  facilitiesPageSettings: 'facilities-page',
  teamPageSettings: 'team-page',
  donorsPageSettings: 'donors-page',
  contactPageSettings: 'contact-page',
  privacyPageSettings: 'privacy-page',
  termsPageSettings: 'terms-page',
};
const COLLECTIONS: Record<string, 'team-members' | 'staff-photos' | 'donor-years'> = {
  teamMember: 'team-members',
  staffPhoto: 'staff-photos',
  donorYear: 'donor-years',
};

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
  perspective: 'published',
  // No token on purpose: read exactly what the public site shows. With a token,
  // Sanity also returns documents whose id contains a dot (an old seed left a
  // duplicate "Mrs Nokuthula Moyo" that way), which the live site never sees.
});

const isImage = (v: unknown): v is Any =>
  !!v && typeof v === 'object' && (v as Any)._type === 'image' && !!(v as Any).asset?._ref;

/** Finds every image in a document, with the best description available for it. */
function collectImages(value: unknown, context: string, found: Map<string, { alt: string; hotspot?: Any }>) {
  if (Array.isArray(value)) {
    value.forEach((v) => collectImages(v, context, found));
    return;
  }
  if (!value || typeof value !== 'object') return;
  const obj = value as Any;
  for (const [key, v] of Object.entries(obj)) {
    if (isImage(v)) {
      const alt =
        (typeof obj.alt === 'string' && obj.alt.trim()) ||
        (typeof obj.name === 'string' && obj.name.trim()) ||
        (typeof obj.title === 'string' && obj.title.trim()) ||
        (key === 'founderImage' && typeof obj.founderName === 'string' && obj.founderName.trim()) ||
        `${context} photo`;
      if (!found.has(v.asset._ref)) found.set(v.asset._ref, { alt, hotspot: v.hotspot });
    } else collectImages(v, context, found);
  }
}

/** Sanity document to Payload data: images become media ids, Sanity's own keys go. */
function transform(value: unknown, media: Map<string, number>): unknown {
  if (Array.isArray(value)) return value.map((v) => transform(v, media));
  if (isImage(value)) return media.get(value.asset._ref) ?? null;
  if (!value || typeof value !== 'object') return value;
  const out: Any = {};
  for (const [k, v] of Object.entries(value as Any)) {
    if (k.startsWith('_')) continue;
    out[k] = transform(v, media);
  }
  return out;
}

/** Removes this environment's uploaded files (only its own prefix, e.g. "dev/media/"). */
async function clearBucketPrefix() {
  const bucket = process.env.S3_BUCKET;
  const prefix = process.env.S3_PREFIX?.trim();
  if (!bucket || !prefix) return;
  const s3 = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
    },
  });
  let removed = 0;
  let token: string | undefined;
  do {
    const page = await s3.send(
      new ListObjectsV2Command({ Bucket: bucket, Prefix: `${prefix}/`, ContinuationToken: token }),
    );
    const keys = (page.Contents ?? []).map((o) => ({ Key: o.Key! }));
    if (keys.length) {
      await s3.send(new DeleteObjectsCommand({ Bucket: bucket, Delete: { Objects: keys } }));
      removed += keys.length;
    }
    token = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (token);
  console.log(`Bucket: removed ${removed} old files under ${prefix}/`);
}

async function hasContent(payload: Payload) {
  const counts = await Promise.all(
    (['media', 'team-members', 'staff-photos', 'donor-years'] as const).map(
      (c) => payload.count({ collection: c }).then((r) => r.totalDocs),
    ),
  );
  return counts.some((n) => n > 0);
}

async function main() {
  const payload = await getPayload({ config });

  if ((await hasContent(payload)) && process.env.CMS_IMPORT_REPLACE !== 'yes') {
    console.error('This database already has content. Set CMS_IMPORT_REPLACE=yes to replace it with Sanity\'s.');
    process.exit(1);
  }

  const types = [...Object.keys(GLOBALS), ...Object.keys(COLLECTIONS)];
  const docs: Any[] = await sanity.fetch(`*[_type in $types && !(_id in path("drafts.**"))]`, { types });
  console.log(`Sanity: ${docs.length} published documents`);

  // Clear what an earlier run left behind, so a re-run is a clean refresh.
  // Payload's own delete refuses to remove a photo that a page still requires
  // (a gallery slot, say), which protects editors but blocks a full reset, so
  // the content tables are emptied directly. CASCADE also empties the page
  // tables and their saved history, which are written fresh below.
  await (payload.db as unknown as { pool: { query: (sql: string) => Promise<unknown> } }).pool.query(
    'TRUNCATE media, team_members, staff_photos, donor_years RESTART IDENTITY CASCADE',
  );
  await clearBucketPrefix();

  // 1. Images.
  const wanted = new Map<string, { alt: string; hotspot?: Any }>();
  for (const d of docs) collectImages(d, d.name ?? d.caption ?? d._type, wanted);
  const assets: Any[] = await sanity.fetch(
    `*[_type == "sanity.imageAsset" && _id in $ids]{ _id, url, originalFilename, mimeType, altText }`,
    { ids: [...wanted.keys()] },
  );
  const media = new Map<string, number>();
  for (const a of assets) {
    const res = await fetch(a.url);
    if (!res.ok) throw new Error(`Download failed (${res.status}) for ${a._id}`);
    const data = Buffer.from(await res.arrayBuffer());
    const info = wanted.get(a._id)!;
    const ext = a.url.split('.').pop();
    const name = (a.originalFilename as string | undefined)?.replace(/\s+/g, '-') ?? `${a._id}.${ext}`;
    const doc = await payload.create({
      collection: 'media',
      data: {
        alt: (a.altText || info.alt).slice(0, 180),
        ...(info.hotspot ? { focalX: info.hotspot.x * 100, focalY: info.hotspot.y * 100 } : {}),
      },
      file: { data, mimetype: a.mimeType, name, size: data.length },
    });
    media.set(a._id, doc.id as number);
    console.log(`  photo  ${name}  (${Math.round(data.length / 1024)} KB)`);
  }
  console.log(`Images: ${media.size} of ${wanted.size} uploaded`);

  // 2. Pages.
  for (const d of docs.filter((x) => GLOBALS[x._type])) {
    await payload.updateGlobal({ slug: GLOBALS[d._type] as any, data: transform(d, media) as any });
    console.log(`  page   ${GLOBALS[d._type]}`);
  }

  // 3. Records.
  for (const d of docs.filter((x) => COLLECTIONS[x._type])) {
    await payload.create({ collection: COLLECTIONS[d._type], data: transform(d, media) as any });
  }
  for (const [type, slug] of Object.entries(COLLECTIONS)) {
    console.log(`  ${slug}: ${docs.filter((x) => x._type === type).length}`);
  }

  console.log('Import complete.');
  process.exit(0);
}

// `payload run` loads this module and exits once it settles, so wait here.
try {
  await main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
