export default function DonorsLoading() {
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

      {/* Donor wall skeleton */}
      <section className='bg-white px-4 py-20'>
        <div className='mx-auto max-w-7xl animate-pulse'>
          <div className='h-7 w-56 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='h-8 w-24 bg-gray-200 rounded mx-auto mb-8' />
          <div className='bg-gray-50 p-8 md:p-12 border border-subtle rounded-2xl space-y-3'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className='h-4 w-3/4 bg-gray-200 rounded' />
            ))}
          </div>
        </div>
      </section>

      {/* Special mentions skeleton */}
      <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-off-white)] to-[var(--color-soft-sand)] px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-56 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='h-64 bg-white rounded-2xl' />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
