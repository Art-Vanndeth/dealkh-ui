"use client";

import React from 'react'
import { Link, Image } from '@nextui-org/react';
import DiscountCardComponent from '@/components/card/DiscountCardComponent';
import ClearanceCardComponent from '@/components/card/ClearanceCard';
import BuyMoreGetMoreComponent from '@/components/card/BuyMoreGetMore';
import NormalProductComponent from '@/components/card/NormalProduct';


export default function Electronic() {
  return (
    <main>
        {/* Banner */}
        <div className="">
          <Image
            src="https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143831.jpg?t=st=1717935173~exp=1717938773~hmac=36309abc8dd1aefb16e2b22339ae5d432527eaa96465dae3a338e37781aaad97&w=1380"
            className="h-[320px] w-[1300px] object-cover" alt='Electronic'
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
        <DiscountCardComponent category={"electronic"} discountType={"discount off"}/>
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
        <ClearanceCardComponent category={"electronic"} discountType={"clearance sales"}/>
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
        <BuyMoreGetMoreComponent category={"electronic"} discountType={"buy more get more"}/>
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
        <DiscountCardComponent category={"electronic"} discountType={"discount off"}/>
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
        <NormalProductComponent category={"electronic"} discountType={"no discount"}/>
    </main>
  )
}
