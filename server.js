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

const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: '.', conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:443');
  });
});
