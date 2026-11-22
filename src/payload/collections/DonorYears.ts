// Ported field for field from the original Sanity schema (November 2026).
import type { CollectionConfig } from 'payload';

import { contentCollection } from '../content-collection';

export const DonorYears: CollectionConfig = contentCollection({
  slug: 'donor-years',
  labels: {
    singular: 'Donor Year',
    plural: 'Donor Years',
  },
  fields: [
    {
      // Shown as the record's name in lists ("2024 donors"); kept in step with
      // the year automatically, never typed.
      name: 'title',
      type: 'text',
      admin: { hidden: true },
      hooks: {
        beforeChange: [({ siblingData }) => (siblingData.year ? `${siblingData.year} donors` : undefined)],
      },
    },
    {
      name: 'year',
      label: 'Year',
      required: true,
      type: 'number',
    },
    {
      name: 'order',
      label: 'Display Order',
      required: true,
      type: 'number',
      admin: {
        description: 'Lower numbers are shown first on the Donors page.',
      },
    },
    {
      name: 'donorNames',
      label: 'Donor Names',
      required: true,
      type: 'text',
      hasMany: true,
      minRows: 1,
    },
  ],
});
