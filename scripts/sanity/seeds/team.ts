/**
 * scripts/sanity/seeds/team.ts
 *
 * Seeds all Sanity documents for the /team page:
 *   - teamMember documents (board + administration)
 *   - staffPhoto documents
 *   - teamPageSettings singleton
 */

import { client, uploadImage } from '../lib';
import type {
  SanityTeamMemberDoc,
  SanityStaffPhotoDoc,
  SanityTeamPageSettingsDoc,
} from '../../types';

interface MemberEntry {
  name: string;
  role?: string;
  img?: string;
}

// ---------------------------------------------------------------------------
// Board members
// ---------------------------------------------------------------------------

async function seedBoardMembers() {
  console.log('\n── Team › board members ──');
  const members: MemberEntry[] = [
    {
      name: 'Mr P Ncube',
      role: 'Board Chairperson',
      img: '/images/team/board/ncube.jpg',
    },
    {
      name: 'Ms F Ndlovu',
      role: 'H R Chairperson',
      img: '/images/team/board/ndlovu.jpg',
    },
    { name: 'Mr J M Nyoni', role: 'Board Member' },
    { name: 'Ms G N Mahlangu', role: 'Board Member' },
    {
      name: 'Mrs H M Mahachi',
      role: 'Vice Chair Person',
      img: '/images/team/board/mahachi.jpg',
    },
    {
      name: 'Mr Miclose',
      role: 'Board Person Treasury',
      img: '/images/team/board/miclose.jpg',
    },
    {
      name: 'Mr J L Ncube Sikosana',
      role: 'Committee Member',
      img: '/images/team/board/sikosana.jpg',
    },
    {
      name: 'Mr L Mpofu',
      role: 'Committee Member',
      img: '/images/team/board/mpofu.jpg',
    },
    { name: 'Ms S S Hove', role: 'Committee Member' },
  ];

  for (let i = 0; i < members.length; i++) {
    const m = members[i];
    const imageRef = m.img ? await uploadImage(m.img) : undefined;
    const doc: SanityTeamMemberDoc = {
      _id: `team-board-${i + 1}`,
      _type: 'teamMember',
      name: m.name,
      role: m.role,
      department: 'board',
      order: i + 1,
      ...(imageRef ? { image: imageRef } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${m.name}`);
  }
}

// ---------------------------------------------------------------------------
// Administration members
// ---------------------------------------------------------------------------

async function seedAdminMembers() {
  console.log('\n── Team › administration members ──');
  const members: MemberEntry[] = [
    {
      name: 'Mrs Nokuthula Moyo',
      role: 'Administrator',
      img: '/images/team/administration/administrator.jpg',
    },
    {
      name: 'Ms Simangele Ncube',
      role: 'Administration Officer',
      img: '/images/team/administration/administration_officer.jpg',
    },
    {
      name: 'Mrs Nomsa Gumpo',
      role: 'Bookkeeper',
      img: '/images/team/administration/book-keeper.jpg',
    },
  ];

  for (let i = 0; i < members.length; i++) {
    const m = members[i];
    const imageRef = m.img ? await uploadImage(m.img) : undefined;
    const doc: SanityTeamMemberDoc = {
      _id: `team-admin-${i + 1}`,
      _type: 'teamMember',
      name: m.name,
      role: m.role,
      department: 'administration',
      order: i + 1,
      ...(imageRef ? { image: imageRef } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${m.name}`);
  }
}

// ---------------------------------------------------------------------------
// Staff photos (nursing/care carousel)
// ---------------------------------------------------------------------------

async function seedStaffPhotos() {
  console.log('\n── Team › staff photos ──');
  const photos = [
    {
      img: '/images/team/staff/staff_01.JPG',
      alt: 'Day Shift Staff',
      caption: 'Day Shift Staff',
      order: 1,
    },
    {
      img: '/images/team/staff/staff_02.JPG',
      alt: 'Night Shift Staff',
      caption: 'Night Shift Staff',
      order: 2,
    },
    {
      img: '/images/team/staff/staff_03.JPG',
      alt: 'Weekend Team',
      caption: 'Weekend Team',
      order: 3,
    },
    {
      img: '/images/team/staff/staff_04.JPG',
      alt: 'Staff Group Photo',
      caption: 'Staff Group Photo',
      order: 4,
    },
  ];

  for (const p of photos) {
    const imageRef = await uploadImage(p.img);
    if (!imageRef) continue;
    const doc: SanityStaffPhotoDoc = {
      _id: `team-staff-photo-${p.order}`,
      _type: 'staffPhoto',
      image: imageRef,
      alt: p.alt,
      caption: p.caption,
      order: p.order,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${p.caption}`);
  }
}

// ---------------------------------------------------------------------------
// teamPageSettings singleton
// ---------------------------------------------------------------------------

async function seedTeamPageSettings() {
  console.log('\n── Team › page settings ──');
  const doc: SanityTeamPageSettingsDoc = {
    _id: 'teamPageSettings',
    _type: 'teamPageSettings',
    heroTitle: 'Meet the Team',
    heroSubtitle:
      'Meet the individuals responsible for the clinical work, day\u2011to\u2011day operations, and governance of Ekuphumuleni. From our board of trustees to front\u2011line staff, every member has defined duties in how the home is run.',
    heroQuote:
      'Together, we manage a home where every resident is treated with dignity and receives consistent nursing and support.',
    boardSection: {
      heading: 'Executive Board Members',
      description:
        'The current executive board members guiding Ekuphumuleni\u2019s mission and service excellence',
    },
    adminSection: {
      heading: 'Administration Team',
      description:
        'The dedicated professionals who keep Ekuphumuleni running smoothly every day',
    },
    staffSection: {
      heading: 'Our Dedicated Staff',
      description:
        'Our nursing, care, and support teams work in shifts to provide daily care, monitoring, and assistance for residents',
    },
  };
  await client.createOrReplace(doc);
  console.log('  ✓ teamPageSettings');
}

// ---------------------------------------------------------------------------
// Entry point called by the orchestrator
// ---------------------------------------------------------------------------

export async function seedTeam() {
  await seedBoardMembers();
  await seedAdminMembers();
  await seedStaffPhotos();
  await seedTeamPageSettings();
}
