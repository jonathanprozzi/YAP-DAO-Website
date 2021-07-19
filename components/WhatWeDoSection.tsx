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
      backgroundPosition={{ base: "20% 0%", md: "20% 60%" }}
      backgroundSize='auto'
      backgroundRepeat='no-repeat'
    >
      <Flex direction='column' alignItems='flex-start' justifyContent='center'>
        <Grid templateColumns='repeat(2, 1fr)' gap={16} alignItems='center'>
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
          <Stack color='brand.offwhite'>
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
