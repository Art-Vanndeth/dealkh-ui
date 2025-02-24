import React from 'react';
import { Metadata } from 'next';
import SkinCare from '@/components/pages/SkinCare';

export const metadata: Metadata = {
  title: 'Skincare Page',
  description: 'This is a Skincare Page',
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
      <SkinCare />
    </main>
  );
}
