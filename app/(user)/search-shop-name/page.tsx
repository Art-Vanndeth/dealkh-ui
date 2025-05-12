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
  });

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
    
    </div>
  );
};

export default ShopsPage;
