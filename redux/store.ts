// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/redux/feature/auth/authSlice';
import cartSlice from '@/redux/feature/cart/cartSlice';
import passwordVisibilitySlice from '@/redux/feature/password/passwordVisibilitySlice';
import { ecommerceApi } from './api';
import { authApi } from '@/redux/service/auth';
import wishListSlice from './feature/wishList/wishListSlice';
import userProfileSlice from '@/redux/feature/userProfile/userProfileSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      userProfile: userProfileSlice,
      auth: authSlice,
      cart: cartSlice,
      wishlist: wishListSlice,
      passwordVisibility: passwordVisibilitySlice,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(ecommerceApi.middleware)
        .concat(authApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
