import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';

export default function NotFoundPage() {
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-foreground-100 p-4 text-center">
        <Image
          src="/Error404.png"
          alt="Error404"
          width={400}
          height={350}
          className="animate-fadeIn mb-4"
        />
        <h1 className="animate-slideUp mb-2 text-center text-2xl font-bold text-orange-500">
          404 Not Found
        </h1>
        <p className="animate-slideUp text-lg text-foreground">
          Whoops! That page doesn&apos;t exist.
        </p>
        <Button
          as={Link}
          href="/"
          radius={'full'}
          color="danger"
          className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-center text-[14px] text-white"
        >
          Go Back Home
        </Button>
      </div>
    </>
  );
}
