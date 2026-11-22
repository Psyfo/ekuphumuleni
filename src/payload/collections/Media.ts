import type { CollectionConfig } from 'payload';

import { anyone, signedIn } from '../access';
import { revalidateAfterChange, revalidateAfterDelete } from '../revalidate';

/**
 * Every photo uploaded through the admin. Files live in a private Backblaze
 * bucket and are served through the site (see payload.config.ts), so the
 * bucket itself is never public.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Photo', plural: 'Photo library' },
  admin: {
    group: 'Photos',
    useAsTitle: 'alt',
    description:
      'Every photo used on the site. You can upload here or straight from a page field. Landscape shots work best; after uploading, drag the focus point onto the most important part (usually a face) so it stays in frame on phones.',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
  },
  access: { read: anyone, create: signedIn, update: signedIn, delete: signedIn },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    // The site resizes images on request through next/image, so Payload keeps
    // the original plus one small crop for admin thumbnails.
    imageSizes: [{ name: 'thumbnail', width: 400, height: 400, position: 'centre' }],
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    crop: true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Description',
      type: 'text',
      required: true,
      maxLength: 180,
      admin: {
        description:
          'What the photo shows, for people who cannot see it and for search engines. For example: “Residents enjoying the garden in the afternoon sun.”',
      },
    },
  ],
};
