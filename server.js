import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import apiApp from './api/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Mount the API
app.use(apiApp);

// Serve static frontend files
app.use(express.static(join(__dirname, 'dist')));

// Serve index.html for all other routes (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});