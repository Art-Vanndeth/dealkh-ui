import { ecommerceApi } from '@/redux/api';

type ImageUploadResponse = {
  payload: {
    downloadUrl: string;
    fileType: string;
    size: number;
    filename: string;
    fullUrl: string;
    description: string | null;
  }[];
  message: string;
  status: number;
};

export const imageApi = ecommerceApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingleImage: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: 'images/single',
          method: 'POST',
          body: formData,
        };
      },
    }),
    uploadMultipleImages: builder.mutation({
      query: (files) => {
        const formData = new FormData();
        files.forEach((file: any) => formData.append('files', file));
        return {
          url: 'images/multiple',
          method: 'POST',
          body: formData,
        };
      },
    }),
    deleteImageByFilename: builder.mutation({
      query: (filename) => ({
        url: `file/${filename}`,
        method: 'DELETE',
      }),
    }),
    downloadImageByFilename: builder.query({
      query: (filename) => ({
        url: `file/download/${filename}`,
        method: 'GET',
      }),
    }),
    uploadImages: builder.mutation<ImageUploadResponse, FormData>({
      query: (formData) => ({
        url: '/images/multiple', // Updated endpoint
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useUploadImagesMutation,
  useUploadSingleImageMutation,
  useUploadMultipleImagesMutation,
  useDeleteImageByFilenameMutation,
  useDownloadImageByFilenameQuery,
} = imageApi;
