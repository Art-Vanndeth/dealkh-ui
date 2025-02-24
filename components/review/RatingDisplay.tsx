// work/final_project/dealkh-ui/components/card/review/RatingDisplay.tsx

'use client';

import React from 'react';
import { StarIcon } from './StarIcon';

type StarIconProps = {
  rating: number;
  size?: number;
};

const RatingDisplay = ({ rating, size = 24 }: StarIconProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starValue = i + 1;
    const filled = starValue <= rating;
    const half = !filled && starValue - 0.5 === rating;
    stars.push(
      <StarIcon
        key={i}
        size={size}
        filled={filled}
        half={half}
        color="#F5A524"
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default RatingDisplay;
