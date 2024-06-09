import type { Meta, StoryObj } from '@storybook/react';

import { NewCard } from '../../components/NewCard';

const meta = {
  title: 'Components/NewCard',
  component: NewCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  //   args: {
  //     title: 'NewButton',
  //   },
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
