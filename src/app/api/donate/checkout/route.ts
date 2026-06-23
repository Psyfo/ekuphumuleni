import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Donation guardrails (in the major currency unit, e.g. dollars). */
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100_000;
const CURRENCIES = new Set(['usd', 'gbp', 'zar']);

type Body = { amount?: unknown; currency?: unknown; frequency?: unknown };

/**
 * Creates a Stripe Checkout Session for a one-time or monthly donation and
 * returns its hosted-checkout URL. The amount is dynamic (presets or a custom
 * "Other" value), so the price is built inline — no pre-created Stripe products.
 *
 * If STRIPE_SECRET_KEY is absent (e.g. an environment without keys yet), this
 * returns 503 so the dialog can fall back to the "arrange by email" path
 * instead of erroring.
 */
export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const amount = Number(body.amount);
  const currency = String(body.currency ?? 'usd').toLowerCase();
  const frequency = body.frequency === 'monthly' ? 'monthly' : 'once';

  if (!Number.isFinite(amount) || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
    return NextResponse.json({ error: 'invalid_amount' }, { status: 400 });
  }
  if (!CURRENCIES.has(currency)) {
    return NextResponse.json({ error: 'invalid_currency' }, { status: 400 });
  }

  const origin =
    request.headers.get('origin') ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://ekuphumuleni.ngo';
  const unitAmount = Math.round(amount * 100);
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: frequency === 'monthly' ? 'subscription' : 'payment',
      ...(frequency === 'monthly' ? {} : { submit_type: 'donate' as const }),
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: unitAmount,
            product_data: {
              name:
                frequency === 'monthly'
                  ? 'Monthly donation to Ekuphumuleni'
                  : 'Donation to Ekuphumuleni',
            },
            ...(frequency === 'monthly'
              ? { recurring: { interval: 'month' as const } }
              : {}),
          },
        },
      ],
      success_url: `${origin}/donate/thank-you?status=success`,
      cancel_url: `${origin}/?donate=cancelled`,
      metadata: { source: 'donate-dialog', frequency },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[donate/checkout] Stripe error:', err);
    return NextResponse.json({ error: 'stripe_error' }, { status: 502 });
  }
}
