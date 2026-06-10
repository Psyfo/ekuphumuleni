import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fieldsets: [
    {
      name: 'identity',
      title: 'Identity',
      options: { collapsible: false },
    },
    {
      name: 'profile',
      title: 'Profile & Display',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      fieldset: 'identity',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      fieldset: 'identity',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      fieldset: 'identity',
      description:
        'Board of Trustees and Administration members appear as individual profile cards on the /team page. Nursing Staff and Care Workers do not have individual profiles yet — add their group photos via the "Staff Photo" document type instead.',
      options: {
        list: [
          { title: 'Board of Trustees', value: 'board' },
          { title: 'Administration', value: 'administration' },
          { title: 'Nursing Staff', value: 'nursing' },
          { title: 'Care Workers', value: 'care' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      fieldset: 'profile',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      fieldset: 'profile',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      fieldset: 'profile',
      description:
        'Controls display order within the department section. Start at 1 for the first person to show. Board Chairperson and Administrator are typically order 1.',
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
      title: 'name',
      subtitle: 'role',
      department: 'department',
      media: 'image',
    },
    prepare({ title, subtitle, department, media }) {
      return {
        title,
        subtitle: [subtitle, department].filter(Boolean).join(' · '),
        media,
      };
    },
  },
});
