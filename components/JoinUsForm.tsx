import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const JoinUsForm = () => {
  return (
    <Box as='section'>
      <Box
        bg='gray.800'
        shadow='lg'
        maxW={{ base: "xl", md: "3xl" }}
        marginX='auto'
        paddingX={{ base: "6", md: "8" }}
        paddingY='6'
        rounded='lg'
      >
        <Box maxW='md' marginX='auto'>
          <Text color='brand.blue' fontWeight='bold' letterSpacing='wide'>
            Entry is permissioned upon meeting the following requirements:
          </Text>
          <Heading mt='4' fontWeight='extrabold'></Heading>
          <Box marginY='6'>
            <UnorderedList>
              <ListItem>500 DAI membership pledge </ListItem>
              <ListItem>Shares represent ownership</ListItem>
              <ListItem>At least one of the following:</ListItem>
              <UnorderedList>
                <ListItem>PR/Comms experience</ListItem>
                <ListItem>DAO/crypto experience</ListItem>
                <ListItem>
                  Enthusiasm and a willingness to learn in either of the above
                  areas
                </ListItem>
              </UnorderedList>
            </UnorderedList>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // your subscribe logic here
              }}
            >
              <Stack marginTop={6}>
                <Input
                  aria-label='Enter your name'
                  placeholder='Enter your name'
                  rounded='base'
                />
                <Input
                  aria-label='Enter your email'
                  placeholder='Enter your email to join'
                  rounded='base'
                />
                <Button
                  type='submit'
                  w='full'
                  colorScheme='brandGreen'
                  size='md'
                  textTransform='uppercase'
                  fontSize='sm'
                  fontWeight='bold'
                >
                  Join now
                </Button>
              </Stack>
            </form>
            <Text color='gray.400' fontSize='sm' marginTop='5'>
              <Box aria-hidden display='inline-block' fontSize='lg' />
              Potential members who don’t have the minimum financial pledge can
              work their way into the DAO via sweat equity. This will be managed
              on a case-by-base basis.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUsForm;
