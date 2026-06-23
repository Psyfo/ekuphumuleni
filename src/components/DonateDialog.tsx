'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HeartIcon,
  XMarkIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  BuildingLibraryIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import type { DonateContent } from './donate-content';

type Rail = 'diaspora' | 'local';
/** Steps of the diaspora (card) rail: choose an amount, confirm it, then the
 *  provider hand-off. The local rail is informational and has no steps. */
type Step = 'select' | 'review' | 'handoff';
type Frequency = 'once' | 'monthly';

const PAPER = '#FBF8F2';
const COCOA = 'var(--color-deep-cocoa)';
const TERRACOTTA = 'var(--color-terracotta-deep)';
const EARTH = 'var(--color-earth-brown)';
const BORDER = 'rgba(166, 138, 100, 0.3)';

/** A preset like "$50" carries a digit; the "Other" button does not. */
const isOtherLabel = (label: string) => !/\d/.test(label);

/**
 * Two-rail donate dialog (Diaspora / In Zimbabwe). Mounted only while open (by
 * the parent), so it starts on the primary rail each time with no reset effect.
 *
 * The diaspora rail is a real checkout flow: select an amount (presets or a
 * custom "Other" value) and frequency → review → Stripe Checkout (redirect).
 * If checkout isn't configured in this environment, it falls back to the
 * hand-off screen with an "arrange by email" option.
 *
 * Accessible: portal, focus trap, Escape to close, scroll lock, focus restore.
 */
