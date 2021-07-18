import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/roboto/400.css";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};

export default MyApp;
