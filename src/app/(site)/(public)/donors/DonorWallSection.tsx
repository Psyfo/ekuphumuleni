'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useId, useRef, useState, type CSSProperties, type FormEvent } from 'react';

/* The wall of thanks, laid like the brick the home is built from: every name
   is a brick, each year opens with a date stone, and the page's quote is the
   inscription above the first course. Styles: src/app/styles/_donor-wall.css. */

interface DonorYear {
  _id?: string;
  year: number;
  donorNames: string[];
}

interface DonorWallSectionData {
  heading?: string;
  subtitle?: string;
}

interface DonorWallSectionProps {
  data?: DonorWallSectionData;
  years: DonorYear[];
  /** Shown as the inscription at the top of the wall. */
  quote?: string;
}

/** Lower-case, accents and punctuation removed, so "wp farrow" finds "W.P. Farrow". */
const simplify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/** Picks one of five clay tones from the name itself, so a name keeps its brick. */
function tone(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % 5;
}

function YearOfWall({
  entry,
  isMatch,
  open,
}: {
  entry: DonorYear;
  isMatch: (name: string) => boolean;
  /** The last year on the page ends with an open slot: room for another name. */
  open: boolean;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const laid = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const count = entry.donorNames.length;

  return (
    <section
      id={`donors-${entry.year}`}
      aria-labelledby={`donors-${entry.year}-heading`}
      className='wall-year'
    >
      <div className='wall-datestone'>
        <div className='wall-datestone__face'>
          <h3 id={`donors-${entry.year}-heading`} className='wall-datestone__year'>
            {entry.year}
          </h3>
          <p className='wall-datestone__count'>
            {count} {count === 1 ? 'name' : 'names'}
          </p>
        </div>
      </div>
      <ul ref={ref} className='wall-courses' data-laid={laid}>
        {entry.donorNames.map((name, i) => (
          <li
            key={`${name}-${i}`}
            className='wall-brick'
            data-tone={tone(name)}
            data-match={isMatch(name)}
            style={{ '--i': i } as CSSProperties}
          >
            {name}
          </li>
        ))}
        {open && (
          <li className='wall-open' style={{ '--i': count } as CSSProperties}>
            <span>There is room on this wall.</span>
            <Link href='/contact'>Talk to us about supporting Ekuphumuleni</Link>
          </li>
        )}
      </ul>
    </section>
  );
}

export default function DonorWallSection({ data, years, quote }: DonorWallSectionProps) {
  const heading = data?.heading ?? 'Wall of Gratitude';
  const subtitle =
    data?.subtitle ??
    'Honoring those whose generosity has sustained our mission of compassionate care';

  const fieldId = useId();
  const wallRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');

  const needle = simplify(query);
  const searching = needle.length > 0;
  const compact = needle.replace(/ /g, '');
  const isMatch = (name: string) => {
    if (!searching) return false;
    const plain = simplify(name);
    return plain.includes(needle) || plain.replace(/ /g, '').includes(compact);
  };
  const matches = searching
    ? years.reduce((n, y) => n + y.donorNames.filter(isMatch).length, 0)
    : 0;

  /** Enter takes you to the first name found. */
  function goToFirstMatch(e: FormEvent) {
    e.preventDefault();
    wallRef.current
      ?.querySelector('[data-match="true"]')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className='bg-white py-16 lg:py-20' aria-labelledby='donor-wall-heading'>
      <div className='mx-auto px-4 sm:px-6 max-w-6xl'>
        <header className='mb-10 lg:mb-12 text-center'>
          <h2 id='donor-wall-heading' className='mb-4 heading-2'>
            {heading}
          </h2>
          <div className='bg-gradient-to-r from-transparent via-[var(--color-muted-terracotta)] to-transparent mx-auto mb-6 rounded-full w-24 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>{subtitle}</p>
        </header>

        <div className='flex sm:flex-row flex-col sm:justify-between sm:items-end gap-4 mb-3'>
          <form role='search' onSubmit={goToFirstMatch} className='w-full sm:max-w-sm'>
            <label
              htmlFor={fieldId}
              className='block mb-2 font-semibold text-[var(--color-deep-cocoa)] text-sm'
            >
              Find a name
            </label>
            <div className='relative'>
              <MagnifyingGlassIcon
                aria-hidden='true'
                className='top-1/2 left-3.5 absolute w-5 h-5 text-[var(--color-earth-brown)] -translate-y-1/2 pointer-events-none'
              />
              <input
                id={fieldId}
                type='text'
                inputMode='search'
                enterKeyHint='search'
                autoComplete='off'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Type a name'
                className='bg-white py-3 pr-11 pl-11 border-[var(--color-earth-brown)]/25 focus:border-[var(--color-muted-terracotta)] border-2 rounded-xl focus:outline-none focus:ring-[var(--color-muted-terracotta)]/10 focus:ring-4 w-full font-sans text-[var(--color-deep-cocoa)] placeholder:text-[var(--color-deep-cocoa)]/40 transition-all duration-200'
              />
              {query && (
                <button
                  type='button'
                  onClick={() => setQuery('')}
                  aria-label='Clear the search'
                  className='top-1/2 right-2 absolute flex justify-center items-center hover:bg-[var(--color-warm-beige)] rounded-lg focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta-deep)] w-8 h-8 text-[var(--color-deep-cocoa)] -translate-y-1/2'
                >
                  <XMarkIcon aria-hidden='true' className='w-5 h-5' />
                </button>
              )}
            </div>
          </form>

          {years.length > 1 && (
            <nav aria-label='Years on the wall' className='flex flex-wrap items-center gap-2'>
              <span className='mr-1 text-[var(--color-deep-cocoa)] text-sm'>Go to</span>
              {years.map((y) => (
                <a
                  key={y._id ?? y.year}
                  href={`#donors-${y.year}`}
                  className='hover:bg-[var(--color-warm-beige)] px-3 py-1.5 border border-[var(--color-earth-brown)]/35 rounded-full font-semibold text-[var(--color-deep-cocoa)] text-sm hover:no-underline transition-colors duration-200'
                >
                  {y.year}
                </a>
              ))}
            </nav>
          )}
        </div>

        <p
          role='status'
          aria-live='polite'
          className='mb-4 min-h-6 !text-sm text-[var(--color-deep-cocoa)]'
        >
          {searching &&
            (matches > 0 ? (
              <>
                {matches} {matches === 1 ? 'name matches' : 'names match'}. Press Enter to go to the
                first.
              </>
            ) : (
              <>
                No name matches &ldquo;{query.trim()}&rdquo;. Check the spelling, or{' '}
                <Link href='/contact' className='underline underline-offset-2'>
                  tell us if a name is missing
                </Link>
                .
              </>
            ))}
        </p>

        <div ref={wallRef} className='donor-wall' data-searching={searching}>
          {quote && (
            <blockquote className='wall-inscription'>&ldquo;{quote}&rdquo;</blockquote>
          )}

          {years.map((entry, i) => (
            <YearOfWall
              key={entry._id ?? entry.year}
              entry={entry}
              isMatch={isMatch}
              open={i === years.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
