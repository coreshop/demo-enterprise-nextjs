import type { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';
import {mockNavItems} from "../../../mockdata/mockNavItems";

const meta = {
  title: "Molecules/Topbar",
  component: Topbar,
  argTypes: {
   
  }
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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

