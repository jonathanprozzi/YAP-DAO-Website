import { Box, Flex, Heading, Stack, Text, Img } from "@chakra-ui/react";

const Transitioning = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    minH="100vh"
  >
    <Box
      as="span"
      textTransform="uppercase"
      letterSpacing="wider"
      fontWeight="bold"
      fontFamily="Bebas Neue"
      // fontSize={["xl", "xl", "4xl", "4xl"]}
      fontSize={{ base: "2xl", lg: "4xl" }}
      lineHeight="4rem"
    >
      YAP DAO is now Story Guild
    </Box>
    <Text
      // fontSize={["lg", "lg", "4xl", "4xl"]}
      fontSize={{ base: "2xl", md: "4xl" }}
      lineHeight={[6, 6, 9, 9]}
      letterSpacing="tighter"
      fontWeight="normal"
      maxWidth="30ch"
      textAlign="right"
    >
      Coming Soon
    </Text>
    <Box
      maxW={{ base: "400px", lg: "600px" }}
      h={{ base: "300px", md: "360px" }}
    >
      <Img
        src="/sg-logo.svg"
        alt="Story Guild Logo"
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  </Flex>
);

export default Transitioning;
