import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface DonorsHeroSectionProps {
  title?: string;
  subtitle?: string;
}

/* The page's quote is not shown here: it is the inscription at the top of the
   wall of names (DonorWallSection). */
export default function DonorsHeroSection({
  title = 'Our Donors & Well-Wishers',
  subtitle = 'Honoring the individuals, organizations, and community members whose support helps us maintain residential nursing care and services for older adults',
}: DonorsHeroSectionProps = {}) {

  return (
    <section
      aria-label='Donors Page Header'
      className='relative bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 py-14 lg:py-16'
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
                Donors
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <h1 className='mb-6 text-center heading-1 animate-rise animate-rise-delay-1'>
          {title}
        </h1>

        {/* Accent Divider */}
        <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-8 rounded-full w-20 h-1.5 animate-rise animate-rise-delay-2' />

        {/* Subtitle */}
        <p className='mx-auto max-w-3xl !text-lg lg:!text-xl text-center leading-relaxed body-text animate-rise animate-rise-delay-3'>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
