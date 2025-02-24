import React from 'react';
import { Metadata } from 'next';
import Food from '@/components/pages/Food';

export const metadata: Metadata = {
  title: 'Food Page',
  description: 'This is a Food Page',
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
      <Food />
    </main>
  );
}
