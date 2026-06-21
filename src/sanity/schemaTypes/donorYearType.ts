import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export const donorYearType = defineType({
  name: 'donorYear',
  title: 'Donor Year',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers are shown first on the Donors page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'donorNames',
      title: 'Donor Names',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
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
    select: { year: 'year', names: 'donorNames' },
    prepare({ year, names }) {
      const count = Array.isArray(names) ? names.length : 0;
      return { title: `${year}`, subtitle: `${count} donor${count === 1 ? '' : 's'}` };
    },
  },
});
