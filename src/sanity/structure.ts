import type { StructureResolver } from 'sanity/structure';
import type { ComponentType } from 'react';
import {
  HomeIcon,
  InfoOutlineIcon,
  CaseIcon,
  SunIcon,
  UsersIcon,
  HeartIcon,
  EnvelopeIcon,
  DocumentIcon,
  DocumentsIcon,
  UserIcon,
  ImagesIcon,
  CalendarIcon,
} from '@sanity/icons';

/**
 * Studio navigation.
 *
 * Organised the way an editor thinks about the site, not the way the schema is
 * declared: the seven public pages first (in site-nav order), then the
 * repeatable collections they pull from, then rarely-touched legal pages tucked
 * into a folder. Every entry is icon-led so the list scans at a glance.
 */

type Icon = ComponentType;

// A page-settings singleton: one fixed document, opened directly (no list).
const singleton = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
  icon: Icon,
) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .icon(icon)
    .child(S.document().schemaType(schemaType).documentId(schemaType).title(title));

// A repeatable collection: the standard create/list view, with the schema's orderings.
const collection = (
  S: Parameters<StructureResolver>[0],
  schemaType: string,
  title: string,
  icon: Icon,
) => S.listItem().title(title).icon(icon).child(S.documentTypeList(schemaType).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ── Pages (site-nav order) ──────────────────────────────────────────────
      singleton(S, 'homePageSettings', 'Home Page', HomeIcon),
      singleton(S, 'aboutPageSettings', 'About Page', InfoOutlineIcon),
      singleton(S, 'servicesPageSettings', 'Services Page', CaseIcon),
      singleton(S, 'facilitiesPageSettings', 'Facilities Page', SunIcon),
      singleton(S, 'teamPageSettings', 'Team Page', UsersIcon),
      singleton(S, 'donorsPageSettings', 'Donors Page', HeartIcon),
      singleton(S, 'contactPageSettings', 'Contact Page', EnvelopeIcon),

      S.divider(),

      // ── Collections (the records pages draw from) ──────────────────────────
      collection(S, 'teamMember', 'Team Members', UserIcon),
      collection(S, 'staffPhoto', 'Staff Photos', ImagesIcon),
      collection(S, 'donorYear', 'Donor Years', CalendarIcon),

      S.divider(),

      // ── Legal (rarely edited — folded away) ────────────────────────────────
      S.listItem()
        .title('Legal Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Legal Pages')
            .items([
              singleton(S, 'privacyPageSettings', 'Privacy Policy', DocumentIcon),
              singleton(S, 'termsPageSettings', 'Terms of Service', DocumentIcon),
            ]),
        ),
    ]);
