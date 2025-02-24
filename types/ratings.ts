export type RatingResponse = {
  username: string;
  productName: string;
  ratingValue: number;
  isRated: boolean;
  createdAt: string;
};

export type FeedbackResponse = {
  payload: FeedbackItem[];
};

export type FeedbackItem = {
  uuid: string;
  profile: string;
  description: string;
  productName: string;
  username: string;
  images: { url: any }[];
};

export type CreateFeedbackRequest = {
  description: string;
  productSlug: string;
  images: { url: string }[];
};

export type CreateRatingRequest = {
  ratingValue: number;
  productSlug: string;
};
