import { extendTheme } from '@chakra-ui/react';


const customTheme = extendTheme({
  colors: {
    text: '#0f1013',
    background: '#f5f6f9',
    primary: '#576eb0',
    secondary: '#a0afdd',
    accent: '#6482d8',
  },
  styles: {
    global: {
      'html, body': {
        bg: '#f5f6f9', // Background color
        color: '#0f1013', // Text color
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
