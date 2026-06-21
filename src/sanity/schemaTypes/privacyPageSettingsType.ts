import { defineField, defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

export const privacyPageSettingsType = defineType({
  name: 'privacyPageSettings',
  title: 'Privacy Page Settings',
  type: 'document',
  icon: DocumentIcon,
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
      return {
        title: title ?? 'Privacy Policy',
        subtitle: 'Legal · Privacy policy page',
        media: DocumentIcon,
      };
    },
  },
});
