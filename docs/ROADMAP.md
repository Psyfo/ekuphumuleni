# Ekuphumuleni — Roadmap

Living plan for the site. Status legend: ✅ shipped · 🟡 in progress · ⬜ planned · 💡 idea.

Design principles that gate every item below:

- **On-brand** — follow [BRAND.md](BRAND.md): warm earthy palette, Deep Terracotta (`#B05A3C`)
  for primary CTAs, Playfair headings, Nunito body, calm lift-style motion.
- **Editable by staff** — anything that changes regularly is CMS-driven via Sanity, following
  the singleton/collection pattern in the [README](../README.md#content-editing-sanity).
- **Accessible** — WCAG AA contrast, keyboard + screen-reader support, `prefers-reduced-motion`.
- **No clinical/institutional feel** — dignified and warm, per the brand voice.

---

## ✅ Shipped

- ✅ **Public site** — all pages (`/`, `/about`, `/team`, `/services`, `/facilities`, `/donors`,
  `/contact`, `/privacy`, `/terms`), CMS-driven with hard-coded fallbacks.
- ✅ **2026 aesthetic overhaul** (six phases) — contrast/WCAG pass, CSS-first motion, photo-led
  home hero, section rhythm + warm photo grade, `.btn` system, docs sync. See the README.
- ✅ **Navigation overhaul** — sticky header, accessible desktop dropdowns + mobile drawer.
- ✅ **Contact page polish** — tappable numbers, focus guidance, unicode names.
- ✅ **Sanity Studio brand theming** — warm `buildLegacyTheme`, Deep Cocoa navbar, custom logo,
  per-type icons + richer previews, reorganised structure (welcome pane, pages, collections,
  legal), per-page "Guide" tabs, and photo-upload tips. (`src/sanity/` — PR #20.)

---

## ⬜ Planned

### 1. Donate button + dialog

**Goal:** a persistent, trustworthy way to give that's present on every page, with online
payments added once a provider is chosen.

> **Rollout note:** the donate feature branch goes to **staging only** for now. The board reviews
> it on `ekuphumuleni.vercel.app` and signs off before it’s promoted to production.

**Placement (always present):**

- **Header (primary):** a Deep Terracotta **Donate** button (heart icon) in the sticky header,
  on every page, desktop + mobile. It becomes the single strongest CTA — demote the current
  "Get in Touch" to a secondary/outline button so the two don't compete.
  (`src/components/Navigation.tsx`.)
- **Footer (reinforcement):** a short "Support our work" band at the top of the Deep Cocoa footer
  with a matching on-dark Donate button — the footer is on every page already.
  (`src/components/Footer.tsx`.)
- **Mobile:** Donate sits in the drawer footer above "Call". Optional later: a slim sticky
  bottom bar on mobile only, dismissable, so it stays in thumb reach without covering content.
- **Avoid:** a floating action button (FAB). For a care brand it reads as ad-like and overlaps
  content; the header + footer pairing is more trustworthy and just as present.

**Phase 1 — 🟡 built and on staging (board review).** Decisions locked in and shipped:

- **Two-rail dialog with a segmented toggle, diaspora-first:** **Diaspora** (primary, card,
  `GlobeEuropeAfricaIcon` atlas globe, USD/GBP/ZAR amount presets) and **In Zimbabwe** (EcoCash
  plus a collapsible bank-transfer panel). The toggle keeps the dialog compact and removes any
  "which one is mine?" ambiguity. Local can grow to add InnBucks/OneMoney without a redesign.
- Accessible modal: portal, focus trap, `Esc` to close, `aria-modal`, scroll lock, focus restore.
- Persistent placement built: header primary (with "Get in Touch" demoted to secondary), the
  mobile drawer, and an on-dark footer button.
- Copy says "registered non-profit" (not NGO) and avoids em dashes.
- **CMS-driven** via the `donateSettings` singleton (listed in the Studio as "Donate"), with a
  typed fallback so the dialog never renders blanks. Until a provider is wired, the "Donate by
  card" button arranges a gift by email.

Code: `src/components/{DonateButton,DonateDialog}.tsx`, `donate-content.ts`, and
`src/sanity/schemaTypes/donateSettingsType.ts`. Staging only until the board signs off.

**Phase 2 — real payments (provider decision needed):**

- **Local (Zimbabwe):** [Paynow](https://www.paynow.co.zw) is the common aggregator — supports
  EcoCash, OneMoney, and Visa/Mastercard. Bank transfer + EcoCash merchant code remain as
  manual options.
- **Diaspora / international:** Stripe is not available to Zimbabwean entities; evaluate a
  hosted platform (e.g. Donorbox or a fiscal-host/diaspora service) for card giving from
  abroad. Decide whether to self-host a form or embed a hosted widget.
- Add: amount presets + custom amount, one-off vs monthly, a thank-you/receipt step, and basic
  reporting. Keep PCI scope minimal by using the provider's hosted/redirect flow — never handle
  raw card data on our side.

**Open decisions:** provider(s) for local + international; whether monthly giving is in scope at
launch; receipts/tax-acknowledgement requirements for an NGO in Zimbabwe.

### 2. News & Stories (blog)

**Goal:** let staff publish event write-ups and photos; build trust and give donors reasons to
return.

- **Content model** — a new Sanity `post` collection: `title`, `slug`, `coverImage` (+ alt),
  `excerpt`, `body` (Portable Text with inline images), optional `gallery`, `category`
  (Events / Updates / Stories), `author`, `publishedAt`, and per-post SEO. Reuses the existing
  collection pattern; add to Studio structure with an icon, ordering by date, and a guide.
- **Pages** — index at `/news` (card grid: cover, title, date, excerpt, category filter, a
  featured post, pagination) and detail at `/news/[slug]` (cover hero, prose body with the warm
  image grade, gallery, share). Static-generate with ISR like the rest of the site.
- **Navigation** — add "News" as a top-level, always-present nav item (header + footer), plus a
  "Latest news" teaser strip on the home page.
- **Naming** — "News & Stories" (or "Updates") reads more NGO-appropriate than "Blog".
- **Editor experience** — Portable Text gives staff rich text + inline photos; require alt text
  (accessibility, matching existing patterns).

### 3. Newsletter

**Goal:** an email list so supporters hear about events and appeals.

- **Signup** — an email field in the always-present footer (and on `/news`), with success/error
  states reusing the contact-form feedback colours, plus consent copy and a privacy link.
- **Backend** — integrate an ESP rather than rolling our own sending: Mailchimp (free tier),
  Buttondown, or Resend Audiences. Double opt-in; store nothing sensitive on our side.
- **Sending** — staff write a News post, then optionally send it (or a digest) to subscribers.
  Phase this **after** the blog so there's something to send.
- **Compliance** — clear consent, easy unsubscribe, and a note in the privacy policy.

---

## 💡 Ideas (unscheduled)

- Resident/family testimonials section.
- Volunteer / "get involved" page.
- Annual report / financials download for donor transparency.
- WhatsApp click-to-chat (very common in Zimbabwe) alongside phone/email.
