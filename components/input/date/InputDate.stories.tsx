import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputDate, { InputDateProps } from './InputDate';
import { mockInputDateProps } from './InputDate.mocks';

export default {
  title: 'input/InputDate',
  component: InputDate,
  argTypes: {},
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = (args) => (
  <InputDate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputDateProps.base,
} as InputDateProps;
