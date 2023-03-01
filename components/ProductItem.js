import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
export default function ProductItem({ product }) {
  const { data: session } = useSession();

  return (
    <div className="card">
      <Link href={`/product/${product?.slug}`}>
        <a>
          <img
            src={product?.image}
            alt={product?.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product?.slug}`}>
          <h2 className="text-lg">{product?.name}</h2>
        </Link>

        <p>{`${product?.price}`}</p>
        <button className="primary-button" type="submit">
          {' '}
          Add to cart{' '}
        </button>
      </div>
    </div>
  );
}
