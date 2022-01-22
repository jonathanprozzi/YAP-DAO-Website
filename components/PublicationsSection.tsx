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
    <Box
      id='publications'
      as='section'
      background='white'
      paddingX={{ base: "4", md: "0" }}
      paddingY={8}
    >
      <Box
        maxW={{ base: "xl", md: "6xl" }}
        marginX={{ base: "0", md: "auto" }}
        paddingX={{ base: "6", md: "10" }}
        paddingY={{ base: "0", md: "12" }}
      >
        <Box marginX='auto' paddingX={{ base: "2", md: "8" }}>
          <Heading
            as='h2'
            size='2xl'
            textAlign='center'
            lineHeight={{ base: "1.2", md: "1" }}
            color='black'
            marginX='auto'
          >
            YAP DAO has landed clients in the following publications
          </Heading>
          <Stack>
            <Text
              as='span'
              fontSize='xl'
              lineHeight={[6, 6, 6, 6]}
              letterSpacing='widest'
              color='black'
              marginTop={2}
              marginBottom={4}
              paddingTop={4}
              paddingBottom={4}
              align='center'
            >
              This is a non-exhaustive list of crypto focused publications where
              we have placed our clients for news stories, features, OpEds, and
              podcast interviews."
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: "4", md: "2", lg: "8" }}
            margin={2}
            alignItems='center'
            justifyItems='center'
          >
            <Publications.Blockworks />
            <Publications.CryptoBriefing />
            <Publications.CryptoCoinShow />
            <Publications.CryptoNews />
            <Publications.Crypto101 />
            <Publications.Decrypt />
            <Publications.TheDefiant />
            <Publications.FranceCrypto />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicationsSection;
