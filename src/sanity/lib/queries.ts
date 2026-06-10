import { defineQuery } from 'next-sanity';

export const SERVICES_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "servicesPageSettings" && _id == "servicesPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    seo,
    coreServicesSection {
      heading,
      subtitle,
      ctaHeading,
      ctaBody,
      ctaButtonLabel,
      services[] { iconName, title, description },
    },
    nursingSection {
      heading,
      subtitle,
      "featuredImageUrl": featuredImage.asset->url,
      featuredHeading,
      featuredBody,
      bulletItems,
      featureCards[] { iconName, title, description },
      galleryImages[] { "imageUrl": image.asset->url, alt },
    },
    rehabilitationSection {
      heading,
      subtitle,
      "featuredImageUrl": featuredImage.asset->url,
      featuredHeading,
      featuredBody,
      programs[] { title, description },
      galleryImages[] { "imageUrl": image.asset->url, alt },
    },
  }`,
);

export const ABOUT_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "aboutPageSettings" && _id == "aboutPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    seo,
    establishmentSection {
      heading,
      subtitle,
      "founderImageUrl": founderImage.asset->url,
      founderName,
      founderTitle,
      narrativeHeading,
      narrativeParagraph1,
      narrativeParagraph2,
      registrationHeading,
      registrationBody,
      whyChooseHeading,
      whyChooseCards[] { iconName, title, description },
      closingStatement,
    },
    missionVisionSection {
      heading,
      subtitle,
      missionHeading,
      missionBody,
      missionBullets,
      visionHeading,
      visionBody,
      visionFootnote,
      coreValuesHeading,
      coreValues[] { iconName, label },
    },
    impactSection {
      heading,
      subtitle,
      establishmentYear,
      bedsAvailable,
      staffCount,
      satisfactionPercent,
      contextParagraph1,
      contextParagraph2,
    },
  }`,
);

export const FACILITIES_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "facilitiesPageSettings" && _id == "facilitiesPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    seo,
    showcaseSection {
      heading,
      subtitle,
      highlights[] { title, description, "imageUrl": image.asset->url, alt },
      featureGridHeading,
      featureGridItems[] { iconName, title, description },
    },
    sustainabilitySection {
      heading,
      subtitle,
      initiatives[] { iconName, title, description, impact },
      showcaseImages[] { "imageUrl": image.asset->url, alt, caption, subcaption },
      commitmentHeading,
      commitmentBody,
    },
  }`,
);

export const CONTACT_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "contactPageSettings" && _id == "contactPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    seo,
    formSection {
      heading,
      subheading,
      nameLabel,
      namePlaceholder,
      emailLabel,
      emailPlaceholder,
      messageLabel,
      messagePlaceholder,
      messageHelpText,
      submitButtonLabel,
      successHeading,
      successBody,
      errorHeading,
    },
    infoSection {
      heading,
      subtitle,
      details[] { iconName, title, lines, link },
      mapQuery,
      additionalInfoHeading,
      additionalInfoBody,
    },
  }`,
);

export const HOME_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "homePageSettings" && _id == "homePageSettings"][0] {
    seo,
    heroSection {
      title,
      subtitle,
      eyebrow,
      tagline,
      "backgroundImageUrl": backgroundImage.asset->url,
      primaryCtaLabel,
      secondaryCtaLabel,
    },
    aboutSection {
      heading,
      intro,
      "founderImageUrl": founderImage.asset->url,
      founderName,
      founderRole,
      establishmentHeading,
      establishmentBody,
      missionHeading,
      missionBody,
      visionHeading,
      visionBody,
      coreValuesHeading,
      coreValues,
    },
    servicesSection {
      heading,
      subtitle,
      cards[] { iconName, "imageUrl": image.asset->url, alt, title, description },
    },
    teamSection {
      heading,
      body,
      ctaLabel,
    },
    donorsSection {
      heading,
      body,
      ctaLabel,
    },
    contactSection {
      heading,
      subtitle,
      email,
      phoneNumbers,
      locationLines,
      mapQuery,
      ctaLabel,
    },
  }`,
);

export const DONORS_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "donorsPageSettings" && _id == "donorsPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    seo,
    donorWallSection {
      heading,
      subtitle,
    },
    specialMentionsSection {
      heading,
      subtitle,
      mentions[] { name, iconName, description },
      closingMessage,
    },
  }`,
);

export const DONOR_YEARS_QUERY = defineQuery(
  `*[_type == "donorYear"] | order(order asc) {
    _id,
    year,
    donorNames,
  }`,
);

export const PRIVACY_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "privacyPageSettings" && _id == "privacyPageSettings"][0] {
    heading,
    body,
    seo,
  }`,
);

export const TERMS_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "termsPageSettings" && _id == "termsPageSettings"][0] {
    heading,
    body,
    seo,
  }`,
);

export const TEAM_MEMBERS_QUERY = defineQuery(
  `*[_type == "teamMember" && department == $department] | order(order asc, name asc) {
    _id,
    name,
    role,
    bio,
    "imageUrl": image.asset->url,
  }`,
);

export const STAFF_PHOTOS_QUERY = defineQuery(
  `*[_type == "staffPhoto"] | order(order asc) {
    _id,
    "imageUrl": image.asset->url,
    alt,
    caption,
    order,
  }`,
);

export const TEAM_PAGE_SETTINGS_QUERY = defineQuery(
  `*[_type == "teamPageSettings" && _id == "teamPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroQuote,
    boardSection,
    adminSection,
    staffSection,
    seo,
  }`,
);
