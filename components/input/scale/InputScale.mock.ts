import { Range } from 'react-input-range';
import { InputScaleProps } from './InputScale';

const handleChange = (value: number | Range): void => {
  console.log(value);
};

const base: InputScaleProps = {
  name: 'scale',
  defaultValue: 1,
  onChange: handleChange,
};

export const mockInputScaleProps = {
  base,
};
