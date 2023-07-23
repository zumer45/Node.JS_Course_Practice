const http = require('http');

const routes = require('./routes');

const PORT = 3000;

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(PORT);
