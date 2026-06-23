import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';
import Stripe from 'stripe';

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thank you for supporting Ekuphumuleni Geriatric Nursing Home.',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

type Outcome = 'success' | 'cancelled' | 'incomplete' | 'unknown';

/** Confirm the real outcome with Stripe so we never thank someone who didn't
 *  actually pay, and never show an error to someone who simply cancelled. */
async function resolveOutcome(
  sessionId?: string,
  cancelled?: string,
): Promise<{ outcome: Outcome; amount?: string }> {
  if (cancelled) return { outcome: 'cancelled' };
  const key = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !key) return { outcome: 'unknown' };
  try {
    const session = await new Stripe(key).checkout.sessions.retrieve(sessionId);
    if (session.status !== 'complete') return { outcome: 'incomplete' };
    let amount: string | undefined;
    if (session.amount_total != null && session.currency) {
      amount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: session.currency.toUpperCase(),
      }).format(session.amount_total / 100);
    }
    return { outcome: 'success', amount };
  } catch {
    return { outcome: 'unknown' };
  }
}

const COPY: Record<Outcome, { heading: string; body: string }> = {
  success: {
    heading: 'Thank you for your gift',
    body: 'Your generosity helps us provide dignified care, meals and a place of rest for elders in Bulawayo.',
  },
  cancelled: {
    heading: "Your gift wasn't completed",
    body: 'No charge was made. Whenever you are ready, we would be grateful for your support — every gift helps us care for Bulawayo’s elders.',
  },
  incomplete: {
    heading: 'We could not confirm your gift',
    body: 'If your payment did not finish, no charge was made. You are welcome to try again whenever it suits you.',
  },
  unknown: {
    heading: 'Thank you for visiting',
    body: 'Every gift helps us care for Bulawayo’s elders. If you would like to give, the Donate button is at the top of any page.',
  },
};

export default async function DonateThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; cancelled?: string }>;
}) {
  const { session_id, cancelled } = await searchParams;
  const { outcome, amount } = await resolveOutcome(session_id, cancelled);
  const { heading, body } = COPY[outcome];
  const paid = outcome === 'success';

  return (
    <main className='section-container flex flex-col justify-center items-center py-24 min-h-[70vh] text-center'>
      <span
        aria-hidden='true'
        className='flex justify-center items-center mb-6 rounded-full w-20 h-20'
        style={{
          background: paid ? 'rgba(176, 90, 60, 0.12)' : 'rgba(166, 138, 100, 0.14)',
          color: paid ? 'var(--color-terracotta-deep)' : 'var(--color-earth-brown)',
        }}
      >
        <HeartIcon className='w-10 h-10' />
      </span>

      <h1 className='heading-1' style={{ color: 'var(--color-deep-cocoa)', marginBottom: '1rem' }}>
        {heading}
      </h1>

      <p className='mx-auto mb-2 max-w-xl' style={{ color: 'var(--color-deep-cocoa)' }}>
        {paid && amount ? `Your ${amount} gift means a great deal. ${body}` : body}
      </p>

      {paid && (
        <p className='mx-auto mb-8 max-w-xl text-sm' style={{ color: 'var(--color-earth-brown)' }}>
          A receipt has been emailed to you by our secure payment provider. If you set up a monthly
          gift, you can manage or cancel it any time using the link in that email.
        </p>
      )}

      <div className='flex flex-wrap justify-center gap-3' style={{ marginTop: paid ? 0 : '1.5rem' }}>
        <Link href='/' className='btn btn-primary'>
          Back to home
        </Link>
        <Link href='/services' className='btn btn-secondary'>
          Explore our care
        </Link>
      </div>
    </main>
  );
}
