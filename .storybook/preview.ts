import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import 'bootstrap/scss/bootstrap.scss';
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
