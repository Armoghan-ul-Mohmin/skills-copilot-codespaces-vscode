// Create a web server that listens on port 3000 and serves a simple HTML response.

const http = require('http');

const server = http.createServer((req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Comments</title>
    </head>
    <body>
      <h1>Welcome to the Comments Page</h1>
      <p>This is a simple HTML response.</p>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(htmlContent);
  res.end();
});

server.listen(3000);