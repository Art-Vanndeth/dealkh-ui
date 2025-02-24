import ShopProfileComponent from '@/components/shop-profile/ShopProfileComponent';
import React from 'react';

export default function page({ params }: any) {
  const { slug } = params;
  return (
    <div>
      <ShopProfileComponent shopProfile={slug} />
    </div>
  );
}
