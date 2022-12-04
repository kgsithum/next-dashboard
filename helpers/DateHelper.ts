import dayjs from 'dayjs';
export const FORMAT_YMD = 'YYYY-MM-01';

const formatDate = (date: Date): string => {
  const dateValue = dayjs(date).format(FORMAT_YMD);

  return dateValue;
};

export default formatDate;
