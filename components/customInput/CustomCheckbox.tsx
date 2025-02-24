// components/customInput/CustomCheckbox.tsx
import React from 'react';
import { Checkbox } from '@nextui-org/react';

interface CustomCheckboxProps {
  name: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ name }: any) => {
  return (
    <>
      <Checkbox
        id={name}
        aria-label={'I agree with the term & condition'}
        name={name}
      ></Checkbox>
    </>
  );
};

export default CustomCheckbox;
