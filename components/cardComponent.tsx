import { Image, Link } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

// Fake product data API URL
const API_URL = 'https://665d3148e88051d60405a47d.mockapi.io/api/v1/products/';

type Product = {
  id: number;
  name: string;
  image: string;
  shop_name: string;
  expired_date: any;
  original_price: number;
  discount_price: number;
  discount: number;
};

export default function CardComponent({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the fake API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      {/* for the detail of the card section */}
      <div className="my-8 flex items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="relative w-fit text-lg font-bold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-yellow-500">
            {category}
          </p>
        </div>

        {/* Right section */}
        <div className="flex items-center">
          <p className="mr-2 text-base">See More</p>
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            color="black"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#888888"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M42 24H6m24-12l12 12l-12 12"
            />
          </svg>
        </div>
      </div>

      {/* for the card section*/}
      <div className="flex flex-wrap justify-between gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-72 flex-none rounded-lg bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="absolute -right-[1px] -top-[0.5px] z-10 h-14 w-14 rounded-bl-[10%] rounded-tr-[10%] bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-1">
              <span className="text-start text-sm font-bold text-white">
                25% off
              </span>
            </div>
            <Link href="#">
              <div className="relative z-0 h-52 w-full">
                <Image
                  width="100%"
                  height="100%"
                  className="rounded-[7px] object-cover"
                  src={product.image}
                  alt='product'
                />
              </div>
            </Link>
            <div className="px-5 pb-5">
              {/* Star section or rating section */}
              <div className=" mt-2.5 flex items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  <svg
                    className="h-4 w-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                  5.0
                </span>
              </div>

              {/* description section */}
              <Link href="#">
                <h5 className="pt-2 text-xl font-bold tracking-tight text-black dark:text-white">
                  {product.name.length > 25
                    ? `${product.name.substring(0, 25)}...`
                    : product.name}
                </h5>
              </Link>

              <div className="pt-1">
                <p className="font-semibold text-gray-600 ">
                  Shop:{' '}
                  {product.shop_name.length > 20
                    ? `${product.shop_name.substring(0, 20)}...`
                    : product.shop_name}
                </p>
                <p className="font-semibold text-gray-600 ">
                  Expired date:
                  <span className="font-semibold text-red-600">
                    {formatDate(product.expired_date)}
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-start gap-4 pt-2 font-semibold">
                {/* original price */}
                <span className="pt-2 text-base font-bold text-gray-700 line-through dark:text-white">
                  ${product.original_price}
                </span>
                {/* discount price */}
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  ${product.discount_price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
