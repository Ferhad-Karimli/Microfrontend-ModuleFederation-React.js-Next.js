const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Add CORS headers but preserve original headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    // Parse URL
    const parsedUrl = parse(req.url, true);
    
    // Log incoming requests to debug
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    
    // Handle request with special consideration for remoteEntry.js
    if (parsedUrl.pathname === '/remoteEntry.js') {
      console.log('Serving Module Federation entry point');
      // Special handling for the federation entry point if needed
    }
    
    // Use Next.js to handle requests
    handle(req, res, parsedUrl)
      .catch(err => {
        console.error('Error handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
    
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000 (${dev ? 'development' : 'production'} mode)`);
  });
});