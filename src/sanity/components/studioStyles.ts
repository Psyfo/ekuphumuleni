import { brand } from './brandTokens';

/**
 * CSS injected into the Studio (via StudioLayout) — kept out of the public site.
 *
 * The navbar is the headline change. buildLegacyTheme can't recolour the modern
 * navbar, so we wrap it (StudioNavbar adds `.eku-navbar`, which is `display:contents`
 * so it adds no box) and target the real `[data-ui="Navbar"]` element. Overriding
 * @sanity/ui's `--card-*` variables alone doesn't reach the leaf Text/icons (each
 * inner card re-declares them), so we also set `color` directly on text and icons,
 * neutralise the raised control backgrounds to transparent so beige reads uniformly
 * on cocoa, and keep the collapsible search field light.
 *
 * Sanity also outlines every navbar control with a light card-border drawn as a
 * `box-shadow`, which reads as a harsh white box on cocoa — those are stripped and
 * replaced with warm hover/selected fills (plus a restored focus ring) so the
 * controls feel like part of the bar rather than floating outlined chips.
 */
export const studioStyles = `
/* ── Cocoa navbar (mirrors the site footer) ───────────────────────────────── */
.eku-navbar { display: contents; }
.eku-navbar [data-ui="Navbar"] {
  background-color: ${brand.deepCocoa} !important;
  box-shadow: inset 0 -1px 0 ${brand.cocoaBorder} !important;
}
.eku-navbar [data-ui="Navbar"] [data-ui="Text"],
.eku-navbar [data-ui="Navbar"] svg {
  color: ${brand.warmBeige} !important;
}
/* Neutralise pill/button backgrounds + the light card-border outline so beige
   text/icons read uniformly on cocoa instead of sitting in white boxes. */
.eku-navbar [data-ui="Navbar"] [data-ui="Button"] {
  background-color: transparent !important;
  box-shadow: none !important;
  border-color: transparent !important;
  --card-border-color: transparent !important;
}
.eku-navbar [data-ui="Navbar"] [data-ui="Button"]:hover {
  background-color: rgba(242, 232, 207, 0.16) !important;
}
/* Open menus (workspace + perspective switchers) and selected tabs read as a soft
   warm chip rather than a white-outlined box. */
.eku-navbar [data-ui="Navbar"] [data-ui="Button"][aria-expanded="true"],
.eku-navbar [data-ui="Navbar"] [data-ui="Button"][aria-pressed="true"],
.eku-navbar [data-ui="Navbar"] [data-ui="Button"][data-selected] {
  background-color: rgba(242, 232, 207, 0.22) !important;
}
/* Keep keyboard focus visible after removing the default box-shadow ring. */
.eku-navbar [data-ui="Navbar"] [data-ui="Button"]:focus-visible {
  box-shadow: 0 0 0 2px rgba(242, 232, 207, 0.7) !important;
  outline: none !important;
}
/* Keep the (collapsible) global search field light and readable on the cocoa bar */
.eku-navbar [data-ui="Navbar"] [data-ui="TextInput"] {
  background-color: ${brand.paper} !important;
}
.eku-navbar [data-ui="Navbar"] [data-ui="TextInput"] input {
  color: ${brand.espresso} !important;
  -webkit-text-fill-color: ${brand.espresso} !important;
}
.eku-navbar [data-ui="Navbar"] [data-ui="TextInput"] svg {
  color: ${brand.earthBrown} !important;
}

/* ── Custom panes (welcome / guide) inherit a warm canvas ─────────────────── */
.eku-pane {
  height: 100%;
  overflow: auto;
  background-color: ${brand.paper};
  color: ${brand.espresso};
  font-family: ${brand.sans};
}
`;
