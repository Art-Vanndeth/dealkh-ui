// CardShop.tsx
import { Card, CardBody, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ShopDetail } from '@/types/shopDtail';

type CardShopProps = {
  shop: ShopDetail;
};

const SearchNearbyShopComponent: React.FC<CardShopProps> = ({ shop }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/shop/${shop.slug}`);
  };

  return (
    <div>
      <Card
        key={shop.slug}
        isPressable
        onPress={handleCardClick}
        className="my-8 w-full shadow-none"
      >
        <CardBody className="flex flex-row ">
          {/* image section */}
          <div className="h-64 w-1/3 rounded-2xl">
            <Image
              className="h-64 w-screen object-cover"
              src={
                shop.profile ||
                'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
              }
              alt={shop.name}
            />
          </div>

          {/* context section */}
          <div className="my-auto ml-8 w-2/3 text-foreground-600">
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-foreground-800 dark:text-white">
                {shop.name.length > 50
                  ? `${shop.name.substring(0, 20)}...`
                  : shop.name || 'Shop Name'}
              </h5>
            </a>
            <p>
              {shop.description.length > 115
                ? `${shop.description.substring(0, 115)}...`
                : shop.description || 'Product Description'}
            </p>

            <div className="my-2 flex flex-col gap-1">
              <p className=" text-foreground-600">
                Category :{' '}
                <span className="font-medium text-foreground-900">
                  {shop.shopType || 'Product Category'}
                </span>
              </p>
              <p className="text-sm text-foreground-600">
                Open :{' '}
                <span className="text-sm font-medium text-foreground-900">
                  {shop.openAt}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <span className=" text-sm text-foreground-900 dark:text-white">
                  Available Now.
                  <p>Get Notified.</p>
                </span>
              </div>
              <a
                href="#"
                className="h-[37px] w-[130px] rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 pt-2 text-center text-[14px] text-white"
              >
                Check Us Out
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchNearbyShopComponent;
