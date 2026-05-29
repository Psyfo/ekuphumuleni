/**
 * Shared types for Sanity seed and migration scripts.
 *
 * Add new document shapes here as more content types are seeded.
 */

// ---------------------------------------------------------------------------
// Source data (mirrors src/content/*.json structures)
// ---------------------------------------------------------------------------

export interface TeamMemberEntry {
  name: string;
  role?: string;
  img?: string;
}

export interface TeamMembersSource {
  board: TeamMemberEntry[];
  administration: TeamMemberEntry[];
}

// ---------------------------------------------------------------------------
// Sanity import document shapes
// ---------------------------------------------------------------------------

export type Department = 'board' | 'administration' | 'staff';

export interface SanityTeamMemberDoc {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string | undefined;
  department: Department;
  order: number;
}
