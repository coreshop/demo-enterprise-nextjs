import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreAccordion } from './CoreAccordion';

const meta = {
  title: "Molecules/Accordion",
  component: CoreAccordion,
  argTypes: {
  }
} as Meta<typeof CoreAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        active: "0",
        accordionItems: [
          { title: "Title 1", description: "Description 1" },
          { title: "Title 2", description: "Description 2" },
          { title: "Title 3", description: "Description 3" }
        ]
    },
};