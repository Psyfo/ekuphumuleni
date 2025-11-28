import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ekuphumuleni',
  description:
    'Learn about how Ekuphumuleni collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className='bg-[var(--color-warm-beige)]'>
      <div className='mx-auto px-4 py-16 max-w-4xl'>
        <h1 className='mb-8 text-[var(--color-earth-brown)] heading-1'>
          Privacy Policy
        </h1>
        
        <div className='space-y-6 text-[var(--color-deep-cocoa)] body-text'>
          <section>
            <p className='mb-4 text-[var(--color-deep-cocoa)]/70 text-sm'>
              <strong>Last Updated:</strong> October 11, 2025
            </p>
            <p>
              At Ekuphumuleni, we are committed to protecting your privacy and
              handling your personal information with care and respect. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our facility or use our
              services.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              1. Information We Collect
            </h2>
            <p className='mb-3'>
              We may collect personal information that you voluntarily provide to
              us when you:
            </p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>Inquire about our services</li>
              <li>Register as a resident or patient</li>
              <li>Contact us via phone, email, or contact form</li>
              <li>Visit our facility</li>
            </ul>
            <p className='mt-4'>
              The types of information we may collect include:
            </p>
            <ul className='space-y-2 mt-2 ml-6 list-disc'>
              <li>
                <strong>Personal Identifiers:</strong> Name, address, email
                address, telephone number
              </li>
              <li>
                <strong>Medical Information:</strong> Health history, medical
                conditions, medications, and treatment information (for residents
                and patients only)
              </li>
              <li>
                <strong>Emergency Contact Information:</strong> Names and contact
                details of family members or designated representatives
              </li>
              <li>
                <strong>Financial Information:</strong> Payment and billing
                information for services rendered
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              2. How We Use Your Information
            </h2>
            <p className='mb-3'>
              We use the information we collect to:
            </p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>Provide and maintain our geriatric care services</li>
              <li>Communicate with you about your care or inquiries</li>
              <li>Process payments and maintain financial records</li>
              <li>
                Contact emergency contacts when necessary for resident safety
              </li>
              <li>Comply with legal obligations and healthcare regulations</li>
              <li>Improve our services and facilities</li>
              <li>Respond to your questions and requests</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              3. Disclosure of Your Information
            </h2>
            <p className='mb-3'>
              We may share your information in the following circumstances:
            </p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>
                <strong>With Healthcare Providers:</strong> When necessary for
                your medical care and treatment
              </li>
              <li>
                <strong>With Family Members:</strong> As authorized by you or as
                permitted by law
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or legal process
              </li>
              <li>
                <strong>Emergency Situations:</strong> To protect your health,
                safety, or the safety of others
              </li>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who
                assist us in operating our facility (subject to confidentiality
                agreements)
              </li>
            </ul>
            <p className='mt-4'>
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className='space-y-2 mt-3 ml-6 list-disc'>
              <li>Secure storage of physical and electronic records</li>
              <li>Access controls limiting who can view your information</li>
              <li>Staff training on privacy and confidentiality</li>
              <li>Regular security assessments and updates</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              5. Your Privacy Rights
            </h2>
            <p className='mb-3'>You have the right to:</p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request restrictions on certain uses of your information</li>
              <li>Receive a copy of your information in a portable format</li>
              <li>Withdraw consent where we rely on your consent</li>
              <li>Lodge a complaint with relevant regulatory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              6. Retention of Information
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. Medical
              records are retained in accordance with healthcare regulations and
              professional standards.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our services are designed for geriatric care and are not directed to
              individuals under the age of 18. We do not knowingly collect
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by posting the updated policy on our website
              with a revised &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              9. Contact Us
            </h2>
            <p className='mb-3'>
              If you have questions or concerns about this Privacy Policy or our
              privacy practices, please contact us:
            </p>
            <div className='bg-[var(--color-off-white)] p-4 rounded-lg'>
              <p>
                <strong>Ekuphumuleni Geriatric Nursing Home</strong>
              </p>
              <p className='mt-2'>
                VHCG+86V, Old Falls Rd, Bulawayo, Zimbabwe
              </p>
              <p className='mt-1'>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:info@ekuphumuleni.org'
                  className='text-[var(--color-muted-terracotta)] hover:underline'
                >
                  info@ekuphumuleni.org
                </a>
              </p>
              <p className='mt-1'>
                <strong>Phone:</strong>{' '}
                <a
                  href='tel:+263292216877'
                  className='text-[var(--color-muted-terracotta)] hover:underline'
                >
                  263 292 216 877
                </a>
              </p>
            </div>
          </section>

          <section className='pt-6 border-[var(--color-deep-cocoa)]/20 border-t'>
            <p className='text-[var(--color-deep-cocoa)]/80 text-sm'>
              By using our services or providing us with your personal
              information, you acknowledge that you have read and understood this
              Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
