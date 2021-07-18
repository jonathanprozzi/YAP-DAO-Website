import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  IconButton,
  VisuallyHidden,
  Icon,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

const Navbar: React.FC = () => {
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
              <VisuallyHidden>
                <Heading as='h1' size='md' color='white'>
                  YAP DAO
                </Heading>
              </VisuallyHidden>
              <AspectRatio maxW='50px' width='50px' height='50px' ratio={1 / 1}>
                <Image
                  src='/yap-nav-logo.png'
                  alt='YAPDAO Logo'
                  objectFit='cover'
                  width='50px'
                  height='50px'
                />
              </AspectRatio>
            </Flex>
          </a>
        </Link>
        <Flex direction='row' align='center' justify='center'>
          <Link href='/' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
            >
              <Text
                fontSize='lg'
                color='brand.white'
                marginRight={4}
                transition='all ease-in-out .25s'
                _hover={{
                  color: "brand.green",
                }}
              >
                About
              </Text>
            </ChakraLink>
          </Link>
          <Link href='/services' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
            >
              <Text
                fontSize='lg'
                color='brand.white'
                marginRight={4}
                transition='all ease-in-out .25s'
                textDecoration='none'
                _hover={{
                  color: "brand.green",
                }}
              >
                Services
              </Text>
            </ChakraLink>
          </Link>
          <Link href='/contact' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
            >
              <Text
                fontSize='lg'
                color='brand.white'
                marginRight={4}
                transition='all ease-in-out .25s'
                _hover={{
                  color: "brand.green",
                }}
              >
                Contact
              </Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
