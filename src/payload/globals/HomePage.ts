// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const HomePage: GlobalConfig = pageGlobal({
  slug: 'home-page',
  label: 'Home Page',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroSection',
              label: 'Hero Section',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  label: 'Title',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  label: 'Subtitle',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'eyebrow',
                  label: 'Eyebrow',
                  type: 'text',
                  admin: {
                    description:
                      'Short trust line shown above the title, e.g. "Serving Bulawayo’s elders since 1983"',
                  },
                },
                {
                  name: 'tagline',
                  label: 'Tagline',
                  type: 'textarea',
                  admin: {
                    description:
                      'Lede paragraph under the title: what Ekuphumuleni means and offers',
                    rows: 2,
                  },
                },
                {
                  name: 'backgroundImage',
                  label: 'Background Image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description: 'Full-bleed hero photo; a warm overlay is applied automatically',
                  },
                },
                {
                  name: 'primaryCtaLabel',
                  label: 'Primary CTA Label',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'secondaryCtaLabel',
                  label: 'Secondary CTA Label',
                  required: true,
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'About Section',
          fields: [
            {
              name: 'aboutSection',
              label: 'About Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'intro',
                  label: 'Intro Paragraph',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 4,
                  },
                },
                {
                  name: 'founderImage',
                  label: 'Founder Portrait',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description:
                      'Shown beside the establishment story with the name and role as a caption',
                  },
                },
                {
                  name: 'founderName',
                  label: 'Founder Name',
                  type: 'text',
                },
                {
                  name: 'founderRole',
                  label: 'Founder Caption',
                  type: 'text',
                  admin: {
                    description: 'Shown under the name, e.g. "Founder · Est. 1983"',
                  },
                },
                {
                  name: 'establishmentHeading',
                  label: 'Establishment Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'establishmentBody',
                  label: 'Establishment Body',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 4,
                  },
                },
                {
                  name: 'missionHeading',
                  label: 'Mission Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'missionBody',
                  label: 'Mission Body',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
                {
                  name: 'visionHeading',
                  label: 'Vision Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'visionBody',
                  label: 'Vision Body',
                  required: true,
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
                {
                  name: 'coreValuesHeading',
                  label: 'Core Values Heading',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'coreValues',
                  label: 'Core Values',
                  required: true,
                  type: 'text',
                  hasMany: true,
                  minRows: 1,
                },
              ],
            },
          ],
        },
        {
          label: 'Services Section',
          fields: [
            {
              name: 'servicesSection',
              label: 'Services Section',
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
                  name: 'cards',
                  label: 'Service Cards',
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
                          label: 'Heart',
                          value: 'heart',
                        },
                        {
                          label: 'Arrow Path',
                          value: 'arrow-path',
                        },
                        {
                          label: 'Sparkles',
                          value: 'sparkles',
                        },
                        {
                          label: 'Home Modern',
                          value: 'home-modern',
                        },
                      ],
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
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'title',
                      label: 'Title',
                      required: true,
                      type: 'text',
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
              ],
            },
          ],
        },
        {
          label: 'Team Section',
          fields: [
            {
              name: 'teamSection',
              label: 'Team Section',
              type: 'group',
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
                    rows: 2,
                  },
                },
                {
                  name: 'ctaLabel',
                  label: 'CTA Label',
                  required: true,
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Donors Section',
          fields: [
            {
              name: 'donorsSection',
              label: 'Donors Section',
              type: 'group',
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
                    rows: 2,
                  },
                },
                {
                  name: 'ctaLabel',
                  label: 'CTA Label',
                  required: true,
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Contact Section',
          fields: [
            {
              name: 'contactSection',
              label: 'Contact Section',
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
                  name: 'email',
                  label: 'Email',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'phoneNumbers',
                  label: 'Phone Numbers',
                  required: true,
                  type: 'text',
                  hasMany: true,
                  minRows: 1,
                },
                {
                  name: 'locationLines',
                  label: 'Location Lines',
                  required: true,
                  type: 'text',
                  hasMany: true,
                  minRows: 1,
                },
                {
                  name: 'mapQuery',
                  label: 'Map Search Query',
                  required: true,
                  type: 'text',
                },
                {
                  name: 'ctaLabel',
                  label: 'CTA Label',
                  required: true,
                  type: 'text',
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
