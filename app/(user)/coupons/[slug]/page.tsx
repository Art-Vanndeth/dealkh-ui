import React from 'react';
import CardCouponDetail from '@/components/card/coupon-detail/CardCouponDetail';
import { CouponDetail, couponDetail } from '@/components/card/coupon-detail/couponDetail';

// card coupon deatail
type Props = {
  params: {
    slug: number;
  };
};

const CouponDetailPage = ({ params }: Props) => {

  const { slug } = params;

  const coupons = couponDetail.find((coupon: CouponDetail) => coupon.slug == slug);

  if (!coupons) {
    return <p>Coupon not found</p>;
  }

  return ( 
    <div>
      <CardCouponDetail coupon={coupons} />
    </div>
  );
};

export default CouponDetailPage;
