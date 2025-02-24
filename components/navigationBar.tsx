'use client';
import { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { CartIcon, HeartIcon } from '@/components/icons';
import CategoryButton from './categoryButton';
import {
  removeAccessToken,
  setLogoutSuccess,
} from '@/redux/feature/auth/authSlice';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';
import AuthLink from '@/components/auth/AuthLink';
import { useLogoutUserMutation } from '@/redux/service/auth';
import { useGetProfileQuery } from '@/redux/service/user';
import SearchProduct from './search/SearchProduct';
import SearchLocation from './search/SearchLocation';
import { productSearchList } from '@/types/productSearch';
import { selectProducts } from '@/redux/feature/cart/cartSlice';
import { CartProductType } from '@/libs/difinition';
import { selectWishlistProducts } from '@/redux/feature/wishList/wishListSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export const NavigationBar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const router = useRouter();

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetProfileQuery();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userProfile]);

  const dispatch = useAppDispatch();
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();
  const handleLogout = async () => {
    try {
      await logoutUser({}).unwrap();
      dispatch(removeAccessToken());
      dispatch(setLogoutSuccess(true));
      toast.success('Logout successfully.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      console.error('Failed to logout:', error);
    }
  };

  const products = useAppSelector(selectProducts);
  const [uniqueProducts, setUniqueProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    const unique = products.filter(
      (product: { slug: any }, index: any, self: any[]) =>
        index === self.findIndex((t) => t.slug === product.slug)
    );
    setUniqueProducts(unique);
  }, [products]);

  // For Wishlist
  const wishlistProducts = useAppSelector(selectWishlistProducts);
  const [uniqueWishlistProducts, setUniqueWishlistProducts] = useState<
    CartProductType[]
  >([]);

  useEffect(() => {
    const uniqueWishlist = wishlistProducts.filter(
      (product: { slug: any }, index: any, self: any[]) =>
        index === self.findIndex((t) => t.slug === product.slug)
    );
    setUniqueWishlistProducts(uniqueWishlist);
  }, [wishlistProducts]);

  const [searchValue, setSearchValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const categories = [
    'Accessory',
    'All-product',
    'Clothes',
    'Coupon',
    'Discount-Off',
    'Drink',
    'Electronic',
    'Event',
    'Flash-Sale',
    'Food',
    'Shoe',
    'Skincare',
  ];

  const searchInput = (
    <>
      <SearchProduct products={productSearchList} />
      <SearchLocation />
    </>
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarBrand>
          <NextLink href="/" className="h-12 w-12">
            <Image src="/logo.png" alt="logo" className="h-12 w-12" />
          </NextLink>
          <NavbarItem className="hidden sm:flex ">
            <CategoryButton categories={categories} />
          </NavbarItem>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <div className="flex gap-4">
          <NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
        </div>
      </NavbarContent>
      <NavbarContent justify={'start'} className={'hidden gap-4 px-16 sm:flex'}>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.href === pathname}>
            <Tooltip
              content={
                <p className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  {item.tooltip}
                </p>
              }
              offset={10}
              showArrow
              className="hidden lg:block"
            >
              <NextLink
                className={`${
                  item.href === pathname
                    ? 'bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'
                    : 'text-foreground'
                } transition-all ease-linear hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-600 hover:bg-clip-text hover:font-normal hover:text-transparent`}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </Tooltip>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="sm:flex">
          <NextLink
            className={'relative'}
            href={isLoggedIn ? '/wishlist' : '/login'}
          >
            <Badge
              color="danger"
              className={'bg-gradient-to-r from-pink-500 to-yellow-500'}
              content={uniqueWishlistProducts.length}
              isInvisible={uniqueWishlistProducts.length <= 0}
              variant="solid"
              shape="circle"
              size="sm"
            >
              <HeartIcon className="fill-current" size={30} />
            </Badge>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="sm:flex">
          <NextLink
            href={isLoggedIn ? '/cart' : '/login'}
            className={'relative'}
          >
            <Badge
              color="danger"
              className={'bg-gradient-to-r from-pink-500 to-yellow-500'}
              content={uniqueProducts.length}
              isInvisible={uniqueProducts.length <= 0}
              variant="solid"
              shape="circle"
              size="sm"
            >
              <CartIcon className="fill-current" size={30} />
            </Badge>
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          {isLoggedIn ? (
            <Dropdown placement="bottom-end" shadow="md">
              <DropdownTrigger>
                <Avatar
                  as="button"
                  className="transition-transform"
                  size="sm"
                  isBordered
                  color={'default'}
                  src={
                    userProfile?.payload?.profile ||
                    `https://i.pravatar.cc/150?u=a042581`
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="shadow">
                <DropdownItem key="profile" className="h-14 gap-2" isDisabled>
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{userProfile?.payload?.email}</p>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-danger"
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <AuthLink />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex h-full flex-col justify-between gap-2">
          <div>
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive={item.href === pathname}>
                <NextLink
                  className={
                    item.href === pathname ? 'text-warning' : 'text-foreground'
                  }
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
          <AuthLink />
        </div>
      </NavbarMenu>
      <NavbarContent className="basis-3 pl-4 lg:hidden" justify="end">
        <ThemeSwitch />
        <NextLink href="/wishlist">
          <HeartIcon size={32} />
        </NextLink>
        <NextLink href="/cart">
          <CartIcon size={32} />
        </NextLink>
        <Avatar
          isBordered
          color="warning"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="sm"
        />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
