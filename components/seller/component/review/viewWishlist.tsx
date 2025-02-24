import React from 'react';
import { AiOutlineException } from "react-icons/ai";
import { VscRequestChanges } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa6";
import { RiPassExpiredLine } from "react-icons/ri";

const CardWishlistPromotion = () => { 
  return (
   <div className="flex gap-8">
     <div className="bg-white w-72 rounded-lg flex items-center p-4 ">
      <div className="mr-6 border-3 p-2 rounded-full border-warning">
        <FaRegHeart className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">All Wishlists</h3>
        <p className="text-lg text-black">354</p>
      </div>
    </div>
    <div className="bg-white rounded-lg  flex items-center p-4 w-72 ">
      <div className="mr-6 border-3 p-2 rounded-full border-warning">
      <AiOutlineException  className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">Total accepted</h3>
        <p className="text-lg text-black">24</p>
      </div>
    </div>
    <div className="bg-white rounded-lg flex items-center p-4 w-72 ">
      <div className="mr-6 border-3 border-warning p-2 rounded-full">
      <RiPassExpiredLine   className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">Total expired</h3>
        <p className="text-lg text-black">04</p>
      </div> 
    </div>
    <div className="bg-white rounded-lg flex items-center p-4 w-72 ">
      <div className="mr-6 border-3 border-warning p-2 rounded-full">
      <VscRequestChanges className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg pb-1 font-medium text-black">Total request</h3>
        <p className="text-lg text-black">50</p>
      </div> 
    </div>
   </div>
    
  );
};

export default CardWishlistPromotion;
