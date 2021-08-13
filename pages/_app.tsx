import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/roboto/400.css";
import SiteLayout from "../components/SiteLayout";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title='YAP DAO'
        description='YAP DAO is a community that provides public relations and communications support to the DeFi world. It is a service marketplace for non-technical people to get work in a technical field.'
        canonical='https://yapdao.xyz'
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://yapdao.xyz",
          site_name: "YAP DAO",
          title: "YAP DAO",
          description:
            "YAP DAO is a community that provides public relations and communications support to the DeFi world. It is a service marketplace for non-technical people to get work in a technical field.",
          images: [
            {
              url: "/yapdao-logo.png",
              width: 1200,
              height: 630,
              alt: "YAP DAO logo: Y within a globe",
            },
          ],
        }}
      />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};

export default MyApp;
