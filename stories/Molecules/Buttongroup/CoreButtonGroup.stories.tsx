import type { Meta, StoryObj } from '@storybook/react';
import { CoreButtonGroup } from './CoreButtonGroup';

const meta = {
  title: "Molecules/Buttongroup",
  component: CoreButtonGroup,
  argTypes: {

  }
} satisfies Meta<typeof CoreButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};