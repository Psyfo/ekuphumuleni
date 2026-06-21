/**
 * Donate dialog content.
 *
 * Phase 1 (staging / board review): content lives here as a typed constant so the
 * UX is real and reviewable. The shape mirrors a future `donateSettings` Sanity
 * singleton — when payment details and a provider are finalised, this becomes the
 * fallback and the dialog reads from the CMS, so staff can edit bank/EcoCash
 * details without a deploy. Keep copy free of em dashes (project style).
 */

export type DonateContent = {
  buttonLabel: string;
  heading: string;
  subtitle: string;
  /** Diaspora rail — card giving from outside Zimbabwe (the primary path). */
  diaspora: {
    label: string;
    helper: string;
    currencies: string;
    amounts: string[];
    ctaLabel: string;
    note: string;
    /** Phase 1: card checkout not live yet, so the CTA arranges a gift by email. */
    contactEmail: string;
  };
  /** Local rail — giving from inside Zimbabwe via EcoCash, with bank transfer. */
  local: {
    label: string;
    ecocash: { merchantCode: string; dialString: string };
    bank: { name: string; accountName: string; accountNumber: string; branch: string };
  };
  footerNote: string;
};

export const DONATE_CONTENT: DonateContent = {
  buttonLabel: 'Donate',
  heading: 'Support Ekuphumuleni',
  subtitle: 'Help us care for Bulawayo’s elders',
  diaspora: {
    label: 'Diaspora',
    helper: 'Giving from outside Zimbabwe',
    currencies: 'USD · GBP · ZAR',
    amounts: ['$25', '$50', '$100', '$250', 'Other'],
    ctaLabel: 'Donate by card',
    note: 'Secure card checkout is launching soon. For now we will arrange your gift by email.',
    contactEmail: 'administration@ekuphumuleni.ngo',
  },
  local: {
    label: 'In Zimbabwe',
    ecocash: {
      merchantCode: '',
      dialString: '*151# → Pay Merchant',
    },
    bank: {
      name: 'CBZ Bank',
      accountName: 'Ekuphumuleni Trust',
      accountNumber: '',
      branch: '',
    },
  },
  footerNote:
    'Ekuphumuleni is a registered non-profit. Every gift goes to care, meals and facilities.',
};
