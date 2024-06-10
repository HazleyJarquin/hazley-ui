import type { Meta, StoryObj } from '@storybook/react';

import { DataTable } from '../../components/DataTable';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    columns: [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
    ],
    data: [
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'jul@hotmail.com',
      },
    ],
    inputPlaceHolder: 'Search',
    columnToSearchData: 'status',
    nextButtonPaginationText: 'Siguiente',
    noResultText: 'No results found',
    previousButtonPaginationText: 'Anterior',
    rowsSelectedText: 'rows selected',
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
