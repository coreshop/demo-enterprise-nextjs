import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import Logo from '../../assets/img/coreshop.svg';
import {mockNavItems} from "../../../mockdata/mockNavItems";

const meta = {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
  }
} as Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
      imgsrc: Logo,
      link: '/test'
    },
      itemsTopbar: mockNavItems,
      items: mockNavItems,
    wishlist: { text: "Wishlist", href: "/", cssClass: "text-decoration-none", icon: true, iconType: "Heart"},
    dropdownItems: [
      { description: "(EUR)", link: "/", icon:"CurrencyEuro" ,flagCode:"" },
      { description: "(USD)", link: "/link-3",icon:"CurrencyDollar",flagCode:"" }
    ],
    dropdownItemsLanguage: [
      { description: "Austria", link: "/", icon:"", flagCode:"AT" },
      { description: "USA", link: "/link-3",icon:"", flagCode:"US" }
    ],
  },
};