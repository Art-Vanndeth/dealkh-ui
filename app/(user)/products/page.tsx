import React from 'react';
import { Metadata } from 'next';
import Products from '@/components/pages/AllProduct';
import { fileImgUrl } from '@/libs/ImageUrl';

export const metadata: Metadata = {
  title:
    'Discover the Best Deals, Coupons, and Promotions in Cambodia - DealKH',
  description:
    'Explore a wide range of deals, coupons, and promotions from various shops in Cambodia. Save big on your shopping with exclusive offers at DealKH.',
  keywords:
    'Cambodia deals, Cambodia coupons, Cambodia promotions, shop deals, shopping discounts, exclusive offers, DealKH',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dealkh.com/products',
    title:
      'Discover the Best Deals, Coupons, and Promotions in Cambodia - DealKH',
    description:
      'Explore a wide range of deals, coupons, and promotions from various shops in Cambodia. Save big on your shopping with exclusive offers at DealKH.',
    images: [
      {
        url: fileImgUrl('/icon.png'),
        alt: 'DealKH Logo Ecommerce Website',
      },
      {
        url: fileImgUrl('/banner.jpg'),
        alt: 'Exclusive Shopping Deals in Cambodia',
      },
    ],
    siteName: 'dealkh.istad.co',
  },
};

export default function page() {
  return (
    <main>
      <Products />
    </main>
  );
}
