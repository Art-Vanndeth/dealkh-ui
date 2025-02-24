import React, { useState } from 'react';
import { Slider } from '@nextui-org/react';
import RatingDisplay from './RatingDisplay';
interface RatingSliderProps {
  rating: number;
  onRatingChange: (value: number | number[]) => void;
}
const RatingSlider = ({ rating, onRatingChange }: RatingSliderProps) => {
  return (
    <div className="flex max-w-md flex-col items-center">
      <Slider
        label="Rating"
        step={0.5}
        maxValue={5}
        minValue={0}
        defaultValue={0}
        onChange={onRatingChange}
        showSteps={true}
        showTooltip={true}
        color="warning"
        showOutline={true}
        disableThumbScale={true}
        formatOptions={{ maximumFractionDigits: 1 }}
        tooltipValueFormatOptions={{ maximumFractionDigits: 1 }}
        classNames={{
          base: 'max-w-md',
          filler: 'bg-gradient-to-r from-warning-400 to-pink-500',
          labelWrapper: 'mb-2',
          label: 'font-medium text-default-700 text-medium',
          value: 'font-medium text-default-500 text-small',
          thumb: [
            'transition-size',
            'bg-gradient-to-r from-warning-400 to-pink-500',
            'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
            'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
          ],
          step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
        }}
        tooltipProps={{
          offset: 10,
          placement: 'bottom',
          classNames: {
            base: [
              // arrow color
              'before:bg-gradient-to-r before:from-warning-400 before:to-pink-500',
            ],
            content: [
              'py-2 shadow-xl',
              'text-white bg-gradient-to-r from-warning-400 to-pink-500',
            ],
          },
        }}
      />
    </div>
  );
};

export default RatingSlider;
