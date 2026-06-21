import React from 'react';
import type { NavbarProps } from 'sanity';

/**
 * Wraps the default navbar in `.eku-navbar` so the injected stylesheet
 * (studioStyles) can recolour it to Deep Cocoa. The wrapper uses
 * `display:contents` in CSS, so it adds no box and the layout is unchanged.
 */
export function StudioNavbar(props: NavbarProps) {
  return <div className="eku-navbar">{props.renderDefault(props)}</div>;
}

export default StudioNavbar;
