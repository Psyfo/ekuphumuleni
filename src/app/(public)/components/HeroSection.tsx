import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionData {
  title?: string;
  subtitle?: string;
  eyebrow?: string | null;
  tagline?: string | null;
  backgroundImageUrl?: string | null;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps = {}) {
  const title = data?.title ?? 'Ekuphumuleni';
  const subtitle = data?.subtitle ?? 'Geriatric Nursing Home';
  const eyebrow = data?.eyebrow ?? 'Serving Bulawayo’s elders since 1983';
  const tagline =
    data?.tagline ??
    '“A place of rest” — dignified, professional nursing care for older adults in a peaceful, home-like environment.';
  const backgroundImageUrl =
    data?.backgroundImageUrl ?? '/images/building/building_01.webp';
  const primaryCtaLabel = data?.primaryCtaLabel ?? 'Explore Our Care';
  const secondaryCtaLabel = data?.secondaryCtaLabel ?? 'Contact Us';

  return (
    <section
      id='hero'
      aria-label='Hero Section'
      className='relative flex items-center bg-[var(--color-warm-beige)] px-4 min-h-[calc(100vh-4rem)] overflow-hidden'
    >
      {/* Background photo of the home's garden */}
      <Image
        src={backgroundImageUrl}
        alt=''
        fill
        priority
        sizes='100vw'
        quality={80}
        className='object-cover object-[65%_45%]'
        aria-hidden='true'
      />

      {/* Warm wash: near-solid on small screens for readability, easing off
          to the right on larger screens so the garden breathes */}
      <div
        className='md:hidden absolute inset-0 bg-[var(--color-warm-beige)]/90'
        aria-hidden='true'
      />
      <div
        className='hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--color-warm-beige)] from-30% via-[var(--color-warm-beige)]/75 via-60% to-[var(--color-warm-beige)]/25'
        aria-hidden='true'
      />
      {/* Soft grounding fade along the bottom edge */}
      <div
        className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-warm-beige)]/70 to-transparent h-32'
        aria-hidden='true'
      />

      <div className='z-10 relative mx-auto px-2 sm:px-6 w-full max-w-7xl'>
        <div className='py-20 lg:py-24 max-w-2xl'>
          {/* Logo mark */}
          <div className='mb-8 animate-rise'>
            <Image
              src='/images/brand/ekuphumuleni_master_terracotta.svg'
              alt='Ekuphumuleni logo'
              width={80}
              height={80}
              priority
              className='w-16 lg:w-20 h-auto object-contain'
            />
          </div>

          {/* Eyebrow trust line */}
          <p className='flex items-center gap-3 mb-5 font-bold text-[var(--color-terracotta-deep)] text-sm uppercase tracking-[0.18em] animate-rise animate-rise-delay-1'>
            <span
              className='inline-block bg-[var(--color-terracotta-deep)] rounded-full w-10 h-0.5'
              aria-hidden='true'
            />
            {eyebrow}
          </p>

          {/* Title */}
          <h1 className='mb-3 !font-bold !text-5xl md:!text-6xl lg:!text-7xl heading-1 animate-rise animate-rise-delay-2'>
            {title}
          </h1>

          {/* Subtitle */}
          <p className='mb-6 !font-semibold !text-[var(--color-terracotta-deep)] !text-xl md:!text-2xl animate-rise animate-rise-delay-2'>
            {subtitle}
          </p>

          {/* Tagline */}
          <p className='mb-10 max-w-xl !text-[var(--color-deep-cocoa)]/90 !text-lg md:!text-xl leading-relaxed animate-rise animate-rise-delay-3'>
            {tagline}
          </p>

          {/* CTAs */}
          <div className='flex sm:flex-row flex-col items-stretch sm:items-center gap-4 animate-rise animate-rise-delay-4'>
            <Link
              href='#services'
              className='bg-[var(--color-terracotta-deep)] shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 font-bold !text-white hover:!text-white focus-visible:!text-white text-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300'
              prefetch={false}
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href='#contact'
              className='bg-white/80 hover:bg-[var(--color-warm-beige)] shadow-warm hover:shadow-warm-lg backdrop-blur-sm px-8 py-4 border-[var(--color-earth-brown)] border-2 hover:border-[var(--color-earth-brown)]/80 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-earth-brown)] focus-visible:ring-2 focus-visible:ring-offset-2 font-bold text-[var(--color-deep-cocoa)] text-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300'
              prefetch={false}
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
