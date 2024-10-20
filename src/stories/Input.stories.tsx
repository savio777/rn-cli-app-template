import type {Meta, StoryObj} from '@storybook/react';
import Input from 'src/components/molecules/Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Hello world',
  },
};

export const Error: Story = {
  args: {
    value: 'Hello world',
    error: 'Error test',
  },
};
