'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

/**
 * Wraps the app tree with:
 *  - LazyMotion: loads animation features client-side only, preventing SSR
 *    from injecting inline motion styles that cause React 19 hydration mismatches.
 *  - MotionConfig reducedMotion="user": respects the OS prefers-reduced-motion
 *    setting globally, silencing the Framer Motion console warning.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </LazyMotion>
  );
}
