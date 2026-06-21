import React from 'react';
import type { InputProps } from 'sanity';
import { brand } from './brandTokens';

/**
 * Wraps the default image input with a short, friendly tip. Attached to the
 * photo fields editors upload to most often (team members, staff photos).
 */
export function ImageTipInput(props: InputProps) {
  return (
    <div>
      {props.renderDefault(props)}
      <div
        style={{
          marginTop: '0.6rem',
          padding: '0.55rem 0.75rem',
          fontSize: '0.82rem',
          lineHeight: 1.5,
          color: brand.deepCocoa,
          background: 'rgba(176, 90, 60, 0.08)',
          border: '1px solid rgba(166, 138, 100, 0.25)',
          borderRadius: 10,
        }}
      >
        📸 <strong>Photo tip:</strong> landscape shots work best. After uploading, drag the round
        focus point onto the most important part (usually a face) so it stays in frame on phones.
      </div>
    </div>
  );
}

export default ImageTipInput;
