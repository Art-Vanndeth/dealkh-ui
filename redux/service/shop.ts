import { ecommerceApi } from '@/redux/api';
import { ShopsResponse } from '@/libs/difinition';


export const shopApi = ecommerceApi.injectEndpoints({

  endpoints: (builder) => ({
    getAllShops: builder.query<ShopsResponse,{page:number;size:number;}>({
        query: ({ page , size  }) => 
          `/shops?page=${page}&size=${size}`,
      }),
      getShopNearby: builder.query({
        query: ({ latitude, longitude }) => 
          `/shops/nearby?latitude=${latitude}&longitude=${longitude}`,
      }),
      getShopBySlug: builder.query({
        query: (slug) => `/shops/${slug}`,
      }),
      filterShopByName: builder.query({
        query: (name) => `/shops?name=${name}`,
      }),
      getCurrentUserShopBySlug: builder.query({
        query: (slug) => `/shops/${slug}/owner`,
      }),
      getAllShopsByType: builder.query({
        query: () => `/shops/shop-type`,
      }),
      getAllShopsByOwner: builder.query({
        query: ({ page = 1, size = 2, field = 'name', order = 'desc' }) => 
          `/shops?page=${page}&size=${size}&field=${field}&order=${order}`,
      }),
      createShop: builder.mutation({
        query: (newShop) => ({
          url: `/shops`,
          method: 'POST',
          body: newShop,
        }),
      }),
      updateShopBySlug: builder.mutation({
        query: ({ slug, ...updatedShop }) => ({
          url: `/shops/${slug}`,
          method: 'PUT',
          body: updatedShop,
        }),
      }),
      enableShopBySlug: builder.mutation({
        query: (slug) => ({
          url: `/shops/${slug}/enable`,
          method: 'PATCH',
        }),
      }),
      disableShopBySlug: builder.mutation({
        query: (slug) => ({
          url: `/shops/${slug}/disable`,
          method: 'PATCH',
        }),
      }),
      removeOwnerFromShopBySlug: builder.mutation({
        query: ({ slug, username }) => ({
          url: `/shops/${slug}/owner`,
          method: 'DELETE',
          params: { username },
        }),
      }),
      deleteShopBySlug: builder.mutation({
        query: (slug) => ({
          url: `/shops/${slug}`,
          method: 'DELETE',
        }),
      }),
      uploadShopImage: builder.mutation<any, FormData>({
        query: (formData) => ({
          url: 'images/single',
          method: 'POST',
          body: formData,
        }),
      }),
  
      
  }),
});

export const {
    useGetAllShopsQuery,
    useGetShopNearbyQuery,
    useGetShopBySlugQuery,
    useFilterShopByNameQuery,
    useGetCurrentUserShopBySlugQuery,
    useGetAllShopsByTypeQuery,
    useGetAllShopsByOwnerQuery,
    useCreateShopMutation,
    useUpdateShopBySlugMutation,
    useEnableShopBySlugMutation,
    useDisableShopBySlugMutation,
    useRemoveOwnerFromShopBySlugMutation,
    useDeleteShopBySlugMutation,
    useUploadShopImageMutation
} = shopApi;
