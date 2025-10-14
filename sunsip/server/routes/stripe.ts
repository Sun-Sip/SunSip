import type { RequestHandler } from "express";
import Stripe from "stripe";
// Lazily initialize Stripe from current env to avoid import-order issues
let stripeInstance: Stripe | null = null;
function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error('[Stripe] ERROR: STRIPE_SECRET_KEY is not set.');
    stripeInstance = null;
    return null;
  }
  if (!stripeInstance) {
    stripeInstance = new Stripe(key, { apiVersion: '2024-06-20' as Stripe.LatestApiVersion });
  }
  return stripeInstance;
}

export const handleCreateCheckoutSession: RequestHandler = async (req, res) => {
  console.log('[Stripe] Creating checkout session with body:', req.body);
  
  try {
    const stripe = getStripe();
    if (!stripe) {
      const errorMsg = "Stripe not configured - Missing STRIPE_SECRET_KEY";
      console.error(`[Stripe] ${errorMsg}`);
      return res.status(500).json({ error: errorMsg });
    }

    const { amount, donationType } = (req.body ?? {}) as { amount?: number; donationType?: string };

    if (amount == null) {
      console.warn('[Stripe] Missing amount in request body');
      return res.status(400).json({ error: 'Missing amount in request body' });
    }

    // Stripe minimal charge: 100 = $1.00 in cents
    if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 100) {
      return res.status(400).json({ error: "Invalid amount. Must be at least $1 (100 cents)." });
    }

    // Build redirect URLs
    const successUrl = process.env.VITE_STRIPE_SUCCESS_URL || "http://localhost:8080/donate?status=success";
    const cancelUrl = process.env.VITE_STRIPE_CANCEL_URL || "http://localhost:8080/donate?status=cancel";

    // For one-time donations we can pass price_data directly
    const mode = donationType === "monthly" ? "subscription" : "payment" as const;
    console.log('[Stripe] Creating session with:', { amount, donationType, mode, successUrl, cancelUrl });

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        donationType === "monthly"
          ? {
            price_data: {
              currency: "usd",
              product_data: { name: "Monthly Clean Water Donation" },
              // For subscriptions, Stripe requires a recurring price. We'll emulate with a custom price_data recurring monthly.
              recurring: { interval: "month" },
              unit_amount: amount,
            },
            quantity: 1,
          }
          : {
            price_data: {
              currency: "usd",
              product_data: { name: "Clean Water Donation" },
              unit_amount: amount,
            },
            quantity: 1,
          },
      ],
      success_url: successUrl + "&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: cancelUrl,
    });

    return res.json({ id: session.id, url: session.url });
  } catch (err) {
    const anyErr = err as any;
    console.error("[Stripe] create session error", {
      message: anyErr?.message,
      type: anyErr?.type,
      code: anyErr?.code,
      raw: anyErr?.raw,
    });
    const message = anyErr?.message || "Failed to create checkout session";
    return res.status(500).json({ error: message, type: anyErr?.type, code: anyErr?.code });
  }
};
