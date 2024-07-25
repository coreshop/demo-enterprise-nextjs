import type { Meta, StoryObj } from '@storybook/react';
import { CoreCarousel } from './CoreCarousel';

const meta = {
    title: "Molecules/Carousel",
    component: CoreCarousel,
    argTypes: {
        showSlides: { control: 'number' },
        showNavigation: { control: 'boolean' },
        showPagination: { control: 'boolean' },
        autoplay: { control: 'boolean' },
        autoplayDelay: { control: 'number' },
        loop: { control: 'boolean' },
        height: {
            control: { type: 'select' },
            options: ['auto', 'half', 'full']
        },
    }
} satisfies Meta<typeof CoreCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: 'full',
        showSlides: 1,
        showNavigation: true,
        showPagination: true,
        autoplay: false,
        loop: false,
        autoplayDelay: 5000,
        data: [{
            id: 1,
            dark: true,
            headline: "Welcome to our Hero Section",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae urna lacinia aliquet. Nulla facilisi.",
            imageSrc: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            dark: true,
            headline: "Welcome to our superduperHero Section",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae urna lacinia aliquet. Nulla facilisi.",
            imageSrc: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
            {
                id: 3,
                dark: true,
                headline: "Welcome to our superduperHero Section",
                lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae urna lacinia aliquet. Nulla facilisi.",
                imageSrc: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 4,
                dark: true,
                headline: "Welcome to our superduperHero Section",
                lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae urna lacinia aliquet. Nulla facilisi.",
                imageSrc: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }]
    },
};