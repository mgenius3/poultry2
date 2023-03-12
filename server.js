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

const User = require('./models/User');
const Order = require('./models/Order');
const db = require('./utils/db');
const bcryptjs = require('bcryptjs');

app.prepare().then(() => {
  const server = express();

  // Middleware to parse JSON request body
  server.use(bodyParser.json());

  // Route for checking user exists
  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      await db.connect();
      const user = await User.findOne({
        email,
      });

      await db.disconnect();
      if (user && bcryptjs.compareSync(password, user.password)) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      } else res.status(404).json({ message: 'Invalid email or password' });
    } catch (err) {
      res.status(500).json({ msg: 'error occured, try again later' });
      throw err(err.message);
    }
  });

  // Route for logging in user
  server.post('/api/register', async (req, res) => {
    await db.connect();
    let { name, email, password } = req.body;

    try {
      // Check if user already exists in database
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ message: 'User with that email already exists' });
      }

      // Create new user object
      user = new User({ name, email, password });

      // Save new user to database
      let newuser = await user.save();

      res.status(201).json({
        _id: newuser._id,
        name: newuser.name,
        email: newuser.email,
        isAdmin: newuser.isAdmin,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
      await db.disconnect();
    }
  });

  ///Admin
  server.get('/api/order', async (req, res) => {
    try {
      await db.connect();
      // fetch all user
      let order = await Order.find();
      if (order) {
        await db.disconnect();
        return res.status(200).json({ data: order });
      }
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  server.post('/api/order', async (req, res) => {
    const { id, name, productName } = req.body;
    await db.connect();
    try {
      let order = new Order({ id, name, productName });
      //save to db
      await order.save();

      res.status(200).json({ message: 'successful' });
      await db.disconnect();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  server.post('/api/complete', async (req, res) => {
    const { id } = req.body;
    await db.connect();
    try {
      //save to db
      let update = await Order.findOneAndUpdate(
        { _id: id },
        {
          status: 'complete',
        }
      );

      if (update) res.status(200).json({ message: 'update successfully' });
      else {
        res.status(404).json({ message: 'update unsuccessful' });
      }
      await db.disconnect();
    } catch (err) {
      res.status(500).json({ message: err.message });
      await db.disconnect();
    }
  });

  server.get('/api/user', async (req, res) => {
    try {
      await db.connect();
      // Check if user already exists in database
      let user = await User.find();
      if (user) {
        return res.status(200).json({ data: user });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  server.get('/fuck/user', async (req, res) => {
    try {
      await db.connect();
      // Check if user already exists in database
      let user = await User.find();
      if (user) {
        return res.status(200).json({ data: user });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
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
