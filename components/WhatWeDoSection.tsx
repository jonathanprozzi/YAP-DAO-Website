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
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    minWidth='100vw'
    minHeight='100vh'
    bgGradient='linear(#ffffff 0%, #d8b3fe 25%, brand.green 50%)'
    backgroundImage="url('/yap-bg-2-scaled.png')"
    // backgroundImage="url('/yap-banner.png')"
    backgroundPosition={["20% 0%", "center", "50% 50%", "50% 50%"]}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='flex-start' justifyContent='center'>
      <Grid templateColumns='repeat(2, 1fr)' gap={16} alignItems='center'>
        <Flex>
          <Heading
            as='h2'
            color='brand.green'
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
            <ListItem fontSize='2xl'>Time Management'</ListItem>
            <ListItem fontSize='2xl'>Networking</ListItem>
            <ListItem fontSize='2xl'>Adapatability</ListItem>
          </UnorderedList>
        </Stack>
      </Grid>
    </Flex>
  </Flex>
);

export default WhatWeDoSection;
