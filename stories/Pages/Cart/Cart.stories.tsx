import type { Meta, StoryObj } from '@storybook/nextjs';
import { Cart } from './Cart';
import Logo from '../../assets/img/coreshop.svg';
import {mockNavItems} from "../../../mockdata/mockNavItems";
import {mockTopbarItems} from "../../../mockdata/mockTopbarItems";

const meta = {
  title: "Pages/Checkout/Cart",
  component: Cart,
  argTypes: {
  }
} as Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
        imgsrc: Logo,
        link: '/test'
    },
      itemsTopbar: mockTopbarItems,
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
    links1: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ],
    links2: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ],
    links3: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ],
    footerPreItems: mockNavItems,
    footerPreText: { text:"© CoreShop GmbH (CoreShop Commercial License)", href:"https://www.coreshop.org"},
    breadcrumbItems: [
        { title: "Home", link: "/de" },
        { title: "Shop", link: "/shop"},
        { title: "Cart", link: ""},
    ],
  },
};