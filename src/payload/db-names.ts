import type { Field } from 'payload';

/**
 * Postgres caps table and type names at 63 characters. Payload names the table
 * behind a nested list by chaining every parent's name, and a page's saved
 * history adds "_v_version_" on top, which for a page like Home runs past the
 * cap ("_home_v_version_services_section_services_cards_v_icon_name").
 *
 * Payload hands each list and option set the name of the table it sits in
 * (group names included), so this keeps that chain and only drops the filler
 * words that carry no meaning: the "_version" wrapper of the history tables
 * and the "_section" at the end of each section's name. The result stays
 * readable and unique, e.g. "home_services_cards" for the live page and
 * "__home_v_services_cards_v" for its history.
 */
const snake = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase();

const shorten = (tableName = '') => tableName.replace(/_version(?=_|$)/g, '').replace(/_section(?=_|$)/g, '');

export function shortenDbNames(fields: Field[]): Field[] {
  return fields.map((field) => {
    if (field.type === 'tabs') {
      return { ...field, tabs: field.tabs.map((t) => ({ ...t, fields: shortenDbNames(t.fields) })) };
    }
    if (field.type === 'group') {
      return { ...field, fields: shortenDbNames(field.fields) };
    }
    if (field.type === 'array') {
      const name = snake(field.name);
      return {
        ...field,
        dbName: ({ tableName }: { tableName?: string }) => `${shorten(tableName)}_${name}`,
        fields: shortenDbNames(field.fields),
      };
    }
    if (field.type === 'select' || field.type === 'radio') {
      const name = snake(field.name);
      return { ...field, enumName: ({ tableName }: { tableName?: string }) => `enum_${shorten(tableName)}_${name}` };
    }
    return field;
  });
}
