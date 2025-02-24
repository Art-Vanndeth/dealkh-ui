// import React, { useState } from 'react';
// import { HiMiniXMark } from 'react-icons/hi2';
// import { FaRegEye } from "react-icons/fa6";
// import PropTypes from 'prop-types';
// import { RiEyeOffLine } from "react-icons/ri";
//
// const ResetPasswordModal = ({ isOpen, onClose }) => {
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
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
//         <div className="flex justify-between items-center mb-4">
//           <div className="text-lg font-bold text-orange-600">DealKH</div>
//           <div className="cursor-pointer" onClick={onClose}>
//             <HiMiniXMark size={24} color="black" />
//           </div>
//         </div>
//         <h2 className="text-2xl font-bold text-slate-900 mb-6">Reset your password</h2>
//         <form>
//           <div className="mb-4 relative">
//             <label className="block text-slate-900 font-semibold mb-2" htmlFor="new-password">New Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="new-password"
//               className="w-full border px-3 py-2 text-gray-700 font-medium text-md border-stone-200 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-warning-500"
//               placeholder="New Password"
//             />
//             <div
//               className="absolute inset-y-0 top-8 right-3 flex items-center cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <RiEyeOffLine size={20} /> : <FaRegEye size={20} />}
//             </div>
//           </div>
//           <div className="mb-6 relative">
//             <label className="block text-slate-900 font-semibold mb-2" htmlFor="confirm-password">Confirm New Password</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirm-password"
//               className="w-full border px-3 py-2 text-gray-700 font-medium text-md border-stone-200 bg-slate-50 rounded-md focus:outline-none focus:ring-1 focus:ring-warning-500"
//               placeholder="Confirm New Password"
//             />
//             <div
//               className="absolute inset-y-0 top-8 right-3 flex items-center cursor-pointer"
//               onClick={toggleConfirmPasswordVisibility}
//             >
//               {showConfirmPassword ? <RiEyeOffLine size={20} /> : <FaRegEye size={20} />}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// ResetPasswordModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
//
// export default ResetPasswordModal;
