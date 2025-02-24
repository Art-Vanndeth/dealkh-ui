import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '@/styles/swiper.css';
import { Image } from '@nextui-org/react';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function HeroSlideComponent() {
  return (
    <div className="mt-2 grid  w-full grid-cols-1 gap-2 lg:grid-cols-3">
      <div className={'col-span-2'}>
        <Swiper
          className="  rounded-2xl"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => {}}
          // onSwiper={}
          loop={true}
        >
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className={
          ' flex flex-col items-center gap-2 md:flex-row md:justify-between  lg:flex-col'
        }
      >
        <Swiper
          className=" w-full rounded-2xl lg:w-[400px]"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          // onSwiper={(swiper: any) => console.log(swiper)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          className=" w-full rounded-2xl lg:w-[400px]"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          // onSwiper={(swiper: any) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              isZoomed
              src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
              alt=""
              className=" object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
