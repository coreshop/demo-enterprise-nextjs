import type { Meta, StoryObj } from '@storybook/react';
import { PaymentForm } from './PaymentForm';

const meta = {
    title: "Molecules/Form/Payment",
    component: PaymentForm,
    argTypes: {

    }
} satisfies Meta<typeof PaymentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

