const http = require('http');

const server = http.createServer((req, res) => {
  // Without a proper content-length header, the response might be incomplete
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, world!');
  // Missing res.end() to signal the end of the response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});