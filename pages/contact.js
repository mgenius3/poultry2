import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Link from 'next/link';
export default function ContactScreen() {
  return (
    <Fragment>
      <Layout title="Contact">
        <h1 className="text-center text-base capitalize text-xl pt-20 font-bold">
          Contact <b style={{ color: 'green' }}>Riere Farm</b>
        </h1>
        <Contact />
      </Layout>
    </Fragment>
  );
}
