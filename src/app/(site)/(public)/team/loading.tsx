export default function TeamLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className='bg-[var(--color-deep-cocoa)] px-4 py-20'>
        <div className='max-w-4xl mx-auto text-center space-y-4 animate-pulse'>
          <div className='h-4 w-28 bg-white/20 rounded mx-auto' />
          <div className='h-10 w-64 bg-white/30 rounded mx-auto' />
          <div className='h-4 w-96 max-w-full bg-white/20 rounded mx-auto' />
          <div className='h-4 w-80 max-w-full bg-white/20 rounded mx-auto' />
        </div>
      </section>

      {/* Board section skeleton */}
      <SectionSkeleton cardCount={9} />

      {/* Admin section skeleton */}
      <SectionSkeleton cardCount={3} tinted />

      {/* Staff carousel skeleton */}
      <section className='px-4 py-16 bg-[var(--color-off-white)]'>
        <div className='max-w-4xl mx-auto animate-pulse space-y-6'>
          <div className='h-7 w-48 bg-gray-200 rounded' />
          <div className='h-4 w-72 bg-gray-200 rounded' />
          <div className='aspect-video w-full bg-gray-200 rounded-lg' />
        </div>
      </section>
    </main>
  );
}

function SectionSkeleton({ cardCount, tinted }: { cardCount: number; tinted?: boolean }) {
  return (
    <section className={`px-4 py-16 ${tinted ? 'bg-[var(--color-off-white)]' : 'bg-white'}`}>
      <div className='max-w-6xl mx-auto animate-pulse'>
        <div className='h-7 w-52 bg-gray-200 rounded mb-3' />
        <div className='h-4 w-80 bg-gray-200 rounded mb-10' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array.from({ length: cardCount }).map((_, i) => (
            <div key={i} className='flex flex-col items-center gap-3 p-4'>
              <div className='w-32 h-32 rounded-full bg-gray-200' />
              <div className='h-4 w-32 bg-gray-200 rounded' />
              <div className='h-3 w-24 bg-gray-200 rounded' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
