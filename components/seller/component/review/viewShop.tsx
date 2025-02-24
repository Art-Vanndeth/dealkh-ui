import React from 'react';``
import { AiOutlineShop } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
const CardViewShop = () => { 
  return (
   <div className="flex gap-8">
     <div className="bg-white rounded-lg  flex items-center p-4 w-72 ">
      <div className="mr-4 border-3 p-3 rounded-full border-warning">
      <AiOutlineShop className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-lg mb-1 font-medium text-black">Total Shop</h3>
        <p className="text-lg text-black">20</p>
      </div>
    </div>
    <div className="bg-white rounded-lg  flex items-center p-4 w-72 ">
      <div className="mr-4 border-3 p-3 rounded-full border-warning">
      <FaRegUser  className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg mb-1 font-medium text-black">Shopkeeper</h3>
        <p className="text-lg text-black">Hom Pheakakvotey</p>
      </div>
    </div>

   </div>
    
  );
};

export default CardViewShop;
