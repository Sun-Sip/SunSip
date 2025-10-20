// Minimal API-only server to unblock Stripe integration
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';
import Stripe from 'stripe';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Create the Express app (API-only)
const app = express();
const port = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());

// Early request logger (runtime level)
app.use((req, _res, next) => {
  try {
    const line = `[SRV] ${new Date().toISOString()} ${req.method} ${req.originalUrl}`;
    console.log(line);
    try { fs.appendFileSync('server-debug.log', line + '\n'); } catch {}
  } catch {}
  next();
});

// Log environment variables
console.log('Environment variables loaded from:', path.resolve(process.cwd(), '.env'));
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? '*** (set)' : 'NOT SET');
console.log('VITE_STRIPE_PUBLISHABLE_KEY:', process.env.VITE_STRIPE_PUBLISHABLE_KEY ? '*** (set)' : 'NOT SET');

// Simple health endpoint at runtime layer
app.get('/api/_health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Simple ping
app.get('/api/ping', (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? 'ping';
  res.json({ message: ping });
});

// Verify a Checkout Session
app.get('/api/checkout-session', async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Missing session_id query param' });
    }
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe secret not configured' });
    const stripe = new Stripe(key, { apiVersion: '2024-06-20' });

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent', 'customer']
    });

    res.json({
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email ?? null,
      mode: session.mode ?? null,
      status: session.status ?? null,
      payment_status: session.payment_status ?? null,
    });
  } catch (err) {
    console.error('[Stripe] retrieve session error', err);
    res.status(500).json({ error: err?.message || 'Failed to retrieve checkout session' });
  }
});

// Stripe Checkout API
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe secret not configured' });
    const stripe = new Stripe(key, { apiVersion: '2024-06-20' });

    const { amount, donationType } = req.body ?? {};
    if (amount == null) return res.status(400).json({ error: 'Missing amount in request body' });
    if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 100) {
      return res.status(400).json({ error: 'Invalid amount. Must be at least $1 (100 cents).' });
    }

    const successUrl = process.env.VITE_STRIPE_SUCCESS_URL || 'http://localhost:8080/thank-you?status=success';
    const cancelUrl = process.env.VITE_STRIPE_CANCEL_URL || 'http://localhost:8080/donate?status=cancel';
    const mode = donationType === 'monthly' ? 'subscription' : 'payment';

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        donationType === 'monthly'
          ? {
              price_data: {
                currency: 'usd',
                product_data: { name: 'Monthly Clean Water Donation' },
                recurring: { interval: 'month' },
                unit_amount: amount,
              },
              quantity: 1,
            }
          : {
              price_data: {
                currency: 'usd',
                product_data: { name: 'Clean Water Donation' },
                unit_amount: amount,
              },
              quantity: 1,
            },
      ],
      success_url: successUrl + '&session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('[Stripe] error', err);
    res.status(500).json({ error: err?.message || 'Failed to create checkout session' });
  }
});

// Final error handler at runtime layer (just in case)
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const msg = `[SRV] Unhandled error: ${err?.message || ''} \n${err?.stack || ''}`;
  console.error(msg);
  try { fs.appendFileSync('server-debug.log', msg + '\n'); } catch {}
  res.status(500).json({ error: 'Internal Server Error (runtime)', message: err?.message });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 API server running on port ${port}`);
  console.log(`🔧 API base: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully');
  process.exit(0);
});
