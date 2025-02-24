// Import Swiper styles
import 'swiper/css';
// import required modules
import Marquee from 'react-fast-marquee';
import { Image } from '@nextui-org/react';
import { useGetCategoryQuery } from '@/redux/service/category';
import { CategoryType } from '@/types/category';

export default function Category() {
  const { data, isLoading, error } = useGetCategoryQuery();
  // console.log('data car=t', data?.payload[0]);
  // console.log('error', error);
  // console.log('isLoading', isLoading);

  return (
    <Marquee pauseOnHover>
      <div className={'flex gap-x-5'}>
        {data?.payload.map((category: CategoryType) => (
          // eslint-disable-next-line react/jsx-key
          <Image
            src={
              category?.icon ||
              'https://i.pinimg.com/564x/2a/4d/c3/2a4dc3ce036e764e3f291de19a71d1b1.jpg'
            }
            alt="Category image"
            className="ms-5 h-[240px] w-[240px] rounded-full bg-foreground object-cover"
          />
        ))}
      </div>
    </Marquee>
  );
}
