const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write(
      '<html><title>Enter Message</title><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>'
    );

    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>HI</h1></body></html>');
  res.end();
});

server.listen(PORT);
