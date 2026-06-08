import { defineField, defineType } from 'sanity';

export const termsPageSettingsType = defineType({
  name: 'termsPageSettings',
  title: 'Terms Page Settings',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title ?? 'Terms Page Settings' };
    },
  },
});
