'use client';

import React, { useEffect } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import NextLink from 'next/link';
import Aos from 'aos';
import { Button, Checkbox, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginUserMutation } from '@/redux/service/auth';
import CustomInput from '@/components/customInput/customInput';
import CustomPasswordInput from '@/components/customInput/CustomPasswordInputProps';
import { setLoginSuccess } from '@/redux/feature/auth/authSlice';
import { Cancel, Logo } from '@/components/icons';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useAppDispatch } from '@/redux/hook';

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(255, 'Password must be less than 255 characters'),
});

export default function MyShop() {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const router = useRouter();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: FormValues,
    { setErrors }: FormikHelpers<FormValues>
  ) => {
    try {
      await loginUser(values).unwrap();
      localStorage.setItem('token', 'log in');
      dispatch(setLoginSuccess(true));
      router.push('/');
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.data?.message) {
        setErrors({
          email: 'invalid email or password',
          password: 'invalid email or password',
        });
      } else {
        toast.error('An error occurred. Please try again later.', {
          autoClose: 2000,
          theme: theme,
        });
      }
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-foreground-200 p-2 sm:p-4 lg:p-8">
      <div
        className="flex w-full max-w-md flex-col gap-4 rounded-large bg-background/60 px-8 pb-10 pt-6 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        data-aos="flip-up"
      >
        <div className="flex items-center justify-between">
          <NextLink href="/">
            <Button
              color={'danger'}
              radius={'full'}
              variant={'bordered'}
              className={'border-0'}
              size={'sm'}
              isIconOnly={true}
            >
              <Cancel size={28} />
            </Button>
          </NextLink>
          <ThemeSwitch />
        </div>
        <div>
          <div className=" flex items-center gap-1">
            <Logo size={56} />
            <h2 className=" bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold leading-9 tracking-tight text-transparent">
              Deal KH
            </h2>
          </div>
          <div>
            <h1 className=" text-3xl  font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
              Sign in to your account
            </h1>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Not a member?{' '}
            <NextLink
              href="/register"
              className="font-semibold text-primary-500 hover:text-blue-600"
            >
              Start a new account with us!
            </NextLink>
          </p>
        </div>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(errors) => (
              <Form action="#" method="POST" className="space-y-5">
                <CustomInput
                  label={'Email'}
                  name={'email'}
                  type={'email'}
                  placeholder={'Enter your email address'}
                />
                <Spacer y={5} />
                <CustomPasswordInput
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please enter your password'}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox defaultSelected color={'primary'}>
                      Remember me
                    </Checkbox>
                  </div>

                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="font-semibold text-primary-500 hover:text-primary-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <Button
                    color={'warning'}
                    className="w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-lg  text-gray-50"
                    type="submit"
                    variant={'solid'}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          {/*  <Spacer y={3} />*/}
          {/*  <div className="flex items-center gap-4 py-2">*/}
          {/*    <Divider className="flex-1" />*/}
          {/*    <p className="shrink-0 text-tiny text-default-500">OR</p>*/}
          {/*    <Divider className="flex-1" />*/}
          {/*  </div>*/}
          {/*  <div className="mt-3 grid grid-cols-1 gap-3">*/}
          {/*    <Button*/}
          {/*      className="border-1 border-foreground-300 bg-foreground-50 dark:bg-foreground-50/30"*/}
          {/*      onClick={() => signIn('google')}*/}
          {/*      startContent={<Google className={'text-gray-50'} />}*/}
          {/*    >*/}
          {/*      <span className="text-sm font-semibold leading-6 text-foreground-800">*/}
          {/*        Google*/}
          {/*      </span>*/}
          {/*    </Button>*/}

          {/*    <Button*/}
          {/*      className="border-1 border-foreground-300 bg-foreground-50 dark:bg-foreground-50/30"*/}
          {/*      startContent={<FacebookWithColorIcon />}*/}
          {/*      onClick={() => signIn('facebook')}*/}
          {/*    >*/}
          {/*      <span className="text-sm font-semibold leading-6 text-foreground-800">*/}
          {/*        Facebook*/}
          {/*      </span>*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<ToastContainer />*/}
        </div>
      </div>
    </div>
  );
}
