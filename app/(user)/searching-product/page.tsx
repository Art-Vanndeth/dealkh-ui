'use client';

import { useSearchParams } from 'next/navigation';
import { CartProductType, ProductType } from '@/libs/difinition';
import { useGetProductsQuery } from '@/redux/service/product';
import { Card, CardBody, Image, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import Error from '../error';

const SearchingProduct: React.FC = () => {

  const router = useRouter();

  const searchParams = useSearchParams();
  const searchValue = searchParams.get('searchValue') || '';
  
  const { data, isLoading, error } = useGetProductsQuery({
    page: 1,
    size: 10,
    category: '',
    discountType: ''
  });

  const filteredProducts = data?.payload.list.filter((product: ProductType) => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchValue.toLowerCase()); 
  }); 

  console.log("Here is Search Value: ", searchValue)
  
  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : error ? (
        <div>
          Error
        </div>
      ) : data?.payload.list.length === 0 ? (
        <div>No products found</div>
      ) : (
        <div className="flex flex-wrap justify-start my-8 gap-[25px]">
        {filteredProducts.map((product: CartProductType) => (
          <Card
            onClick={() => router.push(`/${product.slug}`)}
            key={product.slug}
            isPressable
            className=" dark:border-foreground-700 dark:bg-foreground-800 relative mb-2 h-[386px] w-[284px]  flex-none rounded-xl shadow-none"
            onPress={() => console.log('item pressed')}
          >
            <CardBody className="relative h-[260px] overflow-visible rounded-b-lg px-4">
              <Link href="#">
                <Image
                  className="h-[193px] w-[284px] object-cover"
                  src={
                    product.images[0].url ||
                    'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'
                  }
                  alt={product.name}
                />
              </Link>
              <span className="text-grey-50 absolute right-0 top-0 z-20 h-[54px] w-[54px] rounded-bl-xl rounded-tr-xl bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 text-center text-[14px] font-semibold">
                {product.discountValue}% OFF
              </span>
              <div className="mt-4 flex h-[20px]">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(Math.floor(product.ratingAvg))].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  {[...Array(5 - Math.floor(product.ratingAvg))].map(
                    (_, index) => (
                      <svg
                        key={index}
                        className="text-foreground-200 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    )
                  )}
                </div>

                <span className="text-foreground-600 ml-1 text-[15px] font-medium">
                  ({product.ratingAvg}) Reviews
                </span>
              </div>
              <Link href="#">
                <h5 className="text-foreground-800 mt-1 h-[45px] text-[18px] font-semibold tracking-tight">
                  {product.name.length > 60
                    ? `${product.name.substring(0, 45)}...`
                    : product.name || 'Product Name'}
                </h5>
              </Link>
              <div className="h-[30px] pt-2">
                <p className="text-foreground-600 text-[14px] font-medium">
                  Shop :{' '}
                  <Link href="">
                    <span className="text-info-800 text-[14px] font-medium">
                      {product.shop.length > 30
                        ? `${product.shop.substring(0, 20)}...`
                        : product.shop || 'Shop Name'}
                    </span>
                  </Link>
                </p>
                <p className="text-foreground-600 text-[14px] font-medium">
                  Expired date :{' '}
                  <span className="font-medium text-red-500">
                    {product.expiredAt}
                  </span>
                </p>
              </div>
              <div className="flex h-[30px] items-center justify-start pt-10 font-semibold">
                <span className="text-foreground-700 pt-1 text-base font-bold line-through dark:text-white">
                  ${product.price || 'Price'}
                </span>
                <span className="ml-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  ${product.discountPrice || 'Price'}
                </span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      )}
    </div>
  );
};

export default SearchingProduct;
