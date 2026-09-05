import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreForm } from './CoreForm';

const meta = {
  title: "Molecules/Form",
  component: CoreForm,
  argTypes: {
   
  }
} satisfies Meta<typeof CoreForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

