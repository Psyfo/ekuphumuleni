// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const FacilitiesPage: GlobalConfig = pageGlobal({
  slug: 'facilities-page',
  label: 'Facilities Page',
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
                description: 'The main heading on the facilities page (e.g. "Our Facilities").',
              },
            },
            {
              name: 'heroSubtitle',
              label: 'Page Subtitle',
              type: 'textarea',
              admin: {
                rows: 2,
              },
            },
            {
              name: 'heroQuote',
              label: 'Hero Quote',
              type: 'textarea',
              admin: {
                rows: 2,
              },
            },
          ],
        },
        {
          label: 'Showcase Section',
          fields: [
            {
              name: 'showcaseSection',
              label: 'Showcase Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'highlights',
                  label: 'Facility Highlights',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'description',
                      label: 'Description',
                      type: 'textarea',
                      admin: {
                        rows: 3,
                      },
                    },
                    {
                      name: 'image',
                      label: 'Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'alt',
                      label: 'Image Alt Text',
                      type: 'text',
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description: 'Displayed in an alternating image/text layout. Order matters.',
                  },
                },
                {
                  name: 'featureGridHeading',
                  label: 'Feature Grid Heading',
                  type: 'text',
                },
                {
                  name: 'featureGridItems',
                  label: 'Feature Grid Items',
                  type: 'array',
                  fields: [
                    {
                      name: 'iconName',
                      label: 'Icon',
                      type: 'radio',
                      options: [
                        {
                          label: 'House / Accommodation',
                          value: 'home-modern',
                        },
                        {
                          label: 'Sparkles / Cleanliness',
                          value: 'sparkles',
                        },
                        {
                          label: 'Sun / Bright',
                          value: 'sun',
                        },
                        {
                          label: 'People / Community',
                          value: 'users',
                        },
                        {
                          label: 'Bolt / Energy',
                          value: 'bolt',
                        },
                        {
                          label: 'Beaker / Conservation',
                          value: 'beaker',
                        },
                        {
                          label: 'Globe / Community',
                          value: 'globe-alt',
                        },
                      ],
                    },
                    {
                      name: 'title',
                      label: 'Title',
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
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                  },
                },
              ],
              admin: {
                description:
                  'Controls the alternating facility highlights and the "What Makes Our Facilities Special" feature grid.',
              },
            },
          ],
        },
        {
          label: 'Sustainability Section',
          fields: [
            {
              name: 'sustainabilitySection',
              label: 'Sustainability Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'initiatives',
                  label: 'Sustainability Initiatives',
                  type: 'array',
                  fields: [
                    {
                      name: 'iconName',
                      label: 'Icon',
                      type: 'radio',
                      options: [
                        {
                          label: 'House / Accommodation',
                          value: 'home-modern',
                        },
                        {
                          label: 'Sparkles / Cleanliness',
                          value: 'sparkles',
                        },
                        {
                          label: 'Sun / Bright',
                          value: 'sun',
                        },
                        {
                          label: 'People / Community',
                          value: 'users',
                        },
                        {
                          label: 'Bolt / Energy',
                          value: 'bolt',
                        },
                        {
                          label: 'Beaker / Conservation',
                          value: 'beaker',
                        },
                        {
                          label: 'Globe / Community',
                          value: 'globe-alt',
                        },
                      ],
                    },
                    {
                      name: 'title',
                      label: 'Title',
                      type: 'text',
                    },
                    {
                      name: 'description',
                      label: 'Description',
                      type: 'textarea',
                      admin: {
                        rows: 3,
                      },
                    },
                    {
                      name: 'impact',
                      label: 'Impact Statement',
                      type: 'text',
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                  },
                },
                {
                  name: 'showcaseImages',
                  label: 'Showcase Images',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      label: 'Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'alt',
                      label: 'Image Alt Text',
                      type: 'text',
                    },
                    {
                      name: 'caption',
                      label: 'Caption',
                      type: 'text',
                    },
                    {
                      name: 'subcaption',
                      label: 'Subcaption',
                      type: 'text',
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description: 'Displayed in a 2-column gallery with caption overlays.',
                  },
                },
                {
                  name: 'commitmentHeading',
                  label: 'Commitment Heading',
                  type: 'text',
                },
                {
                  name: 'commitmentBody',
                  label: 'Commitment Body',
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
                      'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Our Facilities | Ekuphumuleni Geriatric Nursing Home".',
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
