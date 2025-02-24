import React from 'react';
import { Metadata } from 'next';
import Shoe from '@/components/pages/Shoe';

export const metadata: Metadata = {
  title: 'Shoes Page',
  description: 'This is a Shoes Page',
  openGraph: {
    images: [
      {
        url: '/icon.png',
        alt: 'DealKH Logo Ecommerce Website',
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <Shoe />
    </main>
  );
}
