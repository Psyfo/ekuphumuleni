/**
 * Shared types for Sanity seed and migration scripts.
 *
 * Add new document shapes here as more content types are seeded.
 */

// ---------------------------------------------------------------------------
// Source data (mirrors src/content/*.json structures)
// ---------------------------------------------------------------------------

export interface TeamMemberEntry {
  name: string;
  role?: string;
  img?: string;
}

export interface TeamMembersSource {
  board: TeamMemberEntry[];
  administration: TeamMemberEntry[];
}

// ---------------------------------------------------------------------------
// Sanity import document shapes
// ---------------------------------------------------------------------------

export type Department = 'board' | 'administration' | 'nursing' | 'care';

export interface SanityAssetRef {
  _type: 'image';
  asset: { _type: 'reference'; _ref: string };
}

export interface SanityTeamMemberDoc {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string | undefined;
  department: Department;
  order: number;
  image?: SanityAssetRef;
}

export interface SanityStaffPhotoDoc {
  _id: string;
  _type: 'staffPhoto';
  image: SanityAssetRef;
  alt: string;
  caption?: string;
  order: number;
}

interface SectionSettings {
  heading: string;
  description: string;
}

export interface SanityTeamPageSettingsDoc {
  _id: 'teamPageSettings';
  _type: 'teamPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  boardSection: SectionSettings;
  adminSection: SectionSettings;
  staffSection: SectionSettings;
}
