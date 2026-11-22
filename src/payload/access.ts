import type { Access, FieldAccess } from 'payload';

/**
 * Two roles. Owners can do everything, including managing accounts. Editors
 * can change all content but not accounts, because someone who can create or
 * remove owners could lock the real owners out of their own site.
 */
export type Role = 'owner' | 'editor';

/** Fails closed: a user with no role is an editor, never an owner. */
export function isOwner(user: unknown): boolean {
  return (user as { role?: Role } | null | undefined)?.role === 'owner';
}

export const signedIn: Access = ({ req }) => Boolean(req.user);
export const ownerField: FieldAccess = ({ req }) => isOwner(req.user);
export const anyone: Access = () => true;
