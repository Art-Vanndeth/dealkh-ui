import { ShopType,ShopTypesResponse } from '@/types/shopType';
import { ecommerceApi } from '@/redux/api';

export const shopTypeApi = ecommerceApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllShopTypes: builder.query<ShopType[], void>({
      query: () => '/shop-types',
      transformResponse: (response: ShopTypesResponse) => response.payload.list,
    }),
    getShopTypeByName: builder.query({
      query: (name) => `/shop-types/${name}`,
    }),
    createShopType: builder.mutation({
      query: (newShopType) => ({
        url: '/shop-types',
        method: 'POST',
        body: newShopType,
      }),
    }),
    updateShopTypeByName: builder.mutation({
      query: ({ name, ...updatedShopType }) => ({
        url: `/shop-types/${name}`,
        method: 'PUT',
        body: updatedShopType,
      }),
    }),
    deleteShopTypeByName: builder.mutation({
      query: (name) => ({
        url: `/shop-types/${name}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllShopTypesQuery,
  useGetShopTypeByNameQuery,
  useCreateShopTypeMutation,
  useUpdateShopTypeByNameMutation,
  useDeleteShopTypeByNameMutation,
} = shopTypeApi;

