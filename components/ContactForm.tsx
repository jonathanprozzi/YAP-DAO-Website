import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box as='section' bg={mode("gray.100", "gray.700")} py='12'>
      <Box
        textAlign='center'
        bg={mode("white", "gray.800")}
        shadow='lg'
        maxW={{ base: "xl", md: "3xl" }}
        mx='auto'
        px={{ base: "6", md: "8" }}
        py='12'
        rounded='lg'
      >
        <Box maxW='md' mx='auto'>
          <Text
            color={mode("green.600", "green.400")}
            fontWeight='bold'
            fontSize='sm'
            letterSpacing='wide'
          >
            6,000+ PEOPLE ALREADY JOINED ❤️️
          </Text>
          <Heading mt='4' fontWeight='extrabold'>
            Get new products every month on your inbox!
          </Heading>
          <Box mt='6'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // your subscribe logic here
              }}
            >
              <Stack>
                <Input
                  aria-label='Enter your email'
                  placeholder='Enter your email to join'
                  rounded='base'
                />
                <Button
                  type='submit'
                  w='full'
                  colorScheme='blue'
                  size='lg'
                  textTransform='uppercase'
                  fontSize='sm'
                  fontWeight='bold'
                >
                  Join now
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
