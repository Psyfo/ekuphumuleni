/**
 * Brand tokens for custom Studio components.
 *
 * Mirrors docs/BRAND.md / src/app/styles/_variables.css. Duplicated as plain JS
 * (not read from CSS vars) because these are consumed by Studio React components
 * and an injected stylesheet, not the site's Tailwind build.
 */
export const brand = {
  warmBeige: '#F2E8CF',
  softSand: '#D9C6A5',
  offWhite: '#EDE6E3',
  earthBrown: '#A68A64',
  deepCocoa: '#6B4F4F',
  cocoaBorder: '#5A4242',
  espresso: '#2C211E',
  terracotta: '#C97C5D',
  terracottaDeep: '#B05A3C',
  terracottaDark: '#9C4F35',
  paper: '#FAF7F2',
  success: '#5C7A4A',
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
} as const;
