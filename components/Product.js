import React, { Fragment, useState } from 'react';
import data from '../utils/data';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
export default function Product() {
  const [newData, setNewData] = useState(data.products);

  console.log(newData);
  const { data: session } = useSession();

  const handleProductData = (e) => {
    if (!e.target.value || e.target.value == '')
      return setNewData(data.products);
    else {
      let a = data.products.filter((product) => {
        if (
          product?.name.toLowerCase().includes(e.target.value.toLowerCase()) ==
          true
        )
          return true;
        return false;
      });
      setNewData(a);
    }
  };

  return (
    <Fragment>
      {/* section */}
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
          <nav
            id="store"
            className="w-full z-30 top-0 px-6 py-1
           sh"
          >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Poultry Product
              </a>

              <div className="flex items-center" id="store-nav-content">
                <input
                  type="text"
                  placeholder="search"
                  onChange={handleProductData}
                />

                <a className="pl-3 inline-block no-underline hover:text-black flex items-center">
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          {newData.map((product, i) => (
            <Link href={`/product/${product?.slug}`} key={i}>
              <div
                className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
                key={product?.slug}
              >
                <a
                  href={
                    session?.user
                      ? `https://wa.me/2347032273102/?text=poultry:${product?.name}`
                      : '/login'
                  }
                >
                  <img
                    className="hover:grow hover:shadow-lg"
                    src={product?.image}
                  />
                </a>
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{product?.name}</p>{' '}
                  <button className="primary-button" type="submit">
                    {' '}
                    Book Now{' '}
                  </button>
                </div>
                {/* <p className="text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>{' '}
                  </p> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
