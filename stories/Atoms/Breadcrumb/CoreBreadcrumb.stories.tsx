import type { Meta, StoryObj } from '@storybook/react';
import { CoreBreadcrumb } from './CoreBreadcrumb';

const meta = {
  title: "Atoms/Breadcrumb",
  component: CoreBreadcrumb,
  argTypes: {
    breadcrumbItems: {control: { type: 'object' }},
    icon: {control: {type: 'boolean'}},
    divider: {
      control: { type: 'select' },
      options: ["style-1", "style-2" , "style-3"]
    },
  }
} satisfies Meta<typeof CoreBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: false,
    divider: "style-1",
    breadcrumbItems: [
        { title: "Home", link: "/de" },
        { title: "Shop", link: "/shop" },
        { title: "Product", link: "" }
    ]
  },
};