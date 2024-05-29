import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        {
            name: 'storybook-preset-inline-svg',
            options: {
                include: /source\/.+\.svg$/,
                svgInlineLoaderOptions: {
                    removeTags: true,
                    removingTags: ['circle']
                }
            }
        }
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },

};
export default config;
