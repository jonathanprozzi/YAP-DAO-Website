import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Center,
  Flex,
  Stack,
} from "@chakra-ui/react";
import * as Publications from "./Publications";

const PublicationsSection = () => {
  return (
    <Box id='publications' as='section' background='white'>
      <Box
        maxW={{ base: "xl", md: "8xl" }}
        marginX={{ base: "10vw", md: "auto" }}
        paddingX={{ base: "6", md: "10" }}
        paddingY={{ base: "0", md: "12" }}
      >
        <Box mx='auto' px={{ base: "6", md: "8" }}>
          <Heading as='h2' textAlign='center' color='black' marginX='auto'>
            YAP DAO has landed clients in the following publications:
          </Heading>
          <Stack>
            <Text
              as='span'
              fontSize='2xl'
              lineHeight={[6, 6, 6, 6]}
              letterSpacing='widest'
              color='black'
              marginTop={4}
              paddingTop={4}
              align='center'
            >
              This is a non-exhaustive list of crypto focused publications where
              we have placed our clients for news stories, features, OpEds, and
              podcast interviews.
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 7 }}
            spacing={{ base: "0", md: "2", lg: "4" }}
            margin={2}
            alignItems='center'
            justifyItems='center'
          >
            <Publications.TheDefiant />
            <Publications.Decrypt />
            <Publications.Blockworks />
            <Publications.CryptoBriefing />
            <Publications.CryptoCoinShow />
            <Publications.Crypto101 />
            <Publications.CryptoNews />
            <Publications.FranceCrypto />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicationsSection;
