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

// ---------------------------------------------------------------------------
// About page types
// ---------------------------------------------------------------------------

export interface SanityWhyChooseCard {
  _key: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SanityCoreValue {
  _key: string;
  iconName: string;
  label: string;
}

export interface SanityEstablishmentSection {
  heading: string;
  subtitle: string;
  founderImage?: SanityAssetRef;
  founderName: string;
  founderTitle: string;
  narrativeHeading: string;
  narrativeParagraph1: string;
  narrativeParagraph2: string;
  registrationHeading: string;
  registrationBody: string;
  whyChooseHeading: string;
  whyChooseCards: SanityWhyChooseCard[];
  closingStatement: string;
}

export interface SanityMissionVisionSection {
  heading: string;
  subtitle: string;
  missionHeading: string;
  missionBody: string;
  missionBullets: string[];
  visionHeading: string;
  visionBody: string;
  visionFootnote: string;
  coreValuesHeading: string;
  coreValues: SanityCoreValue[];
}

export interface SanityImpactSection {
  heading: string;
  subtitle: string;
  establishmentYear: number;
  bedsAvailable: number;
  staffCount: number;
  satisfactionPercent: number;
  contextParagraph1: string;
  contextParagraph2: string;
}

export interface SanityAboutPageSettingsDoc {
  _id: 'aboutPageSettings';
  _type: 'aboutPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  seo: { metaTitle: string; metaDescription: string };
  establishmentSection: SanityEstablishmentSection;
  missionVisionSection: SanityMissionVisionSection;
  impactSection: SanityImpactSection;
}

// ---------------------------------------------------------------------------
// Facilities page types
// ---------------------------------------------------------------------------

export interface SanityFacilityHighlight {
  _key: string;
  title: string;
  description: string;
  image?: SanityAssetRef;
  alt: string;
}

export interface SanityFeatureGridItem {
  _key: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SanitySustainabilityInitiative {
  _key: string;
  iconName: string;
  title: string;
  description: string;
  impact: string;
}

export interface SanitySustainabilityShowcaseImage {
  _key: string;
  image?: SanityAssetRef;
  alt: string;
  caption: string;
  subcaption: string;
}

export interface SanityShowcaseSection {
  heading: string;
  subtitle: string;
  highlights: SanityFacilityHighlight[];
  featureGridHeading: string;
  featureGridItems: SanityFeatureGridItem[];
}

export interface SanitySustainabilitySection {
  heading: string;
  subtitle: string;
  initiatives: SanitySustainabilityInitiative[];
  showcaseImages: SanitySustainabilityShowcaseImage[];
  commitmentHeading: string;
  commitmentBody: string;
}

export interface SanityFacilitiesPageSettingsDoc {
  _id: 'facilitiesPageSettings';
  _type: 'facilitiesPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  seo: { metaTitle: string; metaDescription: string };
  showcaseSection: SanityShowcaseSection;
  sustainabilitySection: SanitySustainabilitySection;
}

// ---------------------------------------------------------------------------
// Contact page types
// ---------------------------------------------------------------------------

export interface SanityContactDetail {
  _key: string;
  iconName: string;
  title: string;
  lines: string[];
  link?: string | null;
}

export interface SanityContactFormSection {
  heading: string;
  subheading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  messageHelpText: string;
  submitButtonLabel: string;
  successHeading: string;
  successBody: string;
  errorHeading: string;
}

export interface SanityContactInfoSection {
  heading: string;
  subtitle: string;
  details: SanityContactDetail[];
  mapQuery: string;
  additionalInfoHeading: string;
  additionalInfoBody: string;
}

export interface SanityContactPageSettingsDoc {
  _id: 'contactPageSettings';
  _type: 'contactPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  seo: { metaTitle: string; metaDescription: string };
  formSection: SanityContactFormSection;
  infoSection: SanityContactInfoSection;
}

// ---------------------------------------------------------------------------
// Home page types
// ---------------------------------------------------------------------------

export interface SanityHomeHeroSection {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface SanityHomeAboutSection {
  heading: string;
  intro: string;
  establishmentImage?: SanityAssetRef;
  establishmentHeading: string;
  establishmentBody: string;
  missionHeading: string;
  missionBody: string;
  visionHeading: string;
  visionBody: string;
  coreValuesHeading: string;
  coreValues: string[];
}

export interface SanityHomeServiceCard {
  _key: string;
  iconName: string;
  image?: SanityAssetRef;
  alt: string;
  title: string;
  description: string;
}

export interface SanityHomeServicesSection {
  heading: string;
  subtitle: string;
  cards: SanityHomeServiceCard[];
}

export interface SanityHomeTeamSection {
  heading: string;
  body: string;
  ctaLabel: string;
}

export interface SanityHomeDonorsSection {
  heading: string;
  body: string;
  ctaLabel: string;
}

export interface SanityHomeContactSection {
  heading: string;
  subtitle: string;
  email: string;
  phoneNumbers: string[];
  locationLines: string[];
  mapQuery: string;
  ctaLabel: string;
}

export interface SanityHomePageSettingsDoc {
  _id: 'homePageSettings';
  _type: 'homePageSettings';
  seo: { metaTitle: string; metaDescription: string };
  heroSection: SanityHomeHeroSection;
  aboutSection: SanityHomeAboutSection;
  servicesSection: SanityHomeServicesSection;
  teamSection: SanityHomeTeamSection;
  donorsSection: SanityHomeDonorsSection;
  contactSection: SanityHomeContactSection;
}

// ---------------------------------------------------------------------------
// Donors page
// ---------------------------------------------------------------------------

export interface SanityDonorYearDoc {
  _id: string;
  _type: 'donorYear';
  year: number;
  order: number;
  donorNames: string[];
}

export interface SanityDonorMention {
  name: string;
  iconName: string;
  description: string;
}

export interface SanityDonorWallSection {
  heading: string;
  subtitle: string;
}

export interface SanitySpecialMentionsSection {
  heading: string;
  subtitle: string;
  mentions: SanityDonorMention[];
  closingMessage: string;
}

export interface SanityDonorsPageSettingsDoc {
  _id: 'donorsPageSettings';
  _type: 'donorsPageSettings';
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  seo: { metaTitle: string; metaDescription: string };
  donorWallSection: SanityDonorWallSection;
  specialMentionsSection: SanitySpecialMentionsSection;
}

// ---------------------------------------------------------------------------
// Privacy & Terms pages
// ---------------------------------------------------------------------------

export interface SanityPrivacyPageSettingsDoc {
  _id: 'privacyPageSettings';
  _type: 'privacyPageSettings';
  heading: string;
  body: string;
  seo: { metaTitle: string; metaDescription: string };
}

export interface SanityTermsPageSettingsDoc {
  _id: 'termsPageSettings';
  _type: 'termsPageSettings';
  heading: string;
  body: string;
  seo: { metaTitle: string; metaDescription: string };
}
