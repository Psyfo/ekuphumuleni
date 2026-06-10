/**
 * Fallback content for the Home page, used when the Sanity CMS is
 * unreachable or the homePageSettings singleton has not been created yet.
 * Mirrors the original static page content verbatim.
 */

export const FALLBACK_HOME_PAGE_SETTINGS = {
  seo: {
    metaTitle: 'Home',
    metaDescription:
      'Ekuphumuleni Geriatric Nursing Home - Over 40 years of elderly care in Bulawayo, Zimbabwe. Professional nursing, rehabilitation services, and dignified senior living in a supportive environment.',
  },

  heroSection: {
    title: 'Ekuphumuleni',
    subtitle: 'Geriatric Nursing Home',
    eyebrow: 'Serving Bulawayo’s elders since 1983',
    tagline:
      '“A place of rest” — dignified, professional nursing care for older adults in a peaceful, home-like environment.',
    backgroundImageUrl: '/images/building/building_01.webp',
    primaryCtaLabel: 'Explore Our Care',
    secondaryCtaLabel: 'Contact Us',
  },

  aboutSection: {
    heading: 'About Ekuphumuleni',
    intro:
      'Ekuphumuleni means "place of rest", a sanctuary for elderly individuals requiring nursing care. Established in 1983 by Polyanna Mahlangu, it was founded to provide reliable, professional care for older adults in a peaceful, dignified environment.',
    founderImageUrl: '/images/founder_01.jpg',
    founderName: 'Polyanna Mahlangu',
    founderRole: 'Founder · Est. 1983',
    establishmentHeading: 'Our Establishment',
    establishmentBody:
      'Founded to provide dependable care, our home blends professional excellence with a stable, family-like environment. Over four decades, we have remained committed to honoring the dignity and individuality of every resident.',
    missionHeading: 'Our Mission',
    missionBody:
      'To create peaceful, nurturing environments where people find rest, healing, and restoration in body and spirit.',
    visionHeading: 'Our Vision',
    visionBody:
      'A community where elders thrive with dignity, safety, and joy through consistent, culturally sensitive care.',
    coreValuesHeading: 'Our Core Values',
    coreValues: [
      'Compassion',
      'Tranquility',
      'Reliability',
      'Cultural Sensitivity',
      'Excellence',
    ],
  },

  servicesSection: {
    heading: 'Our Services',
    subtitle:
      "Comprehensive care tailored to each resident's needs, delivered by a skilled, multidisciplinary team",
    cards: [
      {
        iconName: 'heart',
        imageUrl: '/images/services/nursing/IMG_8799.JPG',
        alt: 'Nursing care in a calm setting',
        title: 'Nursing Care',
        description:
          'Round‑the‑clock nursing care, observation, and support for each resident.',
      },
      {
        iconName: 'arrow-path',
        imageUrl: '/images/services/nursing/IMG_8845.JPG',
        alt: 'Rehabilitation and mobility support',
        title: 'Rehabilitation',
        description:
          'Supportive therapies that restore mobility, independence, and well‑being.',
      },
      {
        iconName: 'sparkles',
        imageUrl: '/images/facilities/facilities_19.webp',
        alt: 'Sustainability initiatives at the home',
        title: 'Sustainability',
        description:
          'Eco‑friendly practices that care for our residents and our planet.',
      },
      {
        iconName: 'home-modern',
        imageUrl: '/images/facilities/facilities_11.webp',
        alt: 'Comfortable living facilities and communal spaces',
        title: 'Facilities',
        description:
          'Comfortable spaces and amenities designed for community and care.',
      },
    ],
  },

  teamSection: {
    heading: 'Meet the Team',
    body: 'Clinical, administrative, and board professionals responsible for the day‑to‑day running and governance of the home.',
    ctaLabel: 'View Team',
  },

  donorsSection: {
    heading: 'Donors & Support',
    body: 'We acknowledge the donors and partners whose contributions help us maintain services, staffing, and facilities.',
    ctaLabel: 'See Our Donors',
  },

  contactSection: {
    heading: 'Contact Us',
    subtitle: "We're here to answer your questions and provide the information you need",
    email: 'administration@ekuphumuleni.ngo',
    phoneNumbers: ['+263 292 216877', '+263 778 719166'],
    locationLines: ['Stand 7165 Old Falls Road', 'P O Box 1667', 'Bulawayo'],
    mapQuery: 'Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo',
    ctaLabel: 'Send a Message',
  },
};
