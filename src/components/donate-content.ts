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

/** Loose shape of the `donateSettings` query result (fields may be missing/null). */
type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> | null } | null | undefined;
export type DonateSettingsInput = DeepPartial<DonateContent>;

const str = (value: unknown, fallback: string): string =>
  typeof value === 'string' && value.trim() ? value : fallback;

/**
 * Merge a (possibly partial) CMS document over the fallback so the dialog never
 * renders blanks. Empty strings fall back too; genuinely optional values
 * (merchant code, account number, branch) pass through as-is.
 */
export function resolveDonateContent(input: DonateSettingsInput): DonateContent {
  const f = DONATE_CONTENT;
  if (!input) return f;
  const d = input.diaspora ?? {};
  const l = input.local ?? {};
  const ecocash = l.ecocash ?? {};
  const bank = l.bank ?? {};
  return {
    buttonLabel: str(input.buttonLabel, f.buttonLabel),
    heading: str(input.heading, f.heading),
    subtitle: str(input.subtitle, f.subtitle),
    diaspora: {
      label: str(d.label, f.diaspora.label),
      helper: str(d.helper, f.diaspora.helper),
      currencies: str(d.currencies, f.diaspora.currencies),
      amounts:
        Array.isArray(d.amounts) && d.amounts.length
          ? d.amounts.filter((a): a is string => typeof a === 'string')
          : f.diaspora.amounts,
      ctaLabel: str(d.ctaLabel, f.diaspora.ctaLabel),
      note: str(d.note, f.diaspora.note),
      contactEmail: str(d.contactEmail, f.diaspora.contactEmail),
    },
    local: {
      label: str(l.label, f.local.label),
      ecocash: {
        merchantCode: str(ecocash.merchantCode, f.local.ecocash.merchantCode),
        dialString: str(ecocash.dialString, f.local.ecocash.dialString),
      },
      bank: {
        name: str(bank.name, f.local.bank.name),
        accountName: str(bank.accountName, f.local.bank.accountName),
        accountNumber: str(bank.accountNumber, f.local.bank.accountNumber),
        branch: str(bank.branch, f.local.bank.branch),
      },
    },
    footerNote: str(input.footerNote, f.footerNote),
  };
}
