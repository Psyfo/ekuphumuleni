/**
 * scripts/sanity/lib.ts
 *
 * Shared Sanity client and utilities used by all seed modules.
 * Each page seed imports from here — never instantiates its own client.
 */

import path from 'path';
import fs from 'fs';
import { createReadStream } from 'fs';
import { createClient } from 'next-sanity';

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'mgvrdxr1';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-05-28';
export const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Absolute path to the Next.js project root (parent of scripts/). */
export const WORKSPACE_ROOT = path.resolve(__dirname, '../../');

/**
 * Upload a local /public image to Sanity CDN.
 * Pass the path relative to /public, e.g. `/images/team/board/ncube.jpg`.
 * Returns a Sanity image reference, or undefined if the file is missing.
 */
export async function uploadImage(
  publicPath: string,
): Promise<
  { _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined
> {
  const absPath = path.join(
    WORKSPACE_ROOT,
    'public',
    publicPath.replace(/^\//, ''),
  );
  if (!fs.existsSync(absPath)) {
    console.warn(`  ⚠  Image not found, skipping: ${absPath}`);
    return undefined;
  }
  const filename = path.basename(absPath);
  const asset = await client.assets.upload('image', createReadStream(absPath), {
    filename,
  });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}
