export const openDays = (data: Date) => {
  const convertedData: any = new Date(data);
  return Math.ceil((Date.now() - convertedData) / 86400000);
};
