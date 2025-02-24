import React from 'react';
import { Metadata } from 'next';
import Service from '@/components/pages/Service';

export const metadata: Metadata = {
  title: 'Service Page',
  description: 'This is a Service Page',
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
      <Service />
    </main>
  );
}
