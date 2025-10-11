import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service | Ekuphumuleni',
  description:
    'Read the terms and conditions governing the use of Ekuphumuleni services and facilities.',
};

export default function TermsPage() {
  return (
    <main className='bg-[var(--color-warm-beige)]'>
      <div className='mx-auto px-4 py-16 max-w-4xl'>
        <h1 className='mb-8 text-[var(--color-earth-brown)] heading-1'>
          Terms of Service
        </h1>
        
        <div className='space-y-6 text-[var(--color-deep-cocoa)] body-text'>
          <section>
            <p className='mb-4 text-[var(--color-deep-cocoa)]/70 text-sm'>
              <strong>Last Updated:</strong> October 11, 2025
            </p>
            <p>
              Welcome to Ekuphumuleni Geriatric Nursing Home. These Terms of
              Service govern your use of our facilities, services, and website.
              By engaging with our services or visiting our facility, you agree
              to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              1. Admission and Services
            </h2>
            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              1.1 Admission Requirements
            </h3>
            <p className='mb-3'>
              Admission to Ekuphumuleni is subject to:
            </p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>Availability of appropriate accommodation</li>
              <li>
                Completion of required documentation and medical assessments
              </li>
              <li>Agreement to our admission policies and procedures</li>
              <li>
                Our ability to meet the prospective resident&apos;s care needs
              </li>
            </ul>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              1.2 Services Provided
            </h3>
            <p>
              We provide comprehensive geriatric care services including, but not
              limited to:
            </p>
            <ul className='space-y-2 mt-2 ml-6 list-disc'>
              <li>24-hour nursing care and supervision</li>
              <li>Medical monitoring and medication management</li>
              <li>Rehabilitation and physiotherapy services</li>
              <li>Nutritional support and dietary services</li>
              <li>Recreational and social activities</li>
              <li>Personal care assistance</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              2. Financial Terms
            </h2>
            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              2.1 Fees and Payment
            </h3>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>
                All fees for services must be paid in accordance with the agreed
                payment schedule
              </li>
              <li>
                Fees are subject to annual review and may be adjusted with
                appropriate notice
              </li>
              <li>
                Additional services not covered in standard fees will be charged
                separately
              </li>
              <li>
                Payment is due on the specified date unless alternative
                arrangements have been made
              </li>
            </ul>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              2.2 Refund Policy
            </h3>
            <p>
              Our refund policy is outlined in your admission agreement. Please
              refer to that document or contact our administration for specific
              details regarding refunds and cancellations.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              3. Resident Rights and Responsibilities
            </h2>
            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              3.1 Resident Rights
            </h3>
            <p className='mb-3'>All residents have the right to:</p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>Be treated with dignity, respect, and compassion</li>
              <li>
                Privacy and confidentiality regarding personal and medical
                information
              </li>
              <li>
                Make decisions about their care and treatment (where capable)
              </li>
              <li>Access to visitors in accordance with facility policies</li>
              <li>Voice concerns and complaints without fear of retaliation</li>
              <li>Participate in social, religious, and recreational activities</li>
              <li>Receive appropriate medical and nursing care</li>
            </ul>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              3.2 Resident Responsibilities
            </h3>
            <p className='mb-3'>Residents and their families agree to:</p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>
                Treat staff, other residents, and visitors with respect and
                courtesy
              </li>
              <li>Comply with facility policies and procedures</li>
              <li>
                Provide accurate and complete information regarding health status
              </li>
              <li>Meet financial obligations as agreed</li>
              <li>
                Participate in care planning to the extent possible
              </li>
              <li>
                Notify staff of any concerns or changes in condition promptly
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              4. Facility Rules and Policies
            </h2>
            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              4.1 Visiting Hours and Policies
            </h3>
            <p>
              Visiting hours and policies are established to ensure resident
              safety and well-being. Current visiting arrangements will be
              communicated to families and may be adjusted based on health and
              safety considerations.
            </p>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              4.2 Personal Property
            </h3>
            <p>
              While we take reasonable precautions to safeguard personal property,
              residents are encouraged to limit valuables. Ekuphumuleni is not
              liable for loss or damage to personal property unless due to our
              negligence.
            </p>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              4.3 Health and Safety
            </h3>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>
                Smoking is prohibited within the facility in accordance with
                health regulations
              </li>
              <li>
                Alcohol and unauthorized substances are not permitted
              </li>
              <li>
                Visitors must sign in and comply with health screening
                requirements
              </li>
              <li>
                Emergency procedures must be followed during drills and actual
                emergencies
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              5. Medical Care and Treatment
            </h2>
            <p>
              Ekuphumuleni provides nursing care and coordinates with external
              medical professionals as needed. We:
            </p>
            <ul className='space-y-2 mt-3 ml-6 list-disc'>
              <li>
                Follow medical orders from qualified healthcare providers
              </li>
              <li>
                Maintain appropriate medical records
              </li>
              <li>
                Coordinate emergency medical services when necessary
              </li>
              <li>
                Require residents to maintain their own medical insurance or
                payment arrangements
              </li>
              <li>
                Are not responsible for costs of external medical services unless
                specifically agreed
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              6. Termination of Services
            </h2>
            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              6.1 Voluntary Discharge
            </h3>
            <p>
              Residents or their legal representatives may request discharge at
              any time with appropriate notice as specified in the admission
              agreement.
            </p>

            <h3 className='mt-4 mb-2 font-semibold text-[var(--color-earth-brown)]'>
              6.2 Involuntary Discharge
            </h3>
            <p className='mb-3'>
              Ekuphumuleni may terminate services under the following
              circumstances:
            </p>
            <ul className='space-y-2 ml-6 list-disc'>
              <li>
                Non-payment of fees (after appropriate notice and opportunity to
                remedy)
              </li>
              <li>
                The resident&apos;s care needs exceed our capabilities
              </li>
              <li>
                Behavior that endangers staff, other residents, or the facility
              </li>
              <li>
                Failure to comply with facility rules and policies
              </li>
              <li>
                Closure or sale of the facility
              </li>
            </ul>
            <p className='mt-3'>
              Appropriate notice will be provided except in cases of emergency or
              immediate danger.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              7. Liability and Indemnification
            </h2>
            <p>
              Ekuphumuleni shall not be liable for any injury, loss, or damage
              except where caused by our negligence or willful misconduct. We
              maintain appropriate insurance coverage for our operations. By using
              our services, you agree to indemnify Ekuphumuleni against claims
              arising from:
            </p>
            <ul className='space-y-2 mt-3 ml-6 list-disc'>
              <li>
                Inaccurate or incomplete information provided during admission
              </li>
              <li>
                Violation of facility rules by residents or their visitors
              </li>
              <li>
                Damage to property or injury to others caused by the resident
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              8. Complaints and Dispute Resolution
            </h2>
            <p>
              We are committed to resolving concerns promptly and fairly. If you
              have a complaint:
            </p>
            <ul className='space-y-2 mt-3 ml-6 list-disc'>
              <li>
                First, discuss the matter with the relevant staff member or
                department head
              </li>
              <li>
                If unresolved, submit a written complaint to our administration
              </li>
              <li>
                We will investigate and respond within a reasonable timeframe
              </li>
              <li>
                If you remain unsatisfied, you may contact relevant regulatory
                authorities
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              9. Website Use
            </h2>
            <p>
              Our website is provided for informational purposes. By using our
              website, you agree to:
            </p>
            <ul className='space-y-2 mt-3 ml-6 list-disc'>
              <li>
                Use the site only for lawful purposes
              </li>
              <li>
                Not attempt to gain unauthorized access to our systems
              </li>
              <li>
                Not transmit harmful code or malicious content
              </li>
              <li>
                Respect intellectual property rights in our content
              </li>
            </ul>
            <p className='mt-3'>
              We reserve the right to modify or discontinue the website at any
              time without notice.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              10. Amendments
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective upon posting to our website or
              notification to residents and families. Continued use of our
              services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              11. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by the laws of Zimbabwe. Any
              disputes arising from these terms or our services shall be subject
              to the jurisdiction of the courts of Zimbabwe.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-[var(--color-earth-brown)] heading-2'>
              12. Contact Information
            </h2>
            <p className='mb-3'>
              For questions about these Terms of Service, please contact us:
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
              By using our services, visiting our facility, or engaging with
              Ekuphumuleni in any capacity, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
