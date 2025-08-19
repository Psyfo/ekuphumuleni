import React from 'react';

import AdministrationSection from './AdministrationSection';
import BoardSection from './BoardSection';
import StaffSection from './StaffSection';

export default function TeamPage() {
  return (
    <main>
      <BoardSection />
      <AdministrationSection />
      <StaffSection />
    </main>
  );
}
