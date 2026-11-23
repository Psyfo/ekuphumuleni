import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Turns the plain text staff type into the Privacy and Terms pages into a
 * readable document, so the editor can stay a simple text box:
 *
 *   - a blank line starts a new paragraph
 *   - a line starting with "## " is a section heading
 *   - lines starting with "- " are a bulleted list
 *   - a paragraph starting with "Last updated" is shown as small print
 *   - email addresses, web addresses and [label](/path) links become links
 */

type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'paragraph'; lines: string[] };

function parse(body: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of body.replace(/\r\n/g, '\n').split(/\n\s*\n/)) {
    const lines = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
    let para: string[] = [];
    let list: string[] = [];
    const flush = () => {
      if (para.length) blocks.push({ kind: 'paragraph', lines: para });
      if (list.length) blocks.push({ kind: 'list', items: list });
      para = [];
      list = [];
    };
    for (const line of lines) {
      if (line.startsWith('## ')) {
        flush();
        blocks.push({ kind: 'heading', text: line.slice(3).trim() });
      } else if (line.startsWith('- ')) {
        if (para.length) flush();
        list.push(line.slice(2).trim());
      } else {
        if (list.length) flush();
        para.push(line);
      }
    }
    flush();
  }
  return blocks;
}

const TOKEN =
  /\[([^\]]+)\]\(([^)\s]+)\)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})|(https?:\/\/[^\s)]+[^\s).,;:])/g;

const linkClass =
  'text-[var(--color-terracotta-deep)] underline underline-offset-2 hover:text-[var(--color-terracotta-dark)]';

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const [, label, href, email, url] = m;
    if (label && href) {
      out.push(
        href.startsWith('/') ? (
          <Link key={at} href={href} className={linkClass}>
            {label}
          </Link>
        ) : (
          <a key={at} href={href} className={linkClass} rel='noopener' target='_blank'>
            {label}
          </a>
        ),
      );
    } else if (email) {
      out.push(
        <a key={at} href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>,
      );
    } else if (url) {
      out.push(
        <a key={at} href={url} className={linkClass} rel='noopener' target='_blank'>
          {url.replace(/^https?:\/\//, '')}
        </a>,
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function LegalDocument({ body }: { body: string }) {
  const blocks = parse(body ?? '');
  return (
    <div className='text-[var(--color-deep-cocoa)]'>
      {blocks.map((b, i) => {
        if (b.kind === 'heading') {
          return (
            <h2 key={i} className='mt-10 mb-3 text-[var(--color-deep-cocoa)] heading-3'>
              {b.text}
            </h2>
          );
        }
        if (b.kind === 'list') {
          return (
            <ul key={i} className='space-y-2 mb-5 pl-6 list-disc marker:text-[var(--color-muted-terracotta)] body-text'>
              {b.items.map((item, j) => (
                <li key={j}>{inline(item)}</li>
              ))}
            </ul>
          );
        }
        const small = i === 0 && /^last updated/i.test(b.lines[0]);
        return (
          <p key={i} className={small ? 'mb-8 text-[var(--color-earth-brown)] caption' : 'mb-5 body-text'}>
            {b.lines.map((line, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {inline(line)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
