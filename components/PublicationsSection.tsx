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
        maxW={{ base: "xl", md: "7xl" }}
        marginX={{ base: "20vw", md: "auto" }}
        paddingX={{ base: "6", md: "10" }}
        paddingTop={{ base: "0", md: "4" }}
      >
        <Box mx='auto' px={{ base: "6", md: "8" }}>
          <Heading as='h2' textAlign='center' color='black' marginX='auto'>
            YAP DAO clients have been featured in these publications
          </Heading>
          <Stack>
            <Text
              as='span'
              fontSize='2xl'
              lineHeight={[6, 6, 6, 6]}
              letterSpacing='widest'
              color='black'
              marginTop={2}
              paddingTop={4}
              align='center'
            >
              Our services have...
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 6 }}
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
            <Publications.FranceCrypto />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicationsSection;
