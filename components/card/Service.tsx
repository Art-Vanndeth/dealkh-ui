'use client';
'use client';
import { CartProductType } from '@/libs/difinition';
import { addToCart, removeFromCart } from '@/redux/feature/cart/cartSlice';
import { useAppDispatch } from '@/redux/hook';
import { useGetProductsQuery } from '@/redux/service/product';
import { Card, Image, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import React, { useState, useEffect } from 'react';
import { addToWishList, removeFromWishList } from '@/redux/feature/wishList/wishListSlice';
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';

export default function ServiceCardComponent({category,discountType}:any) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [heartStates, setHeartStates] = useState<Record<string, boolean>>({});
  const [cartStates, setCartStates] = useState<Record<string, boolean>>({});

  const { data, isLoading, error } = useGetProductsQuery({
    page: 1,
    size: 4,
    category:category,
    discountType:discountType
  });
  
  // load saved states from local storage when the component mounts.
  useEffect(() => {
    const savedHeartStates = localStorage.getItem('heartStates');
    if (savedHeartStates) {
      setHeartStates(JSON.parse(savedHeartStates));
    }
  
    const savedCartStates = localStorage.getItem('cartStates');
    if (savedCartStates) {
      setCartStates(JSON.parse(savedCartStates));
    }
  }, []);

  // toggle the state for a product when the heart icon is clicked.
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
   // toggle the state for a product when the cart icon is clicked.
  const handleCartClick = (product: CartProductType) => {
    setCartStates((prevCartStates) => {
      const isAddedToCart = !prevCartStates[product.slug];
      const updatedCartStates = {
        ...prevCartStates,
        [product.slug]: isAddedToCart, // Toggle the cart state
      };
  
      if (isAddedToCart) {
        dispatch(addToCart(product));
      } else {
        dispatch(removeFromCart(product.slug));
      }
  
      localStorage.setItem('cartStates', JSON.stringify(updatedCartStates));
      return updatedCartStates;
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[38px] ">
        {data?.payload.list.map((product: CartProductType) => (
          <Card key={product.slug} className="w-[595px]  shadow-none">
            <div className="flex p-2">
              <Link href="#">
                <Image
                  className="h-[193px] w-[250px] object-cover"
                  src={
                    product.images[0].url ||
                    'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
                  }
                  alt={product.name}
                />
              </Link>
              <div className="item-start w-[300px] pl-4 text-left">
                <a href="#">
                  <h5 className="h-[50px] text-lg font-semibold tracking-tight text-foreground-800 dark:text-white">
                    {product.name.length > 50
                      ? `${product.name.substring(0, 50)}...`
                      : product.name || 'Product Name'}
                  </h5>
                </a>
                <div className="my-3 flex flex-col gap-1">
                  <p className="text-sm text-foreground-600">
                    Shop :{' '}
                    <Link href="">
                      <span className="text-info-800 text-sm font-medium">
                        {product.shop || 'Shop Name'.length > 30
                          ? `${product.shop || 'Shop Name'.substring(0, 20)}...`
                          : product.shop || 'Shop Name'}
                      </span>
                    </Link>
                  </p>
                  <p className="text-sm text-foreground-600">
                    Expired date :{' '}
                    <span className="text-sm font-medium text-red-500">
                      {product.expiredAt}
                    </span>
                  </p>
                  <p className="text-sm text-foreground-600">
                    Open :{' '}
                    <span className="text-sm font-medium text-foreground-900">
                      09:00 AM - 08:00 PM
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mt-3">
                    <span className="text-base text-foreground-500 dark:text-white">
                      From
                    </span>
                    <span className="ml-3 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-[28px] font-semibold text-transparent">
                      ${product.price}
                    </span>
                  </div>
                  <div className="mt-3 flex justify-end gap-[15px]">
                    <div
                  className="cursor-pointer"
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
                 <div className="cursor-pointer"
                  onClick={() => handleCartClick(product)}>
                 <div key={product.slug}>
                    {cartStates[product.slug] ? (
                      <MdShoppingCart className="h-[25px] w-[25px] text-[#eb7d52]" />
                    ) : (
                      <MdOutlineShoppingCart className="h-[25px] w-[25px] text-[#eb7d52]" />
                    )}
                  </div>
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
