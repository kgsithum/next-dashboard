import formatDate from '../../../helpers/DateHelper';
import { IInputDate } from './InputDate';

const handleSelect = (date: Date): void => {
  const dateValue = formatDate(date);
  console.log(dateValue);
};

const base: IInputDate = {
  name: 'from-date',
  defaultDate: new Date(),
  onChange: handleSelect,
};

export const mockInputDateProps = {
  base,
};
