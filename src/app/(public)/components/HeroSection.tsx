import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionData {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps = {}) {
  const title = data?.title ?? 'Ekuphumuleni';
  const subtitle = data?.subtitle ?? 'Geriatric Nursing Home';
  const primaryCtaLabel = data?.primaryCtaLabel ?? 'Explore Our Care';
  const secondaryCtaLabel = data?.secondaryCtaLabel ?? 'Contact Us';

  return (
    <section
      id='hero'
      aria-label='Hero Section'
      className='relative flex justify-center items-center bg-gradient-to-br from-[var(--color-warm-beige)] via-[var(--color-soft-sand)] to-[var(--color-off-white)] px-4 min-h-[calc(100vh-4rem)]'
    >
      <div className='mx-auto max-w-5xl text-center'>
        {/* Logo */}
        <div className='mx-auto mb-10 animate-rise'>
          <Image
            src='/images/brand/ekuphumuleni_master_terracotta.svg'
            alt='Ekuphumuleni logo'
            width={320}
            height={320}
            priority
            sizes='(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px'
            className='mx-auto w-60 sm:w-70 lg:w-80 h-auto object-contain'
          />
        </div>

        {/* Page Title */}
        <h1 className='mb-4 !font-bold !text-5xl md:!text-6xl lg:!text-7xl text-center heading-1 animate-rise animate-rise-delay-1'>
          {title}
        </h1>

        {/* Subtitle */}
        <p className='mb-12 !font-semibold !text-[var(--color-terracotta-deep)] !text-2xl md:!text-3xl lg:!text-4xl text-center animate-rise animate-rise-delay-2'>
          {subtitle}
        </p>

        {/* CTAs */}
        <div className='flex sm:flex-row flex-col justify-center items-center gap-4 animate-rise animate-rise-delay-3'>
          <Link
            href='#services'
            className='bg-[var(--color-terracotta-deep)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto font-bold !text-white hover:!text-white focus-visible:!text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300'
            prefetch={false}
          >
            {primaryCtaLabel}
          </Link>
          <Link
            href='#contact'
            className='bg-white/80 hover:bg-[var(--color-warm-beige)] shadow-warm hover:shadow-warm-lg backdrop-blur-sm px-8 py-4 border-[var(--color-earth-brown)] border-2 hover:border-[var(--color-earth-brown)]/80 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-earth-brown)] focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto font-bold text-[var(--color-deep-cocoa)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300'
            prefetch={false}
          >
            {secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
