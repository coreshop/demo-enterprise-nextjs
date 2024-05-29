import type { Meta, StoryObj } from '@storybook/react';
import { GuestForm } from './GuestForm';

const meta = {
    title: "Molecules/Form/Guest",
    component: GuestForm,
    argTypes: {

    }
} satisfies Meta<typeof GuestForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

