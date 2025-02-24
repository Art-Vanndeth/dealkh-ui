// import React, { useState } from 'react';
// import { HiMiniXMark } from 'react-icons/hi2';
// import PropTypes from 'prop-types';
// import { BsExclamationCircle } from "react-icons/bs";
//
// const DeleteShopModal = ({ isOpen, onClose }) => {
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
//         {/* <h2 className="text-2xl font-bold text-slate-900 mb-6">Log Out</h2> */}
//         <div className="flex justify-center m-5 text-slate-900 font-medium text-lg">
//             <BsExclamationCircle className="mt-1" />
//             <p className="text-center">Are you sure you want to delete the shop ? </p>
//         </div>
//
//         <div className="flex justify-center space-x-4 mt-5">
//             <button type="button" className="px-4 py-2 border border-gray-300  border-orange-500 text-orange-600 font-semibold rounded-lg" onClick={onClose}>No</button>
//             <button type="submit" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg">Yes</button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// DeleteShopModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
//
// export default DeleteShopModal;
