import React from 'react'
import Accessory from '@/components/pages/Accessory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessory Page',
  description: 'This is a Accessory Page',
  openGraph: {
    images: [
      {
        url: '/icon.png',
        alt: "DealKH Logo Ecommerce Website",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <Accessory/>
    </main>
  )
}
