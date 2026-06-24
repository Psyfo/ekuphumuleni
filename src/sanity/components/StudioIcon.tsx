import React from 'react';

/**
 * Workspace icon — the brand mark shown in the Studio navbar (home button).
 *
 * Set via the top-level `icon` config property (sanity.config.ts), which is the
 * supported way to brand the navbar in modern Sanity. The older
 * `studio.components.logo` slot is deprecated and is no longer rendered, so a
 * custom logo placed there silently falls back to Sanity's default first-letter
 * badge — which is what produced the generic "E" chip before this.
 *
 * The mark (a terracotta figure cradled in earth-brown hands) is full-colour, so
 * it sits on a warm-beige chip to read cleanly against the dark cocoa navbar
 * rather than going brown-on-brown. Plain <img> on purpose: next/image is not
 * used inside the Studio bundle, and the asset is served statically from /public.
 */
export function StudioIcon() {
  return (
    <span
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
        borderRadius: 7,
        background: '#F2E8CF',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.18)',
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/ekuphumuleni_logo.png"
        alt=""
        width={18}
        height={18}
        style={{ display: 'block' }}
      />
    </span>
  );
}

export default StudioIcon;
