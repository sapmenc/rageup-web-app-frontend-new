const lowRange: number = 2015;
const highRange: number = new Date().getFullYear();

const years: string[] = Array.from(
  { length: highRange - lowRange + 1 },
  (_, index) => lowRange + index + ""
);

export default years;
