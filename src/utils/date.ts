import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/ko";

dayjs.extend(isLeapYear);
dayjs.extend(duration);

export const dateUtil = (date: string | number | Date | null = new Date()) => {
  if (typeof date === "string") {
    return dayjs(date.replace(/\s/g, "").replace(/\./g, "-"));
  } else {
    return dayjs(date);
  }
};

export function getDateDiff(startDate: string, endDate: string) {
  const start = dateUtil(startDate);
  const end = endDate ? dateUtil(endDate) : dateUtil();

  const monthDiff = end.diff(start, "month");
  return monthDiff;
}

export function getPeriodText(monthDiff: number) {
  const year = Math.floor(monthDiff / 12);
  const month = Math.floor(monthDiff % 12);

  if (year === 0) {
    return `${month}개월`;
  } else if (month === 0) {
    return `${year}년`;
  } else {
    return `${year}년 ${month}개월`;
  }
}

export function calculateEmploymentPeriod(startDate: string, endDate: string) {
  const monthDiff = getDateDiff(startDate, endDate);

  return getPeriodText(monthDiff);
}
