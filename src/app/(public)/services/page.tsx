import React from 'react';

import Facilities from './Facilities';
import NursingCare from './NursingCare';
import Sustainability from './Sustainability';

export default function ServicesPage() {
  return (
    <main>
      <NursingCare />
      <Sustainability />
      <Facilities />
    </main>
  );
}
