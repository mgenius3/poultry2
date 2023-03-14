import React from 'react';
const Sitemap = () => {
  return (
    <>
      {/*
        Add your website URLs here
        Note: the `key` prop is required for React to track changes in the array
      */}
      {['/', '/about', '/product', '/contact'].map((page) => (
        <url key={page}>{`${'https://rierefarm.com.ng'}${page}`}</url>
      ))}
    </>
  );
};

export default Sitemap;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n`);
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`);

  const { stream } = res; // Get the response stream

  // Pipe the XML data to the response stream
  stream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
  stream.write(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  );
  ['/', '/about', '/product', '/contact'].forEach((page) => {
    const url = `${'https://rierefarm.com.ng'}${page}`;
    stream.write(`<url><loc>${url}</loc></url>\n`);
  });
  stream.write('</urlset>\n');

  res.end();

  return { props: {} };
};
