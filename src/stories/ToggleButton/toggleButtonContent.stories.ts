import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from '../../components/ToggleButton';

const meta = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    darkButtonText: 'Dark',
    lightButtonText: 'Light',
    setTheme: (theme: string) => console.log(theme),
    systemButtonText: 'System',
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
