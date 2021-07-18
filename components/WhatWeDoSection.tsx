import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";

const WhatWeDoSection = () => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    minWidth='100vw'
    height='100vh'
    backgroundImage="url('/yap-bg-2-scaled.png')"
    backgroundPosition={["20% 0%", "center", "50% 50%", "50% 50%"]}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='flex-start' justifyContent='center'>
      <Grid repeat='repeat(2, 1fr'>
        <Heading
          as='h2'
          fontSize={["20vw", "20vw", "10vw", "10vw"]}
          textTransform='uppercase'
          fontWeight='normal'
          paddingTop='0'
        >
          What We Do
        </Heading>
        <Stack>
          <Box w='100%' h='10' bg='blue.500' />
          <Box w='100%' h='10' bg='blue.500' />
          <Box w='100%' h='10' bg='blue.500' />
          <Box w='100%' h='10' bg='blue.500' />
          <Box w='100%' h='10' bg='blue.500' />
        </Stack>
      </Grid>
    </Flex>
  </Flex>
);

export default WhatWeDoSection;
