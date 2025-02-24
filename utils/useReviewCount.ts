import { useGetProductFeedbackQuery } from '@/redux/service/ratingAndFeedback';

export const useReviewCounts = (productSlugs: string[]) => {
  const reviewCounts = productSlugs.reduce(
    (acc, slug) => {
      const { data: feedbackData } = useGetProductFeedbackQuery({
        productSlug: slug,
      });
      acc[slug] = feedbackData ? feedbackData.payload.length : 0;
      return acc;
    },
    {} as Record<string, number>
  );

  return reviewCounts;
};
