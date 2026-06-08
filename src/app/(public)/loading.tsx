export default function HomeLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className='flex justify-center items-center bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 min-h-[calc(100vh-4rem)]'>
        <div className='max-w-3xl mx-auto text-center space-y-4 animate-pulse'>
          <div className='h-40 w-40 bg-gray-300/40 rounded-full mx-auto' />
          <div className='h-12 w-72 bg-gray-300/50 rounded mx-auto' />
          <div className='h-6 w-56 bg-gray-300/40 rounded mx-auto' />
          <div className='flex justify-center gap-4 mt-8'>
            <div className='h-12 w-40 bg-gray-300/40 rounded-lg' />
            <div className='h-12 w-40 bg-gray-300/40 rounded-lg' />
          </div>
        </div>
      </section>

      {/* About skeleton */}
      <section className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'>
        <div className='max-w-7xl mx-auto animate-pulse'>
          <div className='h-7 w-72 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-12' />
          <div className='grid md:grid-cols-2 gap-10 lg:gap-16 mb-20'>
            <div className='aspect-[4/3] bg-gray-200 rounded-xl' />
            <div className='space-y-3'>
              <div className='h-6 w-48 bg-gray-200 rounded' />
              <div className='h-4 w-full bg-gray-200 rounded' />
              <div className='h-4 w-2/3 bg-gray-200 rounded' />
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-6 mb-16'>
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className='h-40 bg-white rounded-xl' />
            ))}
          </div>
          <div className='h-48 bg-white rounded-2xl' />
        </div>
      </section>

      {/* Services skeleton */}
      <section className='bg-gradient-to-b from-[var(--color-soft-sand)] to-[var(--color-warm-beige)] px-4 py-20 lg:py-24'>
        <div className='max-w-[1400px] mx-auto animate-pulse'>
          <div className='h-7 w-56 bg-gray-200 rounded mx-auto mb-3' />
          <div className='h-4 w-96 max-w-full bg-gray-200 rounded mx-auto mb-16' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-72 bg-white rounded-xl' />
            ))}
          </div>
        </div>
      </section>

      {/* Team / Donors / Contact skeleton */}
      {Array.from({ length: 3 }).map((_, i) => (
        <section key={i} className='bg-[var(--color-off-white)] px-4 py-20 lg:py-24'>
          <div className='max-w-2xl mx-auto text-center space-y-4 animate-pulse'>
            <div className='h-20 w-20 bg-gray-200 rounded-2xl mx-auto' />
            <div className='h-7 w-56 bg-gray-200 rounded mx-auto' />
            <div className='h-4 w-80 max-w-full bg-gray-200 rounded mx-auto' />
            <div className='h-12 w-44 bg-gray-200 rounded-lg mx-auto mt-4' />
          </div>
        </section>
      ))}
    </main>
  );
}
