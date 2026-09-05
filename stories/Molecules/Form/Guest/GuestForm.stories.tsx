import type { Meta, StoryObj } from '@storybook/nextjs';
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

