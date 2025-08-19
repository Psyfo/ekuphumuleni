import React from 'react';

import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main>
      <section
        id='contact'
        className='py-16 px-4 bg-[var(--color-off-white)] min-h-[60vh] flex items-center justify-center'
        aria-label='Contact Ekuphumuleni'
      >
        <div className='w-full max-w-2xl mx-auto'>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
