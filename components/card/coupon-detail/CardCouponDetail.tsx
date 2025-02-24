import { Image } from '@nextui-org/react';
import React from 'react';

type CouponData = {
  slug: number;
  images: string;
  name: string;
  duration: string;
  location: string;
  contact: string;
  type: string;
};

type Props = {
  coupon: CouponData;
};

const CardCouponDetail: React.FC<Props> = ({ coupon }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="overflow-hidden rounded bg-white p-8">
        <div className="grid grid-cols-1 content-center gap-8 lg:grid-cols-2">
          {/* Product Image */}  
          <div className="rounded-lg">
            <Image
              src={coupon.images}
              alt={coupon.name}
              className="h-full w-full rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="my-auto">
            {/* Product information */}
            <div className=''>
              <h1 className="text-2xl font-semibold text-gray-700 dark:text-white md:text-3xl">
                {coupon.name}
              </h1>
              {/* Shop and other details */}
              <div className="mt-4">
                <ul className="px-4 list-disc text-gray-600 dark:text-gray-300">
                  <li>{coupon.duration}</li>
                  <li>{coupon.location}</li>
                  <li>{coupon.contact}</li>
                  <li>{coupon.type}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCouponDetail;
