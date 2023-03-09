const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { decode } = require('react-error-decoder');

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

      console.log(pathname);
      console.log(process.env.NODE_ENV);
      console.log(
        decode(
          'Minified React error #31; visit https://reactjs.org/docs/error-decoder.html?invariant=31&args[]=%5Bobject%20Promise%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings'
        )
      );
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
      res.status(500).json({ msg: err });
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
