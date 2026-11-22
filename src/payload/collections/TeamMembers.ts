// Ported field for field from the original Sanity schema (November 2026).
import type { CollectionConfig } from 'payload';

import { contentCollection } from '../content-collection';

export const TeamMembers: CollectionConfig = contentCollection({
  slug: 'team-members',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  fields: [
    {
      name: 'name',
      label: 'Full Name',
      required: true,
      type: 'text',
    },
    {
      name: 'role',
      label: 'Role / Job Title',
      type: 'text',
    },
    {
      name: 'department',
      label: 'Department',
      required: true,
      type: 'radio',
      options: [
        {
          label: 'Board of Trustees',
          value: 'board',
        },
        {
          label: 'Administration',
          value: 'administration',
        },
        {
          label: 'Nursing Staff',
          value: 'nursing',
        },
        {
          label: 'Care Workers',
          value: 'care',
        },
      ],
      admin: {
        description:
          'Board of Trustees and Administration members appear as individual profile cards on the /team page. Nursing Staff and Care Workers do not have individual profiles yet: add their group photos under “Staff Photos” instead.',
      },
    },
    {
      name: 'image',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      admin: {
        rows: 3,
      },
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      admin: {
        description:
          'Controls display order within the department section. Start at 1 for the first person to show. Board Chairperson and Administrator are typically order 1.',
      },
    },
  ],
});
