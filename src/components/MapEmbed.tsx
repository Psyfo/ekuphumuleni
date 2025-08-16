'use client';

type Props = {
  query: string; // e.g., "123 Peaceful Lane, Bulawayo"
  zoom?: number; // 1-21
  className?: string;
};

export default function MapEmbed({ query, zoom = 15, className = '' }: Props) {
  const q = encodeURIComponent(query);
  const src = `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;

  return (
    <div
      className={`relative w-full h-64 md:h-80 rounded-lg shadow overflow-hidden bg-[var(--color-soft-sand)] ${className}`}
    >
      <iframe
        title={`Map location: ${query}`}
        src={src}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='absolute inset-0 w-full h-full border-0'
      />
    </div>
  );
}
