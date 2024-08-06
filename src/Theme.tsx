import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    text: "#09090b",
    subtleText: "#6e6e77",
    background: "#ffffff",
    primary: "#0a8537",
    secondary: "#f4f4f5",
    accent: "#f4f4f5",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
});

export default customTheme;
