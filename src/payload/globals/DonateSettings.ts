import type { GlobalConfig } from 'payload';

import { anyone, signedIn } from '../access';
import { shortenDbNames } from '../db-names';
import { revalidateGlobal } from '../revalidate';

/**
 * The site-wide Donate button and its dialog (Diaspora = card, In Zimbabwe =
 * EcoCash and bank). Every field is optional: anything left empty falls back
 * to the defaults in src/components/donate-content.ts, so the dialog never
 * shows a blank. Ported from the Sanity "Donate" document.
 */
export const DonateSettings: GlobalConfig = {
  slug: 'donate',
  label: 'Donate button',
  admin: {
    group: 'Site-wide',
    description:
      'The Donate button in the header and footer, and the dialog it opens. Leave a field empty to use the standard wording.',
  },
  access: { read: anyone, update: signedIn },
  hooks: { afterChange: [revalidateGlobal] },
  versions: { max: 10 },
  fields: shortenDbNames([
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'buttonLabel',
              label: 'Button Label',
              type: 'text',
              admin: { description: 'Text on the Donate button in the header and footer.', placeholder: 'Donate' },
            },
            { name: 'heading', label: 'Dialog Heading', type: 'text', admin: { placeholder: 'Support Ekuphumuleni' } },
            {
              name: 'subtitle',
              label: 'Dialog Subtitle',
              type: 'text',
              admin: { placeholder: 'Help us care for Bulawayo’s elders' },
            },
            {
              name: 'footerNote',
              label: 'Footer Note',
              type: 'textarea',
              admin: { rows: 2, description: 'The small reassurance line at the bottom of the dialog.' },
            },
          ],
        },
        {
          label: 'Diaspora (card)',
          fields: [
            {
              name: 'diaspora',
              label: 'Diaspora Tab',
              type: 'group',
              admin: { description: 'The primary tab: card giving from outside Zimbabwe.' },
              fields: [
                { name: 'label', label: 'Tab Label', type: 'text', admin: { placeholder: 'Diaspora' } },
                { name: 'helper', label: 'Helper Line', type: 'text', admin: { placeholder: 'Giving from outside Zimbabwe' } },
                {
                  name: 'currencies',
                  label: 'Currencies Line',
                  type: 'text',
                  admin: { description: 'Shown top-right, e.g. "USD · GBP · ZAR".' },
                },
                {
                  name: 'amounts',
                  label: 'Amount Buttons',
                  type: 'text',
                  hasMany: true,
                  admin: { description: 'Suggested amounts, e.g. "$50". Keep the last as "Other".' },
                },
                { name: 'ctaLabel', label: 'Button Label', type: 'text', admin: { placeholder: 'Donate by card' } },
                { name: 'note', label: 'Note Under Button', type: 'textarea', admin: { rows: 2 } },
                {
                  name: 'contactEmail',
                  label: 'Contact Email',
                  type: 'text',
                  admin: {
                    description: 'Where people are sent if secure card checkout is unavailable.',
                    placeholder: 'administration@ekuphumuleni.ngo',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'In Zimbabwe (EcoCash)',
          fields: [
            {
              name: 'local',
              label: 'In Zimbabwe Tab',
              type: 'group',
              fields: [
                { name: 'label', label: 'Tab Label', type: 'text', admin: { placeholder: 'In Zimbabwe' } },
                {
                  name: 'ecocash',
                  label: 'EcoCash',
                  type: 'group',
                  fields: [
                    { name: 'merchantCode', label: 'Merchant Code', type: 'text' },
                    {
                      name: 'dialString',
                      label: 'Dial Instructions',
                      type: 'text',
                      admin: { description: 'e.g. "*151# → Pay Merchant".' },
                    },
                  ],
                },
                {
                  name: 'bank',
                  label: 'Bank Transfer',
                  type: 'group',
                  fields: [
                    { name: 'name', label: 'Bank', type: 'text', admin: { placeholder: 'CBZ Bank' } },
                    { name: 'accountName', label: 'Account Name', type: 'text', admin: { placeholder: 'Ekuphumuleni Trust' } },
                    { name: 'accountNumber', label: 'Account Number', type: 'text' },
                    { name: 'branch', label: 'Branch', type: 'text' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]),
};
