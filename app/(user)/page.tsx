'use client';
import { Image, Link } from '@nextui-org/react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Category from '@/components/card/Category';
import NormalProductComponent from '@/components/card/NormalProduct';
import DiscountCardComponent from '@/components/card/DiscountCardComponent';
import ServiceCardComponent from '@/components/card/Service';
import Buy1Get1Component from '@/components/card/Buy1Get1';
import ClearanceCardComponent from '@/components/card/ClearanceCard';
import HeroSlideComponent from '@/components/slider/HeroSlide';
import 'react-toastify/dist/ReactToastify.css';
import CardCouponComponent from '@/components/card/coupon-detail/CardCouponComponent';

import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { theme } = useTheme(); // Get the current theme
  useEffect(() => {
    if (localStorage.getItem('token') === 'log in') {
      toast.success('Login successful!', {
        theme,
        onClose: () => localStorage.removeItem('token'), // Remove token when the toast closes
      });
    }
  }, [theme]);
  return (
    <>
      <main>
        <HeroSlideComponent />
        {/* Top Sale Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]  lg:text-[26px]">
              Top <span className="text-[#eb7d52]">Sales</span>
            </p>
          </div>
          <Link href="/discount">
            <div className="flex items-center  pt-2">
              <p
                className="mr-2 pb-1 text-[17px] font-normal text-foreground-700
              "
              >
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <DiscountCardComponent
          category={'food'}
          discountType={'discount off'}
        />
        {/* Clearance Sale Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Clearance <span className="text-[#eb7d52]">Sales</span>
            </p>
          </div>
          <Link href="/flash-sale">
            <div className="flex items-center pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <ClearanceCardComponent
          category={'clothes'}
          discountType={'clearance sales'}
        />
        <div>
          <Image
            src="https://img.freepik.com/free-vector/flash-sale-special-offer-clearance-banner_260559-257.jpg?t=st=1717838807~exp=1717842407~hmac=e590d5944a23efe6832b1099efa74823733c852376d301923a8add2e48ffb16b&w=1060"
            className="mt-[35px] h-[200px] w-[1300px] object-cover lg:h-[310px]"
            alt="image"
          />
        </div>
        {/* Buy1 Get1 Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Buy More <span className="text-[#eb7d52]">Get More</span>
            </p>
          </div>
          <Link href="/buy-more-get-more">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between">
          <div>
            <Link href="/buy-more-get-more">
              <Image
                src="https://i.pinimg.com/564x/f7/fe/32/f7fe32429482e12537ec90fc27bf6ff5.jpg"
                className="h-[690px] object-cover"
                alt="image"
              />
            </Link>
          </div>
          <div className="w-[800px]">
            <Buy1Get1Component
              category={'drink'}
              discountType={'buy more get more'}
            />
          </div>
        </div>
        {/* Service Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Service
            </p>
          </div>
          <Link href="/service">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <ServiceCardComponent
          category={'accessories'}
          discountType={'no discount'}
        />
        {/* Coupon Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Shop <span className="text-[#eb7d52]">Coupons</span>
            </p>
          </div>
          <Link href="/coupons">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div>
          <CardCouponComponent displayCount={2} />
        </div>
        <DiscountCardComponent
          category={'clothes'}
          discountType={'shop coupons'}
        />
        {/* Event Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Event
            </p>
          </div>
          <Link href="/event">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <Link href="/event">
          <Image
            src="https://romand.us/cdn/shop/files/PC_1.png?v=1717143214&width=1728"
            alt="image"
            className=""
          ></Image>
        </Link>
        {/* Feature Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Feature <span className="text-[#eb7d52]">Products</span>
            </p>
          </div>
          {/* Right section */}
          <Link href="/products">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <NormalProductComponent
          category={'electronic'}
          discountType={'no discount'}
        />
        {/* Category */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Category
            </p>
          </div>
          {/* Right section */}
          <Link href="/all-product">
            <div className="flex items-center  pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        <Category />
        {/* Shop Section */}
        <div className="my-8 flex h-[50px] items-center justify-between">
          {/* Left section */}
          <div className="flex-1">
            <p className="relative w-fit text-[20px] font-bold  text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308] lg:text-[26px]">
              Popular <span className="text-[#eb7d52]">Shop</span>
            </p>
          </div>
          {/* Right section */}
          <Link href="#">
            <div className="flex items-center pt-2">
              <p className="mr-2 pb-1 text-[17px] font-normal text-foreground-700">
                See More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="black"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#6b7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
        {/*<ShopCardComponent />*/}
      </main>
    </>
  );
}
