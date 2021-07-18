import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = ({ children, minHeight = "100vh" }) => {
  return (
    <Flex
      direction='column'
      overflowX='hidden'
      margin='0 auto'
      minHeight={minHeight ? minHeight : "100vh"}
      maxHeight='100vh'
      minWidth='100vw'
    >
      <Navbar />
      <Heading as='h1' display='none'>
        YAP DAO
      </Heading>

      <Flex
        direction='column'
        align='center'
        justify={["flex-start", "flex-start", "center", "center"]}
        flex='1'
        minHeight={["100vh", "100vh", "0", "0"]}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SiteLayout;
