import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from './index.js';
import * as express from 'express';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Create the Express app
const app = createServer();
const port = process.env.PORT || 3001;

// In production, serve the built SPA files
const distPath = path.join(process.cwd(), 'dist/client');

// Serve static files
app.use(express.static(distPath));

// Log environment variables
console.log('Environment variables loaded from:', path.resolve(process.cwd(), '.env'));
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? '*** (set)' : 'NOT SET');
console.log('VITE_STRIPE_PUBLISHABLE_KEY:', process.env.VITE_STRIPE_PUBLISHABLE_KEY ? '*** (set)' : 'NOT SET');

// Handle React Router - serve index.html for all non-API routes
app.get('*', (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/') || req.path.startsWith('/health')) {
    return next();
  }
  
  // Serve index.html for all other routes
  res.sendFile(path.join(distPath, 'index.html'));
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
