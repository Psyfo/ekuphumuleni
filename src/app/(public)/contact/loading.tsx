export default function ContactLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-16 lg:py-20'>
        <div className='max-w-4xl mx-auto text-center space-y-4 animate-pulse'>
          <div className='h-4 w-28 bg-gray-300/40 rounded mx-auto' />
          <div className='h-10 w-72 bg-gray-300/50 rounded mx-auto' />
          <div className='h-4 w-96 max-w-full bg-gray-300/40 rounded mx-auto' />
          <div className='h-28 w-full max-w-2xl bg-gray-300/30 rounded-2xl mx-auto mt-8' />
        </div>
      </section>

      {/* Form skeleton */}
      <section className='bg-[var(--color-off-white)] px-4 py-20'>
        <div className='mx-auto max-w-4xl animate-pulse'>
          <div className='bg-white p-8 md:p-10 lg:p-12 border border-subtle rounded-2xl space-y-6'>
            <div className='text-center space-y-3'>
              <div className='h-7 w-56 bg-gray-200 rounded mx-auto' />
              <div className='h-4 w-72 max-w-full bg-gray-200 rounded mx-auto' />
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='space-y-2'>
                <div className='h-4 w-24 bg-gray-200 rounded' />
                <div className='h-12 w-full bg-gray-200 rounded-xl' />
              </div>
            ))}
            <div className='h-12 w-full bg-gray-200 rounded-xl' />
          </div>
        </div>
      </section>

      {/* Info section skeleton */}
      <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-off-white)] to-[var(--color-soft-sand)] px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-72 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-40 bg-white rounded-2xl' />
            ))}
          </div>
          <div className='aspect-[16/9] bg-gray-200 rounded-2xl' />
        </div>
      </section>
    </main>
  );
}
