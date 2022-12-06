import formatDate from '../../../helpers/DateHelper';
import { InputDateProps } from './InputDate';

const handleSelect = (date: Date): void => {
  const dateValue = formatDate(date);
  console.log(dateValue);
};

const base: InputDateProps = {
  name: 'from-date',
  defaultDate: new Date(),
  onChange: handleSelect,
};

export const mockInputDateProps = {
  base,
};
