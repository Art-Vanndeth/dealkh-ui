import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { Metadata } from 'next';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: '404 Not Found ',
  description: 'This is a Error Page 404',
  openGraph: {
    images: [
      {
        url: '/logo.png',
        alt: 'DealKH Logo Ecommerce Website',
      },
    ],
  },
};

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <Image
        src="/Error404.png"
        alt="Error404"
        width={500}
        height={400}
        className="animate-fadeIn mb-2"
      />
      <h1 className="animate-slideUp mb-3 text-center text-4xl font-bold text-blue-800">
        404 Not Found
      </h1>
      <p className="animate-slideUp text-2xl font-bold text-foreground">
        Whoops! That page does not exist.
      </p>
      <NextLink href="/">
        <Button
          radius="full"
          className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-center text-[14px] text-white"
        >
          Go Back Home
        </Button>
      </NextLink>
    </main>
  );
}
