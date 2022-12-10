import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputScale, { InputScaleProps } from './InputScale';
import { mockInputScaleProps } from './InputScale.mock';

export default {
  title: 'input/InputScale',
  component: InputScale,
  argTypes: {},
} as ComponentMeta<typeof InputScale>;

const Template: ComponentStory<typeof InputScale> = (args) => (
  <InputScale {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputScaleProps.base,
} as InputScaleProps;
