import React from 'react';
import { brand } from './brandTokens';

type Guide = { title: string; blurb: string; controls: string[]; tips: string[] };

// Plain-language guidance per page-settings type, shown as a "Guide" tab beside
// the form so editors know what each page does and how to get good results.
const GUIDES: Record<string, Guide> = {
  homePageSettings: {
    title: 'The Home page',
    blurb: 'The front door of the site. Most visitors land here first.',
    controls: [
      'Hero banner — headline, tagline, background photo and the two buttons',
      'About, Services, Team, Donors and Contact preview sections',
      'SEO — the Google/preview title and description',
    ],
    tips: [
      'Keep the hero title short (a few words). A warm overlay is added to the photo automatically.',
      'The section previews here are teasers — the full content lives on each dedicated page.',
    ],
  },
  aboutPageSettings: {
    title: 'The About page',
    blurb: 'The story of Ekuphumuleni: how it began, what it stands for, and its impact.',
    controls: [
      'Founder profile and the origin story',
      'Mission, Vision and Core Values',
      'Impact stats (years of service is calculated from the establishment year)',
    ],
    tips: [
      'Use a clear portrait for the founder photo and set the focus point on the face.',
      'You only type the establishment year — “years of service” updates itself.',
    ],
  },
  servicesPageSettings: {
    title: 'The Services page',
    blurb: 'What Ekuphumuleni offers, from core services to nursing and rehabilitation.',
    controls: [
      'Core service cards (best with 6 — a tidy 3×2 grid)',
      'Nursing Care section with feature cards and a photo gallery',
      'Rehabilitation & Wellness programs and gallery',
    ],
    tips: [
      'Pick the icon that best matches each service from the list.',
      'Keep card descriptions to 1–2 sentences so the cards stay the same height.',
    ],
  },
  facilitiesPageSettings: {
    title: 'The Facilities page',
    blurb: 'A tour of the grounds and the sustainability work behind them.',
    controls: [
      'Facility highlights (shown in an alternating image/text layout — order matters)',
      '“What makes our facilities special” feature grid',
      'Sustainability initiatives and showcase gallery',
    ],
    tips: [
      'Photo galleries look best with exactly 3 images.',
      'Every photo needs alt text — a short description of what’s happening in it.',
    ],
  },
  teamPageSettings: {
    title: 'The Team page',
    blurb: 'Section headings and intros for the team page.',
    controls: [
      'Hero, plus the intro text above the Board, Administration and Staff sections',
    ],
    tips: [
      'This page only holds the section intros. To add or edit a person, use the “Team Members” collection.',
      'Group photos for the carousel live under “Staff Photos”.',
    ],
  },
  donorsPageSettings: {
    title: 'The Donors page',
    blurb: 'Thanks the people and organisations who support the home.',
    controls: ['Hero, the donor wall intro, and the special-mentions cards'],
    tips: [
      'The year-by-year donor lists are their own records — edit them under “Donor Years”.',
    ],
  },
  contactPageSettings: {
    title: 'The Contact page',
    blurb: 'The contact form, the contact details, and the map.',
    controls: [
      'Form labels, placeholders and the success/error messages',
      'Contact detail cards (address, phone, email, hours)',
      'The map search query',
    ],
    tips: [
      'The “Map Search Query” is what you’d type into Google Maps — e.g. the home’s name and city.',
      'Each contact card needs at least one line of text.',
    ],
  },
};

const card: React.CSSProperties = {
  background: brand.offWhite,
  border: '1px solid rgba(166, 138, 100, 0.25)',
  borderRadius: 14,
  padding: '1.1rem 1.25rem',
  marginBottom: '1rem',
};

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={card}>
      <h3
        style={{
          fontFamily: brand.serif,
          fontSize: '1.05rem',
          fontWeight: 700,
          color: brand.deepCocoa,
          margin: '0 0 0.6rem',
        }}
      >
        {label}
      </h3>
      <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.92rem' }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: i === items.length - 1 ? 0 : '0.4rem' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function resolveTypeName(schemaType?: string | { name?: string }): string | undefined {
  return typeof schemaType === 'string' ? schemaType : schemaType?.name;
}

/**
 * "Guide" view rendered alongside the form for each page-settings document.
 */
export function PageGuide(props: { schemaType?: string | { name?: string } }) {
  const guide = GUIDES[resolveTypeName(props.schemaType) ?? ''];
  if (!guide) return null;

  return (
    <div className="eku-pane">
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.75rem 2.5rem' }}>
        <h2
          style={{
            fontFamily: brand.serif,
            fontSize: '1.6rem',
            fontWeight: 700,
            color: brand.deepCocoa,
            margin: '0 0 0.4rem',
          }}
        >
          {guide.title}
        </h2>
        <div
          aria-hidden
          style={{ width: 56, height: 4, borderRadius: 999, background: brand.terracotta, margin: '0 0 1rem' }}
        />
        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: brand.espresso, margin: '0 0 1.5rem' }}>
          {guide.blurb}
        </p>
        <List label="This page controls" items={guide.controls} />
        <List label="Tips" items={guide.tips} />
      </div>
    </div>
  );
}

export default PageGuide;
