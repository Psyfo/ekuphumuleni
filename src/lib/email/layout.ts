/**
 * The one look every email from the site shares: a white card on warm sand,
 * the cradle mark on top, a Playfair heading, Nunito body text, an optional
 * cocoa pill button, small print, and the home's name underneath.
 *
 * Written as table-based HTML with inline styles because that is what email
 * apps (Gmail and Outlook especially) reliably display; a <style> block is
 * partly or wholly ignored by several of them.
 */

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const COLORS = {
  sand: '#faf7f2',
  card: '#ffffff',
  border: '#e8dfd2',
  text: '#2c211e',
  heading: '#6b4f4f',
  muted: '#766353',
  accent: '#b05a3c',
  gold: '#a68a64',
  quote: '#f6efe4',
  quoteEdge: '#c97c5d',
};

const FONT_BODY = "'Nunito',Segoe UI,Helvetica,Arial,sans-serif";
const FONT_HEADING = "'Playfair Display',Georgia,serif";

/** A body paragraph. Pass HTML; escape any user input first. */
export const paragraph = (html: string) =>
  `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:${COLORS.text};">${html}</p>`;

/** A link in the accent colour. */
export const link = (href: string, label: string) =>
  `<a href="${escapeHtml(href)}" style="color:${COLORS.accent};">${label}</a>`;

/** A quoted block, e.g. someone's message. Text is escaped and keeps its line breaks. */
export const quote = (text: string, label?: string) =>
  `<div style="margin:0 0 16px;padding:14px 16px;background:${COLORS.quote};border-left:4px solid ${COLORS.quoteEdge};border-radius:0 8px 8px 0;">` +
  (label
    ? `<p style="margin:0 0 6px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:${COLORS.muted};font-weight:700;">${escapeHtml(label)}</p>`
    : '') +
  `<p style="margin:0;font-size:15px;line-height:1.6;color:${COLORS.text};">${escapeHtml(text).replace(/\n/g, '<br>')}</p></div>`;

/** A short label/value list, e.g. who sent a message. Values are HTML; escape user input first. */
export const details = (rows: [label: string, valueHtml: string][]) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;font-size:15px;line-height:1.5;color:${COLORS.text};">` +
  rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:2px 16px 2px 0;color:${COLORS.muted};vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:2px 0;">${value}</td></tr>`,
    )
    .join('') +
  `</table>`;

export function brandedEmail(
  origin: string,
  opts: {
    heading: string;
    /** Body HTML built from paragraph(), quote(), details(). */
    body: string[];
    button?: { label: string; href: string };
    /** Small print under the button, as HTML. */
    footnotes?: string[];
  },
) {
  const site = origin.replace(/\/+$/, '');
  const button = opts.button
    ? `<tr><td style="padding:8px 32px 24px;" align="left">
        <a href="${escapeHtml(opts.button.href)}" style="display:inline-block;background:${COLORS.heading};color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:12px 24px;border-radius:999px;">${opts.button.label}</a>
      </td></tr>`
    : '';
  const footnotes = opts.footnotes?.length
    ? `<tr><td style="padding:${opts.button ? '0' : '8px'} 32px 28px;">${opts.footnotes
        .map(
          (f) =>
            `<p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:${COLORS.muted};word-break:break-word;">${f}</p>`,
        )
        .join('')}</td></tr>`
    : '';
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${COLORS.sand};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.sand};padding:32px 12px;font-family:${FONT_BODY};">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:${COLORS.card};border:1px solid ${COLORS.border};border-radius:16px;">
      <tr><td style="padding:28px 32px 8px;" align="center">
        <img src="${site}/images/brand/ekuphumuleni_logo.png" width="72" height="72" alt="Ekuphumuleni" style="display:block;border:0;">
      </td></tr>
      <tr><td style="padding:8px 32px 0;">
        <h1 style="margin:0 0 16px;font-family:${FONT_HEADING};font-size:24px;line-height:1.3;color:${COLORS.heading};font-weight:700;">${opts.heading}</h1>
        ${opts.body.join('\n        ')}
      </td></tr>
      ${button}
      ${footnotes}
    </table>
    <p style="margin:16px 0 0;font-size:12px;color:${COLORS.gold};font-style:italic;">Ekuphumuleni Geriatric Nursing Home, Bulawayo</p>
  </td></tr>
</table>
</body></html>`;
}
