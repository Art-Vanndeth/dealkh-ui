import React from 'react';
import { useRouter } from 'next/navigation';
import { CouponData, couponData } from './couponData';
import { Image } from '@nextui-org/react';

type Props = {
  displayCount: number;
};

const CardCouponComponent: React.FC<Props> = ({ displayCount }) => {
  const router = useRouter();

  const handleClick = (couponId: number) => {
    router.push(`/coupons/${couponId}`);
  };

  // Determine the number of coupons to display based on displayCount prop
  const couponsToDisplay = displayCount === 2 ? couponData.slice(0, 2) : couponData;

  return (
    <div className="coupon-container flex flex-wrap lg:flex-row justify-between flex-col lg:pb-10">
      {couponsToDisplay.map((coupon: CouponData, index: number) => (
        <div
          key={index}
          onClick={() => handleClick(coupon.slug)}
          className="cursor-pointer relative"
        >
          <Image
            className="h-[250px] w-[550px] object-cover"
            src={coupon.image}
            alt={`Coupon ${coupon.slug}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CardCouponComponent;
