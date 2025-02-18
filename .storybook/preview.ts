import type { Preview } from '@storybook/react';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: 'light',
      },
      attributeName: 'data-mode',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
