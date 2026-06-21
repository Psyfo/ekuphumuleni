import { defineField, defineType } from 'sanity';
import { InfoOutlineIcon } from '@sanity/icons';

// ─── Icon options shared across sections ─────────────────────────────────────
// These map to Heroicons used in the "Why Families Choose Us" cards and the
// Core Values badges. The "value" is what's stored in Sanity; components look
// it up via an ICON_MAP. Labels are written for non-technical editors.
const ABOUT_ICON_OPTIONS = [
  { title: 'Heart / Care', value: 'heart' },
  { title: 'Home / Environment', value: 'home' },
  { title: 'Shield / Safety', value: 'shield-check' },
  { title: 'Lock / Confidentiality', value: 'lock-closed' },
  { title: 'Thumbs Up / Trust', value: 'hand-thumb-up' },
  { title: 'People / Team', value: 'user-group' },
];

export const aboutPageSettingsType = defineType({
  name: 'aboutPageSettings',
  title: 'About Page Settings',
  type: 'document',
  icon: InfoOutlineIcon,
  // Treated as a singleton — only one document of this type should ever exist.
  // The structureTool configuration in sanity.config.ts enforces this.
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'establishment', title: 'Establishment Section' },
    { name: 'missionVision', title: 'Mission, Vision & Values Section' },
    { name: 'impact', title: 'Impact / Legacy Section' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Page Heading',
      type: 'string',
      group: 'hero',
      description: 'The main heading on the about page (e.g. "About Ekuphumuleni").',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'The line below the hero title.',
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'The decorative quote in the hero card.',
    }),

    // ── Establishment Section ─────────────────────────────────────────────────
    defineField({
      name: 'establishmentSection',
      title: 'Establishment Section',
      type: 'object',
      group: 'establishment',
      description:
        'Controls the founder profile, origin story, registration info, and "Why Families Choose Us" cards.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'founderImage',
          title: 'Founder Photo',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({ name: 'founderName', title: 'Founder Name', type: 'string' }),
        defineField({ name: 'founderTitle', title: 'Founder Title', type: 'string' }),
        defineField({ name: 'narrativeHeading', title: 'Narrative Heading', type: 'string' }),
        defineField({
          name: 'narrativeParagraph1',
          title: 'Narrative — Paragraph 1',
          type: 'text',
          rows: 4,
          description: 'The story of how the idea for Ekuphumuleni originated.',
        }),
        defineField({
          name: 'narrativeParagraph2',
          title: 'Narrative — Paragraph 2',
          type: 'text',
          rows: 4,
          description: 'Opening date and foundation stone laying.',
        }),
        defineField({ name: 'registrationHeading', title: 'Registration Heading', type: 'string' }),
        defineField({
          name: 'registrationBody',
          title: 'Registration Body',
          type: 'text',
          rows: 3,
        }),
        defineField({ name: 'whyChooseHeading', title: '"Why Families Choose Us" Heading', type: 'string' }),
        defineField({
          name: 'whyChooseCards',
          title: '"Why Families Choose Us" Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'whyChooseCard',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: ABOUT_ICON_OPTIONS, layout: 'radio' },
                }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
              ],
              preview: { select: { title: 'title', subtitle: 'description' } },
            },
          ],
        }),
        defineField({
          name: 'closingStatement',
          title: 'Closing Statement',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    // ── Mission, Vision & Core Values Section ─────────────────────────────────
    defineField({
      name: 'missionVisionSection',
      title: 'Mission, Vision & Core Values Section',
      type: 'object',
      group: 'missionVision',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'missionHeading', title: 'Mission Heading', type: 'string' }),
        defineField({ name: 'missionBody', title: 'Mission Body', type: 'text', rows: 3 }),
        defineField({
          name: 'missionBullets',
          title: 'Mission Bullet Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'visionHeading', title: 'Vision Heading', type: 'string' }),
        defineField({ name: 'visionBody', title: 'Vision Body', type: 'text', rows: 2 }),
        defineField({ name: 'visionFootnote', title: 'Vision Footnote', type: 'text', rows: 2 }),
        defineField({ name: 'coreValuesHeading', title: 'Core Values Heading', type: 'string' }),
        defineField({
          name: 'coreValues',
          title: 'Core Values',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'coreValue',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: ABOUT_ICON_OPTIONS, layout: 'radio' },
                }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
              ],
              preview: { select: { title: 'label' } },
            },
          ],
        }),
      ],
    }),

    // ── Impact / Legacy Section ───────────────────────────────────────────────
    defineField({
      name: 'impactSection',
      title: 'Impact / Legacy Section',
      type: 'object',
      group: 'impact',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'establishmentYear',
          title: 'Establishment Year',
          type: 'number',
          description: '"Years of Service" is calculated automatically from this year.',
        }),
        defineField({ name: 'bedsAvailable', title: 'Beds Available', type: 'number' }),
        defineField({ name: 'staffCount', title: 'Dedicated Staff', type: 'number' }),
        defineField({ name: 'satisfactionPercent', title: 'Patient Satisfaction (%)', type: 'number' }),
        defineField({ name: 'contextParagraph1', title: 'Context — Paragraph 1', type: 'text', rows: 2 }),
        defineField({ name: 'contextParagraph2', title: 'Context — Paragraph 2', type: 'text', rows: 3 }),
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
            'The title shown in the browser tab and Google search results. Keep it under 60 characters. Example: "About Us | Ekuphumuleni Geriatric Nursing Home".',
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
      return {
        title: 'About Page',
        subtitle: 'Founder story, mission, vision & impact',
        media: InfoOutlineIcon,
      };
    },
  },
});
