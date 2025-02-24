import React from 'react';
import { useField } from 'formik';
import { Textarea } from '@nextui-org/react';

interface CustomTextAreaProps {
  label: string;
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  name,
  placeholder,
  isDisabled,
}) => {
  const [field, meta] = useField(name);

  return (
    <Textarea
      {...field}
      label={label}
      placeholder={placeholder}
      size={'md'}
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
      variant={'bordered'}
      color={meta.touched && meta.error ? 'danger' : 'default'}
    />
  );
};

export default CustomTextArea;
