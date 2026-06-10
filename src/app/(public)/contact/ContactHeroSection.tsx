import Link from 'next/link';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ContactHeroSectionProps {
  title?: string;
  subtitle?: string;
  quote?: string;
}

export default function ContactHeroSection({
  title = 'Get in Touch',
  subtitle = "We're here to answer your questions and provide the information you need about our geriatric care services and facilities",
  quote = "Whether you're seeking information about our services, exploring care options for a loved one, or wanting to support our mission, we welcome your inquiries",
}: ContactHeroSectionProps = {}) {

  return (
    <section
      aria-label='Contact Page Header'
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
                Contact Us
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
