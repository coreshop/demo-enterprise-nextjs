import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreLink } from './CoreLink';
import * as Icons from 'react-bootstrap-icons';

const meta = {
  title: "Atoms/Link",
  component: CoreLink,
  argTypes: {
    target: {
        control: { type: 'select' },
        options: ['_self', '_blank'],
    },
    iconType: {
        control: { type: 'select' },
        options: Object.keys(Icons) as Array<keyof typeof Icons>
    },
  }
} satisfies Meta<typeof CoreLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Link Text',
    href: '/',
    rel: '',
    title: '',
    target: '_self',
    cssClass: '',
    icon: false,
    iconType: "Search"
  },
};
