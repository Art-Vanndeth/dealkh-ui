import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AboutPageComponent from '@/components/about-page/AboutPageComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is a About Page',
  openGraph: {
    images: [
      {
        url: '/icon.png',
        alt: 'DealKH Logo Ecommerce Website',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageComponent />
    </>
  );
}
