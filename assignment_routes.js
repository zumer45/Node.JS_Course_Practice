const fs = require('fs');

const rH = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><head><title>Hi and Dummy Users</title></head><body>');
    res.write('<h1>Hi, Welcome to Our Website!</h1>');
    res.write('<p>Below is a list of dummy users:</p>');
    res.write('<ul>');
    res.write('<li>User 1</li>');
    res.write('<li>User 2</li>');
    res.write('<li>User 3</li>');
    res.write('<li>User 4</li>');
    res.write('<li>User 5</li>');
    res.write('</ul>');
    res.write('</body></html>');

    res.write(`
      <html>
      <head>
        <title>Create User</title>
      </head>
      <body>
        <h1>Create a New User</h1>
        <form action="/create-user" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <button type="submit">Create User</button>
        </form>
      </body>
      </html>
    `);

    return res.end();
  } else if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(`New user created: ${username}`);

      // Redirect to the root page (/) after creating the user
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
};

exports.handler = rH;
