// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const TeamPage: GlobalConfig = pageGlobal({
  slug: 'team-page',
  label: 'Team Page',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroTitle',
              label: 'Page Heading',
              type: 'text',
              admin: {
                description: 'The main heading on the team page (e.g. "Meet the Team").',
              },
            },
            {
              name: 'heroSubtitle',
              label: 'Page Subtitle',
              type: 'textarea',
              admin: {
                description: 'The paragraph below the hero title.',
                rows: 3,
              },
            },
            {
              name: 'heroQuote',
              label: 'Hero Quote',
              type: 'textarea',
              admin: {
                description: 'The decorative quote in the hero card.',
                rows: 2,
              },
            },
          ],
        },
        {
          label: 'Board Section',
          fields: [
            {
              name: 'boardSection',
              label: 'Board of Trustees Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
              ],
              admin: {
                description:
                  'Controls the heading and intro text shown above the Board of Trustees profile grid on the /team page.',
              },
            },
          ],
        },
        {
          label: 'Administration Section',
          fields: [
            {
              name: 'adminSection',
              label: 'Administration Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
              ],
              admin: {
                description:
                  'Controls the heading and intro text shown above the Administration team profile grid on the /team page.',
              },
            },
          ],
        },
        {
          label: 'Staff Section',
          fields: [
            {
              name: 'staffSection',
              label: 'Staff Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
              ],
              admin: {
                description:
                  'Controls the heading and intro text shown above the staff photo carousel on the /team page.',
              },
            },
          ],
        },
        {
          label: 'SEO & Metadata',
          fields: [
            {
              name: 'seo',
              label: 'SEO & Metadata',
              type: 'group',
              fields: [
                {
                  name: 'metaTitle',
                  label: 'Page Title (for browser tab & Google)',
                  type: 'text',
                  admin: {
                    description:
                      'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Meet the Team | Ekuphumuleni Geriatric Nursing Home".',
                  },
                },
                {
                  name: 'metaDescription',
                  label: 'Meta Description (for Google & social sharing)',
                  type: 'textarea',
                  admin: {
                    description:
                      'The short description shown under the page title in Google results and when the page is shared on WhatsApp or Facebook. Keep it between 120 to 160 characters.',
                    rows: 3,
                  },
                },
              ],
              admin: {
                description:
                  'Controls what appears in Google search results and when the page is shared on social media. These fields are not visible on the page itself.',
              },
            },
          ],
        },
      ],
    },
  ],
});
