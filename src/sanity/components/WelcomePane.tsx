import React from 'react';
import { HomeIcon, UsersIcon, HeartIcon, EditIcon, PublishIcon, ImageIcon } from '@sanity/icons';
import { brand } from './brandTokens';

const card: React.CSSProperties = {
  background: brand.offWhite,
  border: `1px solid rgba(166, 138, 100, 0.25)`,
  borderRadius: 14,
  padding: '1.1rem 1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
};

const chip: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  borderRadius: 10,
  background: 'rgba(176, 90, 60, 0.12)',
  color: brand.terracottaDeep,
  fontSize: 22,
};

const cardTitle: React.CSSProperties = {
  fontFamily: brand.serif,
  fontSize: '1.05rem',
  fontWeight: 700,
  color: brand.deepCocoa,
  margin: 0,
};

function HowToCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={card}>
      <span style={chip} aria-hidden>
        {icon}
      </span>
      <h3 style={cardTitle}>{title}</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5, color: brand.espresso }}>
        {children}
      </p>
    </div>
  );
}

/**
 * Branded landing pane, surfaced as the first item in the structure. Greets
 * editors and explains the three things they'll actually do, in plain language.
 */
export function WelcomePane() {
  return (
    <div className="eku-pane">
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '2.5rem 1.75rem 3rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/ekuphumuleni_logo-full.png"
          alt="Ekuphumuleni"
          width={132}
          height={132}
          style={{ display: 'block', margin: '0 auto 0.5rem' }}
        />
        <h1
          style={{
            fontFamily: brand.serif,
            fontSize: '2rem',
            fontWeight: 700,
            color: brand.deepCocoa,
            textAlign: 'center',
            margin: '0 0 0.75rem',
          }}
        >
          Welcome to the content studio
        </h1>
        <div
          aria-hidden
          style={{
            width: 64,
            height: 4,
            borderRadius: 999,
            background: brand.terracotta,
            margin: '0 auto 1.25rem',
          }}
        />
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.02rem',
            lineHeight: 1.6,
            color: brand.espresso,
            maxWidth: 620,
            margin: '0 auto 2rem',
          }}
        >
          This is where you edit everything on the Ekuphumuleni website. Pick a page on the
          left, change its text or photos, and press <strong>Publish</strong>. Your changes go
          live on ekuphumuleni.ngo within a minute or two.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <HowToCard icon={<HomeIcon />} title="Edit a page">
            Open any page under <em>Pages</em> — Home, About, Services and the rest. Each one is
            split into clearly labelled sections.
          </HowToCard>
          <HowToCard icon={<UsersIcon />} title="Manage people">
            <em>Team Members</em> are the profile cards; <em>Staff Photos</em> are the group
            shots in the carousel. Use “Display Order” to arrange them.
          </HowToCard>
          <HowToCard icon={<HeartIcon />} title="Record donors">
            Add a <em>Donor Year</em> and list the names. The Donors page builds itself from
            these each year.
          </HowToCard>
        </div>

        <div style={{ ...card, gap: '0.75rem' }}>
          <h3 style={cardTitle}>Good to know</h3>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.92rem' }}>
            <li style={{ marginBottom: '0.45rem' }}>
              <PublishIcon style={{ verticalAlign: 'middle', color: brand.terracottaDeep }} />{' '}
              Nothing is live until you press <strong>Publish</strong>. A grey “Draft” marker
              means your edits are saved but not yet on the site.
            </li>
            <li style={{ marginBottom: '0.45rem' }}>
              <ImageIcon style={{ verticalAlign: 'middle', color: brand.terracottaDeep }} /> When
              you add a photo, drag the round focus point onto the most important part (usually a
              face) so it stays in frame on phones.
            </li>
            <li>
              <EditIcon style={{ verticalAlign: 'middle', color: brand.terracottaDeep }} /> The
              “SEO” fields control how a page looks in Google and when shared — they don’t appear
              on the page itself.
            </li>
          </ul>
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            color: brand.earthBrown,
            marginTop: '2rem',
          }}
        >
          Place of rest, place of restoration.
        </p>
      </div>
    </div>
  );
}

export default WelcomePane;
