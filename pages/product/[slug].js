import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const { data: session } = useSession();

  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const bookNow = async (id, name, productName) => {
    await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, productName }),
    });
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href={`/`}>
          <a className="flex align-center justify-center secondary-button w-20 p-2">
            <img
              src="https://img.icons8.com/ios/50/null/home-page.png"
              width={20}
              className="mx-1"
            />{' '}
            <b> Home</b>
          </a>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>

        <div>
          <div className="card p-5">
            <div>
              <ul>
                <li>
                  <h1 className="text-lg">
                    <b>User Name: </b>
                    <small>{session?.user.name}</small>
                  </h1>
                </li>
                <li>
                  <h1 className="text-lg">
                    <b>Email: </b>
                    <small>{session?.user.email}</small>
                  </h1>
                </li>
                <li>
                  <h1 className="text-lg">
                    <b>Product Name: </b>
                    <small>{product?.name}</small>
                  </h1>
                </li>

                <li>
                  <b>Description: </b>
                  <small>{`Get it now at a affordable price`}</small>
                </li>
                <li>
                  <b>Status: </b>
                  <small>In stock</small>
                </li>
              </ul>
            </div>

            <Link
              href={
                session?.user
                  ? `https://wa.me/2347032273102/?text=${session?.user.email}: ${product?.name} -> (order)`
                  : '/login'
              }
            >
              <a>
                <button
                  className="primary-button w-full h-10 text-lg"
                  onClick={() =>
                    session?.user
                      ? bookNow(
                          session?.user._id,
                          session?.user.name,
                          product?.name
                        )
                      : null
                  }
                >
                  Book Now
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
