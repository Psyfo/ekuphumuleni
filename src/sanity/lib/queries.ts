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
