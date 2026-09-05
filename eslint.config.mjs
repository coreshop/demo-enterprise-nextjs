import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import storybook from 'eslint-plugin-storybook';

export default defineConfig([
    ...nextVitals,
    ...storybook.configs['flat/recommended'],
    globalIgnores(['.next/**', 'storybook-static/**', 'node_modules/**', 'next-env.d.ts']),
]);
