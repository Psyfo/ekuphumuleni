/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useRef, useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});

  // Add form ref to safely reset the form
  const formRef = useRef<HTMLFormElement>(null);

  // Validation functions remain the same
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    if (name.trim().length > 100) {
      return 'Name must be less than 100 characters';
    }
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    if (email.length > 254) {
      return 'Email address is too long';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters long';
    }
    if (message.trim().length > 2000) {
      return 'Message must be less than 2000 characters';
    }
    return undefined;
  };

  const handleFieldBlur = (field: string, value: string) => {
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

  const handleFieldFocus = (field: string) => {
    if (validationErrors[field as keyof FormErrors]) {
      setValidationErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (data: {
    name: string;
    email: string;
    message: string;
  }): FormErrors => {
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
    setValidationErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Validate form data
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setStatus('success');
        setValidationErrors({});

        // Safe form reset using ref
        if (formRef.current) {
          formRef.current.reset();
        }
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
    } catch (error: any) {
      console.error('Form submission error:', error);

      let errorMsg = 'An unexpected error occurred. Please try again.';

      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMsg =
          'Unable to connect to the server. Please check your internet connection and try again.';
      } else if (error?.name === 'AbortError') {
        errorMsg =
          'Request timed out. Please check your internet connection and try again.';
      }

      setErrorMessage(errorMsg);
      setStatus('error');
    }
  }

  const getFieldClassName = (fieldName: keyof FormErrors) => {
    const baseClass = 'w-full px-4 py-2 rounded border transition-colors';
    const normalClass =
      'border-[var(--color-earth-brown)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-muted-terracotta)] focus:border-[var(--color-muted-terracotta)]';
    const errorClass =
      'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500';
    return `${baseClass} ${
      validationErrors[fieldName] ? errorClass : normalClass
    }`;
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='max-w-xl mx-auto bg-white rounded-xl shadow p-8 space-y-6'
      aria-label='Contact form'
      noValidate
    >
      <h2 className='heading-3 text-center mb-2'>Send Us a Message</h2>
      <p className='text-center text-sm text-[var(--color-deep-cocoa)]/70 mb-6'>
        We'd love to hear from you. Send us a message and we'll respond as soon
        as possible.
      </p>

      <div>
        <label htmlFor='name' className='block font-semibold mb-1'>
          Name <span className='text-red-500'>*</span>
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          maxLength={100}
          className={getFieldClassName('name')}
          disabled={status === 'submitting'}
          onBlur={(e) => handleFieldBlur('name', e.target.value)}
          onFocus={() => handleFieldFocus('name')}
          aria-describedby={validationErrors.name ? 'name-error' : undefined}
          aria-invalid={validationErrors.name ? 'true' : 'false'}
        />
        {validationErrors.name && (
          <p id='name-error' className='mt-1 text-sm text-red-600' role='alert'>
            {validationErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='email' className='block font-semibold mb-1'>
          Email <span className='text-red-500'>*</span>
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          maxLength={254}
          className={getFieldClassName('email')}
          disabled={status === 'submitting'}
          onBlur={(e) => handleFieldBlur('email', e.target.value)}
          onFocus={() => handleFieldFocus('email')}
          aria-describedby={validationErrors.email ? 'email-error' : undefined}
          aria-invalid={validationErrors.email ? 'true' : 'false'}
        />
        {validationErrors.email && (
          <p
            id='email-error'
            className='mt-1 text-sm text-red-600'
            role='alert'
          >
            {validationErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='message' className='block font-semibold mb-1'>
          Message <span className='text-red-500'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          maxLength={2000}
          placeholder='Please tell us how we can help you...'
          className={getFieldClassName('message')}
          disabled={status === 'submitting'}
          onBlur={(e) => handleFieldBlur('message', e.target.value)}
          onFocus={() => handleFieldFocus('message')}
          aria-describedby={
            validationErrors.message ? 'message-error' : 'message-help'
          }
          aria-invalid={validationErrors.message ? 'true' : 'false'}
        />
        {validationErrors.message && (
          <p
            id='message-error'
            className='mt-1 text-sm text-red-600'
            role='alert'
          >
            {validationErrors.message}
          </p>
        )}
        {!validationErrors.message && (
          <p
            id='message-help'
            className='mt-1 text-xs text-[var(--color-deep-cocoa)]/60'
          >
            Minimum 10 characters, maximum 2000 characters
          </p>
        )}
      </div>

      <button
        type='submit'
        className='w-full px-6 py-3 rounded font-bold bg-[var(--color-muted-terracotta)] text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span className='flex items-center justify-center'>
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
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
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {status === 'submitting' && (
        <p
          className='text-center text-sm text-[var(--color-deep-cocoa)]/70'
          aria-live='polite'
        >
          Please wait while we send your message...
        </p>
      )}

      {status === 'success' && (
        <div
          className='mt-4 p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg'
          role='status'
          aria-live='polite'
        >
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-green-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-bold text-green-800'>
                Message Sent Successfully!
              </h3>
              <div className='mt-2 text-sm text-green-700'>
                <p>
                  Thank you for reaching out to us. We've received your message
                  and will respond within 24-48 hours.
                </p>
                <p className='mt-1'>
                  Please check your email for a confirmation message.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div
          className='mt-4 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg'
          role='alert'
          aria-live='assertive'
        >
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-red-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-bold text-red-800'>
                Error Sending Message
              </h3>
              <div className='mt-2 text-sm text-red-700'>
                <p>
                  {errorMessage || 'Something went wrong. Please try again.'}
                </p>
                <p className='mt-1'>
                  If the problem persists, please contact us directly at
                  smahlangu@mobisynco.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
