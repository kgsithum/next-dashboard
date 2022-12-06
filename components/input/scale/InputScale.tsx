import React, { useState } from 'react';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export interface InputScaleProps {
  name: string;
  defaultValue: number | Range;
  onChange: (value: number | Range) => void;
}

const InputScale: React.FC<InputScaleProps> = ({
  name,
  defaultValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number | Range>(
    defaultValue
  );
  const handleOnChange = (value: number | Range): void => {
    onChange(value);
    setSelectedValue(value);
  };

  return (
    <InputRange
      maxValue={2}
      minValue={1}
      step={0.1}
      value={selectedValue}
      onChange={handleOnChange}
    />
  );
};

export default InputScale;
