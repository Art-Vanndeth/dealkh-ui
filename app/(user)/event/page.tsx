import React from 'react';
import { Metadata } from 'next';
import Event from '@/components/pages/Event';

export const metadata: Metadata = {
  title: 'Event Page',
  description: 'This is a Event Page',
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
      <Event />
    </main>
  );
}
