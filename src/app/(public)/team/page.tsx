import React from 'react';
import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import {
  TEAM_MEMBERS_QUERY,
  STAFF_PHOTOS_QUERY,
  TEAM_PAGE_SETTINGS_QUERY,
} from '@/sanity/lib/queries';

import TeamHeroSection from './TeamHeroSection';
import BoardSection from './BoardSection';
import AdministrationSection from './AdministrationSection';
import StaffSection from './StaffSection';
import {
  FALLBACK_BOARD_MEMBERS,
  FALLBACK_ADMIN_MEMBERS,
  FALLBACK_PAGE_SETTINGS,
} from './fallback-data';

/** Re-render from Sanity at most every 5 minutes, so CMS edits reach
 * production without a redeploy. */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  let seo = FALLBACK_PAGE_SETTINGS.seo;
  try {
    const settings = await client.fetch(TEAM_PAGE_SETTINGS_QUERY);
    if (settings?.seo) seo = settings.seo;
  } catch {
    // Fall through to defaults
  }

  const title = seo?.metaTitle ?? 'Meet the Team | Ekuphumuleni Geriatric Nursing Home';
  const description =
    seo?.metaDescription ??
    'Meet our team - board of trustees, administrators, nursing staff, and care workers responsible for the operation of Ekuphumuleni and delivery of geriatric care.';

  return {
    title,
    description,
    keywords: [
      'nursing home staff',
      'geriatric care team',
      'healthcare professionals',
      'nursing staff Bulawayo',
      'elderly care team',
      'board of trustees',
      'nursing home administration',
      'skilled caregivers',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://ekuphumuleni.ngo/team',
      images: [
        {
          url: '/images/brand/ekuphumuleni-og.png',
          width: 1200,
          height: 630,
          alt: "Ekuphumuleni Geriatric Nursing Home, caring for Bulawayo's elders since 1980",
        },
      ],
    },
  };
}

export default async function TeamPage() {
  let boardMembers, adminMembers, staffPhotos, pageSettings;

  try {
    [boardMembers, adminMembers, staffPhotos, pageSettings] = await Promise.all([
      client.fetch(TEAM_MEMBERS_QUERY, { department: 'board' }),
      client.fetch(TEAM_MEMBERS_QUERY, { department: 'administration' }),
      client.fetch(STAFF_PHOTOS_QUERY),
      client.fetch(TEAM_PAGE_SETTINGS_QUERY),
    ]);
  } catch (err) {
    console.error('[TeamPage] Sanity fetch failed — rendering fallback content:', err);
    boardMembers = FALLBACK_BOARD_MEMBERS;
    adminMembers = FALLBACK_ADMIN_MEMBERS;
    staffPhotos = [];
    pageSettings = FALLBACK_PAGE_SETTINGS;
  }

  return (
    <main>
      <TeamHeroSection
        title={pageSettings?.heroTitle}
        subtitle={pageSettings?.heroSubtitle}
        quote={pageSettings?.heroQuote}
      />
      <BoardSection
        members={boardMembers ?? []}
        heading={pageSettings?.boardSection?.heading}
        description={pageSettings?.boardSection?.description}
      />
      <AdministrationSection
        members={adminMembers ?? []}
        heading={pageSettings?.adminSection?.heading}
        description={pageSettings?.adminSection?.description}
      />
      <StaffSection
        photos={staffPhotos ?? []}
        heading={pageSettings?.staffSection?.heading}
        description={pageSettings?.staffSection?.description}
      />
    </main>
  );
}
