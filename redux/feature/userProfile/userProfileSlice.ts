import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the user profile

type UserProfile = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  images: [
    {
      url: string;
    },
  ];
  phoneNumber: string;
  dob: Date;
  location: string;
  isDisabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  socialMedia: [
    {
      url: string;
    },
  ];
  roles: [
    {
      name: string;
    },
  ];
  shops: [];
};

// Define the initial state using that type

type initialStateType = {
  status: 'idle' | 'loading' | 'success' | 'failed';
  userProfile: UserProfile | null;
  error: string | undefined;
};

const initialState: initialStateType = {
  status: 'idle',
  userProfile: null,
  error: undefined,
};

// create async thunk
export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    console.log('Token:', token); // Log the token to ensure it's being retrieved

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEALKH_API_URL}users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    console.log('data from userProfileSlice', data);
    return data;
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.status = 'success';
      state.userProfile = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default userProfileSlice.reducer;

// create selector
export const selectAvatar = (state: RootState) =>
  state.userProfile.userProfile?.images[0].url;
export const selectEmail = (state: RootState) =>
  state.userProfile.userProfile?.email;
