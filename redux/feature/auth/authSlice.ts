// redux/feature/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

interface AuthState {
  token: string | null;
  logoutSuccess: boolean;
  registerSuccess: boolean;
  loginSuccess: boolean;
}

const initialState: AuthState = {
  token: null,
  logoutSuccess: false,
  registerSuccess: false,
  loginSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeAccessToken(state) {
      state.token = null;
    },
    setLogoutSuccess(state, action: PayloadAction<boolean>) {
      state.logoutSuccess = action.payload;
    },
    setRegisterSuccess(state, action: PayloadAction<boolean>) {
      state.registerSuccess = action.payload;
    },
    setLoginSuccess(state, action: PayloadAction<boolean>) {
      state.loginSuccess = action.payload;
    },
  },
});

export const {
  setAccessToken,
  removeAccessToken,
  setLogoutSuccess,
  setRegisterSuccess,
  setLoginSuccess,
} = authSlice.actions;
export const selectLoginSuccess = (state: RootState) => state.auth.loginSuccess;
export const selectLogoutSuccess = (state: RootState) =>
  state.auth.logoutSuccess;
export const selectAccessToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
