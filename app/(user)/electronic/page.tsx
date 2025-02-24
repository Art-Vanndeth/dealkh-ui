import React from 'react';
import { Metadata } from 'next';
import Electronic from '@/components/pages/Electronic';

export const metadata: Metadata = {
  title: 'Electronic Page',
  description: 'This is a Electronic Page',
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
      <Electronic />
    </main>
  );
}
