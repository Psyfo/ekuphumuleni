import type { CollectionConfig } from 'payload';

import { anyone, signedIn } from './access';
import { shortenDbNames } from './db-names';
import { revalidateAfterChange, revalidateAfterDelete } from './revalidate';

/** How each repeatable record is titled and listed in the admin. */
const ADMIN: Record<string, CollectionConfig['admin']> = {
  'team-members': {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'department', 'order'],
    description: 'The profile cards on the Team page. “Display Order” sets who appears first.',
  },
  'staff-photos': {
    useAsTitle: 'caption',
    defaultColumns: ['caption', 'alt', 'order'],
    description: 'Group photos in the Team page carousel. Lower “Display Order” numbers show first.',
  },
  'donor-years': {
    useAsTitle: 'title',
    defaultColumns: ['year', 'order', 'updatedAt'],
    description: 'One record per year, listing that year’s donors. The Donors page builds itself from these.',
  },
};

/**
 * The shared shape of the site's repeatable records (people, photos, donors):
 * public to read, editable when signed in, sorted by "Display Order", and
 * every change clears the site's cache.
 */
export function contentCollection(
  config: Pick<CollectionConfig, 'slug' | 'labels' | 'fields'>,
): CollectionConfig {
  return {
    ...config,
    fields: shortenDbNames(config.fields),
    admin: { group: 'People & donors', ...ADMIN[config.slug] },
    defaultSort: 'order',
    access: { read: anyone, create: signedIn, update: signedIn, delete: signedIn },
    hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
    versions: { maxPerDoc: 10 },
  };
}
