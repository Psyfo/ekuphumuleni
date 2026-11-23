/**
 * The Terms page's content. Staff edit it in the CMS ("Terms Page"); this
 * copy is shown if the CMS is unreachable, and was used to fill the CMS when
 * the page was first written. Formatting rules: see src/components/LegalDocument.tsx.
 *
 * Preliminary website terms of use (November 2026), to be replaced by
 * professionally drafted documents. They cover the website, not admission or
 * care, which are agreed directly with the home.
 */

const BODY = `Last updated: 24 November 2026

These terms apply to your use of the Ekuphumuleni Geriatric Nursing Home website. By using the website, you agree to them. If you do not agree, please do not use the website.

## About this website

This website tells you about Ekuphumuleni, our care, our facilities and our team, and lets you get in touch with us. The information is general. It is not medical advice, and it does not replace a conversation with our staff or with a health professional.

## Admissions and services

Nothing on this website is an offer of a place or of care. Admission, fees and the services we provide are agreed directly with the home, through our admission process. Please contact us to discuss your needs.

## Accuracy

We work to keep the website accurate and up to date, but details such as visiting hours, services and contact information can change. If something matters to a decision you are making, please confirm it with us.

## Photos and content

The text, photos, logo and other content on this website belong to Ekuphumuleni or are used with permission. Many photos show our residents and staff, so please do not copy, reuse or share them elsewhere without our written permission. You are welcome to link to the website.

## Using the contact form

Please use the contact form for genuine enquiries. Do not send anything unlawful, abusive or misleading, or other people's personal information without their consent.

## Links to other websites

Where we link to other websites, we do so for your convenience. We are not responsible for their content or for how they handle your information.

## Our responsibility

We provide this website in good faith. As far as the law allows, we are not liable for any loss arising from your use of the website or from relying on its content. Nothing in these terms limits any rights you have under Zimbabwean law.

## Privacy

How we handle personal information is explained in our [Privacy Policy](/privacy).

## Changes to these terms

We may update these terms from time to time. The date at the top shows when they last changed.

## Governing law

These terms are governed by the laws of Zimbabwe.

## Contact us

Ekuphumuleni Geriatric Nursing Home
Stand 7165 Old Falls Road, P O Box 1667, Bulawayo, Zimbabwe
Email: administration@ekuphumuleni.ngo
Tel: +263 292 216877
Mobile: +263 778 719166`;

export const FALLBACK_TERMS_PAGE_SETTINGS = {
  heading: 'Terms of Use',
  body: BODY,

  seo: {
    metaTitle: 'Terms of Use',
    metaDescription:
      'The terms for using the Ekuphumuleni Geriatric Nursing Home website: what its information is for, how its photos and content may be used, and who to contact.',
  },
};
