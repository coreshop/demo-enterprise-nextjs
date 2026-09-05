import type { Meta, StoryObj } from '@storybook/nextjs';
import { Slide  } from './Slide';
import Logo from '../../assets/img/coreshop.svg';

const meta = {
  title: "Molecules/Carousel/Slide",
  component: Slide,
  argTypes: {
    dark: { control: 'boolean' },
    headline: { control: 'text' },
    lead: { control: 'text' },
    imageSrc: { control: 'text' },
  }
} as Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        dark: true,
        headline: "Welcome to our Hero Section",
        lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae urna lacinia aliquet. Nulla facilisi.",
        imageSrc: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };