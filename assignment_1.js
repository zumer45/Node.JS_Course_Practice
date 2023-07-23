// spin up  a server
// Handle two routes / and /users
const http = require('http');

const rH = require('./assignment_routes');

const PORT = 3000;

const server = http.createServer(rH.handler);

server.listen(PORT, () => console.log('listening on port 3000'));
