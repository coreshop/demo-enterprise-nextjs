import type { Meta, StoryObj } from '@storybook/nextjs';
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
        offerPrice: '€150.50EUR',
        price: '€135.50EUR',
        vat: true,
        taxAmount: '€25.50EUR',
        showDiscount: true
    },
};