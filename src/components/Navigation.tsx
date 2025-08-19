'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
      { label: 'Establishment', href: '/about#establishment' },
      { label: 'Mission & Core Values', href: '/about#mission-vision' },
    ],
  },
  {
    label: 'Team',
    children: [
      { label: 'Board', href: '/team#board' },
      { label: 'Administration', href: '/team#administration' },
      { label: 'Staff', href: '/team#staff' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Nursing Care', href: '/services#nursing-care' },
      { label: 'Rehabilitation', href: '/services#rehabilitation' },
      { label: 'Sustainability', href: '/services#sustainability' },
      { label: 'Facilities', href: '/services#facilities' },
    ],
  },
  { label: 'Donors', href: '/donors' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
    'px-3 py-2 rounded-md text-sm font-semibold transition-colors';
  const linkColor =
    'text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]';

  const isActive = (href?: string) =>
    href &&
    (href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]));

  return (
    <header className='sticky top-0 z-50 bg-[var(--color-off-white)]/95 backdrop-blur border-b border-[var(--color-earth-brown)]/30'>
      <nav className='max-w-7xl mx-auto px-4' aria-label='Primary'>
        <div className='flex h-16 items-center justify-between'>
          {/* Brand / Logo */}
          <Link
            href='/'
            className='flex items-center gap-3'
            aria-label='Ekuphumuleni Home'
          >
            <Image
              src='/images/brand/ekuphumuleni_logo.png' // or '/images/logo.svg'
              alt='Ekuphumuleni logo'
              width={32}
              height={32}
              priority
              className='h-8 w-8 object-contain'
            />
            <span className='text-xl font-semibold font-serif text-[var(--color-earth-brown)]'>
              Ekuphumuleni
            </span>
          </Link>

          {/* Desktop menu */}
          <div className='hidden lg:flex items-center gap-1'>
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  linkBase={linkBase}
                  linkColor={linkColor}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={[
                    linkBase,
                    linkColor,
                    isActive(item.href) ? 'bg-[var(--color-warm-beige)]' : '',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href='/contact'
              className='ml-2 px-4 py-2 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type='button'
            className='lg:hidden p-2 rounded-md text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
            aria-label='Toggle menu'
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-controls='primary-mobile-nav'
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            ref={mobileRef}
            id='primary-mobile-nav'
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='lg:hidden border-t border-[var(--color-earth-brown)]/20 bg-[var(--color-off-white)]'
          >
            <div className='px-4 py-4'>
              <ul className='space-y-1'>
                {NAV_ITEMS.map((item) =>
                  item.children ? (
                    <li
                      key={item.label}
                      className='border-b border-[var(--color-earth-brown)]/10 pb-2'
                    >
                      <button
                        type='button'
                        className='w-full flex items-center justify-between px-2 py-2 rounded-md text-left text-[var(--color-earth-brown)] font-semibold hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
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
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openDropdown === item.label && (
                          <motion.ul
                            id={`mobile-submenu-${item.label
                              .replace(/\s+/g, '-')
                              .toLowerCase()}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='pl-4 mt-1 space-y-1 overflow-hidden'
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className='block px-2 py-2 rounded-md text-[var(--color-deep-cocoa)] hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        className={[
                          'block px-2 py-2 rounded-md font-semibold',
                          'text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)]',
                          isActive(item.href)
                            ? 'bg-[var(--color-warm-beige)]'
                            : '',
                        ].join(' ')}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
                <li className='pt-2'>
                  <Link
                    href='/contact'
                    className='block text-center w-full px-4 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] !text-white hover:!text-white focus-visible:!text-white shadow hover:opacity-90'
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopDropdown({
  item,
  linkBase,
  linkColor,
}: {
  item: NavItem;
  linkBase: string;
  linkColor: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const baseId = item.label.toLowerCase().replace(/\s+/g, '-');
  const buttonId = `nav-dd-btn-${baseId}`;
  const menuId = `nav-dd-menu-${baseId}`;

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
    <div className='relative' ref={ref}>
      <button
        id={buttonId}
        type='button'
        className={`${linkBase} ${linkColor} inline-flex items-center gap-1`}
        aria-haspopup='menu'
        aria-controls={menuId}
        aria-expanded={open ? 'true' : 'false'}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
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
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id={menuId}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='absolute left-0 mt-2 w-64 rounded-lg shadow-lg border border-[var(--color-earth-brown)]/20 bg-[var(--color-off-white)]'
            role='menu'
            aria-labelledby={buttonId}
            onMouseLeave={(e) => {
              const related = e.relatedTarget as Node | null;
              if (ref.current && related && ref.current.contains(related))
                return;
              setOpen(false);
            }}
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
            <ul className='py-2'>
              {item.children!.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className='block px-4 py-2 text-sm text-[var(--color-deep-cocoa)] hover:text-[var(--color-muted-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)]'
                    role='menuitem'
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
