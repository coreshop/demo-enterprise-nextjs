import type { Meta, StoryObj } from '@storybook/react';
import { CoreCollapse } from './CoreCollapse';

const meta = {
  title: "Molecules/Collapse",
  component: CoreCollapse,
  argTypes: {
  }
} as Meta<typeof CoreCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: 'Collapse',
    collapseIdentifier: 'test',
    collapseDescription: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beerabore wes anderson cred nesciunt sapiente ea proident.',
    status: true
  },
};