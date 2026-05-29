import fs from 'node:fs';
import path from 'node:path';

import type {
  Department,
  SanityTeamMemberDoc,
  TeamMemberEntry,
  TeamMembersSource,
} from '../types.js';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const rootDir: string = process.cwd();
const sourcePath: string = path.join(
  rootDir,
  'src',
  'content',
  'teamMembers.json',
);
const outputPath: string = path.join(
  rootDir,
  'scripts',
  'sanity',
  'team-members.seed.ndjson',
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Creates a URL-safe, lowercase, hyphen-separated slug from any string.
 * Produces stable, repeatable doc IDs for Sanity imports.
 */
function toSlug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Maps an array of team member entries into Sanity import documents.
 */
function buildDocs(
  items: TeamMemberEntry[],
  department: Department,
): SanityTeamMemberDoc[] {
  return items.map(
    (item: TeamMemberEntry, index: number): SanityTeamMemberDoc => ({
      _id: `teamMember.${department}.${toSlug(item.name)}`,
      _type: 'teamMember',
      name: item.name,
      role: item.role,
      department,
      order: index + 1,
    }),
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const source: TeamMembersSource = JSON.parse(
  fs.readFileSync(sourcePath, 'utf8'),
) as TeamMembersSource;

const docs: SanityTeamMemberDoc[] = [
  ...buildDocs(source.board ?? [], 'board'),
  ...buildDocs(source.administration ?? [], 'administration'),
];

const ndjson: string = docs.map((doc) => JSON.stringify(doc)).join('\n') + '\n';

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, ndjson, 'utf8');

console.log(`Wrote ${docs.length} team member docs to ${outputPath}`);
console.log(
  'Run: sanity dataset import scripts/sanity/team-members.seed.ndjson --dataset production',
);
