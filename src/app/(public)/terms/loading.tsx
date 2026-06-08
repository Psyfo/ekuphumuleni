export default function TermsLoading() {
  return (
    <main className='flex justify-center items-center bg-[var(--color-warm-beige)] min-h-screen'>
      <div className='mx-auto px-4 py-16 max-w-4xl text-center animate-pulse'>
        <div className='h-10 w-64 bg-gray-300/50 rounded mx-auto mb-4' />
        <div className='h-4 w-80 max-w-full bg-gray-300/40 rounded mx-auto' />
      </div>
    </main>
  );
}
