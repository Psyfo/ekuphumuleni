import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';

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
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Team Page Settings
            S.listItem()
              .title('Team Page Settings')
              .id('teamPageSettings')
              .child(
                S.document()
                  .schemaType('teamPageSettings')
                  .documentId('teamPageSettings'),
              ),
            // Singleton: Services Page Settings
            S.listItem()
              .title('Services Page Settings')
              .id('servicesPageSettings')
              .child(
                S.document()
                  .schemaType('servicesPageSettings')
                  .documentId('servicesPageSettings'),
              ),
            // Singleton: About Page Settings
            S.listItem()
              .title('About Page Settings')
              .id('aboutPageSettings')
              .child(
                S.document()
                  .schemaType('aboutPageSettings')
                  .documentId('aboutPageSettings'),
              ),
            // Singleton: Facilities Page Settings
            S.listItem()
              .title('Facilities Page Settings')
              .id('facilitiesPageSettings')
              .child(
                S.document()
                  .schemaType('facilitiesPageSettings')
                  .documentId('facilitiesPageSettings'),
              ),
            // Singleton: Contact Page Settings
            S.listItem()
              .title('Contact Page Settings')
              .id('contactPageSettings')
              .child(
                S.document()
                  .schemaType('contactPageSettings')
                  .documentId('contactPageSettings'),
              ),
            // Singleton: Home Page Settings
            S.listItem()
              .title('Home Page Settings')
              .id('homePageSettings')
              .child(
                S.document()
                  .schemaType('homePageSettings')
                  .documentId('homePageSettings'),
              ),
            // Singleton: Donors Page Settings
            S.listItem()
              .title('Donors Page Settings')
              .id('donorsPageSettings')
              .child(
                S.document()
                  .schemaType('donorsPageSettings')
                  .documentId('donorsPageSettings'),
              ),
            // Singleton: Privacy Page Settings
            S.listItem()
              .title('Privacy Page Settings')
              .id('privacyPageSettings')
              .child(
                S.document()
                  .schemaType('privacyPageSettings')
                  .documentId('privacyPageSettings'),
              ),
            // Singleton: Terms Page Settings
            S.listItem()
              .title('Terms Page Settings')
              .id('termsPageSettings')
              .child(
                S.document()
                  .schemaType('termsPageSettings')
                  .documentId('termsPageSettings'),
              ),
            S.divider(),
            // All other document types (excluding singletons)
            ...S.documentTypeListItems().filter(
              (item) => !SINGLETON_TYPES.has(item.getId() ?? ''),
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
