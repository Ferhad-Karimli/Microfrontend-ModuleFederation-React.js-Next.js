const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
// Add after defining app and port
console.log("Checking for remoteEntry.js file locations:");
[
  '.next/static/chunks/remoteEntry.js',
  '.next/server/remoteEntry.js',
  '.next/static/remoteEntry.js',
  '.next/remoteEntry.js'
].forEach(location => {
  const filePath = path.join(__dirname, location);
  console.log(`- ${location}: ${fs.existsSync(filePath) ? 'EXISTS' : 'NOT FOUND'}`);
});


const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve the .next directory as static files
app.use('/_next', express.static(path.join(__dirname, '.next')));

// Specifically serve the remoteEntry.js file with proper headers
app.get('/remoteEntry.js', (req, res) => {
  // Try multiple possible locations for remoteEntry.js
  const possiblePaths = [
    path.join(__dirname, '.next/static/chunks/remoteEntry.js'),
    path.join(__dirname, '.next/static/remoteEntry.js'),
    path.join(__dirname, '.next/server/remoteEntry.js'),
    path.join(__dirname, '.next/remoteEntry.js')
  ];

  // Find first existing path
  const entryPath = possiblePaths.find(p => fs.existsSync(p));
  
  if (entryPath) {
    console.log(`Serving remoteEntry.js from: ${entryPath}`);
    res.setHeader('Content-Type', 'application/javascript');
    fs.createReadStream(entryPath).pipe(res);
  } else {
    console.error('Remote entry file not found at any of these locations:');
    possiblePaths.forEach(p => console.error(`- ${p}`));
    res.status(404).send('Remote entry file not found');
  }
});

// For the root path, serve a simple status page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Next.js Module Federation Server</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .container { max-width: 800px; margin: 0 auto; }
          .status { padding: 20px; background: #f0f0f0; border-radius: 5px; }
          .success { color: green; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Next.js Module Federation Server</h1>
          <div class="status">
            <p><span class="success">✓</span> Server is running on port ${port}</p>
            <p>Module Federation entry point: <a href="/remoteEntry.js">/remoteEntry.js</a></p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Add a wildcard route for API paths
app.use('/api', (req, res) => {
  res.status(200).json({ message: 'API endpoint reached', path: req.path });
});

app.use('/_next', express.static(path.join(__dirname, '.next')));
app.use('/static', express.static(path.join(__dirname, '.next/static')));

// Start the server
app.listen(port, () => {
  console.log(`Module Federation server running at http://localhost:${port}`);
  console.log(`Remote entry available at http://localhost:${port}/remoteEntry.js`);
});