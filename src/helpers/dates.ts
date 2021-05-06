const MS_PER_DAY = 1000 * 60 * 60 * 24;

// @ts-ignore
export const getCurrentDay = (today: Date) => Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);

export const getNumberOfWeek = () => {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  // @ts-ignore
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const leapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInYear = (year: number) => {
  if (leapYear(year)) return 366;
  else return 365;
};

export const getYear = (today: Date) => today.getFullYear();

// TODO Can use an enum for Quaters
export const getQuarter = (today: Date) => {
  const monthIndex = today.getMonth();
  if (monthIndex <= 3) return 'Q1';
  if (monthIndex <= 6) return 'Q2';
  if (monthIndex <= 9) return 'Q3';
  return 'Q4';
};

export const getDateString = (date: Date) => date.toDateString();

export const getDateDiffInDays = (a: Date, b: Date) => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
};
