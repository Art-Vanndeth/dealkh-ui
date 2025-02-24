import { CartProductType } from '@/libs/difinition';
import { useGetProductsQuery } from '@/redux/service/product';
import { Card, CardBody, Image, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { StarIcon } from '@/components/review/StarIcon';

export default function DiscountCardComponent({ category, discountType }: any) {
  const router = useRouter();
  const { data, error } = useGetProductsQuery({
    page: 1,
    size: 8,
    category: category,
    discountType: discountType,
  });

  return (
    <main>
      {/* for the card section*/}
      <div className="flex flex-wrap justify-between gap-[25px]">
        {data?.payload.list.map((product: CartProductType) => (
          <Card
            onClick={() => router.push(`products/${product.slug}`)}
            key={product.slug}
            isPressable
            className=" relative mb-2 h-[386px] w-[284px] flex-none  rounded-xl  text-gray-50 shadow-none"
          >
            <CardBody className="relative h-[260px] overflow-visible rounded-b-lg px-4">
              <Link href={`products/${product.slug}`}>
                <Image
                  className="h-[193px] w-[284px] object-cover"
                  isZoomed
                  src={
                    product.images[0].url ||
                    'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
                  }
                  alt={product.name}
                />
              </Link>

              <span className="absolute right-0 top-0 z-20 h-[54px] w-[54px] rounded-bl-xl rounded-tr-xl bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 text-center text-[14px] font-semibold text-white">
                {`${product.discountValue}${product.isPercentage ? '%' : '$'} OFF`}
              </span>

              <div className="mt-4 h-[16] w-full">
                <div className={'flex items-center justify-between'}>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => {
                      if (product.ratingAvg >= index + 1) {
                        return (
                          <StarIcon
                            key={index}
                            filled
                            className="h-4 w-4 text-yellow-500"
                          />
                        );
                      } else if (product.ratingAvg >= index + 0.5) {
                        return (
                          <StarIcon
                            key={index}
                            half
                            className="h-4 w-4 text-yellow-500"
                          />
                        );
                      } else {
                        return (
                          <StarIcon
                            key={index}
                            className="h-4 w-4 text-yellow-500"
                          />
                        );
                      }
                    })}
                    <span className="ml-1 text-[13px] font-medium text-foreground-600">
                      ({product?.ratingCount}) Reviews
                    </span>
                  </div>
                </div>
              </div>
              <Link href={`products/${product.slug}`}>
                <h5 className="mt-1 h-[45px] text-[18px] font-semibold tracking-tight text-foreground-800">
                  {product.name.length > 60
                    ? `${product.name.substring(0, 45)}...`
                    : product.name || 'Product Name'}
                </h5>
              </Link>
              <div className="h-[30px] pt-2">
                <p className="text-[14px] font-medium text-foreground-600">
                  Shop :{' '}
                  <Link href="">
                    <span className="text-[14px] font-medium text-blue-800">
                      {product.shop.length > 30
                        ? `${product.shop.substring(0, 20)}...`
                        : product.shop || 'Shop Name'}
                    </span>
                  </Link>
                </p>
                <p className="text-[14px] font-medium text-foreground-600">
                  Expired date :{' '}
                  <span className="font-medium text-red-500">
                    {product.expiredAt}
                  </span>
                </p>
              </div>
              <div className="flex h-[30px] items-center justify-start pt-10 font-semibold">
                <span className="pt-1 text-xl font-bold text-foreground-500 line-through dark:text-white">
                  ${product.price || 'Price'}
                </span>
                <span className="ml-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  ${(product.price - product.discountPrice).toFixed(2) || '0'}
                </span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
