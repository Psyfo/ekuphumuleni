# Frontend Design & Development Rules

> **Purpose**: This document provides repeatable, consistent rules for frontend development in the Ekuphumuleni project. Always reference this file when creating new components, pages, or structures to ensure brand consistency and adherence to established patterns.

---

## Table of Contents

1. [Brand Consistency](#brand-consistency)
2. [Component Architecture](#component-architecture)
3. [Styling Guidelines](#styling-guidelines)
4. [Form Handling](#form-handling)
5. [Animation & Motion](#animation--motion)
6. [Email Templates](#email-templates)
7. [API Integration](#api-integration)
8. [Error Handling](#error-handling)
9. [File Structure](#file-structure)
10. [Naming Conventions](#naming-conventions)
11. [Performance Guidelines](#performance-guidelines)
12. [Accessibility](#accessibility)
13. [SEO & Metadata](#seo--metadata)

---

## Brand Consistency

### ✅ Always Follow

1. **Check Brand Document First**

   - Always read `docs/BRAND.md` before making design decisions
   - Don't guess brand colors, typography, or styling - verify against the brand guide
   - Brand colors are defined in CSS custom properties in `src/app/styles/globals.css`

2. **Brand Colors - Required**

   ```css
   /* Primary Colors */
   --color-warm-beige: #f2e8cf; /* Main backgrounds, hero sections */
   --color-earth-brown: #a68a64; /* Headings, logo accent */
   --color-deep-cocoa: #6b4f4f; /* Text, footer, navigation */

   /* Secondary Colors */
   --color-soft-sand: #d9c6a5; /* Secondary backgrounds */
   --color-off-white: #ede6e3; /* Cards, highlights */

   /* Accent Color */
   --color-muted-terracotta: #c97c5d; /* CTA buttons, links, accents */
   ```

3. **Typography Hierarchy**

   ```tsx
   // Headings: Always Playfair Display (serif)
   <h1 className="font-serif font-bold text-2xl text-[var(--color-earth-brown)]">
     Main Heading
   </h1>
   <h2 className="font-serif font-bold text-xl text-[var(--color-earth-brown)]">
     Section Title
   </h2>
   <h3 className="font-serif font-bold text-lg text-[var(--color-earth-brown)]">
     Subsection
   </h3>

   // Body: Always Nunito (sans-serif)
   <p className="font-sans text-base text-[var(--color-deep-cocoa)]">
     Body content
   </p>
   <span className="font-sans text-sm text-[var(--color-deep-cocoa)]">
     Small text
   </span>

   // Or use utility classes
   <h1 className="heading-1">Main Heading</h1>
   <h2 className="heading-2">Section Title</h2>
   <h3 className="heading-3">Subsection</h3>
   <p className="body-text">Body content</p>
   <small className="caption">Caption text</small>
   ```

4. **Button Styles**

   ```tsx
   // Primary Button (Muted Terracotta)
   <button className="bg-[var(--color-muted-terracotta)] text-white px-6 py-3 rounded font-bold shadow hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted-terracotta)] focus-visible:ring-offset-2">
     Primary Action
   </button>

   // Or use utility class
   <button className="btn-primary">
     Primary Action
   </button>

   // Secondary Button (Earth Brown Border)
   <button className="bg-white border border-[var(--color-earth-brown)] text-[var(--color-earth-brown)] px-6 py-3 rounded font-bold hover:bg-[var(--color-warm-beige)] transition-colors">
     Secondary Action
   </button>

   // Tertiary Button (Text only)
   <button className="text-[var(--color-muted-terracotta)] font-semibold underline-offset-4 hover:underline">
     View Details
   </button>
   ```

5. **Link Styles**

   ```tsx
   // Navigation Links
   <Link
     href="/about"
     className="text-[var(--color-earth-brown)] hover:text-[var(--color-muted-terracotta)] font-semibold transition-colors"
   >
     About Us
   </Link>

   // Footer Links
   <Link
     href="/privacy"
     className="text-[var(--color-off-white)] hover:text-[var(--color-muted-terracotta)] transition-colors"
   >
     Privacy Policy
   </Link>

   // Accent Links (in body text)
   <Link
     href="/services"
     className="text-[var(--color-muted-terracotta)] font-semibold hover:underline"
   >
     Learn More
   </Link>
   ```

### ❌ Never Do

- Don't use hardcoded hex colors - always use CSS variables: `var(--color-*)`
- Don't use fonts other than Playfair Display (headings) and Nunito (body/UI)
- Don't create custom button styles without referencing brand guide
- Don't use cold colors (blues, pure grays) for primary elements
- Don't use harsh/clinical imagery - always warm, natural, comforting

---

## Component Architecture

### ✅ Always Follow

1. **Component Organization**

   ```tsx
   // ✅ CORRECT: Organized structure
   'use client'; // Only if client interactivity is needed

   import { useState } from 'react';
   import { motion } from 'framer-motion';
   import Image from 'next/image';
   import Link from 'next/link';

   interface ComponentNameProps {
     title: string;
     description?: string;
   }

   export default function ComponentName({
     title,
     description,
   }: ComponentNameProps) {
     // Hooks first
     const [isActive, setIsActive] = useState(false);

     // Event handlers
     const handleClick = () => setIsActive(!isActive);

     // Render
     return <section className='py-16 px-4'>{/* Component JSX */}</section>;
   }
   ```

2. **Next.js Components - Required**

   **ALWAYS use Next.js optimized components instead of standard HTML tags:**

   ```tsx
   // ✅ CORRECT: Use Next.js Image component
   import Image from 'next/image';

   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={800}
     height={600}
     priority // for above-fold images
   />

   // ❌ WRONG: Never use <img> tag
   <img src="/images/photo.jpg" alt="Description" />

   // ✅ CORRECT: Use Next.js Link component
   import Link from 'next/link';

   <Link href="/about" prefetch={false}>
     About Us
   </Link>

   // ❌ WRONG: Never use <a> tag for internal navigation
   <a href="/about">About Us</a>

   // ✅ CORRECT: Only use <a> for external links
   <a
     href="https://external-site.com"
     target="_blank"
     rel="noopener noreferrer"
   >
     External Link
   </a>
   ```

   **Why:**

   - `Image` provides automatic optimization, lazy loading, and responsive images
   - `Link` provides client-side navigation, prefetching, and better performance
   - These components are essential for Next.js performance and SEO benefits

   **IMPORTANT: Image Event Handlers**

   ```tsx
   // ✅ CORRECT: Use onLoad (current property)
   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={800}
     height={600}
     onLoad={() => setLoaded(true)}
   />

   // ❌ WRONG: Never use onLoadingComplete (deprecated)
   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={800}
     height={600}
     onLoadingComplete={() => setLoaded(true)} // DEPRECATED!
   />
   ```

   **Why:**

   - `onLoadingComplete` is deprecated in Next.js 15+
   - Use `onLoad` instead for handling image load events
   - `onLoad` is the standard React event handler

3. **Server vs Client Components**

   ```tsx
   // ✅ Server Component (default - no 'use client')
   // Used for static content, SEO-critical pages
   export default async function AboutPage() {
     // Can fetch data server-side
     return <div>{/* Static content */}</div>;
   }

   // ✅ Client Component (needs interactivity)
   // Used for forms, animations, state management
   ('use client');

   import { useState } from 'react';

   export default function ContactForm() {
     const [status, setStatus] = useState('idle');
     // Interactive logic
   }
   ```

4. **Route Group Organization**

   ```
   src/app/
   ├── layout.tsx           # Root layout with Navigation & Footer
   ├── (public)/            # Public-facing pages
   │   ├── page.tsx         # Home page
   │   ├── about/
   │   ├── contact/
   │   ├── donors/
   │   ├── facilities/
   │   ├── services/
   │   ├── team/
   │   ├── privacy/
   │   └── terms/
   └── api/                 # API routes
       └── contact/
   ```

5. **Component Composition**

   ```tsx
   // ✅ CORRECT: Section-based composition
   export default function HomePage() {
     return (
       <main>
         <HeroSection />
         <AboutSection />
         <ServicesSection />
         <MeetTheTeamSection />
         <DonorsSection />
         <ContactSection />
       </main>
     );
   }

   // ❌ WRONG: Everything in one component
   export default function HomePage() {
     return (
       <main>
         <section>{/* 500+ lines of hero code */}</section>
         <section>{/* 500+ lines of about code */}</section>
         {/* ... */}
       </main>
     );
   }
   ```

6. **Component Props with TypeScript**

   ```tsx
   // ✅ CORRECT: Explicit interfaces
   interface TeamMemberCardProps {
     name: string;
     role: string;
     bio?: string;
     imageUrl: string;
   }

   export default function TeamMemberCard({
     name,
     role,
     bio,
     imageUrl,
   }: TeamMemberCardProps) {
     return <div>{/* ... */}</div>;
   }

   // ❌ WRONG: No types or any types
   export default function TeamMemberCard(props: any) {
     return <div>{/* ... */}</div>;
   }
   ```

### ❌ Never Do

- Don't create components without proper TypeScript interfaces
- Don't use `'use client'` unless component needs client-side interactivity
- Don't duplicate components - check existing components first
- Don't create components with more than 300-400 lines - break them down
- Don't mix route groups - keep public pages in `(public)/`
- **Don't use `<img>` tags - always use Next.js `Image` component**
- **Don't use `<a>` tags for internal links - always use Next.js `Link` component**
- **Don't use `onLoadingComplete` - use `onLoad` instead (onLoadingComplete is deprecated)**

---

## Styling Guidelines

### ✅ Always Follow

1. **Tailwind CSS v4 First**

   This project uses **Tailwind CSS v4** with PostCSS plugin architecture.

   ```tsx
   // ✅ CORRECT: Tailwind utilities
   <div className="flex items-center justify-between p-4 bg-[var(--color-off-white)] rounded-xl shadow-sm hover:shadow-md transition-shadow">

   // ❌ WRONG: Inline styles
   <div style={{ display: 'flex', padding: '16px', backgroundColor: '#EDE6E3' }}>
   ```

2. **CSS Custom Properties for Brand Colors**

   ```tsx
   // ✅ CORRECT: Use CSS variables
   <div className="bg-[var(--color-warm-beige)] text-[var(--color-deep-cocoa)]">

   // ❌ WRONG: Hardcoded colors
   <div className="bg-[#F2E8CF] text-[#6B4F4F]">
   ```

3. **Responsive Design**

   ```tsx
   // ✅ CORRECT: Mobile-first responsive
   <div className="
     grid grid-cols-1           /* Mobile */
     sm:grid-cols-2             /* Small tablets */
     md:grid-cols-2             /* Tablets */
     lg:grid-cols-4             /* Desktop */
     gap-4 sm:gap-6 lg:gap-10
   ">
   ```

4. **Navigation & Sticky Elements**

   > **⚠️ IMPORTANT**: The navigation bar is `h-16` (64px) and uses `sticky top-0`. Any sticky elements below the navbar must account for this height.

   ```tsx
   // Navigation structure
   <header className="top-0 z-50 sticky bg-[var(--color-off-white)]/95 backdrop-blur border-b border-[var(--color-earth-brown)]/30">
     <nav className="mx-auto px-4 max-w-7xl">
       <div className="flex justify-between items-center h-16">
         {/* Navigation content */}
       </div>
     </nav>
   </header>

   // ✅ CORRECT: Sticky element accounting for navbar
   <div className="sticky top-[72px] z-40">
     <AvailabilityChecker />
   </div>

   // ❌ WRONG: No offset - hides behind navbar
   <div className="sticky top-0 z-40">
     <AvailabilityChecker />
   </div>
   ```

5. **Layout Containers**

   ```tsx
   // ✅ CORRECT: Consistent max-width containers
   <section className="mx-auto px-4 py-16 max-w-7xl">
     {/* Section content */}
   </section>

   // ✅ CORRECT: Full-width background with contained content
   <section className="bg-[var(--color-soft-sand)] py-16">
     <div className="mx-auto px-4 max-w-7xl">{/* Content */}</div>
   </section>
   ```

6. **Card Styles**

   ```tsx
   // ✅ CORRECT: Branded card component
   <div className="card">
     {/* Content */}
   </div>

   // Or manually:
   <div className="bg-[var(--color-off-white)] rounded-xl shadow-sm border border-[var(--color-earth-brown)]/20 p-6 hover:shadow-md transition-shadow">
     {/* Content */}
   </div>
   ```

7. **Spacing Consistency**

   ```tsx
   // Section spacing
   <section className="py-16 px-4">         {/* Standard section padding */}

   // Component spacing
   <div className="space-y-4">             {/* 16px vertical spacing */}
     <div className="p-6">                 {/* 24px padding */}
       <h2 className="mb-3">               {/* 12px margin bottom */}
   ```

8. **Focus States**

   ```tsx
   // ✅ CORRECT: Accessible focus indicators
   <button
     className='
     focus-visible:outline-none 
     focus-visible:ring-2 
     focus-visible:ring-[var(--color-muted-terracotta)] 
     focus-visible:ring-offset-2
   '
   >
     Click Me
   </button>
   ```

### ❌ Never Do

- Don't use inline styles unless absolutely necessary (rare edge cases)
- Don't use hardcoded colors - always use CSS variables
- Don't use arbitrary values like `w-[345px]` - use Tailwind scale when possible
- Don't ignore responsive design - always design mobile-first
- Don't create sticky elements without navigation offset
- Don't remove focus indicators without accessible alternatives
- Don't use Tailwind v3 configuration - this project uses v4 with PostCSS

---

## Form Handling

### ✅ Always Follow

1. **Client-Side Validation Pattern**

   ```tsx
   'use client';

   import { useState, useRef } from 'react';

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
     const formRef = useRef<HTMLFormElement>(null);

     // Validation functions
     const validateName = (name: string): string | undefined => {
       if (!name.trim()) return 'Name is required';
       if (name.trim().length < 2) return 'Name must be at least 2 characters';
       if (!/^[a-zA-Z\s\-']+$/.test(name.trim()))
         return 'Name can only contain letters, spaces, hyphens, and apostrophes';
       return undefined;
     };

     const validateEmail = (email: string): string | undefined => {
       if (!email.trim()) return 'Email is required';
       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       if (!emailRegex.test(email.trim()))
         return 'Please enter a valid email address';
       return undefined;
     };

     // Field-level validation (onBlur)
     const handleFieldBlur = (field: string, value: string) => {
       let error: string | undefined;
       switch (field) {
         case 'name':
           error = validateName(value);
           break;
         case 'email':
           error = validateEmail(value);
           break;
       }
       setValidationErrors((prev) => ({ ...prev, [field]: error }));
     };

     // Clear error on focus
     const handleFieldFocus = (field: string) => {
       if (validationErrors[field as keyof FormErrors]) {
         setValidationErrors((prev) => ({ ...prev, [field]: undefined }));
       }
     };

     // Form submission
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

       try {
         const response = await fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(data),
         });

         if (response.ok) {
           setStatus('success');
           formRef.current?.reset();
         } else {
           const errorData = await response.json();
           setErrorMessage(errorData.error || 'Failed to send message');
           setStatus('error');
         }
       } catch (error) {
         setErrorMessage('An unexpected error occurred');
         setStatus('error');
       }
     }

     return (
       <form
         ref={formRef}
         onSubmit={handleSubmit}
         className='space-y-6'
         noValidate
       >
         {/* Form fields with validation */}
       </form>
     );
   }
   ```

2. **Form Field Pattern**

   ```tsx
   // ✅ CORRECT: Accessible form field with validation
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
       className={`w-full px-4 py-2 rounded border transition-colors ${
         validationErrors.name
           ? 'border-red-500 focus:ring-red-500'
           : 'border-[var(--color-earth-brown)]/30 focus:ring-[var(--color-muted-terracotta)]'
       } focus:outline-none focus:ring-2`}
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
   ```

3. **Form States - Loading & Success**

   ```tsx
   // Loading state button
   <button
     type='submit'
     disabled={status === 'submitting'}
     className='w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
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
   </button>;

   // Success message
   {
     status === 'success' && (
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
             <p className='mt-2 text-sm text-green-700'>
               We've received your message and will respond within 24-48 hours.
             </p>
           </div>
         </div>
       </div>
     );
   }
   ```

4. **Server-Side Validation (API Route)**

   ```typescript
   // src/app/api/contact/route.ts
   import { NextRequest, NextResponse } from 'next/server';

   interface FormErrors {
     name?: string;
     email?: string;
     message?: string;
   }

   export async function POST(request: NextRequest) {
     try {
       const body = await request.json();
       const { name, email, message } = body;

       // Validation
       const errors: FormErrors = {};

       if (!name?.trim()) {
         errors.name = 'Name is required';
       } else if (name.trim().length < 2) {
         errors.name = 'Name must be at least 2 characters long';
       }

       if (!email?.trim()) {
         errors.email = 'Email is required';
       } else if (
         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim())
       ) {
         errors.email = 'Please enter a valid email address';
       }

       if (Object.keys(errors).length > 0) {
         return NextResponse.json(
           { error: 'Please correct the errors', validationErrors: errors },
           { status: 400 }
         );
       }

       // Process form (send email, save to DB, etc.)
       // ...

       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json(
         { error: 'An unexpected error occurred' },
         { status: 500 }
       );
     }
   }
   ```

### ❌ Never Do

- Don't skip client-side validation - provide immediate feedback
- Don't forget server-side validation - never trust client data
- Don't forget loading states - always disable submit button during submission
- Don't forget success/error states - always provide feedback
- Don't use uncontrolled forms without validation
- Don't forget to reset form after successful submission
- Don't forget ARIA attributes for accessibility
- Don't forget to sanitize user input before displaying

---

## Animation & Motion

### ✅ Always Follow

1. **Framer Motion Setup**

   This project uses **Framer Motion** for animations. Always respect reduced motion preferences.

   ```tsx
   'use client';

   import { motion, useReducedMotion } from 'framer-motion';

   export default function AnimatedSection() {
     const prefersReducedMotion = useReducedMotion();

     return (
       <motion.section
         initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.8, ease: 'easeOut' }}
       >
         {/* Content */}
       </motion.section>
     );
   }
   ```

2. **Scroll-Triggered Animations**

   ```tsx
   // ✅ CORRECT: Animate on scroll into view
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.2 }}
     transition={{ duration: 0.5, ease: 'easeOut' }}
   >
     <ServiceCard />
   </motion.div>

   // ✅ CORRECT: Staggered children animation
   <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
     variants={{
       hidden: { opacity: 0 },
       visible: {
         opacity: 1,
         transition: {
           staggerChildren: 0.1,
         },
       },
     }}
   >
     {items.map((item) => (
       <motion.div
         key={item.id}
         variants={{
           hidden: { opacity: 0, y: 20 },
           visible: { opacity: 1, y: 0 },
         }}
       >
         {item.content}
       </motion.div>
     ))}
   </motion.div>
   ```

3. **Dropdown/Menu Animations**

   ```tsx
   import { AnimatePresence, motion } from 'framer-motion';

   // ✅ CORRECT: Dropdown with enter/exit animation
   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0, y: 6, scale: 0.98 }}
         animate={{ opacity: 1, y: 0, scale: 1 }}
         exit={{ opacity: 0, y: 6, scale: 0.98 }}
         transition={{ duration: 0.15, ease: 'easeOut' }}
       >
         <DropdownMenu />
       </motion.div>
     )}
   </AnimatePresence>;
   ```

4. **Hover & Focus States**

   ```tsx
   // ✅ CORRECT: Interactive motion
   <motion.button
     whileHover={{ scale: 1.02 }}
     whileTap={{ scale: 0.98 }}
     transition={{ duration: 0.2 }}
     className='btn-primary'
   >
     Click Me
   </motion.button>
   ```

5. **Performance Considerations**

   ```tsx
   // ✅ CORRECT: Animate transform and opacity (GPU-accelerated)
   <motion.div
     animate={{ opacity: 1, x: 0, scale: 1 }}
   >

   // ❌ WRONG: Animate layout properties (causes reflows)
   <motion.div
     animate={{ width: '100%', height: '500px' }}
   >
   ```

### ❌ Never Do

- Don't create animations without checking reduced motion preferences
- Don't animate layout properties (width, height, top, left) - use transforms instead
- Don't use excessive animation durations (keep under 1 second)
- Don't forget `AnimatePresence` for exit animations
- Don't animate on every scroll event - use `viewport={{ once: true }}`
- Don't create jarring animations - use easing functions (`easeOut`, `easeInOut`)

---

## Email Templates

### ✅ Always Follow

1. **Email Template Structure**

   ```typescript
   // Email styles matching brand
   const emailStyles = `
     <style>
       body {
         font-family: 'Nunito', Arial, sans-serif;
         background-color: #F2E8CF;
         color: #6B4F4F;
         margin: 0;
         padding: 20px;
         line-height: 1.6;
       }
       .container {
         max-width: 600px;
         margin: 0 auto;
         background: #EDE6E3;
         border-radius: 12px;
         overflow: hidden;
         box-shadow: 0 4px 6px rgba(107, 79, 79, 0.1);
       }
       .header {
         background: #A68A64;
         color: white;
         padding: 30px 20px;
         text-align: center;
       }
       .header h1 {
         font-family: 'Playfair Display', serif;
         font-size: 28px;
         margin: 0;
         font-weight: 700;
       }
       .content {
         padding: 30px 20px;
       }
       .content h2 {
         font-family: 'Playfair Display', serif;
         color: #A68A64;
         font-size: 24px;
         margin-bottom: 20px;
       }
       .message-box {
         background: #F2E8CF;
         border-left: 4px solid #C97C5D;
         padding: 20px;
         margin: 20px 0;
         border-radius: 0 8px 8px 0;
       }
       .footer {
         background: #6B4F4F;
         color: white;
         padding: 20px;
         text-align: center;
         font-size: 14px;
       }
       .accent {
         color: #C97C5D;
         font-weight: 600;
       }
     </style>
   `;
   ```

2. **Email HTML Template**

   ```typescript
   const emailHtml = `
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Email Subject</title>
         ${emailStyles}
       </head>
       <body>
         <div class="container">
           <div class="header">
             <h1>Ekuphumuleni</h1>
           </div>
           <div class="content">
             <h2>Email Heading</h2>
             <p>Email content here...</p>
             <div class="message-box">
               <p>${sanitizedContent}</p>
             </div>
           </div>
           <div class="footer">
             <p>Footer content</p>
           </div>
         </div>
       </body>
     </html>
   `;
   ```

3. **Sanitize User Input**

   ```typescript
   // ✅ CORRECT: Sanitize before inserting into HTML
   const sanitizedMessage = message
     .replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&#39;')
     .replace(/\n/g, '<br>');
   ```

4. **ZeptoMail Configuration**

   ```typescript
   // ZeptoMail API interfaces
   interface ZeptoMailAddress {
     address: string;
     name?: string;
   }

   interface ZeptoMailRequest {
     from: ZeptoMailAddress;
     to: ZeptoMailAddress[];
     subject: string;
     htmlbody: string;
     textbody?: string;
     reply_to?: ZeptoMailAddress[];
   }

   // Helper function to send email via ZeptoMail REST API
   const sendZeptoMail = async (mailData: ZeptoMailRequest) => {
     const response = await fetch(
       `https://${process.env.ZEPTOMAIL_HOST}/v1.1/email`,
       {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
           Authorization: process.env.ZEPTOMAIL_TOKEN!,
         },
         body: JSON.stringify(mailData),
       }
     );

     if (!response.ok) {
       const errorText = await response.text();
       console.error('ZeptoMail API error:', errorText);
       throw new Error(`ZeptoMail API error: ${response.status}`);
     }

     return response.json();
   };

   // Prepare and send email
   const emailData: ZeptoMailRequest = {
     from: {
       address: process.env.MAIL_FROM_EMAIL!,
       name: process.env.MAIL_FROM_NAME || 'Ekuphumuleni',
     },
     to: [
       {
         address: recipientEmail,
         name: recipientName,
       },
     ],
     reply_to: [
       {
         address: replyToEmail,
         name: replyToName,
       },
     ],
     subject: 'Email Subject',
     htmlbody: emailHtml,
     textbody: plainTextVersion,
   };

   await sendZeptoMail(emailData);
   ```

### ❌ Never Do

- Don't insert user input directly into email HTML without sanitization
- Don't forget to provide plain text alternative
- Don't forget to verify transporter before sending
- Don't expose email credentials in client-side code
- Don't forget to handle email sending errors gracefully
- Don't forget brand consistency in email templates

---

## API Integration

### ✅ Always Follow

1. **API Route Pattern**

   ```typescript
   // src/app/api/[endpoint]/route.ts
   import { NextRequest, NextResponse } from 'next/server';

   export async function GET(request: NextRequest) {
     try {
       // Extract query parameters
       const searchParams = request.nextUrl.searchParams;
       const id = searchParams.get('id');

       // Fetch data
       const data = await fetchDataFromDatabase(id);

       return NextResponse.json(data);
     } catch (error) {
       console.error('API Error:', error);
       return NextResponse.json(
         { error: 'Failed to fetch data' },
         { status: 500 }
       );
     }
   }

   export async function POST(request: NextRequest) {
     try {
       const body = await request.json();

       // Validate data
       if (!body.requiredField) {
         return NextResponse.json(
           { error: 'Missing required field' },
           { status: 400 }
         );
       }

       // Process data
       const result = await processData(body);

       return NextResponse.json({ success: true, data: result });
     } catch (error) {
       console.error('API Error:', error);
       return NextResponse.json(
         { error: 'Failed to process request' },
         { status: 500 }
       );
     }
   }
   ```

2. **Environment Variables**

   ```bash
   # .env.local
   ZEPTOMAIL_HOST=api.zeptomail.eu
   ZEPTOMAIL_TOKEN=Zoho-enczapikey your_api_token_here
   ZEPTOMAIL_MAIL_AGENT_ALIAS=your_mail_agent_alias
   MAIL_FROM_EMAIL=no-reply@ekuphumuleni.ngo
   MAIL_FROM_NAME=Ekuphumuleni
   MAIL_TO_EMAIL=administration@ekuphumuleni.ngo
   ```

3. **API Error Handling**

   ```typescript
   // ✅ CORRECT: Specific error responses
   if (!requiredField) {
     return NextResponse.json(
       { error: 'Field is required', field: 'requiredField' },
       { status: 400 }
     );
   }

   if (notFound) {
     return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
   }

   if (unauthorized) {
     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
   }

   // Generic error
   return NextResponse.json(
     { error: 'An unexpected error occurred' },
     { status: 500 }
   );
   ```

### ❌ Never Do

- Don't expose sensitive data in API responses
- Don't forget to validate request bodies
- Don't forget to handle errors gracefully
- Don't log sensitive information (passwords, tokens, etc.)
- Don't forget to set appropriate HTTP status codes
- Don't trust client-side data without server-side validation

---

## Error Handling

### ✅ Always Follow

1. **Try-Catch Blocks**

   ```tsx
   async function fetchData() {
     try {
       const response = await fetch('/api/endpoint');
       if (!response.ok) {
         throw new Error(`HTTP ${response.status}: ${response.statusText}`);
       }
       const data = await response.json();
       return data;
     } catch (error) {
       console.error('Fetch error:', error);
       throw error;
     }
   }
   ```

2. **User-Friendly Error Messages**

   ```tsx
   const getErrorMessage = (error: unknown): string => {
     if (error instanceof TypeError && error.message.includes('fetch')) {
       return 'Unable to connect. Please check your internet connection.';
     }
     if (error instanceof Error) {
       return error.message;
     }
     return 'An unexpected error occurred. Please try again.';
   };
   ```

3. **Error State Display**

   ```tsx
   {
     status === 'error' && (
       <div
         className='p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg'
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
             <h3 className='text-sm font-bold text-red-800'>Error</h3>
             <p className='mt-2 text-sm text-red-700'>{errorMessage}</p>
           </div>
         </div>
       </div>
     );
   }
   ```

### ❌ Never Do

- Don't show raw error messages to users
- Don't catch errors without handling them
- Don't forget to log errors for debugging
- Don't expose sensitive error details to users

---

## File Structure

### ✅ Always Follow

1. **Next.js 15 App Router Structure**

   ```
   ekuphumuleni/
   ├── docs/
   │   ├── BRAND.md                # Brand guidelines
   │   └── RULES.md                # This file
   ├── public/
   │   ├── fonts/
   │   │   ├── Nunito-Regular.woff2
   │   │   ├── Nunito-Bold.woff2
   │   │   ├── PlayfairDisplay-Regular.woff2
   │   │   └── PlayfairDisplay-Bold.woff2
   │   └── images/
   │       ├── brand/              # Logo, branding assets
   │       ├── building/           # Building photos
   │       ├── facilities/         # Facility photos
   │       ├── garden/             # Garden photos
   │       ├── patients/           # Patient care photos
   │       ├── services/           # Service-related photos
   │       ├── staff/              # Staff photos
   │       ├── team/               # Team photos
   │       │   ├── administration/
   │       │   ├── board/
   │       │   └── staff/
   │       └── trustees/           # Trustee photos
   ├── src/
   │   ├── app/
   │   │   ├── layout.tsx          # Root layout (Navigation + Footer)
   │   │   ├── not-found.tsx       # 404 page
   │   │   ├── (public)/           # Public-facing pages
   │   │   │   ├── page.tsx        # Home page
   │   │   │   ├── about/
   │   │   │   │   ├── page.tsx
   │   │   │   │   ├── EstablishmentSection.tsx
   │   │   │   │   └── MissionVisionSection.tsx
   │   │   │   ├── contact/
   │   │   │   │   ├── page.tsx
   │   │   │   │   └── ContactForm.tsx
   │   │   │   ├── donors/
   │   │   │   ├── facilities/
   │   │   │   ├── services/
   │   │   │   ├── team/
   │   │   │   ├── privacy/
   │   │   │   └── terms/
   │   │   │   └── components/     # Shared public components
   │   │   │       ├── AboutSection.tsx
   │   │   │       ├── ContactSection.tsx
   │   │   │       ├── HeroSection.tsx
   │   │   │       └── ServicesSection.tsx
   │   │   ├── api/                # API routes
   │   │   │   └── contact/
   │   │   │       └── route.ts
   │   │   └── styles/
   │   │       └── globals.css     # Global styles + brand colors
   │   └── components/
   │       ├── Navigation.tsx      # Main navigation
   │       ├── Footer.tsx          # Main footer
   │       └── MapEmbed.tsx        # Reusable components
   ├── .env.local                  # Environment variables (not in git)
   ├── .gitignore
   ├── eslint.config.mjs
   ├── next.config.ts
   ├── next-env.d.ts
   ├── package.json
   ├── postcss.config.mjs
   ├── README.md
   └── tsconfig.json
   ```

2. **Component File Naming**

   ```
   ✅ CORRECT:
   HeroSection.tsx          # PascalCase for components
   ContactForm.tsx          # PascalCase for components
   Navigation.tsx           # PascalCase for components

   ❌ WRONG:
   heroSection.tsx
   contact-form.tsx
   NAVIGATION.tsx
   ```

### ❌ Never Do

- Don't create files outside the established structure
- Don't mix naming conventions
- Don't nest route groups unnecessarily
- Don't put page-specific components in `/components` - keep them in page folders

---

## Naming Conventions

### ✅ Always Follow

1. **Components**: PascalCase

   ```tsx
   HeroSection.tsx;
   ContactForm.tsx;
   TeamMemberCard.tsx;
   ```

2. **Files & Folders**: kebab-case (routes) or PascalCase (components)

   ```
   contact/                 # Route folder (kebab-case)
   ContactForm.tsx         # Component file (PascalCase)
   ```

3. **Constants**: UPPER_SNAKE_CASE

   ```tsx
   const MAX_FILE_SIZE = 5 * 1024 * 1024;
   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
   ```

4. **Functions**: camelCase

   ```tsx
   function validateEmail(email: string) {}
   function handleSubmit(e: FormEvent) {}
   ```

5. **Interfaces & Types**: PascalCase

   ```tsx
   interface ContactFormData {
     name: string;
     email: string;
   }

   type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
   ```

### ❌ Never Do

- Don't use inconsistent naming patterns
- Don't abbreviate unnecessarily (`btn` → `Button`)
- Don't use single-letter variables except in loops (`i`, `j`, etc.)
- Don't mix camelCase and snake_case

---

## Performance Guidelines

### ✅ Always Follow

1. **Image Optimization**

   ```tsx
   // ✅ CORRECT: Use Next.js Image component
   import Image from 'next/image';

   <Image
     src='/images/team/board/john-doe.jpg'
     alt='John Doe, Board Chairman'
     width={400}
     height={500}
     className='rounded-lg object-cover'
     loading='lazy'
     sizes='(min-width: 1024px) 400px, (min-width: 768px) 350px, 100vw'
   />;

   // ❌ WRONG: Regular img tag
   <img src='/images/team/board/john-doe.jpg' alt='John Doe' />;
   ```

2. **Code Splitting**

   ```tsx
   // ✅ CORRECT: Dynamic imports for heavy components
   import dynamic from 'next/dynamic';

   const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
     loading: () => <LoadingSkeleton />,
     ssr: false,
   });
   ```

3. **Font Optimization**

   Fonts are already optimized in this project using `@font-face` with `font-display: swap` in `globals.css`.

4. **Lazy Loading**

   ```tsx
   // ✅ CORRECT: Lazy load images below the fold
   <Image
     src='/images/facilities/room.jpg'
     alt='Patient room'
     width={800}
     height={600}
     loading='lazy'
   />

   // ✅ CORRECT: Eager load above-the-fold images
   <Image
     src='/images/brand/ekuphumuleni_logo.png'
     alt='Ekuphumuleni logo'
     width={512}
     height={512}
     priority
   />
   ```

### ❌ Never Do

- Don't use regular `<img>` tags - always use Next.js Image
- Don't load heavy libraries without code splitting
- Don't forget to add loading states
- Don't eagerly load all images - use lazy loading for below-the-fold content

---

## Accessibility

### ✅ Always Follow

1. **Semantic HTML**

   ```tsx
   // ✅ CORRECT: Semantic elements
   <nav aria-label="Main navigation">
     <ul>
       <li><Link href="/about">About</Link></li>
     </ul>
   </nav>

   <main>
     <article>
       <h1>Page Title</h1>
       <section>
         <h2>Section Title</h2>
         <p>Content</p>
       </section>
     </article>
   </main>

   <footer>
     <p>&copy; 2024 Ekuphumuleni</p>
   </footer>
   ```

2. **ARIA Labels**

   ```tsx
   // ✅ CORRECT: Descriptive ARIA labels
   <button aria-label='Close navigation menu' onClick={closeMenu}>
     <XMarkIcon className='w-6 h-6' />
   </button>

   <input
     type='search'
     aria-label='Search our website'
     placeholder='Search...'
   />

   <section aria-labelledby='services-heading'>
     <h2 id='services-heading'>Our Services</h2>
   </section>
   ```

3. **Keyboard Navigation**

   ```tsx
   // ✅ CORRECT: Keyboard accessible dropdown
   <button
     onKeyDown={(e) => {
       if (e.key === 'ArrowDown') {
         e.preventDefault();
         openDropdown();
         focusFirstItem();
       }
       if (e.key === 'Escape') {
         closeDropdown();
       }
     }}
   >
     Menu
   </button>
   ```

4. **Focus Management**

   ```tsx
   // ✅ CORRECT: Visible focus indicators
   <button
     className='
       focus-visible:outline-none 
       focus-visible:ring-2 
       focus-visible:ring-[var(--color-muted-terracotta)] 
       focus-visible:ring-offset-2
     '
   >
     Submit
   </button>
   ```

5. **Alt Text**

   ```tsx
   // ✅ CORRECT: Descriptive alt text
   <Image
     src='/images/team/board/jane-smith.jpg'
     alt='Jane Smith, Board Secretary, smiling in professional attire'
     width={400}
     height={500}
   />

   // ✅ CORRECT: Decorative images
   <Image
     src='/images/brand/decorative-pattern.svg'
     alt=''
     width={100}
     height={100}
     aria-hidden='true'
   />
   ```

### ❌ Never Do

- Don't use `<div>` as buttons without proper ARIA
- Don't remove focus indicators without accessible alternatives
- Don't forget alt text for images
- Don't create keyboard traps
- Don't rely on color alone to convey information

---

## SEO & Metadata

### ✅ Always Follow

1. **Page Metadata**

   ```tsx
   // src/app/(public)/about/page.tsx
   import type { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'About Us | Ekuphumuleni',
     description:
       'Learn about Ekuphumuleni Geriatric Nursing Home - our mission, values, and commitment to compassionate elderly care in Bulawayo, Zimbabwe.',
     openGraph: {
       title: 'About Us | Ekuphumuleni',
       description:
         'Learn about our mission to provide compassionate geriatric care.',
       images: ['/images/brand/ekuphumuleni-og.jpg'],
     },
   };

   export default function AboutPage() {
     return <>{/* Page content */}</>;
   }
   ```

2. **Root Layout Metadata**

   ```tsx
   // src/app/layout.tsx
   export const metadata: Metadata = {
     title: {
       default: 'Ekuphumuleni | Geriatric Nursing Home',
       template: '%s | Ekuphumuleni',
     },
     description:
       'Compassionate geriatric care in Bulawayo, Zimbabwe. A place of rest and restoration.',
     keywords: [
       'geriatric care',
       'nursing home',
       'elderly care',
       'Bulawayo',
       'Zimbabwe',
     ],
     authors: [{ name: 'Ekuphumuleni' }],
     openGraph: {
       type: 'website',
       locale: 'en_US',
       url: 'https://ekuphumuleni.org',
       siteName: 'Ekuphumuleni',
     },
   };
   ```

3. **Structured Data**

   ```tsx
   // Add JSON-LD for organization
   <script
     type='application/ld+json'
     dangerouslySetInnerHTML={{
       __html: JSON.stringify({
         '@context': 'https://schema.org',
         '@type': 'HealthAndBeautyBusiness',
         name: 'Ekuphumuleni Geriatric Nursing Home',
         description: 'Compassionate geriatric care in a tranquil environment',
         address: {
           '@type': 'PostalAddress',
           streetAddress: 'Old Falls Rd',
           addressLocality: 'Bulawayo',
           addressCountry: 'ZW',
         },
         telephone: '+263-292-216-877',
         email: 'administration@ekuphumuleni.ngo',
       }),
     }}
   />
   ```

### ❌ Never Do

- Don't forget to add metadata to each page
- Don't use generic titles - be descriptive
- Don't duplicate meta descriptions across pages
- Don't forget Open Graph tags for social sharing

---

## Quick Reference Checklist

Before creating any new component or page, ask yourself:

- [ ] Did I check `docs/BRAND.md` for brand consistency?
- [ ] Am I using the correct brand colors via CSS variables?
- [ ] Am I using Playfair Display for headings and Nunito for body text?
- [ ] Is my component properly organized with TypeScript interfaces?
- [ ] Am I handling loading and error states?
- [ ] Is my component accessible (ARIA labels, keyboard nav, focus states)?
- [ ] Am I using Next.js Image for all images?
- [ ] Am I respecting reduced motion preferences for animations?
- [ ] Is my form using proper validation (client + server)?
- [ ] Did I add proper metadata for SEO?
- [ ] Am I using semantic HTML?
- [ ] Did I test keyboard navigation?
- [ ] Did I test on mobile devices?
- [ ] Are error messages user-friendly?
- [ ] Did I sanitize user input before displaying?

---

## Common Patterns

### Section Component Pattern

```tsx
'use client';

import { motion } from 'framer-motion';

export default function SectionName() {
  return (
    <section
      id='section-anchor'
      className='py-16 px-4 bg-[var(--color-warm-beige)]'
      aria-labelledby='section-heading'
    >
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 id='section-heading' className='heading-2 text-center mb-8'>
            Section Title
          </h2>

          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Card Component Pattern

```tsx
export default function Card({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className='card'>
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className='rounded-t-xl object-cover w-full h-48'
      />
      <div className='p-6'>
        <h3 className='heading-3 mb-2'>{title}</h3>
        <p className='body-text'>{description}</p>
      </div>
    </div>
  );
}
```

### Loading State Pattern

```tsx
if (isLoading) {
  return (
    <div className='flex justify-center items-center py-16'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-muted-terracotta)]'></div>
    </div>
  );
}
```

### Error State Pattern

```tsx
if (error) {
  return (
    <div
      className='max-w-xl mx-auto p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg'
      role='alert'
    >
      <h3 className='font-bold text-red-800'>Error</h3>
      <p className='text-red-700 mt-2'>{error.message}</p>
    </div>
  );
}
```

---

## Resources

- **Brand Guide**: `docs/BRAND.md`
- **Styles**: `src/app/styles/globals.css`
- **Navigation**: `src/components/Navigation.tsx`
- **Footer**: `src/components/Footer.tsx`
- **Example Form**: `src/app/(public)/contact/ContactForm.tsx`
- **Example API**: `src/app/api/contact/route.ts`

---

**Remember**: Consistency is key. When in doubt, check existing components and documentation before creating something new. These rules exist to ensure a cohesive, maintainable, accessible, and on-brand codebase that serves the mission of Ekuphumuleni - providing compassionate geriatric care.
