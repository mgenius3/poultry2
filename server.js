const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === ` /api/auth/*`) {
        await app.render(req, res, '/api/auth/[...nextauth]', query);
      } else if (pathname) {
        await app.render(req, res, pathname, query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
