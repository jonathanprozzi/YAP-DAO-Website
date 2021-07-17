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
});

export default theme;
