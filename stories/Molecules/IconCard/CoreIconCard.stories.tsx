import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreIconCard } from './CoreIconCard';
import * as Icons from 'react-bootstrap-icons';

const meta = {
    title: "Molecules/IconCard",
    component: CoreIconCard,
    argTypes: {
        iconType: {
            control: { type: 'select' },
            options: Object.keys(Icons) as Array<keyof typeof Icons>
        },
    }
} satisfies Meta<typeof CoreIconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        iconType: "ListUl",
        iconSize: "36px",
        btnText: "Lorem ipsum",
        btnHref: "/"

    }
};
