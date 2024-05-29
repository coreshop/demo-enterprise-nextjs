import type { Meta, StoryObj } from '@storybook/react';
import { CoreBadge } from './CoreBadge';
import { CoreBadgetype } from './types';

const variantOptions = Object.values(CoreBadgetype);

const meta = {
    title: "Atoms/Badge",
    component: CoreBadge,
    argTypes: {
        variant: {
              control: { type: 'select' },
              options: variantOptions,
        },
    }
} satisfies Meta<typeof CoreBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        description: "TopSeller",
        variant: CoreBadgetype.Primary,
        pill: false,
        close: false,
        colorSpec: '',
        disabled: false,
        selected: false
    },
};
