import { APIError, type CollectionConfig, type PayloadRequest } from 'payload';

import { isOwner, ownerField } from '../access';

/**
 * Refuses to leave the site with nobody who can manage accounts. Demoting or
 * deleting the last owner cannot be undone from inside the admin, since no
 * remaining user could grant the role back.
 */
async function requireAnotherOwner(req: PayloadRequest, excluding: string | number) {
  const { totalDocs } = await req.payload.count({
    collection: 'users',
    where: { and: [{ role: { equals: 'owner' } }, { id: { not_equals: excluding } }] },
    req,
  });
  if (totalDocs === 0) {
    throw new APIError(
      'This is the only owner. Make someone else an owner first, otherwise no one could manage accounts.',
      400,
    );
  }
}

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Person with access', plural: 'People with access' },
  auth: {
    // Lock an account for ten minutes after five wrong passwords in a row.
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
    // A signed-in session lasts a working day.
    tokenExpiration: 60 * 60 * 8,
  },
  admin: {
    useAsTitle: 'email',
    group: 'Settings',
    description: 'Who can sign in. Owners manage accounts; editors change content.',
    defaultColumns: ['email', 'name', 'role', 'updatedAt'],
  },
  access: {
    create: ({ req }) => isOwner(req.user),
    delete: ({ req }) => isOwner(req.user),
    // Editors can see and update their own record, so they can change their
    // own name or password without help.
    read: ({ req }) => isOwner(req.user) || (req.user ? { id: { equals: req.user.id } } : false),
    update: ({ req }) => isOwner(req.user) || (req.user ? { id: { equals: req.user.id } } : false),
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, originalDoc, req }) => {
        // The very first account is always an owner, or no one could ever
        // promote anyone.
        if (operation === 'create') {
          const { totalDocs } = await req.payload.count({ collection: 'users', req });
          if (totalDocs === 0) data.role = 'owner';
        }
        if (operation === 'update' && originalDoc?.role === 'owner' && data.role === 'editor') {
          await requireAnotherOwner(req, originalDoc.id);
        }
        return data;
      },
    ],
    beforeDelete: [
      async ({ id, req }) => {
        const doc = await req.payload.findByID({ collection: 'users', id, req });
        if (doc?.role === 'owner') await requireAnotherOwner(req, id);
      },
    ],
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Editor', value: 'editor' },
      ],
      // Without this an editor could promote themselves on their own record.
      access: { create: ownerField, update: ownerField },
      admin: {
        description: 'Editors change all content. Owners can also add, remove and change accounts.',
      },
    },
  ],
};
