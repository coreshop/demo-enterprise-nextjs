import type { Meta, StoryObj } from '@storybook/react';
import { AddressForm } from './AddressForm';

const meta = {
    title: "Molecules/Form/Address",
    component: AddressForm,
    argTypes: {

    }
} satisfies Meta<typeof AddressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

