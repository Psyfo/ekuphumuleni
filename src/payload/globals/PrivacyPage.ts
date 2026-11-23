// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const PrivacyPage: GlobalConfig = pageGlobal({
  slug: 'privacy-page',
  label: 'Privacy Page',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heading',
              label: 'Heading',
              required: true,
              type: 'text',
            },
            {
              name: 'body',
              label: 'Body',
              required: true,
              type: 'textarea',
              admin: {
                rows: 24,
                description:
                  'Leave a blank line between paragraphs. Start a line with "## " for a section heading, or "- " for a bullet point. Email and web addresses become links automatically; [Privacy Policy](/privacy) makes a link with your own words. Update the "Last updated" date at the top when you change it.',
              },
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
                  type: 'text',
                },
                {
                  name: 'metaDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
