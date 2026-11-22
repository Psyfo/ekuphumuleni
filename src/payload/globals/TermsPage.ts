// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const TermsPage: GlobalConfig = pageGlobal({
  slug: 'terms-page',
  label: 'Terms Page',
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
