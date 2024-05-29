import type { Meta, StoryObj } from '@storybook/react';
import { PriceTag } from './PriceTag';

const meta = {
    title: "Atoms/PriceTag",
    component: PriceTag,
    argTypes: {

    }
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currency: '€',
        offerPrice: '150.50',
        price: '135.50',
        vat: true
    },
};