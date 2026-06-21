import { defineField, defineType } from 'sanity';
import { CreditCardIcon } from '@sanity/icons';

/**
 * Donate button + dialog content (singleton). Drives the site-wide Donate CTA
 * and the two-rail dialog (Diaspora = card, In Zimbabwe = EcoCash). Initial
 * values mirror src/components/donate-content.ts, which is also the runtime
 * fallback when this document is empty or unreachable.
 */
export const donateSettingsType = defineType({
  name: 'donateSettings',
  title: 'Donate',
  type: 'document',
  icon: CreditCardIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'diaspora', title: 'Diaspora (card)' },
    { name: 'local', title: 'In Zimbabwe (EcoCash)' },
  ],
  fields: [
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      group: 'general',
      description: 'Text on the Donate button in the header and footer.',
      initialValue: 'Donate',
    }),
    defineField({
      name: 'heading',
      title: 'Dialog Heading',
      type: 'string',
      group: 'general',
      initialValue: 'Support Ekuphumuleni',
    }),
    defineField({
      name: 'subtitle',
      title: 'Dialog Subtitle',
      type: 'string',
      group: 'general',
      initialValue: 'Help us care for Bulawayo’s elders',
    }),
    defineField({
      name: 'footerNote',
      title: 'Footer Note',
      type: 'text',
      rows: 2,
      group: 'general',
      description: 'The small reassurance line at the bottom of the dialog.',
      initialValue:
        'Ekuphumuleni is a registered non-profit. Every gift goes to care, meals and facilities.',
    }),

    defineField({
      name: 'diaspora',
      title: 'Diaspora Tab',
      type: 'object',
      group: 'diaspora',
      description: 'The primary tab — card giving from outside Zimbabwe.',
      fields: [
        defineField({ name: 'label', title: 'Tab Label', type: 'string', initialValue: 'Diaspora' }),
        defineField({
          name: 'helper',
          title: 'Helper Line',
          type: 'string',
          initialValue: 'Giving from outside Zimbabwe',
        }),
        defineField({
          name: 'currencies',
          title: 'Currencies Line',
          type: 'string',
          description: 'Shown top-right, e.g. "USD · GBP · ZAR".',
          initialValue: 'USD · GBP · ZAR',
        }),
        defineField({
          name: 'amounts',
          title: 'Amount Buttons',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Suggested amounts, e.g. "$50". Keep the last as "Other".',
          initialValue: ['$25', '$50', '$100', '$250', 'Other'],
        }),
        defineField({ name: 'ctaLabel', title: 'Button Label', type: 'string', initialValue: 'Donate by card' }),
        defineField({
          name: 'note',
          title: 'Note Under Button',
          type: 'text',
          rows: 2,
          initialValue:
            'Secure card checkout is launching soon. For now we will arrange your gift by email.',
        }),
        defineField({
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
          description: 'Where the “Donate by card” button sends people until online card payments are live.',
          initialValue: 'administration@ekuphumuleni.ngo',
        }),
      ],
    }),

    defineField({
      name: 'local',
      title: 'In Zimbabwe Tab',
      type: 'object',
      group: 'local',
      fields: [
        defineField({ name: 'label', title: 'Tab Label', type: 'string', initialValue: 'In Zimbabwe' }),
        defineField({
          name: 'ecocash',
          title: 'EcoCash',
          type: 'object',
          fields: [
            defineField({ name: 'merchantCode', title: 'Merchant Code', type: 'string' }),
            defineField({
              name: 'dialString',
              title: 'Dial Instructions',
              type: 'string',
              description: 'e.g. "*151# → Pay Merchant".',
              initialValue: '*151# → Pay Merchant',
            }),
          ],
        }),
        defineField({
          name: 'bank',
          title: 'Bank Transfer',
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Bank', type: 'string', initialValue: 'CBZ Bank' }),
            defineField({ name: 'accountName', title: 'Account Name', type: 'string', initialValue: 'Ekuphumuleni Trust' }),
            defineField({ name: 'accountNumber', title: 'Account Number', type: 'string' }),
            defineField({ name: 'branch', title: 'Branch', type: 'string' }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Donate',
        subtitle: 'Donate button & dialog content',
        media: CreditCardIcon,
      };
    },
  },
});
