export const getStringDDMMYYYY = (date: Date) => {
  const arr: number[] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  return arr
    .map((item) => (item < 10 ? `0${item}` : item.toString()))
    .join(".");
};

export const getStringYear = (date: Date) => date.getFullYear().toString();

export const getStringMMYY = (date: Date) => {
  const arr: number[] = [date.getMonth() + 1, date.getFullYear()];
  return arr
    .map((item) => (item < 10 ? `0${item}` : item.toString()))
    .join(".");
};
