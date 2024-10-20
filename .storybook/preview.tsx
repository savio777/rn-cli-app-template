import React from 'react';

import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import type {Preview} from '@storybook/react';

import {ThemeProvider} from 'styled-components/native';

import {TranslationProvider} from '../src/hooks/usei18n';
import {myTheme} from '../src/theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{name: 'dark', value: '#696969'}],
    },
  },
  decorators: [
    withBackgrounds,
    Story => (
      <ThemeProvider theme={myTheme}>
        <TranslationProvider>
          <Story />
        </TranslationProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;
