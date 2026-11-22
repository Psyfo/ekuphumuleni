export default function AboutLoading() {
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

      {/* Establishment section skeleton */}
      <section className='bg-[var(--color-off-white)] px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-56 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-80 bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid lg:grid-cols-2 gap-12 mb-16'>
            <div className='aspect-[4/5] bg-gray-200 rounded-2xl' />
            <div className='space-y-4'>
              <div className='h-6 w-48 bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-2/3 bg-gray-200 rounded' />
              <div className='h-24 w-full bg-gray-200 rounded-xl mt-6' />
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-6'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='flex flex-col items-center gap-3 p-6'>
                <div className='w-16 h-16 rounded-xl bg-gray-200' />
                <div className='h-4 w-32 bg-gray-200 rounded' />
                <div className='h-3 w-40 bg-gray-200 rounded' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision section skeleton */}
      <section className='px-4 py-20 bg-[var(--color-warm-beige)]'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-72 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid lg:grid-cols-2 gap-8 mb-12'>
            <div className='h-64 bg-white/60 rounded-2xl' />
            <div className='h-64 bg-white/60 rounded-2xl' />
          </div>
          <div className='h-48 bg-white/60 rounded-2xl' />
        </div>
      </section>

      {/* Impact section skeleton */}
      <section className='px-4 py-20 bg-white'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-56 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-44 bg-gray-200 rounded-2xl' />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
