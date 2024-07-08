// theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    text: '#111313',
    background: '#fcfdfd',
    primary: '#7a8e99',
    secondary: '#a8bac2',
    accent: '#8fabb7',
  },
  styles: {
    global: {
      body: {
        bg: '#fcfdfd', // background
        color: '#111313', // text
      },
      a: {
        color: '#7a8e99', // primary
        _hover: {
          color: '#8fabb7', // accent
        },
      },
    },
  },
});

export default customTheme;
