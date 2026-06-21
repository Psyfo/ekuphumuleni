'use client';

import { AnimatePresence, m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Bars3Icon,
  ChevronDownIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import DonateButton from './DonateButton';

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Establishment', href: '/about' },
      { label: 'Mission & Core Values', href: '/about#mission-vision' },
    ],
  },
  {
    label: 'Team',
    children: [
      { label: 'Board', href: '/team' },
      { label: 'Administration', href: '/team#administration' },
      { label: 'Staff', href: '/team#staff' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Facilities',
    children: [
      { label: 'Overview', href: '/facilities' },
      { label: 'Sustainability', href: '/facilities#sustainability' },
    ],
  },
  { label: 'Donors', href: '/donors' },
];

const PHONE = { display: '+263 292 216 877', tel: '+263292216877' };

const baseOf = (href: string) => href.split('#')[0];

const slugOf = (label: string) => label.replace(/\s+/g, '-').toLowerCase();

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Elevate the navbar once the page scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // pages can load mid-scroll (anchor links, refresh)
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  // Close on route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close on hash navigation and browser back/forward
  useEffect(() => {
    const onHashOrPop = () => {
      setMobileOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener('hashchange', onHashOrPop);
    window.addEventListener('popstate', onHashOrPop);
    return () => {
      window.removeEventListener('hashchange', onHashOrPop);
      window.removeEventListener('popstate', onHashOrPop);
    };
  }, []);

  // While the drawer is open: lock body scroll, close on Escape,
  // and move focus into the drawer so keyboard users land in it
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const isActive = (href?: string): boolean =>
    !!href &&
    (href === '/' ? pathname === '/' : pathname.startsWith(baseOf(href)));

  // Only the hash-less child of a section marks as current — hash links
  // share the same pathname, so highlighting them all reads as a glitch
  const isChildActive = (href: string): boolean =>
    !href.includes('#') && pathname === href;

  const hasActiveChild = (item: NavItem): boolean =>
    !!item.children?.some((child) => pathname === baseOf(child.href));

  const openMobile = () => {
    // Pre-expand the section the visitor is already in
    const activeParent = NAV_ITEMS.find((item) => hasActiveChild(item));
    setOpenDropdown(activeParent?.label ?? null);
    setMobileOpen(true);
  };

  return (
    <header
      className={`top-0 z-50 sticky border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'bg-[var(--color-off-white)] shadow-md border-[var(--color-earth-brown)]/20'
          : // No backdrop-blur here: a filter on the header would make it the
            // containing block for the fixed drawer/backdrop below
            'bg-[var(--color-off-white)]/95 border-[var(--color-earth-brown)]/10'
      }`}
    >
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:top-2 focus:left-2 focus:z-[60] focus:absolute focus:bg-[var(--color-terracotta-deep)] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm focus:text-white no-underline'
      >
        Skip to content
      </a>

      <nav
        className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'
        aria-label='Primary'
      >
        <div className='flex justify-between items-center h-16 lg:h-20'>
          {/* Brand / Logo */}
          <Link
            href='/'
            className='group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 no-underline'
            aria-label='Ekuphumuleni Home'
            onClick={closeMobile}
          >
            <div className='relative'>
              <Image
                src='/images/brand/ekuphumuleni_logo.png'
                alt='Ekuphumuleni logo'
                width={40}
                height={40}
                priority
                className='w-10 h-10 object-contain'
              />
              <div className='-z-10 absolute inset-0 bg-[var(--color-muted-terracotta)]/20 opacity-0 group-hover:opacity-100 blur-xl rounded-full transition-opacity duration-300' />
            </div>
            <div className='flex flex-col'>
              <span className='font-serif font-bold text-[var(--color-deep-cocoa)] group-hover:text-[var(--color-terracotta-deep)] text-xl lg:text-2xl transition-colors duration-200'>
                Ekuphumuleni
              </span>
              <span className='hidden sm:block font-sans text-[var(--color-deep-cocoa)]/60 text-xs'>
                Geriatric Nursing Home
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className='hidden lg:flex items-center gap-1'>
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  active={hasActiveChild(item)}
                  isChildActive={isChildActive}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'relative inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-semibold no-underline transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2',
                    isActive(item.href)
                      ? 'text-[var(--color-terracotta-deep)]'
                      : 'text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] hover:bg-[var(--color-warm-beige)]/60',
                  ].join(' ')}
                >
                  {item.label}
                  {isActive(item.href) && <ActiveUnderline />}
                </Link>
              )
            )}
            <div className='flex items-center gap-2 ml-3'>
              <Link href='/contact' className='btn btn-secondary btn-sm'>
                Get in Touch
              </Link>
              <DonateButton variant='primary' small />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type='button'
            className='lg:hidden hover:bg-[var(--color-warm-beige)]/60 p-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] transition-colors duration-200'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-controls='primary-mobile-nav'
            onClick={() => (mobileOpen ? closeMobile() : openMobile())}
          >
            {mobileOpen ? (
              <XMarkIcon className='w-7 h-7' />
            ) : (
              <Bars3Icon className='w-7 h-7' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop starts below the header so the brand and close
                button stay visible and tappable above it */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='lg:hidden top-16 inset-x-0 bottom-0 z-40 fixed bg-[var(--color-deep-cocoa)]/40 backdrop-blur-[2px]'
              onClick={closeMobile}
              aria-hidden='true'
            />

            <m.aside
              ref={drawerRef}
              id='primary-mobile-nav'
              tabIndex={-1}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className='lg:hidden top-16 right-0 bottom-0 z-50 fixed bg-[var(--color-off-white)] shadow-2xl px-4 sm:px-6 pt-4 pb-8 border-[var(--color-earth-brown)]/15 border-l w-full sm:w-80 overflow-y-auto focus:outline-none'
            >
              <ul className='space-y-1'>
                {NAV_ITEMS.map((item, index) =>
                  item.children ? (
                    <m.li
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                    >
                      <button
                        type='button'
                        className={[
                          'flex justify-between items-center px-3 rounded-lg w-full min-h-11 font-semibold transition-colors duration-200',
                          'focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2',
                          hasActiveChild(item)
                            ? 'bg-[var(--color-warm-beige)] text-[var(--color-terracotta-deep)]'
                            : 'text-[var(--color-deep-cocoa)] hover:bg-[var(--color-warm-beige)]/60 hover:text-[var(--color-terracotta-deep)]',
                        ].join(' ')}
                        aria-expanded={
                          openDropdown === item.label ? 'true' : 'false'
                        }
                        aria-controls={`mobile-submenu-${slugOf(item.label)}`}
                        onClick={() =>
                          setOpenDropdown((cur) =>
                            cur === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-300 ${
                            openDropdown === item.label
                              ? 'rotate-180 text-[var(--color-muted-terracotta)]'
                              : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openDropdown === item.label && (
                          <m.ul
                            id={`mobile-submenu-${slugOf(item.label)}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className='space-y-0.5 mt-1 ml-4 pl-3 border-[var(--color-earth-brown)]/20 border-l overflow-hidden'
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={
                                    isChildActive(child.href)
                                      ? 'page'
                                      : undefined
                                  }
                                  className={`flex items-center gap-2.5 px-3 rounded-lg min-h-11 text-sm no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 ${
                                    isChildActive(child.href)
                                      ? 'font-semibold text-[var(--color-terracotta-deep)]'
                                      : 'text-[var(--color-deep-cocoa)] hover:bg-[var(--color-warm-beige)]/60 hover:text-[var(--color-terracotta-deep)]'
                                  }`}
                                  onClick={closeMobile}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      isChildActive(child.href)
                                        ? 'bg-[var(--color-muted-terracotta)]'
                                        : 'bg-[var(--color-earth-brown)]/30'
                                    }`}
                                  />
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </m.ul>
                        )}
                      </AnimatePresence>
                    </m.li>
                  ) : (
                    <m.li
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.href!}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={[
                          'flex items-center px-3 rounded-lg min-h-11 font-semibold no-underline transition-colors duration-200',
                          'focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2',
                          isActive(item.href)
                            ? 'bg-[var(--color-warm-beige)] text-[var(--color-terracotta-deep)]'
                            : 'text-[var(--color-deep-cocoa)] hover:bg-[var(--color-warm-beige)]/60 hover:text-[var(--color-terracotta-deep)]',
                        ].join(' ')}
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    </m.li>
                  )
                )}
              </ul>

              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: NAV_ITEMS.length * 0.04,
                  duration: 0.25,
                }}
                className='space-y-3 mt-6 pt-6 border-[var(--color-earth-brown)]/15 border-t'
              >
                <DonateButton
                  variant='primary'
                  fullWidth
                  onBeforeOpen={closeMobile}
                />
                <Link
                  href='/contact'
                  className='w-full btn btn-secondary'
                  onClick={closeMobile}
                >
                  Get in Touch
                </Link>
                <a
                  href={`tel:${PHONE.tel}`}
                  className='flex justify-center items-center gap-2 rounded-lg min-h-11 font-semibold text-[var(--color-terracotta-deep)] text-sm no-underline focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2'
                >
                  <PhoneIcon className='w-5 h-5' />
                  Call {PHONE.display}
                </a>
              </m.div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Animated underline shared across nav items via layoutId */
function ActiveUnderline() {
  return (
    <m.span
      layoutId='nav-active-underline'
      className='right-3.5 bottom-1 left-3.5 absolute bg-[var(--color-muted-terracotta)] rounded-full h-0.5'
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
    />
  );
}

function DesktopDropdown({
  item,
  active,
  isChildActive,
}: {
  item: NavItem;
  active: boolean;
  isChildActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Hover-to-open only on devices that actually hover; on touch screens the
  // emulated mouseenter would open the menu and the follow-up click would
  // immediately toggle it shut again
  const [canHover] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );

  const baseId = slugOf(item.label);
  const buttonId = `nav-dd-btn-${baseId}`;
  const menuId = `nav-dd-menu-${baseId}`;

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openNow = () => {
    cancelClose();
    setOpen(true);
  };
  // Grace period so the pointer can cross the gap to the panel
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  function focusFirstItem() {
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
  }
  function focusLastItem() {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a');
    if (items && items.length) items[items.length - 1].focus();
  }
  function moveFocus(delta: number) {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a');
    if (!items || !items.length) return;
    const arr = Array.from(items);
    const idx = arr.findIndex((el) => el === document.activeElement);
    const next = idx === -1 ? 0 : (idx + delta + arr.length) % arr.length;
    arr[next].focus();
  }

  return (
    <div
      className='relative'
      ref={ref}
      onMouseEnter={canHover ? openNow : undefined}
      onMouseLeave={canHover ? scheduleClose : undefined}
      onBlur={(e) => {
        const related = e.relatedTarget as Node | null;
        if (ref.current && related && ref.current.contains(related)) return;
        setOpen(false);
      }}
    >
      <button
        id={buttonId}
        type='button'
        className={[
          'relative inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2',
          active
            ? 'text-[var(--color-terracotta-deep)]'
            : 'text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] hover:bg-[var(--color-warm-beige)]/60',
        ].join(' ')}
        aria-controls={menuId}
        aria-expanded={open ? 'true' : 'false'}
        onClick={(e) => {
          // Mouse users open via hover, so a click on the already-open
          // button shouldn't snap it shut; touch (canHover false) and
          // keyboard (detail 0) clicks are deliberate toggles
          if (!open) openNow();
          else if (!canHover || e.detail === 0) setOpen(false);
        }}
        onKeyDown={(e) => {
          switch (e.key) {
            case 'ArrowDown':
              e.preventDefault();
              if (!open) setOpen(true);
              requestAnimationFrame(focusFirstItem);
              break;
            case 'ArrowUp':
              e.preventDefault();
              if (!open) setOpen(true);
              requestAnimationFrame(focusLastItem);
              break;
            case 'Escape':
              if (open) {
                e.preventDefault();
                setOpen(false);
                (e.currentTarget as HTMLButtonElement).focus();
              }
              break;
            default:
              break;
          }
        }}
      >
        {item.label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? 'rotate-180 text-[var(--color-muted-terracotta)]' : ''
          }`}
        />
        {active && <ActiveUnderline />}
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            ref={menuRef}
            id={menuId}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className='top-full left-0 absolute bg-white mt-2 border border-[var(--color-earth-brown)]/15 rounded-xl w-60 overflow-hidden'
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(107, 79, 79, 0.12), 0 10px 10px -5px rgba(107, 79, 79, 0.04)',
            }}
            aria-labelledby={buttonId}
            onKeyDown={(e) => {
              switch (e.key) {
                case 'ArrowDown':
                  e.preventDefault();
                  moveFocus(1);
                  break;
                case 'ArrowUp':
                  e.preventDefault();
                  moveFocus(-1);
                  break;
                case 'Home':
                  e.preventDefault();
                  focusFirstItem();
                  break;
                case 'End':
                  e.preventDefault();
                  focusLastItem();
                  break;
                case 'Escape':
                  e.preventDefault();
                  setOpen(false);
                  document.getElementById(buttonId)?.focus();
                  break;
                default:
                  break;
              }
            }}
          >
            <div className='bg-gradient-to-r from-[var(--color-muted-terracotta)]/30 via-[var(--color-earth-brown)]/15 to-[var(--color-muted-terracotta)]/30 w-full h-0.5' />

            <ul className='py-1.5'>
              {item.children!.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    aria-current={isChildActive(child.href) ? 'page' : undefined}
                    className={`flex items-center gap-2.5 px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-muted-terracotta)] text-sm no-underline transition-colors duration-200 ${
                      isChildActive(child.href)
                        ? 'font-semibold text-[var(--color-terracotta-deep)]'
                        : 'text-[var(--color-deep-cocoa)] hover:text-[var(--color-terracotta-deep)] hover:bg-[var(--color-warm-beige)]/40'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isChildActive(child.href)
                          ? 'bg-[var(--color-muted-terracotta)]'
                          : 'bg-[var(--color-earth-brown)]/30'
                      }`}
                    />
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
