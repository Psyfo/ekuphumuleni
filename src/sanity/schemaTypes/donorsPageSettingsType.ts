import { defineField, defineType } from 'sanity';
import { HeartIcon } from '@sanity/icons';

export const DONOR_MENTION_ICON_OPTIONS = [
  { title: 'Building Library', value: 'building-library' },
  { title: 'Users', value: 'users' },
  { title: 'Heart', value: 'heart' },
];

export const donorsPageSettingsType = defineType({
  name: 'donorsPageSettings',
  title: 'Donors Page Settings',
  type: 'document',
  icon: HeartIcon,
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'donorWall', title: 'Donor Wall Section' },
    { name: 'specialMentions', title: 'Special Mentions Section' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroQuote',
      title: 'Hero Quote',
      type: 'text',
      rows: 2,
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),

    // Donor wall section
    defineField({
      name: 'donorWallSection',
      title: 'Donor Wall Section',
      type: 'object',
      group: 'donorWall',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
      ],
    }),

    // Special mentions section
    defineField({
      name: 'specialMentionsSection',
      title: 'Special Mentions Section',
      type: 'object',
      group: 'specialMentions',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({
          name: 'mentions',
          title: 'Special Mentions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: DONOR_MENTION_ICON_OPTIONS, layout: 'radio' },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
              ],
              preview: { select: { title: 'name', subtitle: 'description' } },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({ name: 'closingMessage', title: 'Closing Message', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Donors Page',
        subtitle: 'Donor wall & special mentions',
        media: HeartIcon,
      };
    },
  },
});
