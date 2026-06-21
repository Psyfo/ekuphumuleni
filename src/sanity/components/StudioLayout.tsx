import React from 'react';
import type { LayoutProps } from 'sanity';
import { studioStyles } from './studioStyles';

/**
 * Root layout override — renders the default Studio and injects our scoped
 * stylesheet. Keeping the CSS here (rather than in the site's globals.css) means
 * it only ever applies inside the Studio.
 */
export function StudioLayout(props: LayoutProps) {
  return (
    <>
      {props.renderDefault(props)}
      <style dangerouslySetInnerHTML={{ __html: studioStyles }} />
    </>
  );
}

export default StudioLayout;
