"use client"
import ShopProfileComponent from '@/components/shop-profile/ShopProfileComponent';
import { useGetShopsQuery } from '@/redux/service/shop';
import { ShopDetail } from '@/types/shopDtail';
import shopFakes, { ShopFake } from '@/types/shopFake';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ShopProfile = ({ params }: Props) => {
  const { slug } = params;

  const { data, isLoading, error } = useGetShopsQuery({
    page: 1,
    size: 10
  });

  const shopProfiles = data?.payload?.list.find(
    (shopProfile: ShopDetail) => shopProfile.slug === slug
  );

  if (!shopProfiles) {
    return <p>Shop Not Founded</p>;
  }

  return (
    <div>
      <ShopProfileComponent shopProfile={shopProfiles} />
    </div>
  );
};

export default ShopProfile;
