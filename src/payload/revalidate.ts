import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload';
import { revalidateTag } from 'next/cache';

/** Every cached read of CMS content carries this tag (see src/lib/cms.ts). */
export const CMS_TAG = 'cms';

/**
 * Drops the cached copy of the site's content so the next visit reads fresh
 * data. `expire: 0` makes that next visit wait for the new content instead of
 * seeing the old copy once more, which is what an editor expects after Save.
 *
 * Outside a Next.js request (the import script, a migration) there is no cache
 * to clear and Next throws; that is expected and ignored.
 */
function clear() {
  try {
    revalidateTag(CMS_TAG, { expire: 0 });
  } catch {
    // Not running inside Next.js, so nothing is cached.
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  clear();
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  clear();
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc }) => {
  clear();
  return doc;
};
