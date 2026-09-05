import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreAlert } from './CoreAlert';
import { CoreAlerttype } from './types';
import * as Icons from 'react-bootstrap-icons';

const variantOptions = Object.values(CoreAlerttype);

const meta = {
  title: "Atoms/Alert",
  component: CoreAlert,
  argTypes: {
    variant: {
        control: { type: 'select' },
        options: variantOptions,
    },
    dismissible: {
      control: { type: 'boolean' }
    },
    iconType: { 
      control: { type: 'select' },
      options: Object.keys(Icons) as Array<keyof typeof Icons>
    },
  },
} satisfies Meta<typeof CoreAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Primary,
    dismissible: false
  },
};

export const Secondary: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Secondary,
    dismissible: false
  },
};

export const Success: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Success,
    dismissible: false
  },
};
export const Warning: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Warning,
    dismissible: false
  },
};
export const Danger: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Danger,
    dismissible: false
  },
};
export const Info: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Info,
    dismissible: false
  },
};
export const Light: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Light,
    dismissible: false
  },
};
export const Dark: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet",
    variant: CoreAlerttype.Dark,
    dismissible: false
  },
};