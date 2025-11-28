'use client';

import { useState, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

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

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2)
      return 'Name must be at least 2 characters long';
    if (name.trim().length > 100)
      return 'Name must be less than 100 characters';
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) {
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
      } else {
        const errorData = await response.json();
        if (errorData.validationErrors) {
          setValidationErrors(errorData.validationErrors);
        }
        setErrorMessage(
          errorData.error || 'Failed to send message. Please try again.'
        );
        setStatus('error');
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
    }
  }

  const getFieldClassName = (fieldName: keyof FormErrors, baseClasses = '') => {
    const hasError =
      touchedFields.has(fieldName) && validationErrors[fieldName];
    const isValid =
      touchedFields.has(fieldName) && !validationErrors[fieldName];

    return `${baseClasses} w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-200 bg-white font-sans text-[var(--color-deep-cocoa)] placeholder:text-[var(--color-deep-cocoa)]/40 ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
        : isValid
        ? 'border-green-400 focus:border-green-500 focus:ring-4 focus:ring-green-100'
        : 'border-[var(--color-earth-brown)]/25 focus:border-[var(--color-muted-terracotta)] focus:ring-4 focus:ring-[var(--color-muted-terracotta)]/10'
    } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;
  };

  const getLabelClassName = (fieldName: keyof FormErrors) => {
    const hasError =
      touchedFields.has(fieldName) && validationErrors[fieldName];
    return `flex items-center gap-2 mb-2 font-semibold text-sm transition-colors duration-200 ${
      hasError ? 'text-red-600' : 'text-[var(--color-deep-cocoa)]'
    }`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
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
        <div className='mb-10 text-center'>
          <h2 className='mb-3 !text-3xl md:!text-4xl heading-2'>
            Send Us a Message
          </h2>
          <div className='bg-[var(--color-muted-terracotta)] mx-auto mb-5 rounded-full w-16 h-1.5' />
          <p className='text-[var(--color-earth-brown)] text-base md:text-lg'>
            Fill out the form below and we&apos;ll get back to you within 24-48
            hours
          </p>
        </div>

        <div className='space-y-6'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className={getLabelClassName('name')}>
              <UserIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>Your Name</span>
              <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <input
                id='name'
                name='name'
                type='text'
                required
                maxLength={100}
                placeholder='e.g., John Doe'
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-1/2 right-4 absolute -translate-y-1/2'
                >
                  <CheckCircleIcon className='w-5 h-5 text-green-500' />
                </motion.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('name') && validationErrors.name && (
                <motion.p
                  id='name-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-red-600 text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.name}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className={getLabelClassName('email')}>
              <EnvelopeIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>Email Address</span>
              <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                required
                maxLength={254}
                placeholder='e.g., john@example.com'
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-1/2 right-4 absolute -translate-y-1/2'
                >
                  <CheckCircleIcon className='w-5 h-5 text-green-500' />
                </motion.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('email') && validationErrors.email && (
                <motion.p
                  id='email-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-red-600 text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.email}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className={getLabelClassName('message')}>
              <ChatBubbleLeftRightIcon className='w-5 h-5 text-[var(--color-muted-terracotta)]' />
              <span>Your Message</span>
              <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <textarea
                id='message'
                name='message'
                rows={6}
                required
                maxLength={2000}
                placeholder='Please tell us how we can help you...'
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='top-4 right-4 absolute'
                >
                  <CheckCircleIcon className='w-5 h-5 text-green-500' />
                </motion.div>
              )}
            </div>
            <AnimatePresence mode='wait'>
              {touchedFields.has('message') && validationErrors.message ? (
                <motion.p
                  id='message-error'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='flex items-center gap-1.5 mt-2 text-red-600 text-sm'
                  role='alert'
                >
                  <XCircleIcon className='flex-shrink-0 w-4 h-4' />
                  <span>{validationErrors.message}</span>
                </motion.p>
              ) : (
                <p
                  id='message-help'
                  className='mt-2 text-[var(--color-earth-brown)]/70 text-xs'
                >
                  Minimum 10 characters, maximum 2000 characters
                </p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            className='flex justify-center items-center gap-2 bg-[var(--color-muted-terracotta)] disabled:opacity-50 shadow-warm-lg hover:shadow-warm-xl px-8 py-4 rounded-xl focus-visible:outline-none focus-visible:ring-[var(--color-muted-terracotta)]/30 focus-visible:ring-4 w-full font-bold text-white hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed'
            disabled={status === 'submitting'}
            whileHover={
              status !== 'submitting' && !prefersReducedMotion
                ? { scale: 1.02 }
                : {}
            }
            whileTap={
              status !== 'submitting' && !prefersReducedMotion
                ? { scale: 0.98 }
                : {}
            }
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
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-gradient-to-r from-green-50 to-emerald-50 shadow-warm mt-8 p-6 border-green-500 border-l-4 rounded-r-xl overflow-hidden'
              role='status'
              aria-live='polite'
            >
              <div className='flex items-start gap-4'>
                <div className='flex flex-shrink-0 justify-center items-center bg-green-100 p-2 rounded-full'>
                  <CheckCircleIcon className='w-6 h-6 text-green-600' />
                </div>
                <div className='flex-1'>
                  <h3 className='mb-2 font-bold text-green-800 text-lg'>
                    Message Sent Successfully!
                  </h3>
                  <p className='mb-1 text-green-700 text-sm leading-relaxed'>
                    Thank you for reaching out to us. We&apos;ve received your
                    message and will respond within 24-48 hours.
                  </p>
                  <p className='text-green-700 text-sm'>
                    Please check your email for a confirmation message.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {status === 'error' && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-gradient-to-r from-red-50 to-rose-50 shadow-warm mt-8 p-6 border-red-500 border-l-4 rounded-r-xl overflow-hidden'
              role='alert'
              aria-live='assertive'
            >
              <div className='flex items-start gap-4'>
                <div className='flex flex-shrink-0 justify-center items-center bg-red-100 p-2 rounded-full'>
                  <XCircleIcon className='w-6 h-6 text-red-600' />
                </div>
                <div className='flex-1'>
                  <h3 className='mb-2 font-bold text-red-800 text-lg'>
                    Error Sending Message
                  </h3>
                  <p className='mb-1 text-red-700 text-sm leading-relaxed'>
                    {errorMessage}
                  </p>
                  <p className='text-red-700 text-sm'>
                    If the problem persists, please contact us directly at{' '}
                    <a
                      href='mailto:administration@ekuphumuleni.ngo'
                      className='font-semibold hover:text-red-800 underline'
                    >
                      administration@ekuphumuleni.ngo
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
