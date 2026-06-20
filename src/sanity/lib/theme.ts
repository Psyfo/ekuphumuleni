import { buildLegacyTheme } from 'sanity';

/**
 * Ekuphumuleni Studio theme
 *
 * Re-skins the Sanity Studio in the site's warm, earthy palette so the editing
 * experience feels like part of Ekuphumuleni rather than generic Sanity. Built
 * with `buildLegacyTheme`, which derives a full Studio theme from a small set of
 * brand anchors — the keys below are the only ones it accepts.
 *
 * Palette source of truth: docs/BRAND.md and src/app/styles/_variables.css.
 * Hex values are duplicated here (not read from CSS vars) because this object is
 * consumed by Studio JS, not the site's stylesheet.
 */

const palette = {
  warmBeige: '#F2E8CF',
  deepCocoa: '#6B4F4F',
  // A warmer, darker espresso than Deep Cocoa for body text — keeps long stretches
  // of editing crisp while staying inside the warm family.
  espresso: '#2C211E',
  // Deep Terracotta — the accessible CTA colour (4.8:1 on white). Drives the
  // primary action (Publish), accents, and the focus ring.
  terracottaDeep: '#B05A3C',
  warmGray: '#8A7A6E',
  warmGrayBase: '#7C6A5F',
  success: '#5C7A4A',
  error: '#B3563B',
  warning: '#BD7B2C',
};

export const ekuphumuleniTheme = buildLegacyTheme({
  // Light/dark anchors — a barely-warm paper white and a warm near-black so every
  // derived neutral picks up a cocoa cast instead of a cold blue-gray.
  '--white': '#FAF7F2',
  '--black': palette.espresso,
  '--gray': palette.warmGray,
  '--gray-base': palette.warmGrayBase,

  // Editing surfaces stay pure white so inputs read crisply against the warm canvas.
  '--component-bg': '#FFFFFF',
  '--component-text-color': palette.espresso,

  // Brand accent + the signature dark-cocoa top bar that mirrors the site footer.
  '--brand-primary': palette.terracottaDeep,
  '--main-navigation-color': palette.deepCocoa,
  '--main-navigation-color--inverted': palette.warmBeige,
  '--focus-color': palette.terracottaDeep,

  // Buttons + state colours kept inside the palette (matching the site's feedback
  // tokens) while staying recognisable: terracotta primary, olive success,
  // terracotta-red danger, warm ochre warning.
  '--default-button-color': palette.warmGray,
  '--default-button-primary-color': palette.terracottaDeep,
  '--default-button-success-color': palette.success,
  '--default-button-warning-color': palette.warning,
  '--default-button-danger-color': palette.error,
  '--state-info-color': palette.deepCocoa,
  '--state-success-color': palette.success,
  '--state-warning-color': palette.warning,
  '--state-danger-color': palette.error,

  // Body font matches the site (Nunito is already loaded globally via globals.css,
  // which the /studio route inherits). Monospace left to the Studio default.
  '--font-family-base':
    "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
});
