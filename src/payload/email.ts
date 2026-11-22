import type { EmailAdapter, SendEmailOptions } from 'payload';

/**
 * Sends the admin's own emails ("forgot password", new account invitations)
 * through ZeptoMail, the same service and sender as the contact form. Without
 * the ZeptoMail settings (local dev, CI) Payload falls back to printing emails
 * to the server log instead.
 */
type Address = string | { address: string; name?: string };

const toList = (value: SendEmailOptions['to']) =>
  (Array.isArray(value) ? value : value ? [value] : []).map((v) => {
    const a = v as Address;
    return typeof a === 'string'
      ? { email_address: { address: a } }
      : { email_address: { address: a.address, name: a.name } };
  });

export function zeptoMailAdapter(): EmailAdapter | undefined {
  const host = process.env.ZEPTOMAIL_HOST;
  const token = process.env.ZEPTOMAIL_TOKEN;
  const fromAddress = process.env.MAIL_FROM_EMAIL;
  if (!host || !token || !fromAddress) return undefined;
  const fromName = process.env.MAIL_FROM_NAME || 'Ekuphumuleni';

  return () => ({
    name: 'zeptomail',
    defaultFromAddress: fromAddress,
    defaultFromName: fromName,
    sendEmail: async (message) => {
      const res = await fetch(`https://${host}/v1.1/email`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({
          from: { address: fromAddress, name: fromName },
          to: toList(message.to),
          subject: message.subject,
          htmlbody: message.html,
          textbody: message.text,
        }),
      });
      if (!res.ok) throw new Error(`ZeptoMail API error ${res.status}: ${await res.text()}`);
      return res.json();
    },
  });
}
