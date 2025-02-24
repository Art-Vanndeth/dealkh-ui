import React from 'react'
import Accessory from '@/components/pages/Accessory';
import { Metadata } from 'next';
import Products from '@/components/pages/AllProduct';
import Buy1Get1Component from '@/components/pages/Buy1Get1';

export const metadata: Metadata = {
  title: 'Buy More Get More Page',
  description: 'This is a Buy More Get More Page',
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
      <Buy1Get1Component/>
    </main>
  )
}
