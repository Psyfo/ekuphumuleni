import type { PayloadRequest } from 'payload';

/**
 * The emails the editor sends about accounts: the invitation a new person
 * gets, and the "forgot password" link. Both share one simple branded layout,
 * written as table-based HTML with inline styles because that is what email
 * apps (Gmail and Outlook especially) reliably display.
 */

/** How long an invitation link keeps working. */
export const INVITE_LINK_DAYS = 7;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

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

function layout(origin: string, { heading, paragraphs, button, link, footnote }: {
  heading: string;
  paragraphs: string[];
  button: string;
  link: string;
  footnote: string;
}) {
  const p = (html: string) =>
    `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#2c211e;">${html}</p>`;
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#faf7f2;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f2;padding:32px 12px;font-family:'Nunito',Segoe UI,Helvetica,Arial,sans-serif;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid #e8dfd2;border-radius:16px;">
      <tr><td style="padding:28px 32px 8px;" align="center">
        <img src="${origin}/images/brand/ekuphumuleni_logo.png" width="72" height="72" alt="Ekuphumuleni" style="display:block;border:0;">
      </td></tr>
      <tr><td style="padding:8px 32px 0;">
        <h1 style="margin:0 0 16px;font-family:'Playfair Display',Georgia,serif;font-size:24px;line-height:1.3;color:#6b4f4f;font-weight:700;">${heading}</h1>
        ${paragraphs.map(p).join('\n        ')}
      </td></tr>
      <tr><td style="padding:8px 32px 24px;" align="left">
        <a href="${link}" style="display:inline-block;background:#6b4f4f;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:12px 24px;border-radius:999px;">${button}</a>
      </td></tr>
      <tr><td style="padding:0 32px 28px;">
        <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#766353;">${footnote}</p>
        <p style="margin:0;font-size:13px;line-height:1.5;color:#766353;word-break:break-all;">If the button does not work, copy this address into your browser:<br><a href="${link}" style="color:#b05a3c;">${link}</a></p>
      </td></tr>
    </table>
    <p style="margin:16px 0 0;font-size:12px;color:#a68a64;font-style:italic;">Ekuphumuleni Geriatric Nursing Home, Bulawayo</p>
  </td></tr>
</table>
</body></html>`;
}

export function inviteEmail(req: PayloadRequest, opts: {
  token: string;
  name?: string | null;
  role: 'owner' | 'editor';
  invitedBy?: string | null;
}) {
  const origin = siteOrigin(req);
  const link = passwordLink(req, opts.token);
  const greeting = opts.name ? `Hello ${escape(opts.name)},` : 'Hello,';
  const who = opts.invitedBy ? escape(opts.invitedBy) : 'Ekuphumuleni';
  const what =
    opts.role === 'owner'
      ? 'You can change everything on the website, and add or remove the people who can edit it.'
      : 'You can change the text and photos on every page of the website.';
  const html = layout(origin, {
    heading: 'You have been invited to edit the Ekuphumuleni website',
    paragraphs: [
      greeting,
      `${who} has given you access to the editor for <a href="${origin}" style="color:#b05a3c;">${escape(origin.replace(/^https?:\/\//, ''))}</a>. ${what}`,
      'To get started, choose a password. You will be signed in straight away, and from then on you sign in at the same address with your email and that password.',
    ],
    button: 'Choose my password',
    link,
    footnote: `This link works for ${INVITE_LINK_DAYS} days. If it has expired, go to ${escape(origin)}/admin and choose "Forgot password?".`,
  });
  return {
    subject: 'You have been invited to edit the Ekuphumuleni website',
    html,
    text: `${greeting.replace(/,$/, '')},\n\n${opts.invitedBy ?? 'Ekuphumuleni'} has given you access to the editor for ${origin}. ${what}\n\nChoose your password here (the link works for ${INVITE_LINK_DAYS} days):\n${link}\n\nIf it has expired, go to ${origin}/admin and choose "Forgot password?".`,
  };
}

export function resetEmailHTML(req: PayloadRequest, token: string) {
  return layout(siteOrigin(req), {
    heading: 'Choose a new password',
    paragraphs: [
      'Someone asked to reset the password for your Ekuphumuleni website editor account. If that was you, choose a new one below.',
      'If you did not ask for this, you can ignore this email. Your password stays the same.',
    ],
    button: 'Choose a new password',
    link: passwordLink(req, token),
    footnote: 'This link works for one hour.',
  });
}
