// Ported field for field from the original Sanity schema (November 2026).
import type { GlobalConfig } from 'payload';

import { pageGlobal } from '../page-global';

export const ServicesPage: GlobalConfig = pageGlobal({
  slug: 'services-page',
  label: 'Services Page',
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
                description:
                  'The large heading at the top of the page: currently "Our Services". Shown in the hero banner.',
              },
            },
            {
              name: 'heroSubtitle',
              label: 'Page Subtitle',
              type: 'textarea',
              admin: {
                description:
                  'The paragraph below the page heading in the hero banner. Keep it to 1–2 sentences.',
                rows: 3,
              },
            },
            {
              name: 'heroQuote',
              label: 'Hero Quote',
              type: 'textarea',
              admin: {
                description:
                  'The decorative italic quote shown in the frosted white card at the bottom of the hero section.',
                rows: 2,
              },
            },
          ],
        },
        {
          label: 'Core Services Section',
          fields: [
            {
              name: 'coreServicesSection',
              label: 'Core Services Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Section Heading',
                  type: 'text',
                  admin: {
                    description: 'The large heading above the service cards grid.',
                  },
                },
                {
                  name: 'subtitle',
                  label: 'Section Subtitle',
                  type: 'textarea',
                  admin: {
                    description: 'The short paragraph below the section heading, above the cards.',
                    rows: 2,
                  },
                },
                {
                  name: 'services',
                  label: 'Service Cards',
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
                          label: 'Clipboard / Documentation',
                          value: 'clipboard-document-check',
                        },
                        {
                          label: 'People / Group',
                          value: 'user-group',
                        },
                        {
                          label: 'Sparkles / Wellness',
                          value: 'sparkles',
                        },
                        {
                          label: 'House / Accommodation',
                          value: 'home-modern',
                        },
                        {
                          label: 'Chat Bubble / Communication',
                          value: 'chat-bubble',
                        },
                        {
                          label: 'Clock / Time',
                          value: 'clock',
                        },
                        {
                          label: 'Shield / Safety',
                          value: 'shield-check',
                        },
                      ],
                      admin: {
                        description:
                          'The small icon shown at the top of the card. Pick the one that best represents this service.',
                      },
                    },
                    {
                      name: 'title',
                      label: 'Card Title',
                      required: true,
                      type: 'text',
                      admin: {
                        description:
                          'The bold heading on the card (e.g. "24/7 Skilled Nursing Care").',
                      },
                    },
                    {
                      name: 'description',
                      label: 'Card Description',
                      required: true,
                      type: 'textarea',
                      admin: {
                        description:
                          'The paragraph on the card. Keep it to 1–2 sentences so all cards stay the same height.',
                        rows: 3,
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description:
                      'Each item here creates one card in the grid. Currently 6 cards are shown. You can add or remove cards: the grid adjusts automatically. Best displayed with 6 cards (3 columns × 2 rows).',
                  },
                },
                {
                  name: 'ctaHeading',
                  label: 'Call-to-Action Heading',
                  type: 'text',
                  admin: {
                    description:
                      'The heading inside the beige contact box at the bottom of this section (e.g. "Have Questions About Our Services?").',
                  },
                },
                {
                  name: 'ctaBody',
                  label: 'Call-to-Action Body Text',
                  type: 'textarea',
                  admin: {
                    description: 'The paragraph inside the contact box, below the CTA heading.',
                    rows: 2,
                  },
                },
                {
                  name: 'ctaButtonLabel',
                  label: 'Button Label',
                  type: 'text',
                  admin: {
                    description: 'The text on the button in the contact box (e.g. "Get in Touch").',
                  },
                },
              ],
              admin: {
                description:
                  'Controls the "Comprehensive Care Services" section: the grid of 6 service cards in the middle of the page.',
              },
            },
          ],
        },
        {
          label: 'Nursing Care Section',
          fields: [
            {
              name: 'nursingSection',
              label: 'Nursing Care Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Section Heading',
                  type: 'text',
                  admin: {
                    description:
                      'The large heading for this section (e.g. "Professional Nursing Care").',
                  },
                },
                {
                  name: 'subtitle',
                  label: 'Section Subtitle',
                  type: 'textarea',
                  admin: {
                    description: 'The short paragraph below the section heading.',
                    rows: 2,
                  },
                },
                {
                  name: 'featuredImage',
                  label: 'Featured Photo',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description:
                      'The main large photo shown on the left side of this section. Ideally a landscape or portrait image showing nursing staff. Use the focus-point dot to control how the image crops on different screen sizes.',
                  },
                },
                {
                  name: 'featuredHeading',
                  label: 'Content Heading',
                  type: 'text',
                  admin: {
                    description:
                      'The bold heading on the right side next to the main photo (e.g. "Dedicated to Your Wellbeing").',
                  },
                },
                {
                  name: 'featuredBody',
                  label: 'Content Paragraph',
                  type: 'textarea',
                  admin: {
                    description: 'The paragraph of text shown to the right of the main photo.',
                    rows: 4,
                  },
                },
                {
                  name: 'bulletItems',
                  label: 'Bullet Point List',
                  type: 'text',
                  hasMany: true,
                  admin: {
                    description:
                      'The tick-mark bullet points below the content paragraph. Each item is one line. Currently 4 items: add or remove as needed.',
                  },
                },
                {
                  name: 'featureCards',
                  label: 'Feature Cards',
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
                          label: 'Clipboard / Documentation',
                          value: 'clipboard-document-check',
                        },
                        {
                          label: 'People / Group',
                          value: 'user-group',
                        },
                        {
                          label: 'Sparkles / Wellness',
                          value: 'sparkles',
                        },
                        {
                          label: 'House / Accommodation',
                          value: 'home-modern',
                        },
                        {
                          label: 'Chat Bubble / Communication',
                          value: 'chat-bubble',
                        },
                        {
                          label: 'Clock / Time',
                          value: 'clock',
                        },
                        {
                          label: 'Shield / Safety',
                          value: 'shield-check',
                        },
                      ],
                      admin: {
                        description: 'The small icon shown at the top of the card.',
                      },
                    },
                    {
                      name: 'title',
                      label: 'Card Title',
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'description',
                      label: 'Card Description',
                      type: 'textarea',
                      admin: {
                        description: 'Keep this to 1–2 sentences.',
                        rows: 3,
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description:
                      'The four small white cards shown below the main photo + text area. Each card has an icon, title, and description. Best displayed with exactly 4 cards.',
                  },
                },
                {
                  name: 'galleryImages',
                  label: 'Photo Gallery',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      label: 'Photo',
                      required: true,
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'alt',
                      label: 'Photo Description (Alt Text)',
                      required: true,
                      type: 'text',
                      admin: {
                        description:
                          'A short description of what is happening in the photo: used by screen readers and search engines. Example: "Nursing staff providing personalized care".',
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description:
                      'The row of photos at the bottom of the Nursing Care section. Best displayed with exactly 3 photos: they sit side by side in a grid.',
                  },
                },
              ],
              admin: {
                description:
                  'Controls the "Professional Nursing Care" section: the beige-background section with a main photo, bullet points, and four feature cards.',
              },
            },
          ],
        },
        {
          label: 'Rehabilitation Section',
          fields: [
            {
              name: 'rehabilitationSection',
              label: 'Rehabilitation & Wellness Section',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  label: 'Section Heading',
                  type: 'text',
                  admin: {
                    description:
                      'The large heading for this section (e.g. "Rehabilitation & Wellness Programs").',
                  },
                },
                {
                  name: 'subtitle',
                  label: 'Section Subtitle',
                  type: 'textarea',
                  admin: {
                    description: 'The short paragraph below the section heading.',
                    rows: 2,
                  },
                },
                {
                  name: 'featuredImage',
                  label: 'Featured Photo',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description:
                      'The main large photo shown on the right side of this section. Ideally a portrait-oriented image. Use the focus-point dot to control how the image crops on different screen sizes.',
                  },
                },
                {
                  name: 'featuredHeading',
                  label: 'Content Heading',
                  type: 'text',
                  admin: {
                    description:
                      'The bold heading on the left side next to the photo (e.g. "Empowering Recovery & Independence").',
                  },
                },
                {
                  name: 'featuredBody',
                  label: 'Content Paragraph',
                  type: 'textarea',
                  admin: {
                    description: 'The paragraph shown on the left side next to the photo.',
                    rows: 4,
                  },
                },
                {
                  name: 'programs',
                  label: 'Program Boxes',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      label: 'Program Name',
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'description',
                      label: 'Program Description',
                      type: 'textarea',
                      admin: {
                        description: 'Keep this to 1–2 sentences.',
                        rows: 3,
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description:
                      'The white boxes listing specific programs (e.g. Physical Therapy, Occupational Therapy). Currently 3 boxes: add or remove as needed.',
                  },
                },
                {
                  name: 'galleryImages',
                  label: 'Photo Gallery',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      label: 'Photo',
                      required: true,
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'alt',
                      label: 'Photo Description (Alt Text)',
                      required: true,
                      type: 'text',
                      admin: {
                        description:
                          'A short description of what is happening in the photo: used by screen readers and search engines. Example: "Group wellness activities in the garden".',
                      },
                    },
                  ],
                  admin: {
                    components: {
                      RowLabel: '@/payload/components/RowLabel#RowLabel',
                    },
                    description:
                      'The row of three photos at the bottom of the Rehabilitation section. Best displayed with exactly 3 photos.',
                  },
                },
              ],
              admin: {
                description:
                  'Controls the "Rehabilitation & Wellness Programs" section: the white section with a main photo, program boxes, and a photo gallery.',
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
                      'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Our Services | Ekuphumuleni Geriatric Nursing Home".',
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
