'use client';

import { useState, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

import SectionHeading from '@/components/SectionHeading';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormSectionData {
  heading?: string;
  subheading?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  messageHelpText?: string;
  submitButtonLabel?: string;
  successHeading?: string;
  successBody?: string;
  errorHeading?: string;
}

interface ContactFormProps {
  data?: ContactFormSectionData;
}

export default function ContactForm({ data }: ContactFormProps = {}) {
  const heading = data?.heading ?? 'Send Us a Message';
  const subheading =
    data?.subheading ??
    "Fill out the form below and we'll get back to you within 24-48 hours";
  const nameLabel = data?.nameLabel ?? 'Your Name';
  const namePlaceholder = data?.namePlaceholder ?? 'e.g., John Doe';
  const emailLabel = data?.emailLabel ?? 'Email Address';
  const emailPlaceholder = data?.emailPlaceholder ?? 'e.g., john@example.com';
  const messageLabel = data?.messageLabel ?? 'Your Message';
  const messagePlaceholder =
    data?.messagePlaceholder ?? 'Please tell us how we can help you...';
  const messageHelpText =
    data?.messageHelpText ?? 'Minimum 10 characters, maximum 2000 characters';
  const submitButtonLabel = data?.submitButtonLabel ?? 'Send Message';
  const successHeading = data?.successHeading ?? 'Message Sent Successfully!';
  const successBody =
    data?.successBody ??
    "Thank you for reaching out to us. We've received your message and will respond within 24-48 hours. Please check your email for a confirmation message.";
  const errorHeading = data?.errorHeading ?? 'Error Sending Message';
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Runs after React has committed and the browser has painted, so the
  // status box / field error rendered by the preceding setState exists
  const afterPaint = (fn: () => void) =>
    requestAnimationFrame(() => requestAnimationFrame(fn));

  const focusFirstInvalid = (errors: FormErrors) => {
    const first = (['name', 'email', 'message'] as const).find(
      (f) => errors[f]
    );
    if (first) document.getElementById(first)?.focus();
  };

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2)
      return 'Name must be at least 2 characters long';
    if (name.trim().length > 100)
      return 'Name must be less than 100 characters';
    if (!/^[\p{L}\p{M}\s\-'.]+$/u.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim()))
      return 'Please enter a valid email address';
    if (email.length > 254) return 'Email address is too long';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10)
      return 'Message must be at least 10 characters long';
    if (message.trim().length > 2000)
      return 'Message must be less than 2000 characters';
    return undefined;
  };

  const handleFieldBlur = (field: string, value: string) => {
    setTouchedFields((prev) => new Set(prev).add(field));
    let error: string | undefined;
    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }
    setValidationErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: string, value: string) => {
    // Only validate if field has been touched
    if (touchedFields.has(field)) {
      let error: string | undefined;
      switch (field) {
        case 'name':
          error = validateName(value);
          break;
        case 'email':
          error = validateEmail(value);
          break;
        case 'message':
          error = validateMessage(value);
          break;
      }
      setValidationErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    const nameError = validateName(data.name);
    const emailError = validateEmail(data.email);
    const messageError = validateMessage(data.message);
    if (nameError) errors.name = nameError;
    if (emailError) errors.email = emailError;
    if (messageError) errors.message = messageError;
    return errors;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Mark all fields as touched
    setTouchedFields(new Set(['name', 'email', 'message']));

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setStatus('error');
      setErrorMessage('Please correct the errors below');
      afterPaint(() => focusFirstInvalid(errors));
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setValidationErrors({});
        setTouchedFields(new Set());
        if (formRef.current) formRef.current.reset();
        afterPaint(() =>
          statusRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          })
        );
      } else {
        const errorData = await response.json();
        if (errorData.validationErrors) {
          setValidationErrors(errorData.validationErrors);
        }
        setErrorMessage(
          errorData.error || 'Failed to send message. Please try again.'
        );
        setStatus('error');
        afterPaint(() => {
          if (errorData.validationErrors) {
            focusFirstInvalid(errorData.validationErrors);
          } else {
            statusRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
          }
        });
      }
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      let errorMsg = 'An unexpected error occurred. Please try again.';

      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMsg =
          'Unable to connect to the server. Please check your internet connection and try again.';
      } else if (
        error &&
        typeof error === 'object' &&
        'name' in error &&
        error.name === 'AbortError'
      ) {
        errorMsg =
          'Request timed out. Please check your internet connection and try again.';
      }

      setErrorMessage(errorMsg);
      setStatus('error');
      afterPaint(() =>
        statusRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      );
    }
  }

  const getFieldClassName = (fieldName: keyof FormErrors, baseClasses = '') => {
    const hasError =
      touchedFields.has(fieldName) && validationErrors[fieldName];
    const isValid =
      touchedFields.has(fieldName) && !validationErrors[fieldName];

    return `${baseClasses} w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 bg-white font-sans text-[var(--color-deep-cocoa)] placeholder:text-[var(--color-deep-cocoa)]/40 ${
      hasError
        ? 'border-[var(--color-error)]/60 focus:border-[var(--color-error)] focus:ring-4 focus:ring-[var(--color-error)]/10'
        : isValid
        ? 'border-[var(--color-success)]/60 focus:border-[var(--color-success)] focus:ring-4 focus:ring-[var(--color-success)]/10'
        : 'border-[var(--color-earth-brown)]/25 focus:border-[var(--color-muted-terracotta)] focus:ring-4 focus:ring-[var(--color-muted-terracotta)]/10'
    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;
  };

  const getLabelClassName = (fieldName: keyof FormErrors) => {
    const hasError =
      touchedFields.has(fieldName) && validationErrors[fieldName];
    return `flex items-center gap-2 mb-2 font-semibold text-sm transition-colors duration-200 ${
      hasError ? 'text-[var(--color-error)]' : 'text-[var(--color-deep-cocoa)]'
    }`;
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className='w-full'
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='bg-white shadow-warm-xl p-8 md:p-10 lg:p-12 border border-subtle rounded-2xl'
        aria-label='Contact form'
        noValidate
      >
        {/* Form Header */}
        <SectionHeading title={heading} lede={subheading} className='mb-10' />

        <div className='space-y-6'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className={getLabelClassName('name')}>
              <UserIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>{nameLabel}</span>
              <span className='text-[var(--color-error)]'>*</span>
            </label>
            <div className='relative'>
              <input
                id='name'
                name='name'
                type='text'
                required
                maxLength={100}
                placeholder={namePlaceholder}
                className={getFieldClassName('name')}
                disabled={status === 'submitting'}
                onBlur={(e) => handleFieldBlur('name', e.target.value)}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                aria-describedby={
                  validationErrors.name ? 'name-error' : undefined
                }
                aria-invalid={
                  touchedFields.has('name') && validationErrors.name
                    ? 'true'
                    : 'false'
                }
              />
              {touchedFields.has('name') && !validationErrors.name && (
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-1/2 right-4 absolute -translate-y-1/2'
                >
                  <CheckCircleIcon className='w-5 h-5 text-[var(--color-success)]' />
                </m.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('name') && validationErrors.name && (
                <m.p
                  id='name-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-[var(--color-error)] text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.name}</span>
                </m.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className={getLabelClassName('email')}>
              <EnvelopeIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>{emailLabel}</span>
              <span className='text-[var(--color-error)]'>*</span>
            </label>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                required
                maxLength={254}
                placeholder={emailPlaceholder}
                className={getFieldClassName('email')}
                disabled={status === 'submitting'}
                onBlur={(e) => handleFieldBlur('email', e.target.value)}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                aria-describedby={
                  validationErrors.email ? 'email-error' : undefined
                }
                aria-invalid={
                  touchedFields.has('email') && validationErrors.email
                    ? 'true'
                    : 'false'
                }
              />
              {touchedFields.has('email') && !validationErrors.email && (
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-1/2 right-4 absolute -translate-y-1/2'
                >
                  <CheckCircleIcon className='w-5 h-5 text-[var(--color-success)]' />
                </m.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('email') && validationErrors.email && (
                <m.p
                  id='email-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-[var(--color-error)] text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.email}</span>
                </m.p>
              )}
            </AnimatePresence>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className={getLabelClassName('message')}>
              <ChatBubbleLeftRightIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>{messageLabel}</span>
              <span className='text-[var(--color-error)]'>*</span>
            </label>
            <div className='relative'>
              <textarea
                id='message'
                name='message'
                rows={6}
                required
                maxLength={2000}
                placeholder={messagePlaceholder}
                className={getFieldClassName('message', 'resize-none')}
                disabled={status === 'submitting'}
                onBlur={(e) => handleFieldBlur('message', e.target.value)}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                aria-describedby={
                  validationErrors.message ? 'message-error' : 'message-help'
                }
                aria-invalid={
                  touchedFields.has('message') && validationErrors.message
                    ? 'true'
                    : 'false'
                }
              />
              {touchedFields.has('message') && !validationErrors.message && (
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-4 right-4 absolute'
                >
                  <CheckCircleIcon className='w-5 h-5 text-[var(--color-success)]' />
                </m.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('message') && validationErrors.message ? (
                <m.p
                  id='message-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-[var(--color-error)] text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.message}</span>
                </m.p>
              ) : (
                <p
                  id='message-help'
                  className='mt-2 text-[var(--color-deep-cocoa)]/70 text-xs'
                >
                  {messageHelpText}
                </p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='btn btn-primary w-full'
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <svg
                  className='w-5 h-5 text-white animate-spin'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <PaperAirplaneIcon className='w-5 h-5' />
                <span>{submitButtonLabel}</span>
              </>
            )}
          </button>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {status === 'success' && (
            <m.div
              ref={statusRef}
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-[var(--color-success)]/5 shadow-warm mt-8 p-6 border-[var(--color-success)] border-l-4 rounded-r-xl overflow-hidden'
              role='status'
              aria-live='polite'
            >
              <div className='flex items-start gap-4'>
                <div className='flex flex-shrink-0 justify-center items-center bg-[var(--color-success)]/15 p-2 rounded-full'>
                  <CheckCircleIcon className='w-6 h-6 text-[var(--color-success)]' />
                </div>
                <div className='flex-1'>
                  <h3 className='mb-2 font-bold text-[var(--color-success)] text-lg'>
                    {successHeading}
                  </h3>
                  <p className='mb-1 text-[var(--color-deep-cocoa)]/80 text-sm leading-relaxed'>
                    {successBody}
                  </p>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {status === 'error' && errorMessage && (
            <m.div
              ref={statusRef}
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-[var(--color-error)]/5 shadow-warm mt-8 p-6 border-[var(--color-error)] border-l-4 rounded-r-xl overflow-hidden'
              role='alert'
              aria-live='assertive'
            >
              <div className='flex items-start gap-4'>
                <div className='flex flex-shrink-0 justify-center items-center bg-[var(--color-error)]/15 p-2 rounded-full'>
                  <XCircleIcon className='w-6 h-6 text-[var(--color-error)]' />
                </div>
                <div className='flex-1'>
                  <h3 className='mb-2 font-bold text-[var(--color-error)] text-lg'>
                    {errorHeading}
                  </h3>
                  <p className='mb-1 text-[var(--color-deep-cocoa)]/80 text-sm leading-relaxed'>
                    {errorMessage}
                  </p>
                  <p className='text-[var(--color-deep-cocoa)]/80 text-sm'>
                    If the problem persists, please contact us directly at{' '}
                    <a
                      href='mailto:administration@ekuphumuleni.ngo'
                      className='font-semibold hover:text-[var(--color-error)] underline'
                    >
                      administration@ekuphumuleni.ngo
                    </a>
                  </p>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </form>
    </m.div>
  );
}
