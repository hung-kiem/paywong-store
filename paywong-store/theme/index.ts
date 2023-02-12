import { extendTheme, withDefaultColorScheme, ThemeConfig } from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'system', // light, dark or system
  useSystemColorMode: false,
};

const overrides = {
  config,
  ...foundations,
  components,
};

export const customTheme = extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: 'purple' })
);
