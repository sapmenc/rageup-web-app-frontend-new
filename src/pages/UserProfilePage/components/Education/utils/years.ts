const getRangeOfYears = (lowRange: number, highRange: number): string[] => {
  return Array.from(
    { length: highRange - lowRange + 1 },
    (_, index) => lowRange + index + ""
  );
};

const years: string[] = getRangeOfYears(2015, new Date().getFullYear());
export const completionYears: string[] = getRangeOfYears(2000, 2030);
export default years;
