export default function FacilitiesLoading() {
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

      {/* Showcase section skeleton */}
      <section className='bg-white px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-72 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='space-y-12'>
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className='grid lg:grid-cols-2 gap-8 items-center'>
                <div className='aspect-[4/3] bg-gray-200 rounded-2xl' />
                <div className='space-y-3'>
                  <div className='h-6 w-48 bg-gray-200 rounded' />
                  <div className='h-4 w-full bg-gray-200 rounded' />
                  <div className='h-4 w-2/3 bg-gray-200 rounded' />
                </div>
              </div>
            ))}
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-32 bg-gray-200 rounded-xl' />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability section skeleton */}
      <section className='px-4 py-20 bg-[var(--color-soft-sand)]/30'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-72 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-40 bg-white rounded-xl' />
            ))}
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className='aspect-[4/3] bg-gray-200 rounded-2xl' />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
