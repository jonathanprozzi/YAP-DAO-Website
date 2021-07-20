import { Box, Stack } from "@chakra-ui/react";
import Copyright from "./Copyright";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <Box as='footer' role='contentinfo' paddingTop={8} backgroundColor='black'>
    <Stack paddingX={{ base: "4", md: "16" }} maxW='7xl'>
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <Logo />
        <SocialLinks />
      </Stack>
    </Stack>
    <Copyright content='YAP DAO. All rights reserved.' />
  </Box>
);

export default Footer;
