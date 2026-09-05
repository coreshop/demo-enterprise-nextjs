import type { Preview } from "@storybook/nextjs";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../stories/assets/scss/fonts.scss';
import '../stories/assets/scss/variables.scss';
import '../stories/assets/scss/mixins.scss';
import '../stories/assets/scss/grid.scss';
import '../stories/assets/scss/headlines.scss';
import '../stories/assets/scss/form.scss';
import '../stories/assets/scss/list.scss';
import '../stories/assets/scss/typography.scss';
import '../stories/assets/scss/table.scss';
import '../stories/assets/scss/main.scss';
import '../stories/assets/scss/buttons.scss';

// @ts-ignore
const preview: Preview = {
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: 'light'
            },
            defaultTheme: 'light',
            attributeName: 'data-bs-theme',
        })
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        html: {
            prettier: {
                tabWidth: 4,
                useTabs: false,
                htmlWhitespaceSensitivity: 'strict',
            },
        },
    },
};

export default preview;
