const currentYear = new Date().getFullYear();
const startYear = 2012;
export const yearsOfExperience = currentYear - startYear;

export const yearsFromDate = (year: number) => currentYear - year;
