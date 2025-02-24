'use client';

import { useGetShopsQuery } from '@/redux/service/shop';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShopDetailFake } from '@/types/shopDetailFake';
import ShopNearbyComponent from '@/components/search/ShopNearbyComponent';
import Loading from '../loading';

const ShopsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('searchValue') || '';

  const { data, isLoading, error } = useGetShopsQuery({
    page: 1,
    size: 10,
    field: '',
    fieldName: '',
  });

  const filteredProducts = data?.payload.list.filter(
    (product: ShopDetailFake) => {
      const productName = product.name.toLowerCase();
      return productName.includes(searchValue.toLowerCase());
    }
  );

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error:</div>;
  }

  return (
    <div>
      {filteredProducts?.map((shop: ShopDetailFake) => (
        <ShopNearbyComponent key={shop.slug} shop={shop} />
      ))}
    </div>
  );
};

export default ShopsPage;
