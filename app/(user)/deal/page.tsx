import React from 'react';
import { Metadata } from 'next';

import Deal from '@/components/pages/Deal';

export const metadata: Metadata = {
  title: 'Deal Page',
  description: 'This is a Deal Page',
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
      <Deal />
    </main>
  );
}
