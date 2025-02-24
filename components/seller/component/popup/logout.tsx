// import React, { useState } from 'react';
// import { HiMiniXMark } from 'react-icons/hi2';
// import PropTypes from 'prop-types';
// import { BsExclamationCircle } from 'react-icons/bs';
//
// const LogoutModal = ({ isOpen, onClose }: any) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//
//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//
//   if (!isOpen) return null;
//
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
//         <div className="mb-4 flex items-center justify-between">
//           <div className="text-lg font-bold text-orange-600">DealKH</div>
//           <div className="cursor-pointer" onClick={onClose}>
//             <HiMiniXMark size={24} color="black" />
//           </div>
//         </div>
//         {/* <h2 className="text-2xl font-bold text-slate-900 mb-6">Log Out</h2> */}
//         <div className="m-5 flex justify-center text-lg font-medium text-slate-900">
//           <BsExclamationCircle className="mr-3 mt-1" />
//           <p> Are you sure you want to Logout ?</p>
//         </div>
//
//         <div className="mt-5 flex justify-center space-x-4">
//           <button
//             type="button"
//             className="rounded-lg border border-gray-300 border-orange-500  px-4 py-2 font-semibold text-orange-600"
//             onClick={onClose}
//           >
//             No
//           </button>
//           <button
//             type="submit"
//             className="rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 font-semibold text-white"
//           >
//             Yes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// LogoutModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
//
// export default LogoutModal;
