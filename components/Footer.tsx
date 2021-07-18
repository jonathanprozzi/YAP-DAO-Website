import { Box, Flex, Stack } from "@chakra-ui/react";
import FooterCopyright from "./FooterCopyright";

const Footer = () => (
  <Box
    as='footer'
    position='absolute'
    bottom='0'
    minWidth='100vw'
    backgroundColor='black'
    boxShadow='md'
  >
    <Flex direction='column' justify='center' align='center'></Flex>
    <FooterCopyright />
  </Box>
);

export default Footer;
