import type { Meta, StoryObj } from '@storybook/nextjs';
import { Products } from './Products';
import Logo from '../../assets/img/coreshop.svg';
import {mockNavItems} from "../../../mockdata/mockNavItems";
import {mockTopbarItems} from "../../../mockdata/mockTopbarItems";

const meta = {
  title: "Pages/Products",
  component: Products,
  argTypes: {
  }
} as Meta<typeof Products>;

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
    footerPreText: { text:"© CoreShop GmbH (GPLv3 and CoreShop Commercial License)", href:"https://www.coreshop.org"},
    breadcrumbItems: [
        { title: "Home", link: "/de" },
        { title: "Shop", link: ""},
    ],
    paginationItems: [
        { number: "1", link: "/", active: false },
        { number: "2", link: "/", active: false },
        { number: "3", link: "/", active: false },
        { number: "4", link: "/", active: false },
        { number: "5", link: "/", active: false },
        { number: "6", link: "/", active: false },
        { number: "7", link: "/", active: false },
        { number: "8", link: "/", active: false },
        { number: "9", link: "/", active: false },
        { number: "10", link: "/", active: false },
        { number: "11", link: "/", active: false },
        { number: "12", link: "/", active: true },
        { number: "13", link: "/", active: false },
        { number: "14", link: "/", active: false },
        { number: "15", link: "/", active: false },
        { number: "16", link: "/", active: false },
        { number: "17", link: "/", active: false },
        { number: "18", link: "/", active: false }
    ]
  },
};