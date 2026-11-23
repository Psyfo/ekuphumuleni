import { brandedEmail, details, escapeHtml, link, paragraph, quote } from './layout';

/**
 * The two emails a contact-form message produces: a notification to the
 * home's administration, and a confirmation to the person who wrote in.
 */

export type HomeContact = {
  /** The address staff actually read, e.g. administration@ekuphumuleni.ngo. */
  email?: string;
  /** Phone lines as shown on the Contact page, e.g. "Tel: +263 292 216877". */
  phones: string[];
};

type Message = { name: string; email: string; message: string };

const firstName = (name: string) => name.trim().split(/\s+/)[0] || name;

export function notificationEmail(origin: string, m: Message) {
  const name = escapeHtml(m.name);
  const replyHref = `mailto:${m.email}?subject=${encodeURIComponent('Re: Your message to Ekuphumuleni')}`;
  const html = brandedEmail(origin, {
    heading: 'New message from the website',
    body: [
      paragraph(`${name} sent a message through the contact form on ${link(origin, escapeHtml(origin.replace(/^https?:\/\//, '')))}.`),
      details([
        ['Name', name],
        ['Email', link(`mailto:${m.email}`, escapeHtml(m.email))],
      ]),
      quote(m.message, 'Message'),
    ],
    button: { label: `Reply to ${escapeHtml(firstName(m.name))}`, href: replyHref },
    footnotes: [`You can also simply reply to this email; your answer goes straight to ${name}.`],
  });
  return {
    subject: `New message from ${m.name} via the website`,
    html,
    text: `${m.name} (${m.email}) sent a message through the contact form on ${origin}:\n\n${m.message}\n\nReply to this email to answer them.`,
  };
}

export function confirmationEmail(origin: string, m: Message, home: HomeContact) {
  const urgent: string[] = [];
  if (home.phones.length) urgent.push(`call us on ${home.phones.map(escapeHtml).join(' or ')}`);
  if (home.email) urgent.push(`email ${link(`mailto:${home.email}`, escapeHtml(home.email))}`);
  const urgentText: string[] = [];
  if (home.phones.length) urgentText.push(`call us on ${home.phones.join(' or ')}`);
  if (home.email) urgentText.push(`email ${home.email}`);

  const html = brandedEmail(origin, {
    heading: 'Thank you for your message',
    body: [
      paragraph(`Dear ${escapeHtml(m.name)},`),
      paragraph(
        'Thank you for getting in touch with Ekuphumuleni. We have received your message and will reply within 24 to 48 hours.',
      ),
      quote(m.message, 'Your message'),
      ...(urgent.length ? [paragraph(`If your matter is urgent, please ${urgent.join(', or ')}.`)] : []),
      paragraph('Warm regards,<br><strong>The Ekuphumuleni team</strong>'),
    ],
    button: { label: 'Visit our website', href: origin },
    footnotes: ['You are receiving this because you sent us a message through our website.'],
  });
  return {
    subject: 'Thank you for contacting Ekuphumuleni',
    html,
    text: `Dear ${m.name},\n\nThank you for getting in touch with Ekuphumuleni. We have received your message and will reply within 24 to 48 hours.\n\nYour message:\n${m.message}\n\n${urgentText.length ? `If your matter is urgent, please ${urgentText.join(', or ')}.\n\n` : ''}Warm regards,\nThe Ekuphumuleni team\n${origin}`,
  };
}

/** Pulls the home's email and phone lines out of the Contact page's details list. */
export function homeContactFrom(detailsList: unknown): HomeContact {
  const rows = Array.isArray(detailsList) ? (detailsList as { iconName?: string; lines?: unknown; link?: string | null }[]) : [];
  const lines = (r?: { lines?: unknown }) => (Array.isArray(r?.lines) ? (r!.lines as unknown[]).map(String).filter(Boolean) : []);
  const envelope = rows.find((r) => r.iconName === 'envelope');
  const phone = rows.find((r) => r.iconName === 'phone');
  const fromLink = envelope?.link?.startsWith('mailto:') ? envelope.link.slice(7) : undefined;
  const email = fromLink || lines(envelope).find((l) => l.includes('@'));
  // "Tel: +263 292 216877" reads oddly mid-sentence, so drop the label.
  const phones = lines(phone).map((l) => l.replace(/^[A-Za-z ]+:\s*/, '').trim()).filter(Boolean);
  return { email: email?.trim(), phones };
}
