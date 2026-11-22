/**
 * Plain-language help shown at the top of each page in the admin, so editors
 * know what a page controls and how to get good results.
 */
export type Guide = { blurb: string; controls: string[]; tips: string[] };

export const GUIDES: Record<string, Guide> = {
  'home-page': {
    blurb: 'The front door of the site. Most visitors land here first.',
    controls: [
      'Hero banner: headline, tagline, background photo and the two buttons',
      'About, Services, Team, Donors and Contact preview sections',
      'SEO: the Google and link-preview title and description',
    ],
    tips: [
      'Keep the hero title short (a few words). A warm overlay is added to the photo automatically.',
      'The section previews here are teasers. The full content lives on each dedicated page.',
    ],
  },
  'about-page': {
    blurb: 'The story of Ekuphumuleni: how it began, what it stands for, and its impact.',
    controls: [
      'Founder profile and the origin story',
      'Mission, Vision and Core Values',
      'Impact stats (years of service is calculated from the establishment year)',
    ],
    tips: [
      'Use a clear portrait for the founder photo and set the focus point on the face.',
      'You only type the establishment year; “years of service” updates itself.',
    ],
  },
  'services-page': {
    blurb: 'What Ekuphumuleni offers, from core services to nursing and rehabilitation.',
    controls: [
      'Core service cards (best with 6, which makes a tidy 3 by 2 grid)',
      'Nursing Care section with feature cards and a photo gallery',
      'Rehabilitation and Wellness programs and gallery',
    ],
    tips: [
      'Pick the icon that best matches each service from the list.',
      'Keep card descriptions to one or two sentences so the cards stay the same height.',
    ],
  },
  'facilities-page': {
    blurb: 'A tour of the grounds and the sustainability work behind them.',
    controls: [
      'Facility highlights (shown in an alternating image and text layout, so order matters)',
      '“What makes our facilities special” feature grid',
      'Sustainability initiatives and showcase gallery',
    ],
    tips: [
      'Photo galleries look best with exactly 3 images.',
      'Every photo needs a description: a short sentence about what is happening in it.',
    ],
  },
  'team-page': {
    blurb: 'Section headings and intros for the team page.',
    controls: ['Hero, plus the intro text above the Board, Administration and Staff sections'],
    tips: [
      'This page only holds the section intros. To add or edit a person, use “Team Members”.',
      'Group photos for the carousel live under “Staff Photos”.',
    ],
  },
  'donors-page': {
    blurb: 'Thanks the people and organisations who support the home.',
    controls: ['Hero, the donor wall intro, and the special-mentions cards'],
    tips: ['The year-by-year donor lists are their own records. Edit them under “Donor Years”.'],
  },
  'contact-page': {
    blurb: 'The contact form, the contact details, and the map.',
    controls: [
      'Form labels, placeholders and the success and error messages',
      'Contact detail cards (address, phone, email, hours)',
      'The map search query',
    ],
    tips: [
      'The “Map Search Query” is what you would type into Google Maps, for example the home’s name and city.',
      'Each contact card needs at least one line of text.',
    ],
  },
};
