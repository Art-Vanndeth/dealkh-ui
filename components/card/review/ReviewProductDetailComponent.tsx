'use client';
import { Image, Link } from '@nextui-org/react';
import React, { useState } from 'react';
import { Reviews } from './review';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

export default function ReviewProductDetailComponent() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <div className="mb-6 p-4">
      <div className="mb-8 flex-1 lg:mb-16">
        <p className="text-fourground-800 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
          Customer <span className="text-[#eb7d52]">Review</span>
        </p>
      </div>
      {Reviews.slice(0, showAllReviews ? Reviews.length : 2).map(
        (review, index) => (
          <div key={index} className="lg:w-3/5">
            {/* profile */}
            <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
              {/* profile section */}
              <div className="flex gap-4 lg:flex-shrink-0">
                <Image
                  className="h-16 w-16 rounded-full object-cover"
                  src={review.imageUrl}
                  alt="Profile"
                />
                <div className="my-auto">
                  <div className="text-fourground-700 text-lg font-semibold dark:text-white">
                    {review.name}
                  </div>
                  <div className=" text-fourground-600 dark:text-fourground-300 ">
                    {review.date}
                  </div>
                </div>
              </div>

              {/* rating section */}
              <div className="flex gap-2">
                <p className="text-fourground-700 font-medium dark:text-white lg:font-semibold">
                  Rating: {review.star.toFixed(1)}
                </p>
                {/* Star section */}
                <div className="flex items-center">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-yellow-500"
                    >
                      <path
                        d="M9.04897 2.92708C9.34897 2.00608 10.652 2.00608 10.951 2.92708L12.021 6.21908C12.0863 6.41957 12.2134 6.59426 12.384 6.71818C12.5547 6.84211 12.7601 6.90892 12.971 6.90908H16.433C17.402 6.90908 17.804 8.14908 17.021 8.71908L14.221 10.7531C14.05 10.8771 13.9227 11.0521 13.8573 11.2529C13.7919 11.4538 13.7918 11.6702 13.857 11.8711L14.927 15.1631C15.227 16.0841 14.172 16.8511 13.387 16.2811L10.587 14.2471C10.4162 14.1231 10.2105 14.0563 9.99947 14.0563C9.78842 14.0563 9.58277 14.1231 9.41197 14.2471L6.61197 16.2811C5.82797 16.8511 4.77397 16.0841 5.07297 15.1631L6.14297 11.8711C6.20815 11.6702 6.20803 11.4538 6.14264 11.2529C6.07725 11.0521 5.94994 10.8771 5.77897 10.7531L2.97997 8.72008C2.19697 8.15008 2.59997 6.91008 3.56797 6.91008H7.02897C7.24002 6.91013 7.44568 6.84342 7.6165 6.71948C7.78732 6.59554 7.91455 6.42073 7.97997 6.22008L9.04997 2.92808L9.04897 2.92708Z"
                        fill="#FACA15"
                      />
                    </svg>
                  ))}
                  <svg
                    className="text-fourground-200 dark:text-fourground-600 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* comment section */}
            {/* text-2xl font-semibold text-fourground-700 dark:text-white md:text-3xl */}
            <div className="items-start lg:mt-6 ">
              <p className="text-fourground-600 dark:text-fourground-300 mt-2 ">
                {review.comment}
              </p>
              <div className="mb-12 mt-4 flex">
                {review.commentImages.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    className="mr-2 h-28 w-28 rounded-lg object-cover"
                    src={image}
                    alt="Comment"
                  />
                ))}
              </div>
            </div>
          </div>
        )
      )}
      {Reviews.length > 2 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleShowAllReviews}
            className="text-fourground-800 mr-2 flex rounded-lg px-4 py-2 pb-1 text-[17px] font-normal"
          >
            {showAllReviews ? 'Show Less ' : 'Show More'}
            {showAllReviews ? (
              <MdExpandLess className="text-fourground-800 ml-2 mt-[2px] text-2xl" />
            ) : (
              <MdExpandMore className="text-fourground-800 ml-2 mt-[2px] text-2xl" />
            )}
          </button>
        </div>
      )}

      {/* related product section */}
      <div className="my-8 flex h-[50px] items-center justify-between">
        <div className="flex-1">
          <p className="text-fourground-800 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Related <span className="text-[#eb7d52]">Product</span>
          </p>
        </div>
        <Link href="/buymoregetmore">
          <div className="flex items-center  pt-1">
            <p className="text-fourground-800 mr-2 pb-1 text-[17px] font-normal">
              See More
            </p>
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              color="black"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#545c6a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 24H6m24-12l12 12l-12 12"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
