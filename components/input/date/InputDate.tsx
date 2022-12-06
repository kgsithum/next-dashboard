import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface InputDateProps {
  name: string;
  defaultDate: Date;
  excludeDay?: boolean;
  onChange: (date: Date) => void;
}

const InputDate: React.FC<InputDateProps> = ({
  name,
  defaultDate,
  excludeDay,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);
  const handleOnChange = (date: Date): void => {
    onChange(date);
    setSelectedDate(date);
  };

  const format = excludeDay ? 'yyyy-MM' : 'yyyy-MM-dd';

  return (
    <DatePicker
      name={name}
      selected={selectedDate}
      onChange={handleOnChange}
      dateFormat={format}
      showMonthYearPicker={excludeDay}
      className="shadow appearance-none border rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/6 sm:w-64 h-12 px-3"
    />
  );
};

InputDate.defaultProps = {
  excludeDay: true,
};

export default InputDate;
