import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginForm } from './LoginForm';

const meta = {
    title: "Molecules/Form/Login",
    component: LoginForm,
    argTypes: {

    }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

