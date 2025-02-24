// utils/roundRating.js
export function roundRating(rating: number) {
  if (rating > 4.5 && rating < 5) {
    return 4.5;
  }
  return Math.round(rating * 2) / 2;
}