export default function DonateDialog({
  onClose,
  content,
}: {
  onClose: () => void;
  content: DonateContent;
}) {
  const amounts = content.diaspora.amounts;

  /** Currency symbol from the first preset (e.g. "$"), used for the custom field. */
  const symbol = useMemo(
    () => amounts.map((a) => a.match(/^[^\d.\s]+/)?.[0]).find(Boolean) ?? '$',
    [amounts],
  );
  const otherIndex = useMemo(() => amounts.findIndex(isOtherLabel), [amounts]);
  /** Default to a friendly mid preset (commonly $50) so "Continue" is live at once. */
  const defaultIndex = useMemo(() => {
    const numeric = amounts.map((a, i) => (isOtherLabel(a) ? -1 : i)).filter((i) => i >= 0);
    return numeric[1] ?? numeric[0] ?? 0;
  }, [amounts]);

  const [shown, setShown] = useState(false);
  const [rail, setRail] = useState<Rail>('diaspora');
  const [step, setStep] = useState<Step>('select');
  const [amountIndex, setAmountIndex] = useState(defaultIndex);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('once');
  const [submitting, setSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const titleId = 'donate-dialog-title';

  const isOther = otherIndex !== -1 && amountIndex === otherIndex;
  const customNumber = Number(customAmount);
  const customValid = customAmount.trim() !== '' && Number.isFinite(customNumber) && customNumber > 0;
  const selectedPreset = !isOther ? amounts[amountIndex] : null;
  const amountLabel = isOther ? `${symbol}${customAmount}` : selectedPreset ?? '';
  const canContinue = isOther ? customValid : Boolean(selectedPreset);
  const freqSuffix = frequency === 'monthly' ? 'monthly' : 'one-time';
  /** Numeric value sent to Stripe (strips the currency symbol from presets). */
  const amountValue = isOther ? customNumber : Number((selectedPreset ?? '').replace(/[^\d.]/g, ''));

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

  // Focus the custom field as soon as "Other" is the active choice, so the
  // visitor can type an amount without an extra click.
  useEffect(() => {
    if (rail === 'diaspora' && step === 'select' && isOther) customRef.current?.focus();
  }, [rail, step, isOther]);

  if (typeof document === 'undefined') return null;

  const selectRail = (key: Rail) => {
    setRail(key);
    setStep('select');
  };

  const tabBtn = (key: Rail, label: string, Icon: typeof GlobeEuropeAfricaIcon) => {
    const active = rail === key;
    return (
      <button
        type='button'
        role='tab'
        aria-selected={active}
        onClick={() => selectRail(key)}
        className='flex flex-1 justify-center items-center gap-2 px-3 py-2 rounded-md font-semibold text-sm transition-colors duration-200'
        style={{ background: active ? TERRACOTTA : 'transparent', color: active ? '#fff' : COCOA }}
      >
        <Icon className='w-4 h-4' aria-hidden='true' />
        {label}
      </button>
    );
  };

  const freqBtn = (key: Frequency, label: string) => {
    const active = frequency === key;
    return (
      <button
        type='button'
        aria-pressed={active}
        onClick={() => setFrequency(key)}
        className='flex-1 px-3 py-1.5 rounded-md font-semibold text-[13px] transition-colors duration-200'
        style={{ background: active ? '#fff' : 'transparent', color: active ? TERRACOTTA : EARTH, boxShadow: active ? '0 1px 2px rgba(107,79,79,0.12)' : 'none' }}
      >
        {label}
      </button>
    );
  };

  const mailHref = `mailto:${content.diaspora.contactEmail}?subject=${encodeURIComponent(
    'Donation from the diaspora',
  )}`;

  const backLink = (to: Step, label: string) => (
    <button
      type='button'
      onClick={() => setStep(to)}
      className='inline-flex items-center gap-1 mb-3 font-semibold text-sm'
      style={{ color: EARTH, background: 'transparent', border: 'none', cursor: 'pointer' }}
    >
      <ArrowLeftIcon className='w-4 h-4' aria-hidden='true' />
      {label}
    </button>
  );

  /** Create a Stripe Checkout Session and redirect there. If checkout isn't
   *  configured in this environment (503), fall back to the hand-off screen. */
  const startCheckout = async () => {
    setSubmitting(true);
    setCheckoutError(null);
    try {
      const res = await fetch('/api/donate/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountValue, currency: 'usd', frequency }),
      });
      if (res.status === 503) {
        setStep('handoff');
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { url?: string };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setCheckoutError('We could not start secure checkout. Please try again, or email us.');
    } catch {
      setCheckoutError('Something went wrong. Please try again, or email us.');
    } finally {
      setSubmitting(false);
    }
  };

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
        <div className='flex items-center gap-3 mb-4 pr-6'>
          <span
            aria-hidden='true'
            className='flex flex-shrink-0 justify-center items-center rounded-[10px] w-10 h-10'
            style={{ background: 'rgba(176, 90, 60, 0.12)', color: TERRACOTTA }}
          >
            <HeartIcon className='w-6 h-6' />
          </span>
          <div className='min-w-0'>
            {/* Explicit size: the global h2 rule would otherwise force ~36px and
                wrap the title onto two lines inside this compact dialog. */}
            <h2
              id={titleId}
              className='font-serif font-bold'
              style={{ color: COCOA, fontSize: '1.25rem', lineHeight: 1.15 }}
            >
              {content.heading}
            </h2>
            <p className='text-sm' style={{ color: EARTH, fontSize: '0.875rem' }}>
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

        <div key={`${rail}-${step}`} className='donate-step'>
          {/* Diaspora rail — step 1: choose an amount */}
          {rail === 'diaspora' && step === 'select' && (
            <div role='tabpanel'>
              <div
                className='flex gap-1 mb-3 p-1 rounded-[10px]'
                role='group'
                aria-label='Giving frequency'
                style={{ background: 'var(--color-off-white)' }}
              >
                {freqBtn('once', 'One-time')}
                {freqBtn('monthly', 'Monthly')}
              </div>

              <div className='flex justify-between items-center mb-2'>
                <span className='font-semibold text-sm' style={{ color: COCOA }}>
                  {content.diaspora.helper}
                </span>
                <span className='text-xs' style={{ color: EARTH, fontSize: '0.75rem' }}>
                  {content.diaspora.currencies}
                </span>
              </div>

              <div
                className='gap-2 grid mb-3'
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(58px, 1fr))' }}
              >
                {amounts.map((value, i) => {
                  const selected = amountIndex === i;
                  return (
                    <button
                      key={value}
                      type='button'
                      aria-pressed={selected}
                      onClick={() => setAmountIndex(i)}
                      className='py-2 rounded-lg font-medium text-sm text-center transition-colors duration-200'
                      style={{
                        color: selected ? TERRACOTTA : COCOA,
                        border: selected
                          ? `1.5px solid ${TERRACOTTA}`
                          : '1px solid rgba(166, 138, 100, 0.4)',
                        background: selected ? 'rgba(176, 90, 60, 0.08)' : 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              {isOther && (
                <div className='mb-3'>
                  <label htmlFor='donate-custom' className='sr-only'>
                    Enter a custom amount
                  </label>
                  <div
                    className='flex items-center rounded-lg overflow-hidden'
                    style={{ border: `1.5px solid ${TERRACOTTA}`, background: '#fff' }}
                  >
                    <span className='pl-3 pr-1 font-semibold' style={{ color: EARTH }}>
                      {symbol}
                    </span>
                    <input
                      ref={customRef}
                      id='donate-custom'
                      type='text'
                      inputMode='decimal'
                      autoComplete='off'
                      placeholder='Enter an amount'
                      value={customAmount}
                      onChange={(e) => {
                        const cleaned = e.target.value.replace(/[^\d.]/g, '');
                        const parts = cleaned.split('.');
                        setCustomAmount(
                          parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : cleaned,
                        );
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && customValid) setStep('review');
                      }}
                      className='flex-1 bg-transparent py-2 pr-3 outline-none text-sm'
                      style={{ color: COCOA }}
                    />
                  </div>
                </div>
              )}

              <button
                type='button'
                disabled={!canContinue}
                onClick={() => setStep('review')}
                className='gap-2 w-full btn btn-primary'
              >
                Continue
                <ArrowRightIcon className='w-5 h-5' aria-hidden='true' />
              </button>
              <p className='mt-2 text-xs text-center' style={{ color: EARTH, fontSize: '0.75rem' }}>
                {content.diaspora.note}
              </p>
            </div>
          )}

          {/* Diaspora rail — step 2: review the gift */}
          {rail === 'diaspora' && step === 'review' && (
            <div role='tabpanel'>
              {backLink('select', 'Change amount')}
              <div
                className='mb-4 p-4 rounded-xl text-center'
                style={{ background: '#fff', border: '1px solid rgba(166, 138, 100, 0.25)' }}
              >
                <p
                  className='mb-1 font-semibold uppercase tracking-wide'
                  style={{ color: EARTH, fontSize: '0.7rem', letterSpacing: '0.06em' }}
                >
                  Your gift
                </p>
                <p
                  className='font-bold'
                  style={{
                    color: COCOA,
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    lineHeight: 1.1,
                  }}
                >
                  {amountLabel}
                </p>
                <p style={{ color: EARTH, fontSize: '0.875rem' }}>
                  {frequency === 'monthly' ? 'Given every month' : 'A one-time gift'}
                </p>
              </div>

              <div
                className='flex items-start gap-2 mb-4 p-3 rounded-xl'
                style={{ background: 'rgba(92, 122, 74, 0.08)' }}
              >
                <ShieldCheckIcon
                  className='flex-shrink-0 mt-0.5 w-5 h-5'
                  style={{ color: 'var(--color-success)' }}
                  aria-hidden='true'
                />
                <span style={{ color: COCOA, fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  Payment is handled by a secure, encrypted provider. Ekuphumuleni never sees your
                  card details.
                </span>
              </div>

              <button
                type='button'
                onClick={startCheckout}
                disabled={submitting}
                className='gap-2 w-full btn btn-primary'
              >
                <LockClosedIcon className='w-5 h-5' aria-hidden='true' />
                {submitting ? 'Redirecting to secure checkout…' : 'Proceed to secure payment'}
              </button>
              {checkoutError && (
                <p
                  className='mt-2 text-center'
                  style={{ color: 'var(--color-error)', fontSize: '0.8125rem' }}
                >
                  {checkoutError}{' '}
                  <a href={mailHref} style={{ color: TERRACOTTA, fontWeight: 600 }}>
                    Email us
                  </a>
                  .
                </p>
              )}
            </div>
          )}

          {/* Diaspora rail — step 3: provider hand-off (where checkout concludes) */}
          {rail === 'diaspora' && step === 'handoff' && (
            <div role='tabpanel' className='text-center'>
              <span
                aria-hidden='true'
                className='inline-flex justify-center items-center mb-3 rounded-full w-14 h-14'
                style={{ background: 'rgba(176, 90, 60, 0.12)', color: TERRACOTTA }}
              >
                <LockClosedIcon className='w-7 h-7' />
              </span>
              <h3 className='mb-1 font-serif font-bold' style={{ color: COCOA, fontSize: '1.25rem' }}>
                Secure checkout
              </h3>
              <p style={{ color: COCOA, fontSize: '0.9375rem', lineHeight: 1.6 }}>
                In production, this is where you would continue to our payment provider to complete
                your <strong style={{ color: TERRACOTTA }}>{amountLabel}</strong> {freqSuffix} gift.
                Card, Apple Pay and PayPal will be supported.
              </p>

              <div
                className='mt-4 p-3 rounded-xl text-left'
                style={{ background: 'var(--color-off-white)', border: '1px dashed rgba(166, 138, 100, 0.5)' }}
              >
                <p
                  className='font-semibold'
                  style={{ color: EARTH, fontSize: '0.8125rem', lineHeight: 1.5 }}
                >
                  Staging preview: no payment is taken. You are testing the donation flow end to
                  end. Card checkout goes live once a provider is confirmed.
                </p>
              </div>

              <div className='flex items-center gap-2 mt-4'>
                <button
                  type='button'
                  onClick={() => setStep('review')}
                  className='flex-1 btn btn-secondary'
                >
                  <ArrowLeftIcon className='w-4 h-4' aria-hidden='true' />
                  Back
                </button>
                <button type='button' onClick={onClose} className='flex-1 btn btn-primary'>
                  Done
                </button>
              </div>

              <p className='mt-3' style={{ color: EARTH, fontSize: '0.8125rem' }}>
                Prefer to arrange it personally?{' '}
                <a href={mailHref} style={{ color: TERRACOTTA, fontWeight: 600 }}>
                  Email us
                </a>
                .
              </p>
            </div>
          )}

          {/* Local rail — informational, no checkout steps */}
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

              <p className='mt-3 text-[13px] text-center' style={{ color: EARTH }}>
                After sending, keep your confirmation SMS or slip as your receipt. Thank you for
                supporting elders in Bulawayo.
              </p>
            </div>
          )}
        </div>

        {/* Reassurance footer — hidden on the hand-off screen, which has its own. */}
        {!(rail === 'diaspora' && step === 'handoff') && (
          <p
            className='mt-3 pt-3 text-center leading-relaxed'
            style={{
              color: EARTH,
              fontSize: '0.7rem',
              borderTop: '1px solid rgba(166, 138, 100, 0.2)',
            }}
          >
            {content.footerNote}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}
