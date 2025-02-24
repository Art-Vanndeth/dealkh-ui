'use client';
import React from 'react';
import { Image, Link } from '@nextui-org/react';
import BuyMoreGetMoreComponent from '@/components/card/BuyMoreGetMore';

export default function Buy1Get1Component() {
  return (
    <main>
      {/* Banner */}
      <div className="">
        <Image
          src="https://img.freepik.com/premium-vector/this-weekend-sale-banner-illustration_275806-124.jpg?w=1060"
          className="h-[320px] w-[1300px] object-cover"
          alt="Banner"
        ></Image>
      </div>
      {/* Food */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Food
          </p>
        </div>
        {/* Right section */}
        <Link href="/food">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              color="black"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"food"} discountType={"buy more get more"}/>
      {/* Drink */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Drink
          </p>
        </div>
        {/* Right section */}
        <Link href="/drink">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"drink"} discountType={"buy more get more"}/>
      {/* Clothes */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Clothes
          </p>
        </div>
        {/* Right section */}
        <Link href="/cloth">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"clothes"} discountType={"buy more get more"}/>
      {/* Shoes */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Shoes
          </p>
        </div>
        {/* Right section */}
        <Link href="/shoe">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"shoes"} discountType={"buy more get more"}/>
      {/* Accessories */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Accessories
          </p>
        </div>
        {/* Right section */}
        <Link href="/accessory">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"accessories"} discountType={"buy more get more"}/>
      {/* Skin Care */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Skin <span className="text-[#eb7d52]">Care</span>
          </p>
        </div>
        {/* Right section */}
        <Link href="/skincare">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"skin-care"} discountType={"buy more get more"} />
      {/* Electronic */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        {/* Left section */}
        <div className="flex-1">
          <p className="text-foreground-700 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Electronic
          </p>
        </div>
        {/* Right section */}
        <Link href="/electronic">
          <div className="flex items-center  pt-1">
            <p className="text-foreground-700 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
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
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
      <BuyMoreGetMoreComponent category={"electronic"} discountType={"buy more get more"} />
    </main>
  );
}
