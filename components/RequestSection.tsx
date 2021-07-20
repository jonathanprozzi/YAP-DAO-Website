import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";

const RequestSection = () => (
  <Box as='section' background='brand.offWhite'>
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      maxWidth='2xl'
      marginX='auto'
      paddingX={{ base: "7", lg: "8" }}
      paddingY={{ base: "16", sm: "20" }}
      textAlign='center'
    >
      <Heading
        as='h2'
        size='3xl'
        fontWeight='extrabold'
        letterSpacing='tight'
        color='black'
      >
        Request our services
      </Heading>
      <Text marginTop='4' fontSize='lg' color='gray.900'>
        YAP DAO is a community that provides public relations and communications
        support to the DeFi world. Request our services for your flourishing
        project.
      </Text>
      <Button
        mt='8'
        as='a'
        href='#'
        size='lg'
        fontWeight='bold'
        color='brandBlue.700'
        colorScheme='brandBlue'
        transition='all ease-in-out .25s'
      >
        Request Services
      </Button>
    </Flex>
  </Box>
);

export default RequestSection;
