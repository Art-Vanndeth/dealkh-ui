import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from '@/app/providers';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import Loading from '@/app/(user)/loading';
import error from '@/app/(user)/error';
import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from '@/components/FooterComponent';
import SessionWrapper from '../SessionProvider';
import { Metadata } from 'next';
import { NavigationBar } from '@/components/navigationBar';
import StoreProvider from '@/app/StoreProvider';
import { ToastContainer } from 'react-toastify';
import { fileImgUrl } from '@/libs/ImageUrl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Deals, Coupons & Promotions in Cambodia - DealKH',
  description:
    'Find the best deals, coupons, and promotions from shops in Cambodia. Save big on your shopping with exclusive offers and discounts at DealKH.',
  keywords:
    'Cambodia deals, Cambodia coupons, Cambodia promotions, shop deals, shopping discounts, exclusive offers, DealKH',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dealkh.istad.co/',
    title: 'Best Deals, Coupons & Promotions in Cambodia - DealKH',
    description:
      'Discover the latest deals, coupons, and promotions from shops in Cambodia at DealKH. Save on your shopping with our curated list of discounts and offers.',
    images: [
      {
        url: fileImgUrl('logo.png'),
        alt: 'DealKH Logo Ecommerce Website',
      },
      {
        url: fileImgUrl('forhome.png'),
        alt: 'Exclusive Shopping Deals in Cambodia',
      },
    ],
    siteName: 'dealkh.istad.co',
  },
  twitter: {
    site: '@dealkh',
    title: 'Best Deals, Coupons & Promotions in Cambodia - DealKH',
    description:
      'Find the best deals, coupons, and promotions from shops in Cambodia. Save big on your shopping with exclusive offers and discounts at DealKH.',
    images: [
      {
        url: fileImgUrl('logo.png'),
        alt: 'DealKH Logo Ecommerce Website',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <meta name="author" content="DealKH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Facebook Meta Tags */}
        <meta property="og:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <meta
          property="og:title"
          content="Best Deals, Coupons & Promotions in Cambodia - DealKH"
        />
        <meta
          property="og:description"
          content="Discover the latest deals, coupons, and promotions from shops in Cambodia at DealKH. Save on your shopping with our curated list of discounts and offers."
        />
        <meta property="og:image" content={fileImgUrl('icon.png')} />
        <meta property="og:url" content="https://www.dealkh.istad.co/" />
        <meta property="og:site_name" content="DealKH" />

        {/* Instagram Meta Tags */}
        <meta
          property="insta:title"
          content="Best Deals, Coupons & Promotions in Cambodia - DealKH"
        />
        <meta
          property="insta:description"
          content="Discover the latest deals, coupons, and promotions from shops in Cambodia at DealKH. Save on your shopping with our curated list of discounts and offers."
        />
        <meta property="insta:image" content={fileImgUrl('forhome.png')} />
        <meta property="insta:url" content="https://www.dealkh.istad.co/" />
        <title>DealKH</title>
      </head>
      <SessionWrapper>
        <body>
          <StoreProvider>
            <Providers>
              <NavigationBar />
              <main className="container mx-auto min-h-screen max-w-7xl px-0 lg:px-6">
                <ErrorBoundary errorComponent={error}>
                  <Suspense fallback={<Loading />}>
                    <ToastContainer />
                    {children}
                  </Suspense>
                </ErrorBoundary>
              </main>
              <FooterComponent />
            </Providers>
          </StoreProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
