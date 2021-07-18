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
  },
});

export default theme;
