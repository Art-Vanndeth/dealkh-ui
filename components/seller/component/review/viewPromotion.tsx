import React from 'react';
import { TbRosetteDiscount } from "react-icons/tb";
import { RiCouponLine } from "react-icons/ri";
import { IoFlashOutline } from "react-icons/io5";
import { GrClearOption } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";

const CardViewPromotion = () => { 
  return (
   <div className="flex gap-8">
     <div className="bg-white rounded-lg  flex items-center p-4 w-64 ">
      <div className="mr-4 border-3 p-2 rounded-full border-warning">
      <RiCouponLine className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Coupons</h3>
        <p className="text-lg text-black">24</p>
      </div>
    </div>
    <div className="bg-white rounded-lg  flex items-center p-4 w-64 ">
      <div className="mr-4 border-3 p-2 rounded-full border-warning">
      <RiCoupon3Line className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Boost Ads</h3>
        <p className="text-lg text-black">78</p>
      </div>
    </div>
    <div className="bg-white rounded-lg flex items-center p-4 w-64 ">
      <div className="mr-4 border-3 border-warning p-2 rounded-full">
      <TbRosetteDiscount   className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Discount</h3>
        <p className="text-lg text-black">67</p>
      </div> 
    </div>
    <div className="bg-white rounded-lg flex items-center p-4 w-64 ">
      <div className="mr-4 border-3 border-warning p-2 rounded-full">
      <IoFlashOutline className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Flash Sale</h3>
        <p className="text-lg text-black">98</p>
      </div> 
    </div>
    <div className="bg-white rounded-lg flex items-center p-4 w-64 ">
      <div className="mr-4 border-3 border-warning p-2 rounded-full">
      <GrClearOption    className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Clearance</h3>
        <p className="text-lg text-black">78</p>
      </div> 
    </div>
   </div>
    
  );
};

export default CardViewPromotion;
