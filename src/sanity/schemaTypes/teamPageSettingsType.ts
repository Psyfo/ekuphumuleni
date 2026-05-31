import { defineField, defineType } from 'sanity';

export const teamPageSettingsType = defineType({
  name: 'teamPageSettings',
  title: 'Team Page Settings',
  type: 'document',
  // Treated as a singleton — only one document of this type should ever exist.
  // The structureTool configuration in sanity.config.ts enforces this.
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main heading on the team page (e.g. "Meet the Team").',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      description: 'The paragraph below the hero title.',
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 2,
      description: 'The decorative quote in the hero card.',
    }),

    // ── Board Section ─────────────────────────────────────────────────────────
    defineField({
      name: 'boardSection',
      title: 'Board of Trustees Section',
      type: 'object',
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
  ],
  preview: {
    prepare() {
      return { title: 'Team Page Settings' };
    },
  },
});
