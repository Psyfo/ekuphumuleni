import type { Field, GlobalConfig } from 'payload';

import { anyone, signedIn } from './access';
import { shortenDbNames } from './db-names';
import { GUIDES } from './guides';
import { revalidateGlobal } from './revalidate';

const LEGAL = new Set(['privacy-page', 'terms-page']);

/**
 * The shared shape of every page global: anyone can read it (the site does),
 * only signed-in editors can change it, saving clears the site's cache, and the
 * last few saves are kept so a mistake can be rolled back from "Versions".
 */
export function pageGlobal(config: Pick<GlobalConfig, 'slug' | 'label'> & { fields: Field[] }): GlobalConfig {
  const guide = GUIDES[config.slug];
  const guideField: Field[] = guide
    ? [
        {
          name: 'guide',
          type: 'ui',
          admin: {
            components: {
              Field: { path: '@/payload/components/PageGuide#PageGuide', clientProps: { guide } },
            },
          },
        },
      ]
    : [];

  return {
    ...config,
    // "home-page" is stored as table "home" (and its history as "_home_v").
    dbName: config.slug.replace(/-page$/, ''),
    admin: { group: LEGAL.has(config.slug) ? 'Legal pages' : 'Pages' },
    access: { read: anyone, update: signedIn },
    hooks: { afterChange: [revalidateGlobal] },
    versions: { max: 10 },
    fields: [...guideField, ...shortenDbNames(config.fields)],
  };
}
