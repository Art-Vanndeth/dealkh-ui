import React from 'react';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WishlistComponent from '@/components/wishlistComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wishlist Page',
  description: 'This is a Wishlist Page',
};

export default function WishlistPage() {
  return (
    <>
      <WishlistComponent />
    </>
  );
}
