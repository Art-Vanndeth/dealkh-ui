import { CartProductType } from '@/libs/difinition';
import { addToWishList, removeFromWishList, selectWishlistProducts } from '@/redux/feature/wishList/wishListSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetProductsQuery } from '@/redux/service/product';
import { Card, CardBody, Image, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

export default function BuyMoreGetMoreComponent({category,discountType}:any) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const wishlistProducts = useAppSelector(selectWishlistProducts);

  const { data, isLoading, error } = useGetProductsQuery({
    page: 1,
    size: 8,
    category:category,
    discountType:discountType
  });
  // Initialize the heart state for each product
  const [heartStates, setHeartStates] = useState<Record<string, boolean>>({});

  // Load heart state from local storage on mount
  useEffect(() => {
    const savedHeartStates = localStorage.getItem('heartStates');
    if (savedHeartStates) {
      setHeartStates(JSON.parse(savedHeartStates));
    }
  }, []);

  const handleHeartClick = (product: CartProductType) => {
    setHeartStates((prevHeartStates) => {
      const isAddedToWishlist = !prevHeartStates[product.slug];
      const updatedHeartStates = {
        ...prevHeartStates,
        [product.slug]: isAddedToWishlist, // Toggle the heart state
      };

      if (isAddedToWishlist) {
        dispatch(addToWishList(product));
      } else {
        dispatch(removeFromWishList(product.slug));
      }

      localStorage.setItem('heartStates', JSON.stringify(updatedHeartStates));
      return updatedHeartStates;
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-7">
        {data?.payload.list.map((product: CartProductType) => (
          <Card
            onClick={() => router.push(`/${product.slug}`)}
            key={product.slug}
            isPressable
            className="relative mb-2 h-[330px] w-[285px] flex-none rounded-xl border-1 border-foreground-200  bg-foreground-100 shadow-none dark:border-foreground-700  dark:bg-foreground-800"
          >
            <CardBody className="relative h-[230px] overflow-visible rounded-b-lg px-4">
              <Link href="#">
                <Image
                  onClick={() => router.push(`/${product.slug}`)}
                  className="h-[160px] w-[284px] object-cover"
                  isZoomed
                  src={
                    product.images[0].url ||
                    'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
                  }
                  alt={product.name}
                />
              </Link>
              <span className="absolute right-4 top-3 z-20 h-[54px] w-[54px] rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 text-center text-[14px] font-medium text-white">
                BUY 1 GET 1
              </span>
              <div className="flex flex-wrap justify-between">
                  <h5 className="mt-3 h-[45px] w-[160px] text-[18px] font-semibold tracking-tight text-gray-800 dark:text-white">
                    {product.name.length > 30
                      ? `${product.name.substring(0, 26)}...`
                      : product.name}
                  </h5>
                  <div
                  className="right-4 mt-3 cursor-pointer"
                  onClick={() => handleHeartClick(product)}
                >
                  <div key={product.slug}>
                    {heartStates[product.slug] ? (
                      <FaHeart className="h-[25px] w-[25px] text-[#eb7d52]" />
                    ) : (
                      <FaRegHeart className="h-[25px] w-[25px] text-[#eb7d52]" />
                    )}
                  </div>
                  </div>
              </div>
              <div className=" h-[30px] pt-3">
                <p className="text-[14px] font-medium text-foreground-600 ">
                  Shop :{' '}
                  <Link href="">
                    <span className="text-[14px] font-medium text-blue-800">
                      {product.shop.length > 20
                        ? `${product.shop.substring(0, 20)}...`
                        : product.shop}
                    </span>
                  </Link>
                </p>
                <p className="text-[14px] font-medium text-foreground-600 ">
                  Expired date :{' '}
                  <span className="font-medium text-red-500">
                    {product.expiredAt}
                  </span>
                </p>
              </div>
              <span className="bg-gradient-to-r from-pink-500 from-20% to-yellow-500 to-100% bg-clip-text pt-8 text-2xl font-bold text-transparent">
                ${product.price}
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
