import React from 'react';
import { useField } from 'formik';
import { Input } from '@nextui-org/react';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { togglePasswordVisibility } from '@/redux/feature/password/passwordVisibilitySlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

interface CustomPasswordInputProps {
  label: string;
  name: string;
  placeholder?: string;
}

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  label,
  name,
  placeholder,
}) => {
  const dispatch = useAppDispatch();
  const showPassword = useAppSelector((state) => state.passwordVisibility);
  const [field, meta] = useField(name);

  const handleShowPassword = () => {
    dispatch(togglePasswordVisibility());
  };
  return (
    <div style={{ position: 'relative' }}>
      <Input
        {...field}
        type={showPassword ? 'text' : 'password'}
        label={label}
        placeholder={placeholder}
        labelPlacement={'outside'}
        size={'md'}
        variant={'bordered'}
        classNames={{
          inputWrapper:
            'border-transparent bg-default-50/80 dark:bg-default-50/20 group-data-[focus=true]:border-primary data-[hover=true]:border-foreground/20',
        }}
        isInvalid={meta.touched && !!meta.error}
        errorMessage={meta.touched && meta.error ? meta.error : ''}
        color={meta.touched && meta.error ? 'danger' : 'default'}
        endContent={
          <div
            onClick={handleShowPassword}
            style={{
              position: 'absolute',
              right: '5%',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
          </div>
        }
        fullWidth
      />
    </div>
  );
};

export default CustomPasswordInput;
