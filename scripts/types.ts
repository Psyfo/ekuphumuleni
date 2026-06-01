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

// ---------------------------------------------------------------------------
// Services page types
// ---------------------------------------------------------------------------

export interface SanityServiceItem {
  _key: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SanityServiceFeatureCard {
  _key: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SanityGalleryImageItem {
  _key: string;
  image: SanityAssetRef;
  alt: string;
}

export interface SanityCoreServicesSection {
  heading: string;
  subtitle: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButtonLabel: string;
  services: SanityServiceItem[];
}

export interface SanityNursingSection {
  heading: string;
  subtitle: string;
  featuredImage?: SanityAssetRef;
  featuredHeading: string;
  featuredBody: string;
  bulletItems: string[];
  featureCards: SanityServiceFeatureCard[];
  galleryImages: SanityGalleryImageItem[];
}

export interface SanityRehabilitationSection {
  heading: string;
  subtitle: string;
  featuredImage?: SanityAssetRef;
  featuredHeading: string;
  featuredBody: string;
  programs: { _key: string; title: string; description: string }[];
  galleryImages: SanityGalleryImageItem[];
}

export interface SanityServicesPageSettingsDoc {
  _id: 'servicesPageSettings';
  _type: 'servicesPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  seo: { metaTitle: string; metaDescription: string };
  coreServicesSection: SanityCoreServicesSection;
  nursingSection: SanityNursingSection;
  rehabilitationSection: SanityRehabilitationSection;
}
