import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import { handleDemo } from "./routes/demo.js";
import { handleChat } from "./routes/chat.js";
import { handleCreateCheckoutSession } from "./routes/stripe.js";

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the project root .env file
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

// Debug log environment variables
console.log('Environment variables loaded from:', envPath);
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? '*** (set)' : 'NOT SET');
console.log('VITE_STRIPE_PUBLISHABLE_KEY:', process.env.VITE_STRIPE_PUBLISHABLE_KEY ? '*** (set)' : 'NOT SET');

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Log all requests (start)
  app.use((req, _res, next) => {
    try {
      console.log(`[REQ] ${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
      console.log('[REQ] headers:', req.headers);
      // Avoid logging huge bodies in prod
      if (req.method !== 'GET') console.log('[REQ] body:', req.body);
    } catch (e) {
      console.error('[REQ] logging error:', e);
    }
    next();
  });

  // Example API routes
  app.get("/api/ping", (req, res, next) => {
    try {
      const ping = process.env.PING_MESSAGE ?? "ping";
      console.log('[PING] responding with:', ping);
      res.json({ message: ping });
    } catch (err) {
      console.error('[PING] error:', err);
      next(err);
    }
  });

  app.get("/api/demo", handleDemo);
  
  // Chatbot API route
  app.post("/api/chat", handleChat);

  // Stripe Checkout API
  app.post("/api/create-checkout-session", handleCreateCheckoutSession);

  // Global error handler to ensure JSON responses for server errors
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('[Express] Unhandled error:', {
      message: err?.message,
      stack: err?.stack,
      type: err?.type,
      code: err?.code,
    });
    res.status(500).json({ error: 'Internal Server Error', message: err?.message, code: err?.code });
  });

  return app;
}
