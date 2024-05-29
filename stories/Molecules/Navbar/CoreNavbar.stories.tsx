import type { Meta, StoryObj } from '@storybook/react';
import { CoreNavbar } from './CoreNavbar';
import Logo from '../../assets/img/coreshop.svg';
import {mockNavItems} from "../../../mockdata/mockNavItems";

const meta = {
  title: "Molecules/Navbar",
  component: CoreNavbar,
  argTypes: {
  }
} as Meta<typeof CoreNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoActive: true,
    logo: {
        imgsrc: Logo,
        link: '/'
    },
    items: mockNavItems,
    searchBar: true,
    cart: false,
    navbar: true
  },
};