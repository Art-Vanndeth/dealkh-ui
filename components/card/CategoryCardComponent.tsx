'use client';
import React from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function CategoryCardComponent() {
  const list = [
    {
      title: 'Half Zip',
      img: 'https://i.pinimg.com/736x/21/3d/7f/213d7f72e9abed32959cd11b469c5ab6.jpg',
    },
    {
      title: 'Accessory',
      img: 'https://i.pinimg.com/736x/6a/a8/3d/6aa83d169c684beab2e9f2a6bd24e806.jpg',
    },
    {
      title: 'Vest',
      img: 'https://i.pinimg.com/564x/2a/4d/c3/2a4dc3ce036e764e3f291de19a71d1b1.jpg',
    },
    {
      title: 'Shorts',
      img: 'https://i.pinimg.com/564x/40/94/9e/40949ec7d315dcfe74872f36ac427ee6.jpg',
    },
    {
      title: 'Jeans',
      img: 'https://i.pinimg.com/564x/e7/9a/12/e79a1282d5e74dbed5bb43eb52bdf7d1.jpg',
    },
    {
      title: 'Shoes',
      img: 'https://i.pinimg.com/564x/52/8e/5f/528e5fff0ebc48a10dde023b8637fdfd.jpg',
    },
    {
      title: 'Shirt',
      img: 'https://i.pinimg.com/564x/e8/0c/ce/e80cce8a21752bee5c120cb6f7f9904e.jpg',
    },
    {
      title: 'Jacket',
      img: 'https://i.pinimg.com/564x/46/ca/70/46ca707457d79e53258eb48dcdf2908d.jpg',
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="lg:h-[300px] h-[150px] w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="justify-center text-[16px] font-semibold text-gray-700 dark:text-white">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* All Product */}
      <p className="my-12 text-center text-lg font-semibold text-gray-700 dark:text-gray-300 lg:text-3xl">
        All Products
      </p>
    </div>
  );
}
