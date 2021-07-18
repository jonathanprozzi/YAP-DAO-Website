import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Flex
      as='nav'
      direction='column'
      justify='center'
      align='center'
      minWidth='100vw'
      height='8vh'
      bg='black'
      position='sticky'
      boxShadow='md'
      paddingY={8}
      paddingX={[2, 2, 8, 8]}
    >
      <Flex
        direction='row'
        justify='space-around'
        align='center'
        width={["100vw", "100vw", "80vw", "80vw"]}
        paddingX={[7, 4, 6, 8]}
      >
        <Link href='/' passHref>
          <a>
            <Flex direction='row' align='center'>
              <Heading as='h1' size='md' color='white'>
                YAP DAO
              </Heading>
            </Flex>
          </a>
        </Link>
        <Flex direction='row' align='center' justify='center'>
          <Link href='/' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
            >
              <Text fontSize='lg' color='white' marginRight={4}>
                About
              </Text>
            </ChakraLink>
          </Link>
          <Link href='/services' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
            >
              <Text fontSize='lg' color='white' marginRight={4}>
                Services
              </Text>
            </ChakraLink>
          </Link>

          <Link href='/contact' passHref>
            <ChakraLink>
              <Text fontSize='lg' color='white' marginRight={4}>
                Contact
              </Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
