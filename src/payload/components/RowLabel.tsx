'use client';

import { useRowLabel } from '@payloadcms/ui';

/**
 * Names each row in a list (a service card, a gallery photo) after its own
 * title, so editors see "Physiotherapy" instead of "Row 03".
 */
export function RowLabel() {
  const { data, rowNumber } = useRowLabel<Record<string, unknown>>();
  const text = ['title', 'name', 'label', 'caption', 'alt'].map((k) => data?.[k]).find(
    (v): v is string => typeof v === 'string' && v.trim().length > 0,
  );
  return <span>{text ?? `Item ${String((rowNumber ?? 0) + 1).padStart(2, '0')}`}</span>;
}
