import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface AboutHeroSectionProps {
  title?: string;
  subtitle?: string;
  quote?: string;
}

export default function AboutHeroSection({
  title = 'About Ekuphumuleni',
  subtitle = 'A legacy of geriatric nursing, dignity, and restoration since 1983',
  quote = "Ekuphumuleni means 'place of rest' — a sanctuary where dignity, skilled care, and respect come together to honor every individual",
}: AboutHeroSectionProps) {

  return (
    <section
      aria-label='About Page Header'
      className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-16 lg:py-20'
    >
      <div className='mx-auto max-w-5xl'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='mb-8 animate-rise'>
          <ol className='flex items-center gap-2 text-sm'>
            <li>
              <Link
                href='/'
                className='flex items-center gap-1.5 text-[var(--color-deep-cocoa)]/70 hover:text-[var(--color-terracotta-deep)] transition-colors duration-200'
              >
                <HomeIcon className='w-4 h-4' aria-hidden='true' />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <ChevronRightIcon
                className='w-4 h-4 text-[var(--color-deep-cocoa)]/40'
                aria-hidden='true'
              />
            </li>
            <li>
              <span className='font-medium text-[var(--color-deep-cocoa)]'>
                About
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <h1 className='mb-6 !text-4xl md:!text-5xl lg:!text-6xl text-center heading-1 animate-rise animate-rise-delay-1'>
          {title}
        </h1>

        {/* Accent Divider */}
        <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-20 h-1.5 animate-rise animate-rise-delay-2' />

        {/* Subtitle */}
        <p className='mx-auto max-w-3xl !text-lg lg:!text-xl text-center leading-relaxed body-text animate-rise animate-rise-delay-3'>
          {subtitle}
        </p>

        {/* Decorative Quote */}
        <div className='mx-auto mt-12 max-w-2xl animate-rise animate-rise-delay-4'>
          <div className='bg-white/60 shadow-warm backdrop-blur-sm p-8 border border-subtle rounded-2xl'>
            <p className='!text-[var(--color-deep-cocoa)] text-lg text-center italic leading-relaxed'>
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
