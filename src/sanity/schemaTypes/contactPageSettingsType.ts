import { defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons';

export const CONTACT_ICON_OPTIONS = [
  { title: 'Map Pin', value: 'map-pin' },
  { title: 'Phone', value: 'phone' },
  { title: 'Envelope', value: 'envelope' },
  { title: 'Clock', value: 'clock' },
];

export const contactPageSettingsType = defineType({
  name: 'contactPageSettings',
  title: 'Contact Page Settings',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'formSection', title: 'Form Section' },
    { name: 'infoSection', title: 'Info Section' },
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
      rows: 3,
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),

    // Form section
    defineField({
      name: 'formSection',
      title: 'Form Section',
      type: 'object',
      group: 'formSection',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'nameLabel', title: 'Name Label', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'namePlaceholder', title: 'Name Placeholder', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'emailLabel', title: 'Email Label', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'messageLabel', title: 'Message Label', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'messageHelpText', title: 'Message Help Text', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'submitButtonLabel', title: 'Submit Button Label', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'successHeading', title: 'Success Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'successBody', title: 'Success Body', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        defineField({ name: 'errorHeading', title: 'Error Heading', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // Info section
    defineField({
      name: 'infoSection',
      title: 'Info Section',
      type: 'object',
      group: 'infoSection',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({
          name: 'details',
          title: 'Contact Details',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: CONTACT_ICON_OPTIONS, layout: 'radio' },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({
                  name: 'lines',
                  title: 'Lines',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: (Rule) => Rule.required().min(1),
                }),
                defineField({ name: 'link', title: 'Link (optional)', type: 'string' }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'lines.0' },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'mapQuery',
          title: 'Map Search Query',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: 'additionalInfoHeading', title: 'Additional Info Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'additionalInfoBody', title: 'Additional Info Body', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
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
        title: 'Contact Page',
        subtitle: 'Form, contact details & map',
        media: EnvelopeIcon,
      };
    },
  },
});
