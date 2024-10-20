import type {Meta, StoryObj} from '@storybook/react';
import Text from 'src/components/atom/Text';

const meta = {
  title: 'Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};

export const Bold: Story = {
  args: {
    children: 'Hello world',
    weight: 'bold',
  },
};

export const Red: Story = {
  args: {
    children: 'Hello world',
    color: 'red',
  },
};
