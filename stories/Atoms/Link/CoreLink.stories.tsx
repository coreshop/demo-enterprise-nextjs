import type { Meta, StoryObj } from '@storybook/react';
import { CoreLink } from './CoreLink';

const meta = {
  title: "Atoms/Link",
  component: CoreLink,
  argTypes: {
    target: {
        control: { type: 'select' },
        options: ['_self', '_blank'],
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
    icon: false
  },
};
