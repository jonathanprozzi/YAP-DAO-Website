import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/roboto/400.css";
import SiteLayout from "../components/SiteLayout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
