'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HeartIcon,
  XMarkIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

import type { DonateContent } from './donate-content';

type Rail = 'diaspora' | 'local';

const PAPER = '#FBF8F2';
const COCOA = 'var(--color-deep-cocoa)';
const TERRACOTTA = 'var(--color-terracotta-deep)';
const EARTH = 'var(--color-earth-brown)';
const BORDER = 'rgba(166, 138, 100, 0.3)';

/**
 * Two-rail donate dialog (Diaspora / In Zimbabwe). Mounted only while open (by
 * the parent), so it starts on the primary rail each time with no reset effect.
 * Accessible: portal, focus trap, Escape to close, scroll lock, focus restore.
 */
export default function DonateDialog({
  onClose,
  content,
}: {
  onClose: () => void;
  content: DonateContent;
}) {
  const [shown, setShown] = useState(false);
  const [rail, setRail] = useState<Rail>('diaspora');
  const [amount, setAmount] = useState(1);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = 'donate-dialog-title';

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, summary, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown, true);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  const tabBtn = (key: Rail, label: string, Icon: typeof GlobeEuropeAfricaIcon) => {
    const active = rail === key;
    return (
      <button
        type='button'
        role='tab'
        aria-selected={active}
        onClick={() => setRail(key)}
        className='flex flex-1 justify-center items-center gap-2 px-3 py-2 rounded-md font-semibold text-sm transition-colors duration-200'
        style={{
          background: active ? TERRACOTTA : 'transparent',
          color: active ? '#fff' : COCOA,
        }}
      >
        <Icon className='w-4 h-4' aria-hidden='true' />
        {label}
      </button>
    );
  };

  const mailHref = `mailto:${content.diaspora.contactEmail}?subject=${encodeURIComponent(
    'Donation from the diaspora',
  )}`;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(44, 33, 30, 0.55)',
        opacity: shown ? 1 : 0,
        transition: 'opacity 180ms ease-out',
      }}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(440px, 100%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: PAPER,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: '1.25rem',
          position: 'relative',
          opacity: shown ? 1 : 0,
          transform: shown ? 'scale(1)' : 'scale(0.98)',
          transition: 'opacity 180ms ease-out, transform 180ms ease-out',
        }}
      >
        <button
          ref={closeRef}
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='top-3 right-3 absolute flex justify-center items-center rounded-md w-8 h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
          style={{ color: COCOA, background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <XMarkIcon className='w-5 h-5' />
        </button>

        {/* Header */}
        <div className='flex items-center gap-3 mb-4'>
          <span
            aria-hidden='true'
            className='flex flex-shrink-0 justify-center items-center rounded-[10px] w-10 h-10'
            style={{ background: 'rgba(176, 90, 60, 0.12)', color: TERRACOTTA }}
          >
            <HeartIcon className='w-6 h-6' />
          </span>
          <div>
            <h2
              id={titleId}
              className='font-serif font-bold text-xl leading-tight'
              style={{ color: COCOA }}
            >
              {content.heading}
            </h2>
            <p className='text-sm' style={{ color: EARTH }}>
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Rail toggle */}
        <div
          role='tablist'
          aria-label='Where are you giving from'
          className='flex gap-1 mb-4 p-1 rounded-[10px]'
          style={{ background: 'var(--color-off-white)' }}
        >
          {tabBtn('diaspora', content.diaspora.label, GlobeEuropeAfricaIcon)}
          {tabBtn('local', content.local.label, MapPinIcon)}
        </div>

        {/* Diaspora rail */}
        {rail === 'diaspora' && (
          <div role='tabpanel'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold text-sm' style={{ color: COCOA }}>
                {content.diaspora.helper}
              </span>
              <span className='text-xs' style={{ color: EARTH }}>
                {content.diaspora.currencies}
              </span>
            </div>
            <div
              className='gap-2 grid mb-3'
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(58px, 1fr))' }}
            >
              {content.diaspora.amounts.map((value, i) => {
                const selected = amount === i;
                return (
                  <button
                    key={value}
                    type='button'
                    aria-pressed={selected}
                    onClick={() => setAmount(i)}
                    className='py-2 rounded-lg font-medium text-sm text-center'
                    style={{
                      color: selected ? TERRACOTTA : COCOA,
                      border: selected
                        ? `1.5px solid ${TERRACOTTA}`
                        : '1px solid rgba(166, 138, 100, 0.4)',
                      background: 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
            <a href={mailHref} className='gap-2 w-full btn btn-primary'>
              <CreditCardIcon className='w-5 h-5' aria-hidden='true' />
              {content.diaspora.ctaLabel}
            </a>
            <p className='mt-2 text-xs text-center' style={{ color: EARTH }}>
              {content.diaspora.note}
            </p>
          </div>
        )}

        {/* Local rail */}
        {rail === 'local' && (
          <div role='tabpanel'>
            <div
              className='mb-2 p-3 rounded-xl'
              style={{ background: '#fff', border: '1px solid rgba(166, 138, 100, 0.25)' }}
            >
              <div
                className='flex items-center gap-2 mb-1.5 font-semibold text-sm'
                style={{ color: COCOA }}
              >
                <DevicePhoneMobileIcon
                  className='w-5 h-5'
                  style={{ color: TERRACOTTA }}
                  aria-hidden='true'
                />
                EcoCash
              </div>
              <dl className='text-[13px]' style={{ color: '#2C211E' }}>
                {content.local.ecocash.merchantCode && (
                  <div className='flex justify-between'>
                    <dt style={{ color: EARTH }}>Merchant code</dt>
                    <dd>{content.local.ecocash.merchantCode}</dd>
                  </div>
                )}
                <div className='flex justify-between'>
                  <dt style={{ color: EARTH }}>Dial</dt>
                  <dd>{content.local.ecocash.dialString}</dd>
                </div>
              </dl>
            </div>

            <details
              className='p-3 rounded-xl'
              style={{ background: '#fff', border: '1px solid rgba(166, 138, 100, 0.25)' }}
            >
              <summary
                className='flex items-center gap-2 font-semibold text-sm cursor-pointer'
                style={{ color: COCOA }}
              >
                <BuildingLibraryIcon
                  className='w-5 h-5'
                  style={{ color: TERRACOTTA }}
                  aria-hidden='true'
                />
                Bank transfer details
              </summary>
              <dl className='mt-2 text-[13px]' style={{ color: '#2C211E' }}>
                <div className='flex justify-between'>
                  <dt style={{ color: EARTH }}>Bank</dt>
                  <dd>{content.local.bank.name}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt style={{ color: EARTH }}>Account</dt>
                  <dd>{content.local.bank.accountName}</dd>
                </div>
                {content.local.bank.accountNumber && (
                  <div className='flex justify-between'>
                    <dt style={{ color: EARTH }}>Number</dt>
                    <dd>{content.local.bank.accountNumber}</dd>
                  </div>
                )}
                {content.local.bank.branch && (
                  <div className='flex justify-between'>
                    <dt style={{ color: EARTH }}>Branch</dt>
                    <dd>{content.local.bank.branch}</dd>
                  </div>
                )}
              </dl>
            </details>
          </div>
        )}

        <p
          className='mt-3 pt-3 text-[11.5px] text-center leading-relaxed'
          style={{ color: EARTH, borderTop: '1px solid rgba(166, 138, 100, 0.2)' }}
        >
          {content.footerNote}
        </p>
      </div>
    </div>,
    document.body,
  );
}
