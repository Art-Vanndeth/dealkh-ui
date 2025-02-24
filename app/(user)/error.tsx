'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@nextui-org/react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="grid h-screen place-content-center text-6xl">
      <Image
        src="/Error500.png"
        alt="Error500"
        width={500}
        height={400}
        className="animate-fadeIn mb-4"
      />
      <h2>Something went wrong!</h2>
      {error && <p className="text-red-500">{error.message}</p>}
      <Button
        color="danger"
        className="my-4 rounded-xl p-4 font-medium text-white"
        onClick={reset}
      >
        Try again
      </Button>
    </div>
  );
}
