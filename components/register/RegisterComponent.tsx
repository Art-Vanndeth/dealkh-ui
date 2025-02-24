'use client';

import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import NextLink from 'next/link';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { Cancel, Logo } from '@/components/icons';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useRegisterUserMutation } from '@/redux/service/auth';
import CustomSelect from '@/components/customInput/CustomSelect';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import CustomDatePicker from '@/components/customInput/customDatePicker';
import CustomCheckbox from '@/components/customInput/CustomCheckbox';
import CustomInput from '@/components/customInput/customInput';
import CustomPasswordInput from '@/components/customInput/CustomPasswordInputProps';

// import { format } from 'node:util';

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
  gender: string;
  phoneNumber: string;
  dob: string;
  location: string;
}

const initialValues: RegisterFormValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmedPassword: '',
  gender: '',
  phoneNumber: '',
  dob: '',
  location: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  gender: Yup.string().required('Gender is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  dob: Yup.date()
    .required('Date of birth is required')
    .min(
      new Date(new Date().getFullYear() - 100, 0, 1),
      "Your age can't be more than 100 "
    )
    .max(
      new Date(new Date().getFullYear() - 18, 0, 1),
      "Your age can't not be less than 18 "
    ),
  location: Yup.string().required('Location is required'),
});

const Register: React.FC = () => {
  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();
  const router = useRouter();

  const onSubmit = async (
    values: RegisterFormValues,
    { setSubmitting, setStatus }: any
  ) => {
    setSubmitting(true);
    try {
      const formattedValues = {
        ...values,
        dob: format(new Date(values.dob), 'yyyy-MM-dd'),
      };

      const response = await registerUser(formattedValues).unwrap();
      console.log('Register successful!', response);
      router.push('/');
      // Handle successful register (e.g., redirect)
    } catch (error) {
      console.error('Error:', error);
      setStatus({ message: 'Something went wrong. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  // handle redirect to home page
  const handleLoginGoogle = async () => {
    await signIn('google', {
      redirect: false, // Prevent automatic redirection
      callbackUrl: '/', // Redirect to home page after successful authentication
    });
  };
  const handleLoginFacebook = async () => {
    // await signIn('facebook', {
    //   redirect: false, // Prevent automatic redirection
    //   callbackUrl: '/', // Redirect to home page after successful authentication
    // });
  };

  return (
    <div
      className={
        'flex min-h-screen w-screen items-center justify-center bg-foreground-200 p-2 sm:p-4 lg:p-8'
      }
    >
      <div
        className="flex w-full max-w-xl flex-col gap-4 rounded-large bg-background/60 px-8 pb-10 pt-6  backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        data-aos="flip-up"
      >
        <div className={'flex items-center justify-between'}>
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
          <div className={' flex items-center gap-1'}>
            <Logo size={46} />
            <h2 className=" bg-gradient-to-r  from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold leading-9 tracking-tight text-transparent">
              Deal KH
            </h2>
          </div>
          <div>
            <h1 className=" text-3xl  font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
              Create your account
            </h1>
          </div>
          <p className=" text-sm leading-6 text-gray-500 dark:text-gray-400">
            Already become our member?{' '}
            <NextLink
              href="/login"
              className="font-semibold text-primary-500 hover:text-blue-600"
            >
              Login here!
            </NextLink>
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form action="#" method="POST" className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="mt-3">
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mt-3">
                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mt-3">
                  <CustomInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mt-3">
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className={'mt-3'}>
                  <CustomPasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className={'mt-3'}>
                  <CustomPasswordInput
                    label="Confirm Password"
                    name="confirmedPassword"
                    placeholder="Confirm your password"
                  />{' '}
                </div>
                <div className={'mt-3'}>
                  <CustomSelect
                    label="Gender"
                    name="gender"
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                    ]}
                    placeholder="Select gender"
                  />
                </div>
                <div className={'mt-3'}>
                  <CustomInput
                    label="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={'mt-3'}>
                  <CustomDatePicker name="dob" />
                </div>
                <div className={'mt-3'}>
                  <CustomInput
                    label="Location"
                    name="location"
                    type="text"
                    placeholder="Enter your location"
                  />
                </div>
              </div>

              <div className=" flex items-center justify-between">
                <div className="my-3 flex items-center">
                  <Field
                    type="checkbox"
                    id="acceptPolicy"
                    component={CustomCheckbox}
                  />
                  <label htmlFor="acceptPolicy" className={'text-foreground'}>
                    I agree with the term & condition
                  </label>
                </div>
              </div>
              <div>
                <Button
                  color={'warning'}
                  className={
                    ' w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-lg  text-gray-50 '
                  }
                  type="submit"
                  variant={'solid'}
                >
                  Sign up
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        {/*  <div className="flex items-center gap-4 py-3">*/}
        {/*    <Divider className="flex-1" />*/}
        {/*    <p className="shrink-0 text-tiny text-default-500">OR</p>*/}
        {/*    <Divider className="flex-1" />*/}
        {/*  </div>*/}

        {/*  <div className=" grid grid-cols-1 gap-3">*/}
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
        {/*<ToastContainer />*/}
      </div>
    </div>
  );
};

export default Register;
