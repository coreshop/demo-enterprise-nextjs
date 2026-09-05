import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreDropdown } from './CoreDropdown';
import { CoreButtontype } from '../../Atoms/Button/types';

const variantOptions = Object.values(CoreButtontype);

const meta = {
  title: "Molecules/Dropdown",
  component: CoreDropdown,
  argTypes: {
    variant: {
        control: { type: 'select' },
        options: variantOptions,
    },
  }
} as Meta<typeof CoreDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    select: false,
    variant: CoreButtontype.Primary,
    title: "Button dropdown",
    items: [
        { description: "Ispum terum culum", link: "/", icon:"Search" ,flagCode:"", language:"" },
        { description: "Lorem ipsum inove terum", link: "/link-2",icon:"",flagCode:"US", language:"" },
        { description: "Inovec terium", link: "/link-3",icon:"Activity",flagCode:"", language:"" }
      ]
  },
};