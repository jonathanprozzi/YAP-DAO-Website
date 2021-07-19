import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Bebas Neue",
    body: "Roboto",
    mono: "Menlo, monospace",
  },
  colors: {
    brand: {
      black: "#000000",
      offWhite: "#f7f7f7",
      purple: "#7e02fc",
      pink: "#ff4aed",
      blue: "#23b6ff",
      green: "#76efed",
    },
    brandPurple: {
      50: "#f5e4ff",
      100: "#d9b2ff",
      200: "#bf80ff",
      300: "#a54dff",
      400: "#8b1bfd",
      500: "#7202e4",
      600: "#5900b2",
      700: "#3f0080",
      800: "#26004f",
      900: "#0f001f",
    },
  },
});

export default theme;
