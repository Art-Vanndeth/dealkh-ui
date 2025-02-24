import React, { useEffect, useState } from 'react';
import { Button, Link, ScrollShadow } from '@nextui-org/react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import SummaryRatingCard from '@/components/review/SummaryRatingCard';
import { FeedbackItem, RatingResponse } from '@/types/ratings';
import {
  useGetProductFeedbackQuery,
  useGetProductRatingsByProductSlugQuery,
} from '@/redux/service/ratingAndFeedback';
import ModalRating from '@/components/review/ModalRating';
import ReviewForm from '@/components/review/ReviewForm';
import Loading from '@/app/(user)/loading';
import FeedbackCard from '@/components/review/FeedbackCard';
import { useGetProfileQuery } from '@/redux/service/user';

interface CombinedFeedbackItem extends FeedbackItem {
  ratingValue: number;
  createdAt: string;
}

type ReviewProductDetailComponentProps = {
  productSlug: string;
};

export default function ReviewProductDetailComponent({
  productSlug,
}: ReviewProductDetailComponentProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCounts, setRatingCounts] = useState<number[]>(Array(11).fill(0));
  const [combinedFeedback, setCombinedFeedback] = useState<
    CombinedFeedbackItem[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const { data: currentUserProfile, isLoading: profileLoading } =
    useGetProfileQuery();

  const toggleModal = () => {
    if (!hasRated) {
      setIsModalOpen(!isModalOpen);
    } else {
      alert('You have already rated this product.');
    }
  };
  const toggleShowAllReviews = () => setShowAllReviews(!showAllReviews);

  const {
    data: ratingsData,
    error: ratingError,
    isLoading: ratingLoading,
    refetch: refetchRatings,
  } = useGetProductRatingsByProductSlugQuery({ productSlug });

  const {
    data: feedbackData,
    error: feedbackError,
    isLoading: feedbackLoading,
    refetch: refetchFeedback,
  } = useGetProductFeedbackQuery({ productSlug });

  useEffect(() => {
    if (ratingsData) {
      if (feedbackData) {
        const feedbacks = Array.isArray(feedbackData.payload)
          ? feedbackData.payload
          : [feedbackData.payload];
        combineData(ratingsData, feedbacks);
      }
    }
  }, [ratingsData, feedbackData]);

  useEffect(() => {
    if (ratingsData && currentUserProfile) {
      const userHasRated = ratingsData.some(
        (rating) => rating.username === currentUserProfile?.payload?.username
      );
      setHasRated(userHasRated);
    }
  }, [ratingsData, currentUserProfile]);

  const combineData = (
    ratings: RatingResponse[],
    feedbacks: FeedbackItem[]
  ) => {
    const combined = feedbacks.map((feedback) => {
      const rating = ratings.find(
        (r) =>
          r.username === feedback.username &&
          r.productName === feedback.productName
      );
      return {
        ...feedback,
        ratingValue: rating ? rating.ratingValue : 0,
        createdAt: rating ? rating.createdAt : '',
      };
    });
    setCombinedFeedback(combined);
    calculateRatings(ratings);
  };

  const calculateRatings = (ratings: RatingResponse[]) => {
    if (ratings.length === 0) {
      setAverageRating(0);
      setRatingCounts(Array(11).fill(0));
      return;
    }

    let totalRating = 0;
    let ratingCount = Array(11).fill(0);

    ratings.forEach((rating) => {
      totalRating += rating.ratingValue;
      const halfStarIndex = Math.round(rating.ratingValue * 2);
      ratingCount[halfStarIndex]++;
    });

    setAverageRating(totalRating / ratings.length);
    setRatingCounts(ratingCount);
  };

  const handleNewRating = () => {
    refetchRatings();
    refetchFeedback();
  };

  if (ratingLoading || feedbackLoading || profileLoading) return <Loading />;
  if (ratingError || feedbackError)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-gray-500">
          Error loading data because you are not logged in
        </div>
      </div>
    );

  const reviewsToShow = combinedFeedback.slice(
    0,
    showAllReviews ? combinedFeedback.length : 5
  );

  return (
    <>
      <div className="mb-6 p-4">
        <div className="mb-8 ">
          <p className="text-fourground-800 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
            Product <span className="text-[#eb7d52]">Rating</span>
          </p>
        </div>
        <div className={'mb-5 px-1 lg:pe-1 lg:ps-8'}>
          <ReviewForm productSlug={productSlug} onNewRating={handleNewRating} />
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-3 '}>
          <section className="mx-auto w-full max-w-md lg:px-8">
            <div className="flex flex-col gap-2">
              <SummaryRatingCard
                averageRating={isNaN(averageRating) ? 0 : averageRating}
                ratings={[
                  { rating: 5, count: ratingCounts[10] },
                  { rating: 4.5, count: ratingCounts[9] },
                  { rating: 4, count: ratingCounts[8] },
                  { rating: 3.5, count: ratingCounts[7] },
                  { rating: 3, count: ratingCounts[6] },
                  { rating: 2.5, count: ratingCounts[5] },
                  { rating: 2, count: ratingCounts[4] },
                  { rating: 1.5, count: ratingCounts[3] },
                  { rating: 1, count: ratingCounts[2] },
                  { rating: 0.5, count: ratingCounts[1] },
                  { rating: 0, count: ratingCounts[0] },
                ]}
                totalRatingCount={ratingsData ? ratingsData.length : 0}
                onWriteReview={toggleModal}
                hasRated={hasRated}
              />
            </div>
          </section>
          <div className={'col-span-2'}>
            <ScrollShadow size={10} className="h-[750px] w-full ">
              {reviewsToShow.map((review, index) => (
                <FeedbackCard
                  key={index}
                  review={review}
                  currentUser={currentUserProfile?.payload?.username}
                  refetchFeedback={refetchFeedback}
                  productSlug={productSlug}
                />
              ))}
            </ScrollShadow>
            {(combinedFeedback.length ?? 0) > 5 && (
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={toggleShowAllReviews}
                  className="text-fourground-800 mr-2 flex rounded-lg px-4 py-2 pb-1 text-[17px] font-normal"
                >
                  {showAllReviews ? 'Show Less ' : 'Show More'}
                  {showAllReviews ? (
                    <MdExpandLess className="text-fourground-800 ml-2 mt-[2px] text-2xl" />
                  ) : (
                    <MdExpandMore className="text-fourground-800 ml-2 mt-[2px] text-2xl" />
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="my-8 flex h-[50px] items-center justify-between">
          <div className="flex-1">
            <p className="text-fourground-800 relative w-fit text-[26px] font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]">
              Related <span className="text-[#eb7d52]">Product</span>
            </p>
          </div>
          <Link href="/buymoregetmore">
            <div className="flex items-center pt-1">
              <p className="text-fourground-800 mr-2 pb-1 text-[17px] font-normal">
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
                  stroke="#545c6a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M42 24H6m24-12l12 12-12 12"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <ModalRating
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpenChange={toggleModal}
        productSlug={productSlug}
        onNewRating={handleNewRating}
        hasRated={hasRated}
      />
    </>
  );
}
