import { defineField, defineType } from 'sanity';

// ─── Icon options ─────────────────────────────────────────────────────────────
// These map to Heroicons used in the feature grid and sustainability cards.
// The "value" is what's stored in Sanity; components look it up via ICON_MAP.
const FACILITIES_ICON_OPTIONS = [
  { title: 'House / Accommodation', value: 'home-modern' },
  { title: 'Sparkles / Cleanliness', value: 'sparkles' },
  { title: 'Sun / Bright', value: 'sun' },
  { title: 'People / Community', value: 'users' },
  { title: 'Bolt / Energy', value: 'bolt' },
  { title: 'Beaker / Conservation', value: 'beaker' },
  { title: 'Globe / Community', value: 'globe-alt' },
];

export const facilitiesPageSettingsType = defineType({
  name: 'facilitiesPageSettings',
  title: 'Facilities Page Settings',
  type: 'document',
  // Treated as a singleton — only one document of this type should ever exist.
  // The structureTool configuration in sanity.config.ts enforces this.
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'showcase', title: 'Showcase Section' },
    { name: 'sustainability', title: 'Sustainability Section' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Page Heading',
      type: 'string',
      group: 'hero',
      description: 'The main heading on the facilities page (e.g. "Our Facilities").',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),

    // ── Showcase Section ──────────────────────────────────────────────────────
    defineField({
      name: 'showcaseSection',
      title: 'Showcase Section',
      type: 'object',
      group: 'showcase',
      description: 'Controls the alternating facility highlights and the "What Makes Our Facilities Special" feature grid.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'highlights',
          title: 'Facility Highlights',
          type: 'array',
          description: 'Displayed in an alternating image/text layout. Order matters.',
          of: [
            {
              type: 'object',
              name: 'facilityHighlight',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({ name: 'alt', title: 'Image Alt Text', type: 'string' }),
              ],
              preview: { select: { title: 'title', media: 'image' } },
            },
          ],
        }),
        defineField({ name: 'featureGridHeading', title: 'Feature Grid Heading', type: 'string' }),
        defineField({
          name: 'featureGridItems',
          title: 'Feature Grid Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'featureGridItem',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: FACILITIES_ICON_OPTIONS, layout: 'radio' },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
              ],
              preview: { select: { title: 'title', subtitle: 'description' } },
            },
          ],
        }),
      ],
    }),

    // ── Sustainability Section ────────────────────────────────────────────────
    defineField({
      name: 'sustainabilitySection',
      title: 'Sustainability Section',
      type: 'object',
      group: 'sustainability',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'initiatives',
          title: 'Sustainability Initiatives',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'sustainabilityInitiative',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: FACILITIES_ICON_OPTIONS, layout: 'radio' },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({ name: 'impact', title: 'Impact Statement', type: 'string' }),
              ],
              preview: { select: { title: 'title', subtitle: 'impact' } },
            },
          ],
        }),
        defineField({
          name: 'showcaseImages',
          title: 'Showcase Images',
          type: 'array',
          description: 'Displayed in a 2-column gallery with caption overlays.',
          of: [
            {
              type: 'object',
              name: 'sustainabilityShowcaseImage',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
                defineField({ name: 'alt', title: 'Image Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                defineField({ name: 'subcaption', title: 'Subcaption', type: 'string' }),
              ],
              preview: { select: { title: 'caption', media: 'image' } },
            },
          ],
        }),
        defineField({ name: 'commitmentHeading', title: 'Commitment Heading', type: 'string' }),
        defineField({ name: 'commitmentBody', title: 'Commitment Body', type: 'text', rows: 4 }),
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
            'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Our Facilities | Ekuphumuleni Geriatric Nursing Home".',
          validation: (Rule) =>
            Rule.max(60).warning('Titles longer than 60 characters may be cut off in search results.'),
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
      return { title: 'Facilities Page Settings' };
    },
  },
});
