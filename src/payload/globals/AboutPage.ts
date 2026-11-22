// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const AboutPage: GlobalConfig = pageGlobal({
  slug: 'about-page',
  label: 'About Page',
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
                description: 'The main heading on the about page (e.g. "About Ekuphumuleni").',
              },
            },
            {
              name: 'heroSubtitle',
              label: 'Page Subtitle',
              type: 'textarea',
              admin: {
                description: 'The line below the hero title.',
                rows: 2,
              },
            },
            {
              name: 'heroQuote',
              label: 'Hero Quote',
              type: 'textarea',
              admin: {
                description: 'The decorative quote in the hero card.',
                rows: 3,
              },
            },
          ],
        },
        {
          label: 'Establishment Section',
          fields: [
            {
              name: 'establishmentSection',
              label: 'Establishment Section',
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
                  name: 'founderImage',
                  label: 'Founder Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'founderName',
                  label: 'Founder Name',
                  type: 'text',
                },
                {
                  name: 'founderTitle',
                  label: 'Founder Title',
                  type: 'text',
                },
                {
                  name: 'narrativeHeading',
                  label: 'Narrative Heading',
                  type: 'text',
                },
                {
                  name: 'narrativeParagraph1',
                  label: 'Narrative: Paragraph 1',
                  type: 'textarea',
                  admin: {
                    description: 'The story of how the idea for Ekuphumuleni originated.',
                    rows: 4,
                  },
                },
                {
                  name: 'narrativeParagraph2',
                  label: 'Narrative: Paragraph 2',
                  type: 'textarea',
                  admin: {
                    description: 'Opening date and foundation stone laying.',
                    rows: 4,
                  },
                },
                {
                  name: 'registrationHeading',
                  label: 'Registration Heading',
                  type: 'text',
                },
                {
                  name: 'registrationBody',
                  label: 'Registration Body',
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
                {
                  name: 'whyChooseHeading',
                  label: '"Why Families Choose Us" Heading',
                  type: 'text',
                },
                {
                  name: 'whyChooseCards',
                  label: '"Why Families Choose Us" Cards',
                  type: 'array',
                  fields: [
                    {
                      name: 'iconName',
                      label: 'Icon',
                      type: 'radio',
                      options: [
                        {
                          label: 'Heart / Care',
                          value: 'heart',
                        },
                        {
                          label: 'Home / Environment',
                          value: 'home',
                        },
                        {
                          label: 'Shield / Safety',
                          value: 'shield-check',
                        },
                        {
                          label: 'Lock / Confidentiality',
                          value: 'lock-closed',
                        },
                        {
                          label: 'Thumbs Up / Trust',
                          value: 'hand-thumb-up',
                        },
                        {
                          label: 'People / Team',
                          value: 'user-group',
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
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                  },
                },
                {
                  name: 'closingStatement',
                  label: 'Closing Statement',
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
              ],
              admin: {
                description:
                  'Controls the founder profile, origin story, registration info, and "Why Families Choose Us" cards.',
              },
            },
          ],
        },
        {
          label: 'Mission, Vision & Values Section',
          fields: [
            {
              name: 'missionVisionSection',
              label: 'Mission, Vision & Core Values Section',
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
                  name: 'missionHeading',
                  label: 'Mission Heading',
                  type: 'text',
                },
                {
                  name: 'missionBody',
                  label: 'Mission Body',
                  type: 'textarea',
                  admin: {
                    rows: 3,
                  },
                },
                {
                  name: 'missionBullets',
                  label: 'Mission Bullet Points',
                  type: 'text',
                  hasMany: true,
                },
                {
                  name: 'visionHeading',
                  label: 'Vision Heading',
                  type: 'text',
                },
                {
                  name: 'visionBody',
                  label: 'Vision Body',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'visionFootnote',
                  label: 'Vision Footnote',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'coreValuesHeading',
                  label: 'Core Values Heading',
                  type: 'text',
                },
                {
                  name: 'coreValues',
                  label: 'Core Values',
                  type: 'array',
                  fields: [
                    {
                      name: 'iconName',
                      label: 'Icon',
                      type: 'radio',
                      options: [
                        {
                          label: 'Heart / Care',
                          value: 'heart',
                        },
                        {
                          label: 'Home / Environment',
                          value: 'home',
                        },
                        {
                          label: 'Shield / Safety',
                          value: 'shield-check',
                        },
                        {
                          label: 'Lock / Confidentiality',
                          value: 'lock-closed',
                        },
                        {
                          label: 'Thumbs Up / Trust',
                          value: 'hand-thumb-up',
                        },
                        {
                          label: 'People / Team',
                          value: 'user-group',
                        },
                      ],
                    },
                    {
                      name: 'label',
                      label: 'Label',
                      type: 'text',
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Impact / Legacy Section',
          fields: [
            {
              name: 'impactSection',
              label: 'Impact / Legacy Section',
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
                  name: 'establishmentYear',
                  label: 'Establishment Year',
                  type: 'number',
                  admin: {
                    description: '"Years of Service" is calculated automatically from this year.',
                  },
                },
                {
                  name: 'bedsAvailable',
                  label: 'Beds Available',
                  type: 'number',
                },
                {
                  name: 'staffCount',
                  label: 'Dedicated Staff',
                  type: 'number',
                },
                {
                  name: 'satisfactionPercent',
                  label: 'Patient Satisfaction (%)',
                  type: 'number',
                },
                {
                  name: 'contextParagraph1',
                  label: 'Context: Paragraph 1',
                  type: 'textarea',
                  admin: {
                    rows: 2,
                  },
                },
                {
                  name: 'contextParagraph2',
                  label: 'Context: Paragraph 2',
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
                      'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "About Us | Ekuphumuleni Geriatric Nursing Home".',
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
