"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiEyeOffLine } from 'react-icons/ri';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiEye } from "react-icons/fi";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ isOpen, onClose }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 sm:p-8">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md p-4 sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">
          DealKH
        </div>
        <div className="cursor-pointer" onClick={onClose}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-2 text-transparent cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="url(#gradient)"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-50 mb-6 sm:text-left">Reset your password</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mb-4 relative">
                <label className="block dark:text-gray-50 text-slate-800 font-semibold mb-3" htmlFor="newPassword">New Password</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  onChange={handleChange}
                  className="w-full border bg-transparent px-3 py-2 text-gray-700 dark:text-gray-50 font-medium text-md border-stone-200 rounded-md focus:outline-none hover:border-amber-500"
                />
                <div
                  className="absolute inset-y-0 top-9 right-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffLine size={20} color="gray" /> : <FiEye size={20} color="gray" />}
                </div>
              </div>
              <div className="mb-6 relative">
                <label className="block text-slate-800 dark:text-gray-50 font-semibold mb-3" htmlFor="confirmPassword">Confirm New Password</label>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="w-full border bg-transparent px-3 py-2 text-gray-700 dark:text-gray-50 font-medium text-md border-stone-200 rounded-md focus:outline-none hover:border-amber-500"
                />
                <div
                  className="absolute inset-y-0 top-9 right-3 flex items-center cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <RiEyeOffLine size={20} color="gray" /> : <FiEye size={20} color="gray" />}
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg"
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

ResetPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResetPasswordModal;
