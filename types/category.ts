export type CategoryType = {
  name: string;
  slug: string;
  icon: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
};

export type ApiResponse = {
  payload: CategoryType[];
  message: string;
  status: number;
};
