import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import styles from '../styles/Home.module.css';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <div
      className={
        styles.container + 'work-sans leading-normal text-base tracking-normal'
      }
    >
      <Head>
        <title>{title ? title + ' - Riere Farm' : 'Riere Farm'}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://img.icons8.com/ios-filled/50/null/chicken.png"
        />
      </Head>

      <ToastContainer position="bottom-center" />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          {title &&
            (title == 'Login' ? null : title == 'Register' ? null : <Nav />)}
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
