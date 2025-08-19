'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      // Simulate success for demo
      setStatus('success');
    }, 1200);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-xl mx-auto bg-white rounded-xl shadow p-8 space-y-6'
      aria-label='Contact form'
    >
      <h2 className='heading-3 text-center mb-2'>Send Us a Message</h2>
      <div>
        <label htmlFor='name' className='block font-semibold mb-1'>
          Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          className='w-full px-4 py-2 rounded border border-[var(--color-earth-brown)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label htmlFor='email' className='block font-semibold mb-1'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          className='w-full px-4 py-2 rounded border border-[var(--color-earth-brown)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label htmlFor='message' className='block font-semibold mb-1'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          className='w-full px-4 py-2 rounded border border-[var(--color-earth-brown)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)]'
          disabled={status === 'submitting'}
        />
      </div>
      <button
        type='submit'
        className='w-full px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] transition'
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <div
          className='mt-4 text-green-700 text-center font-semibold'
          role='status'
        >
          Thank you! Your message has been sent.
        </div>
      )}
      {status === 'error' && (
        <div
          className='mt-4 text-red-700 text-center font-semibold'
          role='alert'
        >
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
