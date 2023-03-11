// const { createServer } = require('https');
// const { parse } = require('url');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const hostname = 'rierefarm.com.ng';
// const port = process.env.PORT;

// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       const parsedUrl = parse(req.url, true);
//       // const { pathname, query } = parsedUrl;
//       // if (pathname) {
//       //   console.log(pathname);
//       //   let a = await app.render(req, res, pathname, query);
//       //   console.log('28', a);
//       // } else if (pathname) {
//       //   let b = await app.render(req, res, pathname, query);
//       //   console.log('31', b);
//       // } else {
//       //   await handle(req, res, parsedUrl);
//       // }
//       await handle(req, res, parsedUrl);
//     } catch (err) {
//       res.json({ msg: err });
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });

// const { createServer } = require('https');
// const { parse } = require('url');
// const next = require('next');
// const fs = require('fs');

// const PORT = process.env.PORT;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev, dir: '.', conf: { distDir: '.next' } });
// const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.crt'),
// };

// app.prepare().then(() => {
//   createServer(httpsOptions, (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   }).listen(PORT, (err) => {
//     if (err) throw err;
//     console.log('> Ready on https://localhost:443');
//   });
// });

const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // User data for testing purposes
  const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    { id: 3, username: 'user3', password: 'pass3' },
  ];

  // Middleware to parse JSON request body
  server.use(bodyParser.json());

  // Route for checking user exists
  server.get('/api/users/:username', (req, res) => {
    const user = users.find((u) => u.username === req.params.username);
    if (user) {
      res.status(200).send('User found!');
    } else {
      res.status(404).send('User not found!');
    }
  });

  // Route for logging in user
  server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid login credentials!');
    }
  });

  // Default route handler
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
