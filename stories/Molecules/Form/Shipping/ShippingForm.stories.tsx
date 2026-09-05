import type { Meta, StoryObj } from '@storybook/nextjs';
import { ShippingForm } from './ShippingForm';

const meta = {
    title: "Molecules/Form/Shipping",
    component: ShippingForm,
    argTypes: {

    }
} satisfies Meta<typeof ShippingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

