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
  useDisclosure,
} from "@chakra-ui/react";

const RequestUsForm = () => {
  const formModal = useDisclosure();

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
            Request our services for your flourishing project.
          </Text>
          <Heading mt='4' fontWeight='extrabold'></Heading>
          <Box marginY='6'>
            YAP DAO is a community that provides public relations and
            communications support to the DeFi world. Reach out to us for Public
            Relations Services, Media Training, Content Production, and/or
            Consultancy Services.
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
                  placeholder='Enter your contact email'
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
                  Send Request
                </Button>
              </Stack>
            </form>
            <Text color='gray.400' fontSize='sm' marginTop='5'>
              <Box aria-hidden display='inline-block' fontSize='lg' />
              Provide your name and email address and someone on our team will
              contact you with next steps.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestUsForm;
