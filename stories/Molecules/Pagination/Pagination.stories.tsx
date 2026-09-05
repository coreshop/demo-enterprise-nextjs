import type { Meta, StoryObj } from '@storybook/nextjs';
import { CorePagination } from './Pagination';

const meta = {
  title: "Molecules/Pagination",
  component: CorePagination,
  argTypes: {

  }
} satisfies Meta<typeof CorePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paginationItems: [
        { number: "1", link: "/", active: false },
        { number: "2", link: "/", active: false },
        { number: "3", link: "/", active: false },
        { number: "4", link: "/", active: false },
        { number: "5", link: "/", active: false },
        { number: "6", link: "/", active: false },
        { number: "7", link: "/", active: false },
        { number: "8", link: "/", active: false },
        { number: "9", link: "/", active: true },
        { number: "10", link: "/", active: false },
        { number: "11", link: "/", active: false },
        { number: "12", link: "/", active: false },
        { number: "13", link: "/", active: false },
        { number: "14", link: "/", active: false },
        { number: "15", link: "/", active: false },
        { number: "16", link: "/", active: false },
        { number: "17", link: "/", active: false },
        { number: "18", link: "/", active: false }
      ]
  },
};