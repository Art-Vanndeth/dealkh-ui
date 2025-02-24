import React from 'react';
import { MdOutlineDirections } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { LuClock10 } from 'react-icons/lu';
import { BiCategory } from 'react-icons/bi';
import { Image } from '@nextui-org/react';
import { ShopFake } from '@/types/shopFake';
import { ShopDetail } from '@/types/shopDtail';

type Props = {
  shopProfile: ShopDetail;
};
export default function ShopProfileComponent({ shopProfile }: Props) {
  if (!shopProfile) {
    return null;
  }

  return (
    <div>
      {/* profile cover section */}
      <div className="mt-4 flex w-full flex-col items-center lg:flex-row">
        <div
          className="relative flex h-40 w-full justify-start rounded-lg bg-gray-800 lg:h-96"
          style={{
            backgroundImage:
              `url(${shopProfile.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute -bottom-5 left-8 flex translate-y-1/2 transform flex-col items-start justify-start lg:bottom-0 lg:flex-row">
            <Image
              src={shopProfile.profile}
              alt="Profile Picture"
              className="h-24 w-24 rounded-full border-4 border-white lg:h-40 lg:w-40"
            />
            <h1 className="self-center text-start text-lg font-semibold lg:ml-4 lg:mt-16 lg:text-2xl">
              {shopProfile.name}
            </h1>
          </div>
        </div>
      </div>

      {/* page details section */}
      <div className="mt-[74px] flex flex-col lg:mt-28 lg:flex-row">
        {/* description section */}
        <div className="mt-9 w-full lg:mt-0">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 lg:text-2xl">
            Page&apos;s Detail
          </p>
          <p className="mt-4 text-[16px] text-gray-600 dark:text-gray-300">
            {shopProfile.description}
          </p>

          {/* icons */}
          {/* location */}
          <div className="mt-4 flex flex-row gap-4">
            <div className="self-center text-[24px] text-gray-700">
              <MdOutlineDirections />
            </div>
            <p className="text-[16px] text-gray-600 dark:text-gray-300">
              {shopProfile.address}
            </p>
          </div>
          {/* phone number */}
          <div className="mt-4 flex flex-row gap-4">
            <div className="self-center text-[24px] text-gray-700">
              <HiOutlinePhone />
            </div>
            <p className="text-[16px] text-gray-600 dark:text-gray-300">
              {shopProfile.phoneNumber}
            </p>
          </div>
          {/* open and close */}
          <div className="mt-4 flex flex-row gap-4">
            <div className="self-center text-[24px] text-gray-700">
              <LuClock10 />
            </div>
            <p className="text-[16px] text-gray-600 dark:text-gray-300">
              {shopProfile.openAt.slice(0,5)}
              {"  to  "}
              {shopProfile.closeAt.slice(0,5)}
            </p>
          </div>
          {/* mail */}
          <div className="mt-4 flex flex-row gap-4">
            <div className="self-center text-[24px] text-gray-700">
              <BiCategory />
            </div>
            <p className="text-[16px] text-gray-600 dark:text-gray-300">
              {shopProfile.shopType}
            </p>
          </div>
        </div>

        {/* map section */}
        {/* <div className="w-full h-24">
        </div> */}
      </div>

      {/* category */}
      <p className="my-12 text-center text-lg font-semibold text-gray-700 dark:text-gray-300 lg:text-3xl">
        Category
      </p>
    </div>
  );
}
