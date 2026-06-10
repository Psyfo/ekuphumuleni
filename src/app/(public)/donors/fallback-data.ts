/**
 * Fallback content for the Donors page, used when the Sanity CMS is
 * unreachable or the donorsPageSettings singleton / donorYear documents
 * have not been created yet. Mirrors the original static page content verbatim.
 */

export const FALLBACK_DONORS_PAGE_SETTINGS = {
  heroTitle: 'Our Donors & Well-Wishers',
  heroSubtitle:
    'Honoring the individuals, organizations, and community members whose support helps us maintain residential nursing care and services for older adults',
  heroQuote: 'Every act of generosity creates ripples of hope and healing',

  seo: {
    metaTitle: 'Our Generous Donors & Supporters',
    metaDescription:
      "Honoring the donors and supporters who help sustain our elderly care services. Recognize the individuals, organizations, and businesses who have contributed to Ekuphumuleni's 40+ years of service.",
  },

  donorWallSection: {
    heading: 'Wall of Gratitude',
    subtitle:
      'Honoring those whose generosity has sustained our mission of compassionate care',
  },

  specialMentionsSection: {
    heading: 'Special Mentions',
    subtitle:
      'We extend our deepest gratitude to these remarkable supporters whose extraordinary contributions have shaped our mission',
    mentions: [
      {
        name: 'Beit Trust',
        iconName: 'building-library',
        description:
          'Foundational support and enduring partnership that has strengthened our mission',
      },
      {
        name: 'Jesus Latter Day',
        iconName: 'heart',
        description:
          'Faith-driven commitment illuminating our path with compassionate care',
      },
      {
        name: 'Many Individual Well-Wishers',
        iconName: 'users',
        description:
          'Countless acts of kindness woven into the fabric of our community',
      },
    ],
    closingMessage:
      'Every contribution, whether grand or humble, has woven threads of hope into the fabric of our community. Your generosity illuminates the path forward for those in our care.',
  },
};

export const FALLBACK_DONOR_YEARS = [
  {
    _id: 'fallback-donor-year-2003',
    year: 2003,
    donorNames: [
      'A J Moyo',
      'Addington Hospital',
      'Allan Gray Trust',
      'Ann Glennie',
      'Barbara Parker',
      'Beira-Corridor Group',
      'Bridfords',
      'Bulawayo Jaycees',
      'C Vambe',
      'CBC Building Society',
      'Chris & Caroline Andersen',
      'Colleen Goredema',
      'Dave Moyo',
      'Dawn Harris',
      'Diana Harvey and Peter MacMillan',
      'Dr & Mrs D Roberts',
      'Dr H Madzimbamuto',
      'Dr R D Pargeter',
      'Dutch Reformed Church in Africa',
      'E A Stockil',
      'Elizabeth Pittaway',
      'F T Mandiringana',
      'Frances Atkinson',
      'Freda Tait',
      'Fred Kunaka',
      'Gail Bruce',
      'Gweru Club',
      'H J van Niekerk',
      'The late Isabel Shaw',
      'J F Stephenson',
      'J Gibson-Cornish',
      'Jennifer Sutton',
      'Joyce Giles',
      'June Greenfield',
      'Katherine MacMillan',
      'L D Black',
      'L J M Walker',
      'Liberty Life',
      'M W P Passaportis',
      'Manuel Albas',
      'Margaret Haddon',
      'Matthew Rusike Foundation',
      'Midlands Association for the Disabled',
      'Mrs L Stevenson',
      'Mrs R Gibbs',
      'Myra Sullivan',
      'Old Mutual',
      'Operating Theatre Staff Memorial Fund',
      'P E Moore',
      'P J De Beer',
      'P K van der Merwe',
      'R W Creber',
      'RAWU Gweru Branch',
      'Rotary Club of Gweru',
      'Sally Hunt',
      'Scots Kirk',
      "St Monica's Guild",
      'Susie Cowie',
      'The Standard Bank Foundation',
      'The Tait Family',
      'The late Tom Shaw',
      'V Chitiyo',
      'W.P. Farrow',
      'W.T. Pinn',
      'Wadzanai Holland',
    ],
  },
  {
    _id: 'fallback-donor-year-2004',
    year: 2004,
    donorNames: [
      'Brian Conolly',
      'C Gandanzara',
      'Chaplin Club',
      'Chris Brown',
      'D M Fereday',
      'D Maravanyika',
      'Dave Sanderson',
      'Dutch Reformed Church in Zimbabwe',
      'E A Moyo',
      'Ernst & Young',
      'First Banking Corporation',
      'G Muzondiwa',
      'Gweru Combined Churches',
      'Gweru Round Table',
      'J V Kok',
      'Jill Chikunguwo',
      'Joe and Irene Mhaka',
      'Josiah Tungamirai',
      'Kingdom Bank',
      'Muriel Conolly',
      'National Social Security Authority',
      'Neatline',
      'NMB',
      'P J de Beer',
      'Raymond Blose',
      'S Mutemererwa',
      'Saving Grace Christian Church',
      'Scotch and Soda Night Club',
      'T F Thebe',
      'Vasty Mazhindu',
      'WT Pinn',
      'Z Katsande',
      'ZB Building Society',
      'ZB Life Assurance',
    ],
  },
];
