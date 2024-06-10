import type { Meta, StoryObj } from '@storybook/react';
import { CoreCartWidget } from './CartWidget';
import {mockCart} from "@/mockdata/mockCartItem";

const meta = {
    title: "Molecules/CartWidget",
    component: CoreCartWidget,
    argTypes: {

    }
} satisfies Meta<typeof CoreCartWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cart: mockCart
    },
};