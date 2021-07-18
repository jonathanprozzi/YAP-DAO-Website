import { Box, Flex, Stack } from "@chakra-ui/react";
import FooterCopyright from "./FooterCopyright";

const Footer = () => (
  <Box
    as='footer'
    minWidth='100vw'
    // backgroundColor='black'
    boxShadow='md'
    paddingX={[2, 2, 8, 8]}
  >
    <Flex direction='column' justify='center' align='center'>
      <Box height='20vw' background='brand.green'></Box>
    </Flex>
    <FooterCopyright />
  </Box>
);

export default Footer;
