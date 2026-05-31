import { defineQuery } from 'next-sanity';

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
  }`,
);
