import type { CmsMember } from './BoardSection';

export const FALLBACK_BOARD_MEMBERS: CmsMember[] = [
  { _id: 'team-board-1', name: 'Mr P Ncube', role: 'Board Chairperson', imageUrl: null },
  { _id: 'team-board-2', name: 'Ms F Ndlovu', role: 'H R Chairperson', imageUrl: null },
  { _id: 'team-board-3', name: 'Mr J M Nyoni', role: 'Board Member', imageUrl: null },
  { _id: 'team-board-4', name: 'Ms G N Mahlangu', role: 'Board Member', imageUrl: null },
  { _id: 'team-board-5', name: 'Mrs H M Mahachi', role: 'Vice Chair Person', imageUrl: null },
  { _id: 'team-board-6', name: 'Mr Miclose', role: 'Board Person Treasury', imageUrl: null },
  { _id: 'team-board-7', name: 'Mr J L Ncube Sikosana', role: 'Committee Member', imageUrl: null },
  { _id: 'team-board-8', name: 'Mr L Mpofu', role: 'Committee Member', imageUrl: null },
  { _id: 'team-board-9', name: 'Ms S S Hove', role: 'Committee Member', imageUrl: null },
];

export const FALLBACK_ADMIN_MEMBERS: CmsMember[] = [
  { _id: 'team-admin-1', name: 'Mrs Nokuthula Moyo', role: 'Administrator', imageUrl: null },
  {
    _id: 'team-admin-2',
    name: 'Ms Simangele Ncube',
    role: 'Administration Officer',
    imageUrl: null,
  },
  { _id: 'team-admin-3', name: 'Mrs Nomsa Gumpo', role: 'Bookkeeper', imageUrl: null },
];

export const FALLBACK_PAGE_SETTINGS = {
  heroTitle: 'Meet the Team',
  heroSubtitle:
    'Meet the individuals responsible for the clinical work, day‑to‑day operations, and governance of Ekuphumuleni. From our board of trustees to front‑line staff, every member has defined duties in how the home is run.',
  heroQuote:
    'Together, we manage a home where every resident is treated with dignity and receives consistent nursing and support.',
  boardSection: {
    heading: 'Executive Board Members',
    description:
      'The current executive board members guiding Ekuphumuleni’s mission and service excellence',
  },
  adminSection: {
    heading: 'Administration Team',
    description:
      'The dedicated professionals who keep Ekuphumuleni running smoothly every day',
  },
  staffSection: {
    heading: 'Our Dedicated Staff',
    description:
      'Our nursing, care, and support teams work in shifts to provide daily care, monitoring, and assistance for residents',
  },
};
