export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-05-28';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';

/**
 * True once NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local.
 * Use this to guard any code that calls the Sanity API.
 */
export const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
