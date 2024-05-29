import type {Meta, StoryObj} from '@storybook/react';
import {CoreCard} from './CoreCard';
import React from 'react';
import {mockCard} from "@/mockdata/mockCard";
import {CoreCardProps} from "@/stories/Molecules/Cards/types";
const meta = {
    title: "Molecules/Card",
    component: CoreCard,
    argTypes: {}
} satisfies Meta<typeof CoreCard>;

export default meta;
type Story = StoryObj<CoreCardProps>;

export const Default: Story = {
    args: {
        imageSrc: mockCard.imageSrc,
        imageSrc2:  mockCard.imageSrc2,
        title:  mockCard.title,
        subtitle:  mockCard.subtitle,
        description:  mockCard.description,
        layout:  mockCard.layout,
        priceTag: mockCard.priceTag,
        btnBottom: mockCard.btnBottom,
    },
    decorators: [ // styles only for story
        (StoryComponent, {args}) => {
            const width = (args.layout === "layout1" ? "18rem" : "26rem")
            return (
                <div style={{width: width}}>
                    <StoryComponent {...args} />
                </div>
            )
        },
    ],
};
