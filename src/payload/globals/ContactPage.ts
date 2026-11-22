// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const ContactPage: GlobalConfig = pageGlobal({
  slug: 'contact-page',
  label: 'Contact Page',
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
                rows: 3,
              },
            },
          ],
        },
        {
          label: 'Form Section',
          fields: [
            {
              name: 'formSection',
              label: 'Form Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'subheading',
                  label: 'Subheading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'nameLabel',
                  label: 'Name Label',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'namePlaceholder',
                  label: 'Name Placeholder',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'emailLabel',
                  label: 'Email Label',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'emailPlaceholder',
                  label: 'Email Placeholder',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'messageLabel',
                  label: 'Message Label',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'messagePlaceholder',
                  label: 'Message Placeholder',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'messageHelpText',
                  label: 'Message Help Text',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'submitButtonLabel',
                  label: 'Submit Button Label',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'successHeading',
                  label: 'Success Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'successBody',
                  label: 'Success Body',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
                {
                  name: 'errorHeading',
                  label: 'Error Heading',
                  required: true,
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Info Section',
          fields: [
            {
              name: 'infoSection',
              label: 'Info Section',
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
                  name: 'details',
                  label: 'Contact Details',
                  required: true,
                  type: 'array',
                  fields: [
                    {
                      name: 'iconName',
                      label: 'Icon',
                      required: true,
                      type: 'radio',
                      options: [
                        {
                          label: 'Map Pin',
                          value: 'map-pin',
                        },
                        {
                          label: 'Phone',
                          value: 'phone',
                        },
                        {
                          label: 'Envelope',
                          value: 'envelope',
                        },
                        {
                          label: 'Clock',
                          value: 'clock',
                        },
                      ],
                    },
                    {
                      name: 'title',
                      label: 'Title',
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'lines',
                      label: 'Lines',
                      required: true,
                      type: 'text',
                      hasMany: true,
                      minRows: 1,
                    },
                    {
                      name: 'link',
                      label: 'Link (optional)',
                      type: 'text',
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
                  name: 'mapQuery',
                  label: 'Map Search Query',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'additionalInfoHeading',
                  label: 'Additional Info Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'additionalInfoBody',
                  label: 'Additional Info Body',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 4,
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
