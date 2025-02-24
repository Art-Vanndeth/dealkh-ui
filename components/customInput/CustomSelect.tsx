import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useField } from 'formik';

interface CustomSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  placeholder,
}) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <Select
      // label={label}
      // placeholder={placeholder}
      selectedKeys={[field.value]}
      onSelectionChange={(keys: any) => {
        helpers.setValue([...keys][0]);
        setIsOpen(false);
      }}
      label={label}
      size={'md'}
      variant={'bordered'}
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
      color={meta.touched && meta.error ? 'danger' : 'default'}
      isOpen={isOpen}
      labelPlacement={'outside'}
      onClick={handleToggle}
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
