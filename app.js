// Import the built-in http module
const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Docker!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

