import React from 'react';

import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className=''>
      <section
        id='contact'
        className='flex justify-center items-center bg-[var(--color-off-white)] px-4 py-16 min-h-[60vh]'
        aria-label='Contact Ekuphumuleni'
      >
        <div className='mx-auto w-full max-w-2xl'>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
