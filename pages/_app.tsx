import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/roboto/400.css";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
