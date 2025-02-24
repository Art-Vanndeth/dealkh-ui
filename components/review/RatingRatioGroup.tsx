'use client';

import { cn, RadioGroup, RadioGroupProps } from '@nextui-org/react';

import React from 'react';
import RatingRadioItem from '@/components/review/RatingRadioItem';

export type RatingRadioGroupProps = RadioGroupProps & {
  hideStarsText?: boolean;
};

const RatingRadioGroup = React.forwardRef<
  HTMLDivElement,
  RatingRadioGroupProps
>(({ className, label, hideStarsText, ...props }, ref) => {
  const [value, setValue] = React.useState('0');
  const starsText = React.useMemo(
    () => (value === '0' ? 'No rating' : `${value} stars`),
    [value]
  );

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <RadioGroup
        ref={ref}
        value={value}
        {...props}
        orientation="horizontal"
        onValueChange={setValue}
      >
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <RatingRadioItem key={starValue} value={starValue.toString()} />
          );
        })}
      </RadioGroup>
      {label ? label : null}
      {!hideStarsText && (
        <p className="text-medium text-default-400">{starsText}</p>
      )}
    </div>
  );
});

RatingRadioGroup.displayName = 'RatingRadioGroup';

export default RatingRadioGroup;
