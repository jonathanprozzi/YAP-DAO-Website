import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const AboutSection = () => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    minWidth='100vw'
    minHeight='60vh'
    background='white'
  >
    <Heading color='black'>Join YAP DAO</Heading>
    <Text color='black'>
      Join our army of crypto translators as we write and share stories about
      emerging blockchain projects!
    </Text>
    <Button variant='outline' colorScheme='cyan'>
      Join YAP DAO
    </Button>
  </Flex>
);

export default AboutSection;
