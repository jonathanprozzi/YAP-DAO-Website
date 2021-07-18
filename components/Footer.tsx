import { Box, Flex, Stack } from "@chakra-ui/react";
import FooterCopyright from "./FooterCopyright";

const Footer = () => (
  <Box
    display={["flex", "flex", "none", "none"]}
    direction='column'
    justify='center'
    align='center'
    minWidth='100vw'
    height='8vh'
    // backgroundColor='black'
    boxShadow='md'
    paddingY={10}
    paddingX={[2, 2, 8, 8]}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro
    corporis consectetur eveniet, nihil praesentium at inventore, temporibus
    expedita cum culpa repellat alias sapiente, rerum labore unde! Quaerat,
    sapiente suscipit.
    <FooterCopyright />
  </Box>
);

export default Footer;
