import React from 'react';
import { Metadata } from 'next';
import Drink from '@/components/pages/Drink';

export const metadata: Metadata = {
  title: 'Drink Page',
  description: 'This is a Drink Page',
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
      <Drink />
    </main>
  );
}
