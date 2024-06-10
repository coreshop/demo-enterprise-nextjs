import type { Meta, StoryObj } from '@storybook/react';
import { CoreNavbar } from './CoreNavbar';
import Logo from '../../assets/img/coreshop.svg';
import {mockNavItems} from "../../../mockdata/mockNavItems";
import React, {Suspense} from "react";
import CartWidget from "@/components/cart/widget";
import Loader from "@/components/loader";
import {mockCart} from "@/mockdata/mockCartItem";

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
        navbar: true,
        cartWidget: <Suspense fallback={<Loader/>}><CartWidget cart={mockCart}/></Suspense>
    },
};