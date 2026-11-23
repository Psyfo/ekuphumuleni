/**
 * The Privacy page's content. Staff edit it in the CMS ("Privacy Page"); this
 * copy is shown if the CMS is unreachable, and was used to fill the CMS when
 * the page was first written. Formatting rules: see src/components/LegalDocument.tsx.
 *
 * A preliminary policy describing what the website actually does (November
 * 2026), to be replaced by professionally drafted documents.
 */

const BODY = `Last updated: 24 November 2026

Ekuphumuleni Geriatric Nursing Home ("Ekuphumuleni", "we", "us") is a non-profit nursing home in Bulawayo, Zimbabwe. This policy explains what personal information we collect through this website, how we use it, and the choices you have.

It covers this website only. Information about residents and their care is handled separately, under the home's own confidentiality practices.

## What we collect

- When you send us a message through the contact form: your name, your email address and your message.
- When you visit the website: anonymous information about how it is used, such as which pages are viewed, the type of device and browser, and roughly which country a visit comes from. See "Analytics and cookies" below.

Please do not send sensitive information, such as medical details, through the website. If you would like to discuss a resident's care, please call or visit us.

## How we use it

- To reply to your message and help with your enquiry. We also send you an email confirming that we received it.
- To understand how the website is used, so that we can improve it.

We do not sell your information, and we do not share it with anyone for marketing.

## Who handles it for us

- Messages from the contact form are delivered to our staff by email, through ZeptoMail, an email delivery service run by Zoho.
- The website runs on a private server managed by our web developer.
- Google Analytics, run by Google, helps us understand how the website is used.

These providers handle your information only to provide their service to us.

## Analytics and cookies

We use two tools to understand how the website is used.

- Umami, which we run on our own server, counts visits without using cookies and without identifying you.
- Google Analytics uses cookies to tell visits apart. It does not tell us who you are, but Google receives information such as your IP address and browser details.

You can block cookies in your browser's settings, or turn off Google Analytics with Google's opt-out add-on at https://tools.google.com/dlpage/gaoptout.

## How long we keep it

We keep messages for as long as we need them to deal with your enquiry and to keep a reasonable record of our correspondence, and then delete them. Analytics information is kept as summary statistics.

## Your rights

Under Zimbabwe's Cyber and Data Protection Act, you can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Contact us using the details below and we will respond as soon as we reasonably can.

## Children

This website is not aimed at children, and we do not knowingly collect information from them.

## Changes to this policy

We may update this policy from time to time. The date at the top shows when it last changed.

## Contact us

Ekuphumuleni Geriatric Nursing Home
Stand 7165 Old Falls Road, P O Box 1667, Bulawayo, Zimbabwe
Email: administration@ekuphumuleni.ngo
Tel: +263 292 216877
Mobile: +263 778 719166`;

export const FALLBACK_PRIVACY_PAGE_SETTINGS = {
  heading: 'Privacy Policy',
  body: BODY,

  seo: {
    metaTitle: 'Privacy Policy',
    metaDescription:
      "How Ekuphumuleni Geriatric Nursing Home collects and uses personal information through this website, the cookies it uses, and your rights under Zimbabwe's Cyber and Data Protection Act.",
  },
};
