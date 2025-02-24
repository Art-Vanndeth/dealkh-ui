// CardDetailComponent.jsx
'use client';
import { ProductDetail } from '@/types/productDetail';
import { Button, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '@/styles/swiper.css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import {
  useGetProductFeedbackQuery,
  useGetProductRatingsByProductSlugQuery,
} from '@/redux/service/ratingAndFeedback';
import Loading from '@/app/(user)/loading';
import { StarIcon } from '@/components/review/StarIcon';

export default function CardDetailComponent({
  id,
  name,
  category,
  description,
  images,
  shopName,
  discountType,
  originalPrice,
  discountPrice,
  open,
  promotionDate,
  expiryDate,
}: ProductDetail) {
  const router = useRouter();
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const {
    data: ratingsData,
    error: ratingError,
    isLoading: ratingLoading,
  } = useGetProductRatingsByProductSlugQuery({ productSlug: id });
  const {
    data: feedbackData,
    error: feedbackError,
    isLoading: feedbackLoading,
  } = useGetProductFeedbackQuery({ productSlug: id });

  useEffect(() => {
    if (ratingsData) {
      const totalRating = ratingsData.reduce(
        (sum, rating) => sum + rating.ratingValue,
        0
      );
      const average = totalRating / ratingsData.length;
      setAverageRating(average);
      setTotalReviews(ratingsData.length);
    }
  }, [ratingsData]);

  const roundedRating =
    averageRating > 4.5 && averageRating < 5
      ? 4.5
      : Math.round(averageRating * 2) / 2;

  if (ratingLoading || feedbackLoading) return <Loading />;
  if (ratingError || feedbackError)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-gray-500">Error loading data</div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 lg:py-8">
      <div className="grid grid-cols-1 content-center gap-8 sm:grid-cols-2">
        {/* Product Image */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          className="h-full w-full md:w-[80%] "
          loop={true}
          effect={'fade'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={'rounded-2xl'}>
              <div className="overflow-hidden rounded-2xl border-2 border-foreground/80 bg-foreground-100 ">
                <Image
                  isZoomed
                  isBlurred
                  src={image.url}
                  alt={name}
                  radius={'lg'}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Product Details */}
        <div className="md:flex md:flex-col md:gap-4">
          {/* Star section */}
          <div className="mb-2 flex items-center">
            {[...Array(5)].map((_, index) => {
              const isHalf = roundedRating - index === 0.5;
              return (
                <StarIcon
                  key={index}
                  filled={index < Math.floor(roundedRating)}
                  half={isHalf}
                  className="h-5 w-5 text-yellow-500"
                />
              );
            })}
            <span className="text-fourground-600 pl-2 text-sm dark:text-white">
              {totalReviews} Reviews
            </span>
          </div>
          {/* Product information */}
          <div>
            <h1 className="text-fourground-700 text-2xl font-semibold dark:text-white md:text-3xl">
              {name}
            </h1>
            <p className="text-fourground-600 dark:text-fourground-300 mt-4">
              {description}
            </p>
            {/* Price */}
            <div className="mt-4 flex text-foreground-400 md:flex-row">
              <p className="text-lg font-bold line-through dark:text-white md:mr-3">
                ${originalPrice}
              </p>
              <p className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                ${(originalPrice - discountPrice).toFixed(2)}
              </p>
            </div>
            {/* Shop and other details */}
            <div className="mt-4 space-y-2">
              <p className="text-fourground-600 dark:text-fourground-300 text-sm">
                Shop: <span className="font-semibold">{shopName}</span>
              </p>
              <p className="text-fourground-600 dark:text-fourground-300 text-sm">
                Open: {open}
              </p>
              <p className="text-fourground-600 dark:text-fourground-300 text-sm">
                Discount Type:{' '}
                <span className="font-semibold">{discountType}</span>
              </p>
              <p className="text-fourground-600 dark:text-fourground-300 text-sm">
                Promotion Date:{' '}
                <span className="font-semibold text-red-600">
                  {promotionDate}
                </span>
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Button
              variant={'solid'}
              radius={'lg'}
              className=" cursor-pointer border-1  border-warning-500 bg-foreground-50  hover:bg-foreground-100"
            >
              Add to Cart
            </Button>
            <Button
              radius={'lg'}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-base font-medium text-gray-50 "
            >
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
