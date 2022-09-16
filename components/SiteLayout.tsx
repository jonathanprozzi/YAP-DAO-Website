import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = ({ children, minHeight = "100vh" }) => {
  return (
    <Flex
      direction="column"
      overflowX="hidden"
      margin="0 auto"
      minHeight={minHeight ? minHeight : "100vh"}
      minWidth="100vw"
      position="relative"
      background="black"
    >
      {/* <Navbar /> */}
      <Flex
        direction="column"
        align="center"
        // justify={["flex-start", "flex-start", "center", "center"]}
        justify={{ baseline: "center" }}
        flex="1"
        minHeight={["100vh", "100vh", "0", "0"]}
      >
        {children}
      </Flex>
      {/* <Footer /> */}
    </Flex>
  );
};

export default SiteLayout;
