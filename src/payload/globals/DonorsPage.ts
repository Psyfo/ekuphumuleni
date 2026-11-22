// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const DonorsPage: GlobalConfig = pageGlobal({
  slug: 'donors-page',
  label: 'Donors Page',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroTitle',
              label: 'Hero Title',
              required: true,
              type: 'text',
            },
            {
              name: 'heroSubtitle',
              label: 'Hero Subtitle',
              required: true,
              type: 'textarea',
              admin: {
                rows: 3,
              },
            },
            {
              name: 'heroQuote',
              label: 'Hero Quote',
              required: true,
              type: 'textarea',
              admin: {
                rows: 2,
              },
            },
          ],
        },
        {
          label: 'Donor Wall Section',
          fields: [
            {
              name: 'donorWallSection',
              label: 'Donor Wall Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Special Mentions Section',
          fields: [
            {
              name: 'specialMentionsSection',
              label: 'Special Mentions Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'mentions',
                  label: 'Special Mentions',
                  required: true,
                  type: 'array',
                  fields: [
                    {
                      name: 'name',
                      label: 'Name',
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'iconName',
                      label: 'Icon',
                      required: true,
                      type: 'radio',
                      options: [
                        {
                          label: 'Building Library',
                          value: 'building-library',
                        },
                        {
                          label: 'Users',
                          value: 'users',
                        },
                        {
                          label: 'Heart',
                          value: 'heart',
                        },
                      ],
                    },
                    {
                      name: 'description',
                      label: 'Description',
                      required: true,
                      type: 'textarea',
                      admin: {
                        rows: 2,
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                  },
                  minRows: 1,
                },
                {
                  name: 'closingMessage',
                  label: 'Closing Message',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seo',
              label: 'SEO',
              type: 'group',
              fields: [
                {
                  name: 'metaTitle',
                  label: 'Meta Title',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'metaDescription',
                  label: 'Meta Description',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
