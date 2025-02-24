import React from 'react';
import { useField } from 'formik';
import { Input } from '@nextui-org/react';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type,
  placeholder,
}) => {
  const [field, meta, helpers] = useField(name);
  const handleClear = () => {
    helpers.setValue('');
  };
  return (
    <Input
      {...field}
      type={type}
      label={label}
      labelPlacement={'outside'}
      size={'md'}
      variant={'bordered'}
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
      color={meta.touched && meta.error ? 'danger' : 'default'}
      placeholder={placeholder}
      classNames={{
        inputWrapper:
          'border-transparent bg-default-50/80 dark:bg-default-50/20 group-data-[focus=true]:border-primary border-foreground/20',
      }}
      isClearable={true}
      onClear={() => handleClear()}
    />
  );
};

export default CustomInput;
