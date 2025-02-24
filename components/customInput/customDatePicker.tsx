import React from 'react';
import { useField, useFormikContext } from 'formik';
import { DatePicker, DatePickerProps } from '@nextui-org/react';
import { parseDate } from '@internationalized/date';

interface CustomDatePickerProps extends DatePickerProps {
  name: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  name,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (value: any) => {
    setFieldValue(name, value.toString());
  };

  return (
    <DatePicker
      {...props}
      name={name}
      label="Date of Birth"
      variant={'bordered'}
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error ? meta.error : ''}
      color={meta.touched && meta.error ? 'danger' : 'default'}
      value={field.value ? parseDate(field.value) : undefined}
      onChange={handleChange}
      className="w-full"
      labelPlacement={'outside'}
    />
  );
};

export default CustomDatePicker;
