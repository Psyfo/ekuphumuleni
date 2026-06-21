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
  SparklesIcon,
} from '@sanity/icons';
import { WelcomePane } from './components/WelcomePane';
import { PageGuide } from './components/PageGuide';

/**
 * Studio navigation.
 *
 * Organised the way an editor thinks about the site, not the way the schema is
 * declared: a friendly welcome, then the seven public pages (in site-nav order),
 * then the repeatable collections they pull from, then rarely-touched legal pages
 * tucked into a folder. Every entry is icon-led so the list scans at a glance.
 */

type Icon = ComponentType;
type S = Parameters<StructureResolver>[0];

// A page-settings singleton with an "Edit" form plus a plain-language "Guide" tab.
const pageSingleton = (S: S, schemaType: string, title: string, icon: Icon) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .icon(icon)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(schemaType)
        .title(title)
        .views([
          S.view.form().title('Edit'),
          S.view.component(PageGuide).title('Guide').icon(InfoOutlineIcon),
        ]),
    );

// A plain singleton (no guide) — used for the simple legal documents.
const singleton = (S: S, schemaType: string, title: string, icon: Icon) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .icon(icon)
    .child(S.document().schemaType(schemaType).documentId(schemaType).title(title));

// A repeatable collection: the standard create/list view, with the schema's orderings.
const collection = (S: S, schemaType: string, title: string, icon: Icon) =>
  S.listItem().title(title).icon(icon).child(S.documentTypeList(schemaType).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ── Welcome / getting started ───────────────────────────────────────────
      S.listItem()
        .title('Welcome')
        .id('welcome')
        .icon(SparklesIcon)
        .child(S.component(WelcomePane).title('Welcome').id('welcome')),

      S.divider(),

      // ── Pages (site-nav order) ──────────────────────────────────────────────
      pageSingleton(S, 'homePageSettings', 'Home Page', HomeIcon),
      pageSingleton(S, 'aboutPageSettings', 'About Page', InfoOutlineIcon),
      pageSingleton(S, 'servicesPageSettings', 'Services Page', CaseIcon),
      pageSingleton(S, 'facilitiesPageSettings', 'Facilities Page', SunIcon),
      pageSingleton(S, 'teamPageSettings', 'Team Page', UsersIcon),
      pageSingleton(S, 'donorsPageSettings', 'Donors Page', HeartIcon),
      pageSingleton(S, 'contactPageSettings', 'Contact Page', EnvelopeIcon),

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
