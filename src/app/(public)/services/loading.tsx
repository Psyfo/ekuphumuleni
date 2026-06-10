export default function ServicesLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-16 lg:py-20'>
        <div className='max-w-5xl mx-auto text-center space-y-4 animate-pulse'>
          <div className='h-4 w-28 bg-[var(--color-deep-cocoa)]/10 rounded mx-auto' />
          <div className='h-12 w-64 bg-[var(--color-deep-cocoa)]/10 rounded mx-auto' />
          <div className='h-1.5 w-20 bg-[var(--color-muted-terracotta)]/30 rounded-full mx-auto' />
          <div className='h-4 w-96 max-w-full bg-[var(--color-deep-cocoa)]/10 rounded mx-auto' />
          <div className='h-4 w-80 max-w-full bg-[var(--color-deep-cocoa)]/10 rounded mx-auto' />
          <div className='max-w-2xl mx-auto mt-8 h-28 bg-white/60 rounded-2xl' />
        </div>
      </section>

      {/* Core services skeleton */}
      <section className='bg-white px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='text-center mb-12 space-y-3'>
            <div className='h-8 w-72 bg-gray-200 rounded mx-auto' />
            <div className='h-1 w-16 bg-gray-200 rounded-full mx-auto' />
            <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto' />
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className='p-8 border border-gray-100 rounded-2xl space-y-3'>
                <div className='w-16 h-16 bg-gray-200 rounded-xl' />
                <div className='h-5 w-40 bg-gray-200 rounded' />
                <div className='h-4 w-full bg-gray-200 rounded' />
                <div className='h-4 w-3/4 bg-gray-200 rounded' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing care skeleton */}
      <section className='bg-gradient-to-b from-[var(--color-soft-sand)]/30 to-white px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='text-center mb-12 space-y-3'>
            <div className='h-8 w-64 bg-gray-200 rounded mx-auto' />
            <div className='h-1 w-16 bg-gray-200 rounded-full mx-auto' />
            <div className='h-4 w-80 max-w-full bg-gray-200 rounded mx-auto' />
          </div>
          <div className='grid lg:grid-cols-2 gap-12 mb-16'>
            <div className='aspect-[4/3] bg-gray-200 rounded-2xl' />
            <div className='space-y-4'>
              <div className='h-7 w-52 bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-3/4 bg-gray-200 rounded' />
              <div className='space-y-2 mt-4'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className='h-4 w-5/6 bg-gray-200 rounded' />
                ))}
              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='p-6 border border-gray-100 rounded-xl space-y-3'>
                <div className='w-12 h-12 bg-gray-200 rounded-lg' />
                <div className='h-5 w-32 bg-gray-200 rounded' />
                <div className='h-4 w-full bg-gray-200 rounded' />
              </div>
            ))}
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='aspect-square bg-gray-200 rounded-xl' />
            ))}
          </div>
        </div>
      </section>

      {/* Rehabilitation skeleton */}
      <section className='bg-gradient-to-b from-white to-[var(--color-soft-sand)]/30 px-4 py-20'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='text-center mb-12 space-y-3'>
            <div className='h-8 w-72 bg-gray-200 rounded mx-auto' />
            <div className='h-1 w-16 bg-gray-200 rounded-full mx-auto' />
            <div className='h-4 w-80 max-w-full bg-gray-200 rounded mx-auto' />
          </div>
          <div className='grid lg:grid-cols-2 gap-12 mb-12'>
            <div className='space-y-4 order-1'>
              <div className='h-7 w-52 bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-3/4 bg-gray-200 rounded' />
              <div className='space-y-3 mt-4'>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className='p-5 border border-gray-100 rounded-xl space-y-2'>
                    <div className='h-5 w-32 bg-gray-200 rounded' />
                    <div className='h-4 w-full bg-gray-200 rounded' />
                  </div>
                ))}
              </div>
            </div>
            <div className='aspect-[3/4] bg-gray-200 rounded-2xl order-2' />
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='aspect-square bg-gray-200 rounded-xl' />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
