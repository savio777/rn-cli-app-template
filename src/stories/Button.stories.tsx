import type {Meta, StoryObj} from '@storybook/react';
import Button from 'src/components/molecules/Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};
