import type { Meta, StoryObj } from '@storybook/react';

import { NewButton } from '../../components/NewButton';

const meta = {
  title: 'Components/NewButton',
  component: NewButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    title: 'NewButton',
    variant: 'ghost',
  },
  //   argTypes: {
  //     isSelected: { table: { disable: true } },
  //     sizeName: {
  //       control: { type: 'select' },
  //     },
  //     typeIcon: {
  //       control: { type: 'select' },
  //     },
  //     variant: {
  //       control: { type: 'select' },
  //     },
  //     formats: {
  //       control: { type: 'select' },
  //     },
  //   },
};
