import 'aos/dist/aos.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import UpdateUserProfileComponent from '@/components/profile/update-profile/UpdateUserProfileComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Setting Page',
  description: 'This is a Setting Page',
};

export default function UpdateProfilePage() {
  return (
    <>
      <UpdateUserProfileComponent />
    </>
  );
}
