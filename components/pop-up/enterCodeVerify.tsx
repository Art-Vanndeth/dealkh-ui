import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Button, Link } from "@nextui-org/react";

interface EnterCodeVerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterCodeVerifyModal: React.FC<EnterCodeVerifyModalProps> = ({ isOpen, onClose }) => {
  const [verificationCode, setVerificationCode] = useState<string[]>(['', '', '', '', '', '']);
  const [verificationError, setVerificationError] = useState<string>('');

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 1 && !isNaN(Number(value))) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = verificationCode.join('');
    if (code === '123456') { 
      console.log('Verification successful');
      
    } else {
      setVerificationError('Invalid verification code');
      setVerificationCode(['', '', '', '', '', '']); 
    }
  };

  const handleResendCode = () => {
    
    console.log('Resend code logic here');
    
    setVerificationCode(['', '', '', '', '', '']);
    setVerificationError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-zinc-800 text-center rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text">DealKH</div>
        <div className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full" onClick={onClose}>
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
        <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-50">Enter Code</h2>
        <p className="text-md mt-1 dark:text-gray-50">We sent a code to <span className="font-semibold">example@gmail.com</span></p>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <Form onSubmit={handleSubmit}>
            <div className="flex gap-2 justify-center items-center mt-5">
            {verificationCode.map((value, index) => (
              <div key={index} className="relative">
                <div className="border-2 border-transparent rounded-md overflow-hidden">
                  <Field
                    type="text"
                    id={`verificationCode${index}`}
                    name={`verificationCode${index}`}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(index, e)}
                    value={value}
                    maxLength={1}
                    className="w-12 h-12 text-center bg-transparent px-3 py-2 text-gray-700 dark:text-gray-50 font-medium text-md focus:outline-none hover:border-orange-500"
                  />
                </div>
                <div className="absolute inset-0 border-1 border-gray-300 rounded-md pointer-events-none"></div>
              </div>
            ))}
            </div>
            {verificationError && <p className="text-red-500 mt-2">{verificationError}</p>}
            <p className="mt-4 dark:text-gray-50">Did not get a code? <Link href="#" className="text-blue-700" onClick={(e) => { e.preventDefault(); handleResendCode(); }}>Click to resend</Link></p>
            <Button
              type="submit"
              className="w-full p-2 bg-gradient-to-r text-lg from-pink-500 to-orange-500 text-white rounded-lg mt-5"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

EnterCodeVerifyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EnterCodeVerifyModal;
