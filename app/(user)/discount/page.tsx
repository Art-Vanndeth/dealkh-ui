import React from 'react';
import { Metadata } from 'next';

import Discount from '@/components/pages/DiscountOff';

export const metadata: Metadata = {
  title: 'Discount Off Page',
  description: 'This is a Discount Off Page',
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
      <Discount />
    </main>
  );
}
