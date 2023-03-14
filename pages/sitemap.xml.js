// import { NextApiResponse } from 'next';

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n`);
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`);

  // Add your website URLs here
  const pages = ['/', '/about', '/product', '/contact'];

  const baseUrl = 'https://rierefarm.com.ng';

  for (const page of pages) {
    const url = `${baseUrl}${page}`;
    res.write(`<url><loc>${url}</loc></url>\n`);
  }

  res.write(`</urlset>\n`);
  res.end();

  return { props: {} };
};
