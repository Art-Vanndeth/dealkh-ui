import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux/store';
import { setAccessToken } from '@/redux/feature/auth/authSlice';

// Setting up prepareHeaders to include the token in the headers
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_DEALKH_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log('Setting token:', token);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}refresh`, {
      method: 'POST',
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      api.dispatch(setAccessToken(data.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      const logoutRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}logout`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );
      const logoutData = await logoutRes.json();
      console.log(logoutData);
    }
  }
  return result;
};

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (formData) => ({
        url: 'form-submit',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = ecommerceApi;
