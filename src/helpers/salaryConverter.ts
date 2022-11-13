export const salaryConverter = (salary: string) => {
  return salary.replace(/k/g, " 000");
};
