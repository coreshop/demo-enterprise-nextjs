import type { Meta, StoryObj } from '@storybook/react';
import { StatusDot } from './StatusDot';

const meta = {
    title: "Molecules/StatusDot",
    component: StatusDot,
    argTypes: {
    }
} as Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        status: "available",
        text: "In Stock"
    },
};