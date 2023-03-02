// import Layout from '@/components/Layout';
// import SEO from '/components/SEO';
// import '@/styles/globals.css';
// import Layout from '../components/Layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
