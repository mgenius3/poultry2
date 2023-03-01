import React from 'react';
import { useRouter } from 'next/router';

export default function Completed() {
  const { query } = useRouter();
  const { slug } = query;
  return null;
}
