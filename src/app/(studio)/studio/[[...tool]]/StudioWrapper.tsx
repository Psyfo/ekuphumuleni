'use client';

import dynamic from 'next/dynamic';

const StudioPageClient = dynamic(() => import('./StudioPageClient'), {
  ssr: false,
});

export default function StudioWrapper() {
  return <StudioPageClient />;
}
