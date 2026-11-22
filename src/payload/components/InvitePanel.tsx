'use client';

import { useAuth } from '@payloadcms/ui';
import { useEffect, useState, type FormEvent } from 'react';

/* Sits above "People with access". Owners type someone's email, pick what
   they can do, and the person gets an email with a link to choose their own
   password. Editors never see it, since only owners manage accounts. */

type Status = { kind: 'ok' | 'error'; message: string } | null;

// The list below only picks up the new person on a full page load, so a
// successful invite reloads the page and carries its message across.
const FLASH_KEY = 'eku-invite-flash';

export function InvitePanel() {
  const { user } = useAuth<{ role?: string }>();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'editor' | 'owner'>('editor');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    try {
      const flash = sessionStorage.getItem(FLASH_KEY);
      if (flash) {
        sessionStorage.removeItem(FLASH_KEY);
        setStatus({ kind: 'ok', message: flash });
      }
    } catch {
      // Storage blocked: the list still reloads, just without the message.
    }
  }, []);

  if (user?.role !== 'owner') return null;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/users/invite', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, role }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      const message = data.message ?? (res.ok ? 'Invitation sent.' : 'Something went wrong. Try again.');
      if (res.ok) {
        try {
          sessionStorage.setItem(FLASH_KEY, message);
        } catch {
          // Storage blocked: reload anyway so the list is current.
        }
        window.location.reload();
        return;
      }
      setStatus({ kind: 'error', message });
    } catch {
      setStatus({ kind: 'error', message: 'Could not reach the server. Check your connection and try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className='eku-invite' aria-labelledby='eku-invite-title'>
      <h2 id='eku-invite-title'>Invite someone</h2>
      <p className='eku-invite__lede'>
        They will get an email with a link to choose their own password. You never need to know
        it.
      </p>
      <form className='eku-invite__form' onSubmit={onSubmit}>
        <label>
          <span>Email</span>
          <input
            type='email'
            required
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='name@example.org'
          />
        </label>
        <label>
          <span>
            Name <em>(optional)</em>
          </span>
          <input
            type='text'
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>What they can do</span>
          <select value={role} onChange={(e) => setRole(e.target.value as 'editor' | 'owner')}>
            <option value='editor'>Editor: change content</option>
            <option value='owner'>Owner: change content and manage people</option>
          </select>
        </label>
        <button type='submit' className='eku-invite__button' disabled={sending}>
          {sending ? 'Sending…' : 'Send invitation'}
        </button>
      </form>
      {status && (
        <p
          className={`eku-invite__status eku-invite__status--${status.kind}`}
          role={status.kind === 'error' ? 'alert' : 'status'}
        >
          {status.message}
        </p>
      )}
      <p className='eku-invite__note'>
        Inviting someone who already has access sends them a fresh link, for example if they lost
        the first email.
      </p>
    </section>
  );
}
