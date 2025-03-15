// Create web server

// Import modules
const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    // Hardcoded comments
    const comments = [
      {
        id: 1,
        author: "John Doe",
        comment: "This is a sample comment."
      },
      {
        id: 2,
        author: "Jane Smith",
        comment: "This is another sample comment."
      }
    ];

    // Send comments
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});