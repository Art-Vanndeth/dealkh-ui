'use client';
import React from 'react';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button } from '@nextui-org/react';
import {
  useGetProfileQuery,
  useUpdateUserByUsernameMutation,
} from '@/redux/service/user';
import { UserUpdateRequest } from '@/types/profile';
import CustomInput from '@/components/customInput/customInput';
import CustomSelect from '@/components/customInput/CustomSelect';
import CustomDatePicker from '@/components/customInput/customDatePicker';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dob: Yup.string().required('Date of Birth is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  location: Yup.string().required('Location is required'),
});

interface UpdateProfileComponentProps {
  closeModal: () => void;
  refetchProfile: () => void;
}

const UpdateProfileComponent: React.FC<UpdateProfileComponentProps> = ({
  closeModal,
  refetchProfile,
}) => {
  const { data: userProfile } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] =
    useUpdateUserByUsernameMutation();

  const initialValues: UserUpdateRequest = {
    firstName: userProfile?.payload?.firstName || '',
    lastName: userProfile?.payload?.lastName || '',
    dob: userProfile?.payload?.dob || '',
    phoneNumber: userProfile?.payload?.phoneNumber || '',
    email: userProfile?.payload?.email || '',
    gender: userProfile?.payload?.gender || '',
    location: userProfile?.payload?.location || '',
  };

  const onSubmit = async (
    values: UserUpdateRequest,
    { setSubmitting, setStatus }: FormikHelpers<UserUpdateRequest>
  ) => {
    setSubmitting(true);
    try {
      const formattedValues = {
        ...values,
        dob: values.dob ? format(new Date(values.dob), 'yyyy-MM-dd') : '',
      };

      const response = await updateProfile({
        userUpdateRequest: formattedValues,
      }).unwrap();
      console.log('Update successful!', response);
      toast.success('Profile updated successfully!');
      closeModal();
      refetchProfile();
    } catch (error) {
      console.error('Error:', error);
      setStatus({ message: 'Something went wrong. Please try again later.' });
      toast.error('Failed to update profile.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="firstName"
              >
                First Name
              </label>
              <CustomInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <CustomInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <CustomDatePicker name="dob" />
              <ErrorMessage
                name="dob"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <CustomInput
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="email"
              >
                Email
              </label>
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="form-group flex flex-col">
              <label
                className="mb-2 font-bold text-foreground-900"
                htmlFor="gender"
              >
                Gender
              </label>
              <CustomSelect
                label="Gender"
                name="gender"
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                ]}
                placeholder="Select your gender"
              />
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>

          <div className="form-group mb-5 mt-5 flex flex-col lg:mb-10">
            <label
              className="mb-2 font-bold text-foreground-900"
              htmlFor="location"
            >
              Location
            </label>
            <CustomInput
              label="Location"
              name="location"
              type="text"
              placeholder="Enter your location"
            />
            <ErrorMessage
              name="location"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Button
              type="button"
              color="danger"
              radius="lg"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 font-semibold text-foreground-900"
              onPress={closeModal}
            >
              Cancel
            </Button>
            <Button
              radius="lg"
              color="warning"
              type="submit"
              className="text-md m bg-gradient-to-tr from-pink-500 to-yellow-500 font-semibold text-foreground-900"
              disabled={!isValid || isSubmitting || isUpdating}
            >
              Update
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProfileComponent;
