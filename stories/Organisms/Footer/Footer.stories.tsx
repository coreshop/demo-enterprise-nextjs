import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import Logo from '../../assets/img/coreshop.svg';

const meta = {
  title: "Organisms/Footer",
  component: Footer,
  argTypes: {
  }
} as Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
        imgsrc: Logo,
        link: '/test'
    },
    links1: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ],
    links2: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ],
    links3: [
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
        {text:"Item", href:"/"},
    ]
  },
};