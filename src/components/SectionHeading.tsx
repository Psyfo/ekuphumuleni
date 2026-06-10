/**
 * Canonical section header: serif title, terracotta accent divider, and an
 * optional lede paragraph. Replaces the hand-rolled copies of this pattern
 * that drifted apart across sections (divider widths, lede measures).
 *
 * Server-component safe; also fine inside client components. Sections that
 * animate wrap it in their own motion container.
 */

interface SectionHeadingProps {
  title?: string | null;
  lede?: string | null;
  /** 'dark' inverts text colors for Deep Cocoa bands. */
  tone?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  title,
  lede,
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const dark = tone === 'dark';

  return (
    <div className={`text-center ${className}`.trim()}>
      {title ? (
        <h2
          className={`mb-4 heading-2 ${dark ? '!text-[var(--color-off-white)]' : ''}`.trim()}
        >
          {title}
        </h2>
      ) : null}
      <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-6 rounded-full w-16 h-1' />
      {lede ? (
        <p
          className={`mx-auto max-w-3xl !text-lg leading-relaxed body-text ${
            dark ? '!text-[var(--color-off-white)]/85' : ''
          }`.trim()}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
