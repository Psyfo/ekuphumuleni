import { defineField, defineType } from 'sanity';

export const HOME_ICON_OPTIONS = [
  { title: 'Heart', value: 'heart' },
  { title: 'Arrow Path', value: 'arrow-path' },
  { title: 'Sparkles', value: 'sparkles' },
  { title: 'Home Modern', value: 'home-modern' },
];

export const homePageSettingsType = defineType({
  name: 'homePageSettings',
  title: 'Home Page Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About Section' },
    { name: 'services', title: 'Services Section' },
    { name: 'team', title: 'Team Section' },
    { name: 'donors', title: 'Donors Section' },
    { name: 'contact', title: 'Contact Section' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // About section
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      group: 'about',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'intro', title: 'Intro Paragraph', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
        defineField({ name: 'establishmentImage', title: 'Establishment Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'establishmentHeading', title: 'Establishment Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'establishmentBody', title: 'Establishment Body', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
        defineField({ name: 'missionHeading', title: 'Mission Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'missionBody', title: 'Mission Body', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        defineField({ name: 'visionHeading', title: 'Vision Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'visionBody', title: 'Vision Body', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        defineField({ name: 'coreValuesHeading', title: 'Core Values Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
          name: 'coreValues',
          title: 'Core Values',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Services section
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({
          name: 'cards',
          title: 'Service Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'iconName',
                  title: 'Icon',
                  type: 'string',
                  options: { list: HOME_ICON_OPTIONS, layout: 'radio' },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'alt', title: 'Image Alt Text', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
              ],
              preview: { select: { title: 'title', media: 'image' } },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Team section
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      group: 'team',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // Donors section
    defineField({
      name: 'donorsSection',
      title: 'Donors Section',
      type: 'object',
      group: 'donors',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),

    // Contact section
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({ name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
          name: 'phoneNumbers',
          title: 'Phone Numbers',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'locationLines',
          title: 'Location Lines',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({ name: 'mapQuery', title: 'Map Search Query', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string', validation: (Rule) => Rule.required() }),
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
      return { title: 'Home Page Settings' };
    },
  },
});
