import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
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
    brandPink: {
      50: "#ffe2ff",
      100: "#ffb2f9",
      200: "#ff7ff3",
      300: "#ff4ded",
      400: "#fe1de7",
      500: "#e506ce",
      600: "#b300a1",
      700: "#810074",
      800: "#4f0046",
      900: "#1e001a",
    },
    brandBlue: {
      50: "#d8f9ff",
      100: "#abe7ff",
      200: "#7bd5ff",
      300: "#49c4ff",
      400: "#1ab3ff",
      500: "#0099e6",
      600: "#0077b4",
      700: "#005582",
      800: "#003451",
      900: "#001221",
    },
    brandGreen: {
      50: "#dcffff",
      100: "#b5f8f7",
      200: "#8af2f0",
      300: "#5fecea",
      400: "#38e7e4",
      500: "#23cdcb",
      600: "#13a09e",
      700: "#037271",
      800: "#004645",
      900: "#001919",
    },
  },
});

export default theme;
