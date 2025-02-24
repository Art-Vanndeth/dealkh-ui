import React from 'react';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import UserProfileComponent from '@/components/profile/UserProfileComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profile Page',
  description: 'This is a Profile Page',
};

export default function ProfilePage() {
  return (
    <>
      <UserProfileComponent />
    </>
  );
}
