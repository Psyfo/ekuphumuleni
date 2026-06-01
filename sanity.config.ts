import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';

const SINGLETON_TYPES = new Set(['teamPageSettings', 'servicesPageSettings']);

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
