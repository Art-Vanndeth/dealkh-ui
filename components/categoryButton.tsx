// components/CategoryButton.tsx
import React from 'react';
import { CategoryIcon } from './icons';
import Link from 'next/link';
import { BiCategoryAlt } from 'react-icons/bi';

interface CategoryButtonProps {
  categories: string[];
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ categories }) => {
  const half = Math.ceil(categories.length / 2);
  const firstColumn = categories.slice(0, half);
  const secondColumn = categories.slice(half);

  return (
    <div className="group relative inline-block text-left">
      <button className="inline-flex justify-center px-2 py-2  text-[30px]  font-medium text-[#eb7d52] transition-all duration-300 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-warning focus:ring-offset-2 dark:text-white">
        <BiCategoryAlt />
      </button>
      <div className="absolute left-0 mt-1 hidden w-[600px] origin-top-left grid-cols-2 gap-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:grid ">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <h1 className="text-gray py-2 text-center text-warning">Product</h1>
          {firstColumn.map((category, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(category.toLowerCase())}`}
              passHref
              className="block px-4 py-2 text-sm text-gray-700 transition-all ease-in-out hover:bg-warning hover:text-white"
              role="menuitem"
            >
              {category}
            </Link>
          ))}
        </div>
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <h1 className="text-gray py-2 text-center text-warning">Promotion</h1>
          {secondColumn.map((category, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(category.toLowerCase())}`}
              passHref
              className="block px-4 py-2 text-sm text-gray-700 transition-all duration-300 ease-in-out hover:bg-warning hover:text-white"
              role="menuitem"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryButton;
