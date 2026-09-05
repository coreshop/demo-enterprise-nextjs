import type { Meta, StoryObj } from '@storybook/nextjs';
import { CoreFooter } from './Footer';
import Logo from '../../assets/img/coreshop.svg';

const meta = {
  title: "Organisms/Footer",
  component: CoreFooter,
  argTypes: {
  }
} as Meta<typeof CoreFooter>;

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