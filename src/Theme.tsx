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
      'html, body': {
        bg: '#fcfdfd', // Background color
        color: '#111313', // Text color
      },
      a: {
        color: '#7a8e99', // Primary color for links
        _hover: {
          color: '#8fabb7', // Accent color on hover
        },
      },
    },
  },
});

export default customTheme;
