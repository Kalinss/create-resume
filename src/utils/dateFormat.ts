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
