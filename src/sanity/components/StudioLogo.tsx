import React from 'react';

/**
 * Studio navbar logo.
 *
 * Renders the Ekuphumuleni mark on a warm-beige chip (so the terracotta icon
 * reads against the dark cocoa navbar) next to a Playfair wordmark — the same
 * serif used on the site. Plain <img> on purpose: next/image is not used inside
 * the Studio bundle, and the asset is served statically from /public.
 */
export function StudioLogo() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        userSelect: 'none',
        lineHeight: 1,
      }}
    >
      <span
        aria-hidden
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 28,
          height: 28,
          borderRadius: 8,
          background: '#F2E8CF',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.18)',
          flexShrink: 0,
        }}
      >
        {/* next/image is deliberately avoided inside the Studio bundle — it is a
            client-only SPA, not part of Next's image pipeline. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/ekuphumuleni_logo.png"
          alt=""
          width={20}
          height={20}
          style={{ display: 'block' }}
        />
      </span>
      <span
        style={{
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          fontSize: '1.05rem',
          fontWeight: 700,
          letterSpacing: '0.005em',
          color: '#F2E8CF',
        }}
      >
        Ekuphumuleni
      </span>
    </div>
  );
}

export default StudioLogo;
