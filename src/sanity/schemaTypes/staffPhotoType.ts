import { defineField, defineType } from 'sanity';
import { ImagesIcon } from '@sanity/icons';

export const staffPhotoType = defineType({
  name: 'staffPhoto',
  title: 'Staff Photo',
  type: 'document',
  icon: ImagesIcon,
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
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the photo for screen readers.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Displayed on the carousel slide (e.g. "Day Shift Staff").',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the carousel.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'alt',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? subtitle ?? 'Staff Photo',
        subtitle,
        media,
      };
    },
  },
});
