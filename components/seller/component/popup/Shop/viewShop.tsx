// import React from 'react';
// import { HiMiniXMark } from 'react-icons/hi2';
// import PropTypes from 'prop-types';
// import { Image } from '@nextui-org/react';
//
// const ViewShopModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//
//   const sellerDetails = {
//     imageUrl: 'https://i.pinimg.com/564x/8b/80/6f/8b806f7e31056c7cb0d491569531bc4a.jpg',
//     shopName: '  Pocky Pocky',
//     ownerName: '  Jeon Wonwoo',
//     phoneNumber: '  (+855) 95 990 910',
//     location: '  Phnom Penh',
//     createdOn: '  12/08/2024',
//   };
//
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
//         <div className="flex justify-between items-center mb-4">
//           <div className="text-lg font-bold text-orange-600">DealKH</div>
//           <div className="cursor-pointer" onClick={onClose}>
//             <HiMiniXMark size={24} color="black" />
//           </div>
//         </div>
//         <h2 className="text-2xl font-bold text-slate-900 mb-6">Shop Details</h2>
//         <div className="flex">
//           <div className="w-1/2 p-8 border rounded-lg mr-8 border-slate-200">
//             <img src={sellerDetails.imageUrl} alt="Store"
//               className=" rounded-lg w-[300px] h-[250px] object-fill items-center text-center" />
//           </div>
//           <div className="w-1/2 p-8 border text-slate-900 rounded-lg border-slate-200">
//             <p className="mb-4"><strong>Shop Name : </strong> {  sellerDetails.shopName}</p>
//             <p className="mb-4"><strong>Owner Name : </strong> {  sellerDetails.ownerName}</p>
//             <p className="mb-4"><strong>Phone Number : </strong> {  sellerDetails.phoneNumber}</p>
//             <p className="mb-4"><strong>Location : </strong> {  sellerDetails.location}</p>
//             <p className="mb-4"><strong>Created on : </strong> {  sellerDetails.createdOn}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// ViewShopModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   sellerDetails: PropTypes.shape({
//     imageUrl: PropTypes.string.isRequired,
//     shopName: PropTypes.string.isRequired,
//     ownerName: PropTypes.string.isRequired,
//     phoneNumber: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     createdOn: PropTypes.string.isRequired,
//   }).isRequired,
// };
//
// export default ViewShopModal;
