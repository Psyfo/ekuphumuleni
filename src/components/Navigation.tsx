/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

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
      { label: 'Facilities', href: '/facilities' },
      { label: 'Sustainability', href: '/facilities#sustainability' },
    ],
  },
  { label: 'Donors', href: '/donors' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll for navbar background enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  // Close on route changes
  useEffect(() => {
    closeMobile();
  }, [pathname]);

  // Close on hash navigation and browser back/forward
  useEffect(() => {
    const onHashOrPop = () => closeMobile();
    window.addEventListener('hashchange', onHashOrPop);
    window.addEventListener('popstate', onHashOrPop);
    return () => {
      window.removeEventListener('hashchange', onHashOrPop);
      window.removeEventListener('popstate', onHashOrPop);
    };
  }, []);

  // Click outside to close mobile drawer
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!mobileRef.current) return;
      if (!mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [mobileOpen]);

  const linkBase =
    'relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200';
  const linkColor =
    'text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2';

  const isActive = (href?: string): boolean =>
    !!href &&
    (href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]));

  return (
    <header
      className={`top-0 z-50 sticky transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-off-white)] shadow-md border-b border-[var(--color-earth-brown)]/20'
          : 'bg-[var(--color-off-white)]/95 backdrop-blur-sm border-b border-[var(--color-earth-brown)]/10'
      }`}
    >
      {/* Decorative gradient bar */}
      <div className='top-0 absolute bg-gradient-to-r from-[var(--color-muted-terracotta)] via-[var(--color-earth-brown)] to-[var(--color-muted-terracotta)] opacity-0 group-hover:opacity-100 w-full h-1 transition-opacity' />

      <nav
        className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'
        aria-label='Primary'
      >
        <div className='flex justify-between items-center h-16 lg:h-20'>
          {/* Brand / Logo */}
          <Link
            href='/'
            className='group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2'
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
                className='w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200'
              />
              {/* Subtle glow effect on hover */}
              <div className='-z-10 absolute inset-0 bg-[var(--color-muted-terracotta)]/20 opacity-0 group-hover:opacity-100 blur-xl rounded-full transition-opacity duration-300' />
            </div>
            <div className='flex flex-col'>
              <span className='font-serif font-bold text-[var(--color-earth-brown)] group-hover:text-[var(--color-muted-terracotta)] text-xl lg:text-2xl transition-colors duration-200'>
                Ekuphumuleni
              </span>
              <span className='hidden sm:block font-sans text-[var(--color-deep-cocoa)]/60 text-xs'>
                Geriatric Nursing Home
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className='hidden lg:flex items-center gap-2'>
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  linkBase={linkBase}
                  linkColor={linkColor}
                  isActive={isActive}
                />
              ) : (
                <div
                  key={item.label}
                  className={[
                    'transition-all duration-200',
                    isActive(item.href)
                      ? 'bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-sm'
                      : '',
                  ].join(' ')}
                >
                  <Link
                    href={item.href!}
                    className={[
                      'relative px-4 py-2.5 text-sm font-semibold transition-all duration-200 group inline-flex items-center',
                      '!text-[var(--color-earth-brown)] hover:!text-[var(--color-muted-terracotta)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2',
                      isActive(item.href)
                        ? ''
                        : 'hover:bg-[var(--color-warm-beige)]/50',
                    ].join(' ')}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId='activeTab'
                        className='bottom-0 left-0 absolute bg-[var(--color-muted-terracotta)] w-full h-0.5'
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </div>
              )
            )}
            <Link
              href='/contact'
              className='group relative bg-gradient-to-r from-[var(--color-muted-terracotta)] hover:from-[#b56d54] to-[#b56d54] hover:to-[var(--color-muted-terracotta)] shadow-lg hover:shadow-xl ml-4 px-5 py-2.5 rounded-lg overflow-hidden font-bold !text-white transition-all duration-300'
            >
              {/* Button shine effect */}
              <div className='-top-1/2 -left-1/2 absolute bg-white/20 blur-xl w-1/2 h-[200%] skew-x-12 transition-transform group-hover:translate-x-full duration-700' />
              <span className='z-10 relative'>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type='button'
            className='group lg:hidden relative hover:bg-[var(--color-warm-beige)]/50 p-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 focus-visible:ring-offset-2 text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] transition-all duration-200'
            aria-label='Toggle menu'
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-controls='primary-mobile-nav'
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className='w-7 h-7 group-hover:rotate-90 transition-transform duration-300' />
            ) : (
              <Bars3Icon className='w-7 h-7 group-hover:scale-110 transition-transform duration-200' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='lg:hidden z-40 fixed inset-0 bg-[var(--color-deep-cocoa)]/50 backdrop-blur-sm'
              onClick={closeMobile}
              aria-hidden='true'
            />

            {/* Mobile menu drawer */}
            <motion.aside
              ref={mobileRef}
              id='primary-mobile-nav'
              initial={{ x: prefersReducedMotion ? 0 : '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: prefersReducedMotion ? 0 : '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className='lg:hidden top-16 lg:top-20 right-0 z-50 fixed bg-gradient-to-br from-[var(--color-off-white)] to-[var(--color-warm-beige)] shadow-2xl px-4 sm:px-6 pt-6 pb-8 border-[var(--color-earth-brown)]/20 border-l rounded-tl-3xl w-full sm:w-80 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-y-auto'
            >
              {/* Decorative elements */}
              <div className='top-0 right-0 absolute bg-[var(--color-muted-terracotta)]/10 blur-3xl rounded-full w-48 h-48 pointer-events-none' />
              <div className='bottom-0 left-0 absolute bg-[var(--color-earth-brown)]/5 blur-3xl rounded-full w-48 h-48 pointer-events-none' />

              <div className='z-10 relative'>
                <ul className='space-y-2'>
                  {NAV_ITEMS.map((item, index) =>
                    item.children ? (
                      <motion.li
                        key={item.label}
                        initial={{
                          opacity: 0,
                          x: prefersReducedMotion ? 0 : 20,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className='pb-3 border-[var(--color-earth-brown)]/10 border-b last:border-b-0'
                      >
                        <div
                          className={[
                            'transition-all duration-200',
                            item.children?.some((child) => isActive(child.href))
                              ? 'bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-sm'
                              : '',
                          ].join(' ')}
                        >
                          <button
                            type='button'
                            className={[
                              'relative group flex justify-between items-center px-3 py-2.5 focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 w-full font-semibold transition-all duration-200',
                              '!text-[var(--color-earth-brown)] hover:!text-[var(--color-muted-terracotta)]',
                              item.children?.some((child) =>
                                isActive(child.href)
                              )
                                ? ''
                                : 'hover:bg-white/50',
                            ].join(' ')}
                            aria-expanded={
                              openDropdown === item.label ? 'true' : 'false'
                            }
                            aria-controls={`mobile-submenu-${item.label
                              .replace(/\s+/g, '-')
                              .toLowerCase()}`}
                            onClick={() =>
                              setOpenDropdown((cur) =>
                                cur === item.label ? null : item.label
                              )
                            }
                          >
                            <span className='flex items-center gap-2'>
                              <span
                                className={`rounded-full transition-all duration-200 ${
                                  item.children?.some((child) =>
                                    isActive(child.href)
                                  )
                                    ? 'w-1.5 h-1.5 bg-[var(--color-muted-terracotta)]'
                                    : 'w-1.5 h-1.5 bg-[var(--color-muted-terracotta)]/20 group-hover:scale-110'
                                }`}
                              />
                              {item.label}
                            </span>
                            <ChevronDownIcon
                              className={`h-5 w-5 transition-all duration-300 ${
                                openDropdown === item.label
                                  ? 'rotate-180 text-[var(--color-muted-terracotta)]'
                                  : 'group-hover:text-[var(--color-muted-terracotta)]'
                              }`}
                            />
                            {/* Active indicator */}
                            {item.children?.some((child) =>
                              isActive(child.href)
                            ) && (
                              <div className='bottom-0 left-0 absolute bg-[var(--color-muted-terracotta)] w-full h-0.5' />
                            )}
                          </button>
                        </div>
                        <AnimatePresence initial={false}>
                          {openDropdown === item.label && (
                            <motion.ul
                              id={`mobile-submenu-${item.label
                                .replace(/\s+/g, '-')
                                .toLowerCase()}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                              }}
                              className='space-y-1 mt-2 ml-4 pl-4 border-[var(--color-earth-brown)]/20 border-l overflow-hidden'
                            >
                              {item.children.map((child) => (
                                <motion.li
                                  key={child.href}
                                  initial={{
                                    opacity: 0,
                                    x: prefersReducedMotion ? 0 : -10,
                                  }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link
                                    href={child.href}
                                    className={`group flex items-center gap-2 px-3 py-2 focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2 text-sm transition-all duration-200 ${
                                      isActive(child.href)
                                        ? '!text-[var(--color-muted-terracotta)] font-semibold'
                                        : 'hover:bg-white/70 !text-[var(--color-deep-cocoa)] hover:!text-[var(--color-muted-terracotta)]'
                                    }`}
                                    onClick={closeMobile}
                                  >
                                    <span
                                      className={`rounded-full transition-all duration-200 ${
                                        isActive(child.href)
                                          ? 'w-1.5 h-1.5 bg-[var(--color-muted-terracotta)]'
                                          : 'w-1 h-1 bg-[var(--color-muted-terracotta)] group-hover:w-1.5 group-hover:h-1.5'
                                      }`}
                                    />
                                    {child.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ) : (
                      <motion.li
                        key={item.label}
                        initial={{
                          opacity: 0,
                          x: prefersReducedMotion ? 0 : 20,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <div
                          className={[
                            'transition-all duration-200',
                            isActive(item.href)
                              ? 'bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-sm'
                              : '',
                          ].join(' ')}
                        >
                          <Link
                            href={item.href!}
                            className={[
                              'relative group flex items-center gap-2 px-3 py-2.5 font-semibold transition-all duration-200',
                              '!text-[var(--color-earth-brown)] hover:!text-[var(--color-muted-terracotta)]',
                              'focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-2',
                              isActive(item.href) ? '' : 'hover:bg-white/50',
                            ].join(' ')}
                            onClick={closeMobile}
                          >
                            <span
                              className={`rounded-full transition-all duration-200 ${
                                isActive(item.href)
                                  ? 'w-1.5 h-1.5 bg-[var(--color-muted-terracotta)]'
                                  : 'w-1 h-1 bg-[var(--color-muted-terracotta)]/20 group-hover:bg-[var(--color-muted-terracotta)] group-hover:w-1.5 group-hover:h-1.5'
                              }`}
                            />
                            {item.label}
                            {/* Active indicator */}
                            {isActive(item.href) && (
                              <div className='bottom-0 left-0 absolute bg-[var(--color-muted-terracotta)] w-full h-0.5' />
                            )}
                          </Link>
                        </div>
                      </motion.li>
                    )
                  )}
                  <motion.li
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: NAV_ITEMS.length * 0.05,
                      duration: 0.3,
                    }}
                    className='pt-4'
                  >
                    <Link
                      href='/contact'
                      className='group relative flex justify-center items-center gap-2 bg-gradient-to-r from-[var(--color-muted-terracotta)] hover:from-[#b56d54] to-[#b56d54] hover:to-[var(--color-muted-terracotta)] shadow-lg hover:shadow-xl px-5 py-3.5 rounded-lg w-full overflow-hidden font-bold !text-white transition-all duration-300'
                      onClick={closeMobile}
                    >
                      {/* Button shine effect */}
                      <div className='-top-1/2 -left-1/2 absolute bg-white/20 blur-xl w-1/2 h-[200%] skew-x-12 transition-transform group-hover:translate-x-full duration-700' />
                      <span className='z-10 relative'>Get in Touch</span>
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopDropdown({
  item,
  linkBase,
  linkColor,
  isActive,
}: {
  item: NavItem;
  linkBase: string;
  linkColor: string;
  isActive: (href?: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const baseId = item.label.toLowerCase().replace(/\s+/g, '-');
  const buttonId = `nav-dd-btn-${baseId}`;
  const menuId = `nav-dd-menu-${baseId}`;

  // Check if any child is active
  const hasActiveChild =
    item.children?.some((child) => isActive(child.href)) || false;

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  function focusFirstItem() {
    const first = menuRef.current?.querySelector<HTMLAnchorElement>(
      'a, [role="menuitem"]'
    );
    first?.focus();
  }
  function focusLastItem() {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>(
      'a, [role="menuitem"]'
    );
    if (items && items.length) items[items.length - 1].focus();
  }
  function moveFocus(delta: number) {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>(
      'a, [role="menuitem"]'
    );
    if (!items || !items.length) return;
    const arr = Array.from(items);
    const idx = arr.findIndex((el) => el === document.activeElement);
    const next = idx === -1 ? 0 : (idx + delta + arr.length) % arr.length;
    arr[next].focus();
  }

  return (
    <div
      className={[
        'relative transition-all duration-200',
        hasActiveChild
          ? 'bg-gradient-to-br from-[var(--color-warm-beige)] to-[var(--color-soft-sand)] shadow-sm'
          : '',
      ].join(' ')}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        id={buttonId}
        type='button'
        className={[
          'relative px-4 py-2.5 text-sm font-semibold transition-all duration-200 group inline-flex items-center gap-1.5',
          'text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2',
          hasActiveChild ? '' : 'hover:bg-[var(--color-warm-beige)]/50',
        ].join(' ')}
        aria-haspopup='menu'
        aria-controls={menuId}
        aria-expanded={open ? 'true' : 'false'}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          const related = e.relatedTarget as Node | null;
          if (ref.current && related && ref.current.contains(related)) return;
          setOpen(false);
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
          className={`h-4 w-4 transition-all duration-300 ${
            open
              ? 'rotate-180 text-[var(--color-muted-terracotta)]'
              : 'group-hover:text-[var(--color-muted-terracotta)]'
          }`}
        />
        {/* Active indicator */}
        {hasActiveChild && (
          <motion.div
            layoutId='activeTab'
            className='bottom-0 left-0 absolute bg-[var(--color-muted-terracotta)] w-full h-0.5'
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id={menuId}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 8,
              scale: prefersReducedMotion ? 1 : 0.96,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 8,
              scale: prefersReducedMotion ? 1 : 0.96,
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1], // Custom easing for smooth feel
            }}
            className='left-0 absolute bg-white shadow-xl mt-3 border border-[var(--color-earth-brown)]/15 w-72 overflow-hidden'
            style={{
              boxShadow:
                '0 10px 40px -10px rgba(107, 79, 79, 0.15), 0 0 0 1px rgba(166, 138, 100, 0.1)',
            }}
            role='menu'
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
            {/* Decorative gradient top */}
            <div className='bg-gradient-to-r from-[var(--color-muted-terracotta)]/20 via-[var(--color-earth-brown)]/10 to-[var(--color-muted-terracotta)]/20 w-full h-1' />

            <ul>
              {item.children!.map((child, index) => (
                <motion.li
                  key={child.href}
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : -10,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={child.href}
                    className={`group flex items-center gap-3 px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-muted-terracotta)] text-sm transition-all duration-200 ${
                      isActive(child.href)
                        ? 'bg-gradient-to-r from-[var(--color-warm-beige)] to-transparent text-[var(--color-muted-terracotta)] font-semibold'
                        : 'text-[var(--color-deep-cocoa)] hover:text-[var(--color-muted-terracotta)] hover:bg-[var(--color-warm-beige)]/30'
                    }`}
                    role='menuitem'
                  >
                    <span
                      className={`rounded-full transition-all duration-200 ${
                        isActive(child.href)
                          ? 'w-1.5 h-1.5 bg-[var(--color-muted-terracotta)]'
                          : 'w-1 h-1 bg-[var(--color-earth-brown)]/30 group-hover:bg-[var(--color-muted-terracotta)] group-hover:w-1.5 group-hover:h-1.5'
                      }`}
                    />
                    {child.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
