import { defineField, defineType } from 'sanity';

export const teamPageSettingsType = defineType({
  name: 'teamPageSettings',
  title: 'Team Page Settings',
  type: 'document',
  // Treated as a singleton — only one document of this type should ever exist.
  // The structureTool configuration in sanity.config.ts enforces this.
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'board', title: 'Board Section' },
    { name: 'admin', title: 'Administration Section' },
    { name: 'staff', title: 'Staff Section' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Page Heading',
      type: 'string',
      group: 'hero',
      description: 'The main heading on the team page (e.g. "Meet the Team").',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'The paragraph below the hero title.',
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'The decorative quote in the hero card.',
    }),

    // ── Board Section ─────────────────────────────────────────────────────────
    defineField({
      name: 'boardSection',
      title: 'Board of Trustees Section',
      type: 'object',
      group: 'board',
      description:
        'Controls the heading and intro text shown above the Board of Trustees profile grid on the /team page.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),

    // ── Administration Section ────────────────────────────────────────────────
    defineField({
      name: 'adminSection',
      title: 'Administration Section',
      type: 'object',
      group: 'admin',
      description:
        'Controls the heading and intro text shown above the Administration team profile grid on the /team page.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),

    // ── Staff Section ─────────────────────────────────────────────────────────
    defineField({
      name: 'staffSection',
      title: 'Staff Section',
      type: 'object',
      group: 'staff',
      description:
        'Controls the heading and intro text shown above the staff photo carousel on the /team page.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
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
            'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "Meet the Team | Ekuphumuleni Geriatric Nursing Home".',
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
      return { title: 'Team Page Settings' };
    },
  },
});
