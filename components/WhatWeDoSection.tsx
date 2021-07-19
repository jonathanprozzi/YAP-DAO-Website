import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";

const WhatWeDoSection = () => (
  <Box as='section' id='whatwedo'>
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      minWidth='100vw'
      minHeight='50vh'
      backgroundImage="url('/yap-glow-banner-no-shapes.png')"
      backgroundPosition={{ base: "10% 30%", md: "20% 60%" }}
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
    >
      <Flex direction='column' alignItems='flex-start' justifyContent='center'>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: "4", md: "16" }}
          alignItems='center'
        >
          <Flex>
            <Heading
              as='h2'
              color='brand.offwhite'
              fontSize={["20vw", "20vw", "10vw", "10vw"]}
              textTransform='uppercase'
              fontWeight='normal'
              paddingTop='0'
            >
              What We Do
            </Heading>
          </Flex>
          <Stack
            color='brand.offwhite'
            paddingBottom={{ base: "8", md: "0" }}
            alignItems='center'
          >
            <UnorderedList>
              <ListItem fontSize='2xl'>Communication</ListItem>
              <ListItem fontSize='2xl'>Organization</ListItem>
              <ListItem fontSize='2xl'>Time Management</ListItem>
              <ListItem fontSize='2xl'>Networking</ListItem>
              <ListItem fontSize='2xl'>Adapatability</ListItem>
            </UnorderedList>
          </Stack>
        </Grid>
      </Flex>
    </Flex>
  </Box>
);

export default WhatWeDoSection;
