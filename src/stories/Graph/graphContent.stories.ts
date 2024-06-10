import type { Meta, StoryObj } from '@storybook/react';

import { Graph } from '../../components/Graph';

const meta = {
  title: 'Components/Graph',
  component: Graph,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Graph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    data: [
      { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
    ],
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
