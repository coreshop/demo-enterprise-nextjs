import type { Meta, StoryObj } from '@storybook/react';
import { FooterPre } from './FooterPre';
import {mockNavItems} from "../../../mockdata/mockNavItems";

const meta = {
  title: "Organisms/FooterPre",
  component: FooterPre,
  argTypes: {
  }
} as Meta<typeof FooterPre>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerPreText: { text:"© CoreShop GmbH (GPLv3 and CoreShop Commercial License)", href:"https://www.coreshop.org"},
    footerPreItems: mockNavItems,
  }
};