import React from 'react';
import { Metadata } from 'next';
import FlashSale from '@/components/pages/FlashSale';

export const metadata: Metadata = {
  title: 'FlashSale Page',
  description: 'This is a FlashSale Page',
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
      <FlashSale />
    </main>
  );
}
