import type { PayloadRequest } from 'payload';

import { brandedEmail, escapeHtml, link, paragraph } from '../lib/email/layout';

/**
 * The emails the editor sends about accounts: the invitation a new person
 * gets, and the "forgot password" link. The look is shared with every other
 * email from the site (src/lib/email/layout.ts).
 */

/** How long an invitation link keeps working. */
export const INVITE_LINK_DAYS = 7;

/**
 * The address links in emails point at. Staging and production pin it
 * (serverURL); local dev uses whichever address the request came in on.
 */
export function siteOrigin(req: PayloadRequest): string {
  const pinned = req.payload.config.serverURL;
  if (pinned) return pinned.replace(/\/+$/, '');
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host');
  const proto = req.headers.get('x-forwarded-proto') ?? 'http';
  if (host) return `${proto}://${host}`;
  return (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/+$/, '');
}

export const passwordLink = (req: PayloadRequest, token: string) =>
  `${siteOrigin(req)}/admin/reset/${token}`;

const fallbackLink = (href: string) =>
  `If the button does not work, copy this address into your browser:<br>${link(href, escapeHtml(href))}`;

export function inviteEmail(req: PayloadRequest, opts: {
  token: string;
  name?: string | null;
  role: 'owner' | 'editor';
  invitedBy?: string | null;
}) {
  const origin = siteOrigin(req);
  const href = passwordLink(req, opts.token);
  const greeting = opts.name ? `Hello ${escapeHtml(opts.name)},` : 'Hello,';
  const who = opts.invitedBy ? escapeHtml(opts.invitedBy) : 'Ekuphumuleni';
  const what =
    opts.role === 'owner'
      ? 'You can change everything on the website, and add or remove the people who can edit it.'
      : 'You can change the text and photos on every page of the website.';
  const html = brandedEmail(origin, {
    heading: 'You have been invited to edit the Ekuphumuleni website',
    body: [
      paragraph(greeting),
      paragraph(
        `${who} has given you access to the editor for ${link(origin, escapeHtml(origin.replace(/^https?:\/\//, '')))}. ${what}`,
      ),
      paragraph(
        'To get started, choose a password. You will be signed in straight away, and from then on you sign in at the same address with your email and that password.',
      ),
    ],
    button: { label: 'Choose my password', href },
    footnotes: [
      `This link works for ${INVITE_LINK_DAYS} days. If it has expired, go to ${escapeHtml(origin)}/admin and choose "Forgot password?".`,
      fallbackLink(href),
    ],
  });
  return {
    subject: 'You have been invited to edit the Ekuphumuleni website',
    html,
    text: `${greeting.replace(/,$/, '')},\n\n${opts.invitedBy ?? 'Ekuphumuleni'} has given you access to the editor for ${origin}. ${what}\n\nChoose your password here (the link works for ${INVITE_LINK_DAYS} days):\n${href}\n\nIf it has expired, go to ${origin}/admin and choose "Forgot password?".`,
  };
}

export function resetEmailHTML(req: PayloadRequest, token: string) {
  const href = passwordLink(req, token);
  return brandedEmail(siteOrigin(req), {
    heading: 'Choose a new password',
    body: [
      paragraph(
        'Someone asked to reset the password for your Ekuphumuleni website editor account. If that was you, choose a new one below.',
      ),
      paragraph('If you did not ask for this, you can ignore this email. Your password stays the same.'),
    ],
    button: { label: 'Choose a new password', href },
    footnotes: ['This link works for one hour.', fallbackLink(href)],
  });
}
