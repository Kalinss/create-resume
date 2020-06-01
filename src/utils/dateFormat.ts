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

export const getDateFromStateDDMMYYYY = (x: string) => {
  if (x) {
    const data = x.split(".").reverse();
    const [YYYY, MM, DD] = data;
    return new Date(+YYYY, +MM - 1, +DD);
  }
  return new Date();
};

export const getDateFromStateMMYYYY = (x: string) => {
  if (x) {
    const data = x.split(".");
    const [MM, YYYY] = data;
    return new Date(+YYYY, +MM - 1);
  }
  return new Date();
};

export const getDateFromStateYYYY = (x: string) => {
  return x ? new Date(+x, 1) : new Date();
};
