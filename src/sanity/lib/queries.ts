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
