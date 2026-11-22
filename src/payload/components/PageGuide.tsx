'use client';

import type { Guide } from '../guides';

/** The plain-language "how this page works" note at the top of each page. */
export function PageGuide({ guide }: { guide: Guide }) {
  return (
    <details className='eku-guide'>
      <summary>
        <span className='eku-guide__badge' aria-hidden>
          ?
        </span>
        {guide.blurb} <span className='eku-guide__more'>How this page works</span>
      </summary>
      <div className='eku-guide__body'>
        <div>
          <h4>What it controls</h4>
          <ul>
            {guide.controls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Tips</h4>
          <ul>
            {guide.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}
