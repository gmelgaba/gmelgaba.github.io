export const getRatingColor = (rating: string) => {
  if (rating === "No rating") return "gray";
  const numRating = parseFloat(rating);
  if (numRating < 5) return "red";
  if (numRating < 7) return "orange";
  if (numRating < 8.5) return "green";
  return "blue";
};
