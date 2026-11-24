/* Shown while the Donors page loads: the same shapes as the real page (header,
   then the wall with its dark year pier and courses of bricks, then the
   foundation stones), so nothing jumps when the content arrives. */

const COURSES = [
  [22, 30, 26, 22],
  [30, 20, 24, 26],
  [18, 34, 22, 26],
  [26, 22, 30, 22],
  [24, 28, 20, 28],
  [32, 22, 26, 20],
];

export default function DonorsLoading() {
  return (
    <main>
      <section className='bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-14 lg:py-16'>
        <div className='space-y-4 mx-auto max-w-4xl text-center animate-pulse'>
          <div className='bg-[var(--color-deep-cocoa)]/10 mx-auto rounded w-28 h-4' />
          <div className='bg-[var(--color-deep-cocoa)]/15 mx-auto rounded w-72 max-w-full h-10' />
          <div className='bg-[var(--color-deep-cocoa)]/10 mx-auto rounded w-96 max-w-full h-4' />
        </div>
      </section>

      <section className='bg-white py-16 lg:py-20'>
        <div className='mx-auto px-4 sm:px-6 max-w-6xl animate-pulse'>
          <div className='bg-[var(--color-deep-cocoa)]/15 mx-auto mb-3 rounded w-56 h-7' />
          <div className='bg-[var(--color-deep-cocoa)]/10 mx-auto mb-12 rounded w-96 max-w-full h-4' />
          <div className='bg-[var(--color-soft-sand)]/70 mb-[5px] rounded-[3px] h-20' />
          <div className='gap-[5px] grid grid-cols-1 lg:grid-cols-[9.5rem_minmax(0,1fr)]'>
            <div className='bg-[var(--color-deep-cocoa)]/60 rounded-[3px] h-12 lg:h-auto' />
            <div className='space-y-[5px]'>
              {COURSES.map((course, i) => (
                <div key={i} className='flex gap-[5px]'>
                  {course.map((grow, j) => (
                    <div
                      key={j}
                      style={{ flexGrow: grow }}
                      className='bg-[var(--color-warm-beige)] rounded-[3px] h-12'
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[var(--color-warm-beige)] py-16 lg:py-20'>
        <div className='mx-auto px-4 sm:px-6 max-w-6xl animate-pulse'>
          <div className='bg-[var(--color-deep-cocoa)]/15 mx-auto mb-3 rounded w-56 h-7' />
          <div className='bg-[var(--color-deep-cocoa)]/10 mx-auto mb-12 rounded w-96 max-w-full h-4' />
          <div className='gap-[5px] grid grid-cols-1 md:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='bg-[var(--color-deep-cocoa)]/60 rounded-[3px] h-40' />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
