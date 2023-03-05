import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import styles from '../styles/Home.module.css';
import Nav from './Nav';
import Footer from './Footer';
import { Fragment } from 'react';

export default function Layout({ title, children }) {
  return (
    <Fragment>
      <div
        className={
          styles.container +
          'work-sans leading-normal text-base tracking-normal'
        }
      >
        {' '}
        <Head>
          <title>{title ? title + ' - Riere Farm' : 'Riere Farm'}</title>
          <meta
            name="description"
            content="Riere farm is a  poultry farm, offering fresh eggs and chicken for sale. Visit us today to learn more about our products and services"
          />
          <meta charset="UTF-8" />
          <meta
            name="keywords"
            content="poultry, chicken , eggs, farming, boiler, cat, fish,"
          />
          <meta name="author" content="Riere Farm" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link
            rel="icon"
            href="https://img.icons8.com/ios-filled/50/null/chicken.png"
          />

          <meta
            name="google-site-verification"
            content="350PWxVOE4-U46xDGv-EV8rg8ahVXtdOIHr_kT4JnIU"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2057294743524368"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <ToastContainer position="bottom-center" />
        <div className="flex min-h-screen flex-col justify-between">
          <header>
            {title &&
              (title == 'Login' ? null : title == 'Register' ? null : <Nav />)}
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
        </div>{' '}
        <Footer />{' '}
      </div>
    </Fragment>
  );
}
