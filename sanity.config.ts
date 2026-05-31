import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';

const SINGLETON_TYPES = new Set(['teamPageSettings']);

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
