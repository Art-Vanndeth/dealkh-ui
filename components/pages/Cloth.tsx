"use client";

import React from 'react'
import { Link, Image } from '@nextui-org/react';
import DiscountCardComponent from '@/components/card/DiscountCardComponent';
import ClearanceCardComponent from '@/components/card/ClearanceCard';
import BuyMoreGetMoreComponent from '@/components/card/BuyMoreGetMore';
import NormalProductComponent from '@/components/card/NormalProduct';


export default function Cloth() {
  return (
    <main>
        {/* Banner */}
        <div className="">
          <Image
            src="https://img.freepik.com/free-vector/flat-black-friday-horizontal-sale-banner_23-2149109959.jpg?t=st=1717935027~exp=1717938627~hmac=4c369a82fa3fc373a501a9ec74e7f33cce217121447a5e47b8d90b4d8d857b23&w=1060"
            className="h-[320px] w-[1300px] object-cover" alt='clothes'
          ></Image>
        </div>
        {/* Top Sale */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[26px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Top <span className="text-[#eb7d52]">Sales</span>
            </p>
          </div>
          {/* Right section */}
        </div>
        <DiscountCardComponent category={"clothes"} discountType={"discount off"} />
        {/* Clearance Sale */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[26px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Clearance <span className="text-[#eb7d52]">Sales</span>
            </p>
          </div>
          {/* Right section */}
          
        </div>
        <ClearanceCardComponent category={"clothes"} discountType={"clearance sales"} />
        {/* Buy 1 Get 1 */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[26px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Buy More <span className="text-[#eb7d52]">Get More</span>
            </p>
          </div>
          {/* Right section */}
          
        </div>
        <BuyMoreGetMoreComponent category={"clothes"} discountType={"buy more get more"}/>
        {/* Coupon */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[26px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Shop <span className="text-[#eb7d52]">Coupon</span>
            </p>
          </div>
          {/* Right section */}
        </div>
        <DiscountCardComponent category={"clothes"} discountType={"shop coupons"}/>
        {/* Event */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[26px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
              Event
            </p>
          </div>
          {/* Right section */}
        </div>
        <NormalProductComponent category={"clothes"} discountType={"event"}/>
    </main>
  )
}
