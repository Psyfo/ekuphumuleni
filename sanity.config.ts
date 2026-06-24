import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { ekuphumuleniTheme } from './src/sanity/lib/theme';
import { structure } from './src/sanity/structure';
import { StudioIcon } from './src/sanity/components/StudioIcon';
import { StudioNavbar } from './src/sanity/components/StudioNavbar';
import { StudioLayout } from './src/sanity/components/StudioLayout';

// Page-settings documents that should only ever have a single instance. The
// structure (src/sanity/structure.ts) opens each one directly; this set also
// keeps them out of the global "＋ Create" menu so editors can't spawn duplicates.
const SINGLETON_TYPES = new Set([
  'teamPageSettings',
  'servicesPageSettings',
  'aboutPageSettings',
  'facilitiesPageSettings',
  'contactPageSettings',
  'homePageSettings',
  'donorsPageSettings',
  'privacyPageSettings',
  'termsPageSettings',
]);

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'mgvrdxr1',
  dataset: dataset || 'production',
  title: 'Ekuphumuleni',
  // Brand mark for the navbar home button. The deprecated `studio.components.logo`
  // slot is no longer rendered by the modern navbar, so branding lives here.
  icon: StudioIcon,
  theme: ekuphumuleniTheme,
  studio: {
    components: {
      navbar: StudioNavbar,
      layout: StudioLayout,
    },
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Hide singletons from the global create menu (the navbar "＋" button); they
    // are reached through the structure instead. Collections stay creatable.
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((template) => !SINGLETON_TYPES.has(template.templateId));
      }
      return prev;
    },
  },
});
