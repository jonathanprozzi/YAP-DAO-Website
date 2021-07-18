import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const JoinSection = () => {
  return (
    <Box as='section' backgroundColor='gray.900'>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        marginX='auto'
        paddingX={{ base: "6", md: "8" }}
        paddingY='12'
      >
        <Flex
          align='center'
          justify='center'
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box flex='1' maxW='400px'>
            <Heading size='2xl' fontWeight='extrabold' color='brand.green'>
              Ready to join the YAP DAO army?
            </Heading>
            <Stack mt={{ base: "8", md: "16" }} spacing='4'>
              <Text
                fontSize='lg'
                fontWeight='medium'
                color={useColorModeValue("gray.600", "inherit")}
                mt='6'
              >
                Join our army of crypto translators as we write and share
                stories about emerging blockchain projects!
              </Text>
              <Text
                fontSize='lg'
                fontWeight='medium'
                color={useColorModeValue("gray.600", "inherit")}
                mt='6'
              >
                Join our army of crypto translators as we write and share
                stories about emerging blockchain projects!
              </Text>
            </Stack>

            <Stack
              mt={{ base: "8", md: "16" }}
              spacing='4'
              fontWeight='extrabold'
            >
              <Button
                variant='outline'
                color='brand.green'
                borderColor='brand.green'
              >
                Join us
              </Button>
            </Stack>
          </Box>

          <Box
            aria-hidden
            className='spacer'
            flexShrink={0}
            boxSize={{ base: "10", xl: "20" }}
          />

          <Box flex='1' maxW='560px' h={{ base: "400px", md: "460px" }}>
            <Img
              alt='Call center'
              w='full'
              h='full'
              objectFit='cover'
              objectPosition='right'
              src='/yap-globe.png'
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default JoinSection;
