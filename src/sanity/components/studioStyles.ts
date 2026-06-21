import { brand } from './brandTokens';

/**
 * CSS injected into the Studio (via StudioLayout) — kept out of the public site.
 *
 * The navbar is the headline change. Sanity's modern navbar can't be recoloured
 * through `buildLegacyTheme`, and it has no stable selector of its own, so we
 * wrap it (StudioNavbar adds `.eku-navbar`) and override @sanity/ui's inheritable
 * `--card-*` colour variables. Descendant Text/icons read those variables, so the
 * whole bar turns cocoa-on-beige without targeting each element. `display:contents`
 * on the wrapper keeps it out of the flex layout so nothing shifts.
 */
export const studioStyles = `
/* ── Cocoa navbar ─────────────────────────────────────────────────────────── */
.eku-navbar { display: contents; }
.eku-navbar > * {
  background-color: ${brand.deepCocoa} !important;
  --card-bg-color: ${brand.deepCocoa} !important;
  --card-fg-color: ${brand.warmBeige} !important;
  --card-icon-color: ${brand.warmBeige} !important;
  --card-muted-fg-color: ${brand.softSand} !important;
  --card-border-color: ${brand.cocoaBorder} !important;
  box-shadow: inset 0 -1px 0 ${brand.cocoaBorder};
}
/* Keep the (collapsible) global search field light and readable on the cocoa bar */
.eku-navbar [data-ui="TextInput"],
.eku-navbar [data-ui="TextInput"] input {
  --card-bg-color: ${brand.paper} !important;
  --card-fg-color: ${brand.espresso} !important;
  --card-icon-color: ${brand.earthBrown} !important;
  --card-muted-fg-color: ${brand.earthBrown} !important;
  background-color: ${brand.paper} !important;
  color: ${brand.espresso} !important;
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
