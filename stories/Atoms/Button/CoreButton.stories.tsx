import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreButton } from './CoreButton';
import { CoreButtontype } from './types';
import * as Icons from 'react-bootstrap-icons';

const variantOptions = Object.values(CoreButtontype);

const meta = {
  title: "Atoms/Button",
  component: CoreButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variantOptions,
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg', 'normal'],
    },
    iconType: {
      control: { type: 'select' },
      options: Object.keys(Icons) as Array<keyof typeof Icons>
    },

  }
} satisfies Meta<typeof CoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Button title',
        variant: CoreButtontype.Primary,
        size: 'normal',
        icon: false,
        iconType: 'Search',
        iconPre: true,
        iconPost: false,
        disabled: false,
        buttonType: 'button',
        href: '',
        target: '',
        ariaExpanded: false,
        ariaControls:'',
        loader: false
    },
};
