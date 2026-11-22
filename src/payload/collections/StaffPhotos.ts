// Ported field for field from the original Sanity schema (November 2026).
import type { CollectionConfig } from 'payload';

import { contentCollection } from '../content-collection';

export const StaffPhotos: CollectionConfig = contentCollection({
  slug: 'staff-photos',
  labels: {
    singular: 'Staff Photo',
    plural: 'Staff Photos',
  },
  fields: [
    {
      name: 'image',
      label: 'Photo',
      required: true,
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'alt',
      label: 'Alt Text',
      required: true,
      type: 'text',
      admin: {
        description: 'Describe the photo for screen readers.',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      admin: {
        description: 'Displayed on the carousel slide (e.g. "Day Shift Staff").',
      },
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first in the carousel.',
      },
    },
  ],
});
