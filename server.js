const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'rierefarm.com.ng';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      // const { pathname, query } = parsedUrl;
      // if (pathname) {
      //   console.log(pathname);
      //   let a = await app.render(req, res, pathname, query);
      //   console.log('28', a);
      // } else if (pathname) {
      //   let b = await app.render(req, res, pathname, query);
      //   console.log('31', b);
      // } else {
      //   await handle(req, res, parsedUrl);
      // }
      await handle(req, res, parsedUrl);
    } catch (err) {
      res.json({ msg: err });
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
