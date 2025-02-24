// import React from 'react';
// import { HiMiniXMark } from 'react-icons/hi2';
// import PropTypes from 'prop-types';
//
// const CreateShopModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
//         <div className="flex justify-between items-center mb-4">
//           <div className="text-lg font-bold">DealKH</div>
//           <div className="cursor-pointer" onClick={onClose}>
//             <HiMiniXMark size={24} color="black" />
//           </div>
//         </div>
//         <h2 className="text-2xl font-bold text-slate-900 mb-6">Create New Shop</h2>
//         <form>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-slate-900 font-medium pb-2">Shop Name</label>
//               <input type="text" className="w-full p-2 border border-stone-300 bg-slate-50 rounded-lg" placeholder="Summer" />
//             </div>
//             <div>
//               <label className="block text-slate-900 font-medium pb-2">Owner</label>
//               <input type="text" className="w-full p-2 border border-stone-300 bg-slate-50 rounded-lg" placeholder="Ooh Sehun" />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-4 pb-2">
//             <div>
//               <label className="block text-slate-900 font-medium pb-2">Contact</label>
//               <input type="text" className="w-full p-2 border border-stone-300 bg-slate-50 rounded-lg" placeholder="094 949 949" />
//             </div>
//             <div>
//               <label className="block text-slate-900 font-medium pb-2">Address</label>
//               <input type="text" className="w-full p-2 border border-stone-300 bg-slate-50 rounded-lg" placeholder="Phnom Penh" />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-slate-900 font-medium pb-2">Description</label>
//             <textarea className="w-full p-2 border border-stone-300 bg-slate-50 rounded-lg" placeholder="Enter your description here..."></textarea>
//           </div>
//           <div className="mb-4 p-4 border-dashed border-2 border-stone-300 bg-slate-50 rounded-lg flex flex-col items-center justify-center">
//             <p className="text-gray-500">Click to upload or drag and drop</p>
//             <button type="button" className="mt-2 p-2 bg-gray-200 rounded">Browse File</button>
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button type="button" className="px-8 py-2 border border-gray-300 border-orange-500 text-orange-600 font-semibold rounded-lg" onClick={onClose}>Cancel</button>
//             <button type="submit" className="px-8 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg">Create</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// CreateShopModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
//
// export default CreateShopModal;
