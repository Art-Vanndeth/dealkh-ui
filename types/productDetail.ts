export type ProductDetail = {
  id: string;
  name: string;
  category: string;
  description: string;
  open: string;
  images: {
    url: string;
  }[];
  shopName: string;
  discountType: string;
  originalPrice: number;
  discountPrice: number;
  expiryDate: string;
  promotionDate: string;
};
