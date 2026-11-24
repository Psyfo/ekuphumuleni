import { BuildingLibraryIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline';

/* The special mentions, set as the foundation stones the wall of names rests
   on: the same masonry, larger and darker. Styles: src/app/styles/_donor-wall.css. */

const ICON_MAP: Record<string, typeof BuildingLibraryIcon> = {
  'building-library': BuildingLibraryIcon,
  heart: HeartIcon,
  users: UsersIcon,
};

interface SpecialMention {
  name: string;
  iconName: string;
  description: string;
}

interface SpecialMentionsSectionData {
  heading?: string;
  subtitle?: string;
  mentions?: SpecialMention[];
  closingMessage?: string;
}

interface SpecialMentionsSectionProps {
  data?: SpecialMentionsSectionData;
}

const FALLBACK_MENTIONS: SpecialMention[] = [
  {
    name: 'Beit Trust',
    iconName: 'building-library',
    description:
      'Foundational support and enduring partnership that has strengthened our mission',
  },
  {
    name: 'Jesus Latter Day',
    iconName: 'heart',
    description: 'Faith-driven commitment illuminating our path with compassionate care',
  },
  {
    name: 'Many Individual Well-Wishers',
    iconName: 'users',
    description: 'Countless acts of kindness woven into the fabric of our community',
  },
];

export default function SpecialMentionsSection({ data }: SpecialMentionsSectionProps = {}) {
  const heading = data?.heading ?? 'Special Mentions';
  const subtitle =
    data?.subtitle ??
    'We extend our deepest gratitude to these remarkable supporters whose extraordinary contributions have shaped our mission';
  const mentions = data?.mentions ?? FALLBACK_MENTIONS;
  const closingMessage =
    data?.closingMessage ??
    'Every contribution, whether grand or humble, has woven threads of hope into the fabric of our community. Your generosity illuminates the path forward for those in our care.';

  return (
    <section
      aria-labelledby='special-mentions-heading'
      className='bg-[var(--color-warm-beige)] py-16 lg:py-20'
    >
      <div className='mx-auto px-4 sm:px-6 max-w-6xl'>
        <header className='mb-10 lg:mb-12 text-center'>
          <h2 id='special-mentions-heading' className='mb-4 heading-2'>
            {heading}
          </h2>
          <div className='bg-gradient-to-r from-transparent via-[var(--color-muted-terracotta)] to-transparent mx-auto mb-6 rounded-full w-24 h-1' />
          <p className='mx-auto max-w-2xl !text-lg leading-relaxed body-text'>{subtitle}</p>
        </header>

        <ul className='donor-wall wall-foundation'>
          {mentions.map((mention) => {
            const Icon = ICON_MAP[mention.iconName] ?? BuildingLibraryIcon;
            return (
              <li key={mention.name} className='wall-stone'>
                <Icon aria-hidden='true' className='wall-stone__icon' />
                <h3 className='wall-stone__name'>{mention.name}</h3>
                <p className='wall-stone__text'>{mention.description}</p>
              </li>
            );
          })}
        </ul>

        <p className='mx-auto mt-12 lg:mt-14 max-w-3xl !font-serif !text-lg lg:!text-xl text-[var(--color-deep-cocoa)] text-center italic leading-relaxed !text-balance'>
          {closingMessage}
        </p>
      </div>
    </section>
  );
}
