import { defineField, defineType } from 'sanity';
import { CaseIcon } from '@sanity/icons';

// ─── Icon options shared across sections ─────────────────────────────────────
// These map to Heroicons used in the service card and feature card components.
// The "value" here is what gets stored in Sanity; the component reads it and
// looks up the correct icon. Labels are written for non-technical editors.
const SERVICE_ICON_OPTIONS = [
  { title: 'Heart / Care', value: 'heart' },
  { title: 'Clipboard / Documentation', value: 'clipboard-document-check' },
  { title: 'People / Group', value: 'user-group' },
  { title: 'Sparkles / Wellness', value: 'sparkles' },
  { title: 'House / Accommodation', value: 'home-modern' },
  { title: 'Chat Bubble / Communication', value: 'chat-bubble' },
  { title: 'Clock / Time', value: 'clock' },
  { title: 'Shield / Safety', value: 'shield-check' },
];

export const servicesPageSettingsType = defineType({
  name: 'servicesPageSettings',
  title: 'Services Page Settings',
  type: 'document',
  icon: CaseIcon,
  // Treated as a singleton — only one document of this type should ever exist.
  // The structureTool configuration in sanity.config.ts enforces this.
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'coreServices', title: 'Core Services Section' },
    { name: 'nursing', title: 'Nursing Care Section' },
    { name: 'rehabilitation', title: 'Rehabilitation Section' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Page Heading',
      type: 'string',
      group: 'hero',
      description:
        'The large heading at the top of the page — currently "Our Services". Shown in the hero banner.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
      description:
        'The paragraph below the page heading in the hero banner. Keep it to 1–2 sentences.',
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 2,
      group: 'hero',
      description:
        'The decorative italic quote shown in the frosted white card at the bottom of the hero section.',
    }),

    // ── Core Services Section ─────────────────────────────────────────────────
    defineField({
      name: 'coreServicesSection',
      title: 'Core Services Section',
      type: 'object',
      group: 'coreServices',
      description:
        'Controls the "Comprehensive Care Services" section — the grid of 6 service cards in the middle of the page.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          description: 'The large heading above the service cards grid.',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          description: 'The short paragraph below the section heading, above the cards.',
        }),
        defineField({
          name: 'services',
          title: 'Service Cards',
          type: 'array',
          description:
            'Each item here creates one card in the grid. Currently 6 cards are shown. You can add or remove cards — the grid adjusts automatically. Best displayed with 6 cards (3 columns × 2 rows).',
          of: [
            {
              type: 'object',
              title: 'Service Card',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  description:
                    'The small icon shown at the top of the card. Pick the one that best represents this service.',
                  options: {
                    list: SERVICE_ICON_OPTIONS,
                    layout: 'radio',
                  },
                }),
                defineField({
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  description: 'The bold heading on the card (e.g. "24/7 Skilled Nursing Care").',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Card Description',
                  type: 'text',
                  rows: 3,
                  description:
                    'The paragraph on the card. Keep it to 1–2 sentences so all cards stay the same height.',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        }),
        defineField({
          name: 'ctaHeading',
          title: 'Call-to-Action Heading',
          type: 'string',
          description:
            'The heading inside the beige contact box at the bottom of this section (e.g. "Have Questions About Our Services?").',
        }),
        defineField({
          name: 'ctaBody',
          title: 'Call-to-Action Body Text',
          type: 'text',
          rows: 2,
          description: 'The paragraph inside the contact box, below the CTA heading.',
        }),
        defineField({
          name: 'ctaButtonLabel',
          title: 'Button Label',
          type: 'string',
          description: 'The text on the button in the contact box (e.g. "Get in Touch").',
        }),
      ],
    }),

    // ── Nursing Care Section ──────────────────────────────────────────────────
    defineField({
      name: 'nursingSection',
      title: 'Nursing Care Section',
      type: 'object',
      group: 'nursing',
      description:
        'Controls the "Professional Nursing Care" section — the beige-background section with a main photo, bullet points, and four feature cards.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          description: 'The large heading for this section (e.g. "Professional Nursing Care").',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          description: 'The short paragraph below the section heading.',
        }),
        defineField({
          name: 'featuredImage',
          title: 'Featured Photo',
          type: 'image',
          options: { hotspot: true },
          description:
            'The main large photo shown on the left side of this section. Ideally a landscape or portrait image showing nursing staff. Use the focus-point dot to control how the image crops on different screen sizes.',
        }),
        defineField({
          name: 'featuredHeading',
          title: 'Content Heading',
          type: 'string',
          description:
            'The bold heading on the right side next to the main photo (e.g. "Dedicated to Your Wellbeing").',
        }),
        defineField({
          name: 'featuredBody',
          title: 'Content Paragraph',
          type: 'text',
          rows: 4,
          description: 'The paragraph of text shown to the right of the main photo.',
        }),
        defineField({
          name: 'bulletItems',
          title: 'Bullet Point List',
          type: 'array',
          description:
            'The tick-mark bullet points below the content paragraph. Each item is one line. Currently 4 items — add or remove as needed.',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'featureCards',
          title: 'Feature Cards',
          type: 'array',
          description:
            'The four small white cards shown below the main photo + text area. Each card has an icon, title, and description. Best displayed with exactly 4 cards.',
          of: [
            {
              type: 'object',
              title: 'Feature Card',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  description: 'The small icon shown at the top of the card.',
                  options: {
                    list: SERVICE_ICON_OPTIONS,
                    layout: 'radio',
                  },
                }),
                defineField({
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Card Description',
                  type: 'text',
                  rows: 3,
                  description: 'Keep this to 1–2 sentences.',
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        }),
        defineField({
          name: 'galleryImages',
          title: 'Photo Gallery',
          type: 'array',
          description:
            'The row of photos at the bottom of the Nursing Care section. Best displayed with exactly 3 photos — they sit side by side in a grid.',
          of: [
            {
              type: 'object',
              title: 'Gallery Photo',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Photo',
                  type: 'image',
                  options: { hotspot: true },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'alt',
                  title: 'Photo Description (Alt Text)',
                  type: 'string',
                  description:
                    'A short description of what is happening in the photo — used by screen readers and search engines. Example: "Nursing staff providing personalized care".',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: 'alt', media: 'image' },
              },
            },
          ],
        }),
      ],
    }),

    // ── Rehabilitation Section ────────────────────────────────────────────────
    defineField({
      name: 'rehabilitationSection',
      title: 'Rehabilitation & Wellness Section',
      type: 'object',
      group: 'rehabilitation',
      description:
        'Controls the "Rehabilitation & Wellness Programs" section — the white section with a main photo, program boxes, and a photo gallery.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          description:
            'The large heading for this section (e.g. "Rehabilitation & Wellness Programs").',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          description: 'The short paragraph below the section heading.',
        }),
        defineField({
          name: 'featuredImage',
          title: 'Featured Photo',
          type: 'image',
          options: { hotspot: true },
          description:
            'The main large photo shown on the right side of this section. Ideally a portrait-oriented image. Use the focus-point dot to control how the image crops on different screen sizes.',
        }),
        defineField({
          name: 'featuredHeading',
          title: 'Content Heading',
          type: 'string',
          description:
            'The bold heading on the left side next to the photo (e.g. "Empowering Recovery & Independence").',
        }),
        defineField({
          name: 'featuredBody',
          title: 'Content Paragraph',
          type: 'text',
          rows: 4,
          description: 'The paragraph shown on the left side next to the photo.',
        }),
        defineField({
          name: 'programs',
          title: 'Program Boxes',
          type: 'array',
          description:
            'The white boxes listing specific programs (e.g. Physical Therapy, Occupational Therapy). Currently 3 boxes — add or remove as needed.',
          of: [
            {
              type: 'object',
              title: 'Program',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Program Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Program Description',
                  type: 'text',
                  rows: 3,
                  description: 'Keep this to 1–2 sentences.',
                }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'description' },
              },
            },
          ],
        }),
        defineField({
          name: 'galleryImages',
          title: 'Photo Gallery',
          type: 'array',
          description:
            'The row of three photos at the bottom of the Rehabilitation section. Best displayed with exactly 3 photos.',
          of: [
            {
              type: 'object',
              title: 'Gallery Photo',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Photo',
                  type: 'image',
                  options: { hotspot: true },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'alt',
                  title: 'Photo Description (Alt Text)',
                  type: 'string',
                  description:
                    'A short description of what is happening in the photo — used by screen readers and search engines. Example: "Group wellness activities in the garden".',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: 'alt', media: 'image' },
              },
            },
          ],
        }),
      ],
    }),

    // ── SEO & Metadata ────────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      group: 'seo',
      description:
        'Controls what appears in Google search results and when the page is shared on social media. These fields are not visible on the page itself.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Page Title (for browser tab & Google)',
          type: 'string',
          description:
            'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Our Services | Ekuphumuleni Geriatric Nursing Home".',
          validation: (Rule) => Rule.max(60).warning('Titles longer than 60 characters may be cut off in search results.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description (for Google & social sharing)',
          type: 'text',
          rows: 3,
          description:
            'The short description shown under the page title in Google results and when the page is shared on WhatsApp or Facebook. Keep it between 120–160 characters.',
          validation: (Rule) =>
            Rule.max(160).warning('Descriptions longer than 160 characters may be cut off in search results.'),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Page',
        subtitle: 'Core services, nursing & rehabilitation',
        media: CaseIcon,
      };
    },
  },
});
