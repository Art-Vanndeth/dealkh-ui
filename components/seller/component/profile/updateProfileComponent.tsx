// 'use client';
// import React, { useState } from 'react';
// import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import { Button, Link } from '@nextui-org/react';
// import { FaRegEye } from 'react-icons/fa6';
// import { RiEyeOffLine } from 'react-icons/ri';
// import { IoMdClose } from 'react-icons/io';
// import ResetPasswordModal from '../popup/resetPassword';
//
// interface FormValues {
//   firstName: string;
//   lastName: string;
//   dateOfBirth: string;
//   phoneNumber: string;
//   email: string;
//   gender: string;
//   password: string;
//   location: string;
//   profileImage: File | null;
// }
//
// const UpdateProfileSellerComponent: React.FC = () => {
//   const initialValues: FormValues = {
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     phoneNumber: '',
//     email: '',
//     gender: '',
//     password: '',
//     location: '',
//     profileImage: null,
//   };
//
//   const [isModalOpen, setIsModalOpen] = useState(false);
//
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//
//   const handleDeleteImage = () => {
//     // Logic to delete the image preview
//     setImagePreview(null);
//     // You might also want to clear the file input value if it's a controlled component
//   };
//
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//
//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//
//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
//   ) => {
//     const file = event.currentTarget.files?.[0];
//     setFieldValue('profileImage', file);
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImagePreview(imageUrl);
//     }
//   };
//
//   const onSubmit = async (values: FormValues) => {
//     try {
//       const formData = new FormData();
//       formData.append('firstName', values.firstName);
//       formData.append('lastName', values.lastName);
//       formData.append('dateOfBirth', values.dateOfBirth);
//       formData.append('phoneNumber', values.phoneNumber);
//       formData.append('email', values.email);
//       formData.append('gender', values.gender);
//       formData.append('password', values.password);
//       formData.append('location', values.location);
//       formData.append('profileImage', values.profileImage as File);
//
//       const response = await fetch('/api/updateProfile', {
//         method: 'POST',
//         body: formData,
//       });
//
//       if (response.ok) {
//         console.log('Profile updated successfully');
//       } else {
//         console.error('Failed to update profile');
//       }
//     } catch (error) {
//       console.error('Internal server error:', error);
//     }
//   };
//
//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     dateOfBirth: Yup.date().required('Required'),
//     phoneNumber: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     gender: Yup.string().required('Required'),
//     password: Yup.string().required('Required'),
//     location: Yup.string().required('Required'),
//     profileImage: Yup.mixed().required('Profile image is required'),
//   });
//
//   return (
//     <div className="container mx-auto rounded-lg bg-white p-4 text-black dark:bg-black">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {(formik) => (
//           <Form className="m-4">
//             <div className="mb-2 flex gap-8 px-2">
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="firstName"
//                 >
//                   First Name
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   placeholder="Ooh"
//                 />
//               </div>
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   aria-placeholder="lastname"
//                   htmlFor="lastName"
//                 >
//                   Last Name
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Tenten"
//                 />
//               </div>
//             </div>
//
//             <div className="flex gap-8 px-2">
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="dateOfBirth"
//                 >
//                   Date of Birth
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="date"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                 />
//               </div>
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="phoneNumber"
//                 >
//                   Phone Number
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   placeholder="092-984-123"
//                 />
//               </div>
//             </div>
//
//             <div className="flex gap-8 px-2">
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="oohtenten@gmail.com"
//                 />
//               </div>
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="gender"
//                 >
//                   Gender
//                 </label>
//                 <Field
//                   className="text-md cursor-pointer rounded-md border border-stone-200 bg-slate-50 px-3 py-3 pr-5 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   as="select"
//                   id="gender"
//                   name="gender"
//                 >
//                   <option value="Select">Select</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </Field>
//               </div>
//             </div>
//
//             <div className="flex gap-8 px-2">
//               <div className="relative mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   id="password"
//                   name="password"
//                 />
//                 <div
//                   className="absolute right-4 top-11 cursor-pointer"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {showConfirmPassword ? (
//                     <RiEyeOffLine size={20} />
//                   ) : (
//                     <FaRegEye size={20} />
//                   )}
//                 </div>
//               </div>
//               <div className="mb-4 flex flex-1 flex-col">
//                 <label
//                   className="mb-3 font-bold text-gray-700 dark:text-white"
//                   htmlFor="location"
//                 >
//                   Location
//                 </label>
//                 <Field
//                   className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-2 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//                   type="text"
//                   id="location"
//                   name="loaction"
//                   placeholder="Phnom penh"
//                 />
//               </div>
//             </div>
//
//             <div className="my-3 flex w-[70vw] rounded-md px-2 text-white dark:text-white">
//               <button
//                 className="w-[200px] rounded-md bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-2 text-lg text-white"
//                 onClick={openModal}
//               >
//                 Change Password
//               </button>
//             </div>
//             <ResetPasswordModal isOpen={isModalOpen} onClose={closeModal} />
//             <div className="mb-4 flex flex-col px-2 pt-5">
//               <label
//                 className="mb-1 font-bold text-gray-700 dark:text-white"
//                 htmlFor="profileImage"
//               >
//                 Upload Profile
//               </label>
//               <input
//                 type="file"
//                 id="profileImage"
//                 name="profileImage"
//                 accept="image/*"
//                 onChange={(event) =>
//                   handleFileChange(event, formik.setFieldValue)
//                 }
//                 className="text-md rounded-md border border-stone-200 bg-slate-50 px-3 py-3 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-warning-500"
//               />
//               {imagePreview && (
//                 <div className="mt-2 flex items-center">
//                   <img
//                     src={imagePreview}
//                     alt="Profile Preview"
//                     className="mr-2 h-32 w-32 rounded-full object-cover"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleDeleteImage}
//                     className="flex rounded-md bg-red-500 px-1 py-1 text-white hover:bg-red-600 focus:outline-none"
//                   >
//                     <IoMdClose className="mr-1" />
//                   </button>
//                 </div>
//               )}
//             </div>
//
//             <div className="flex justify-end pt-3">
//               <Link href="/profiles">
//                 <Button
//                   className="text-md relative mr-5 rounded-md border-2 border-orange-500 px-6 py-2 font-semibold text-orange-500 focus:outline-none dark:text-white"
//                   variant="bordered"
//                   type="submit"
//                 >
//                   <span className="relative z-10">Update</span>
//                 </Button>
//               </Link>
//               <Link href="/profiles">
//                 <Button
//                   className="text-md rounded-md bg-gradient-to-tr from-pink-500 to-yellow-500 px-6 py-2 text-white focus:outline-none dark:text-white"
//                   variant="bordered"
//                   type="submit"
//                 >
//                   <span className="relative z-10">Cancel</span>
//                 </Button>
//               </Link>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };
//
// export default UpdateProfileSellerComponent;
