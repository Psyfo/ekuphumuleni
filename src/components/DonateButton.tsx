'use client';

import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

import DonateDialog from './DonateDialog';
import { DONATE_CONTENT, type DonateContent } from './donate-content';

type Variant = 'primary' | 'secondary' | 'on-dark';

/**
 * Always-present Donate call to action. Opens the two-rail donate dialog
 * (Diaspora / In Zimbabwe). Used in the header, the mobile drawer, and the footer.
 */
export default function DonateButton({
  variant = 'primary',
  small = false,
  fullWidth = false,
  className = '',
  onBeforeOpen,
  content = DONATE_CONTENT,
}: {
  variant?: Variant;
  small?: boolean;
  fullWidth?: boolean;
  className?: string;
  /** Lets a caller (e.g. the mobile drawer) close itself before the dialog opens. */
  onBeforeOpen?: () => void;
  content?: DonateContent;
}) {
  const [open, setOpen] = useState(false);

  const variantClass =
    variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'on-dark'
        ? 'btn-on-dark'
        : 'btn-primary';

  const classes = ['btn', variantClass, small ? 'btn-sm' : '', fullWidth ? 'w-full' : '', 'gap-2', className]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <button
        type='button'
        className={classes}
        onClick={() => {
          onBeforeOpen?.();
          setOpen(true);
        }}
      >
        <HeartIcon className='w-5 h-5' aria-hidden='true' />
        {content.buttonLabel}
      </button>
      {open && <DonateDialog onClose={() => setOpen(false)} content={content} />}
    </>
  );
}
