import React from 'react';
import { AiOutlineShop } from "react-icons/ai";

const CardViewSeller = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="bg-white dark:bg-zinc-900 rounded-lg flex items-center p-4 w-full sm:w-72">
        <div className="mr-4 border-2 p-3 rounded-full border-warning">
          <AiOutlineShop className="w-7 h-7 dark:text-gray-200" />
        </div>
        <div>
          <h3 className="text-lg mb-1 font-medium text-black dark:text-gray-200">Total Seller</h3>
          <p className="text-lg text-black dark:text-gray-200">20</p>
        </div>
      </div>
    </div>
  );
};

export default CardViewSeller;
