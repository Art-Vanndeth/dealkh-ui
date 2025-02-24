import React from 'react';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { FaGripLinesVertical } from 'react-icons/fa';
import { MdOutlineDiscount } from 'react-icons/md';

export default function Header() {
  return (
    <div className="flex h-[30px] bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="lg:flex lg:w-full lg:items-center lg:justify-between lg:px-36 hidden">
        <div>
          <p className="relative text-sm text-white">Welcome to DealKh!</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span>
              <RiDiscountPercentLine className="font-extrabold text-white" />
            </span>
            <span className="ml-1 text-sm text-white">All Offers</span>
          </div>
          <span>
            <FaGripLinesVertical className="font-extrabold text-white" />
          </span>
          <div className="flex items-center">
            <span>
              <MdOutlineDiscount className="font-extrabold text-white" />
            </span>
            <span className="ml-1 text-sm text-white">Discount</span>
          </div>
        </div>
      </div>
    </div>
  );
}
