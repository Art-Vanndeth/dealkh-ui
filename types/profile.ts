// types.ts
export interface UserProfileResponse {
  payload: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    profile: string;
    covers: { url: string }[];
    phoneNumber: string;
    dob: string;
    location: string;
    isDisabled: boolean;
    createdAt: string;
    updatedAt: string;
    socialMedias: { socialName: string; socialLink: string }[];
    roles: string[];
    shops: {
      name: string;
      slug: string;
      description: string;
      address: string;
      phoneNumber: string;
    }[];
  };
  message: string;
  status: number;
}

// types.ts
export interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  gender: string;
  password: string;
  location: string;
  profileImage: File | null; // Add this line
  coverImage: File | null;   // Add this line
}


export type UserUpdateRequest = {
  firstName?: string;
  lastName?: string;
  username?: string;
  phoneNumber?: string;
  dob?: string;
  email?: string;
  gender?: string;
  location?: string;
};

