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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  const mobileNav = useDisclosure();
  return (
    <Flex
      as='nav'
      direction='row'
      justifyContent='center'
      alignItems='center'
      minWidth='100vw'
      position='sticky'
      boxShadow='md'
      top='0'
      zIndex='1000'
      background='black'
      height='12vh'
      paddingY={4}
      paddingX={[2, 2, 8, 8]}
    >
      <Flex
        direction='row'
        justifyContent='space-between'
        align='center'
        width={["100vw", "100vw", "100vw", "100vw"]}
        paddingX={[7, 4, 6, 8]}
      >
        <Link href='/' passHref>
          <a>
            <Flex direction='row' alignItems='center'>
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
        <IconButton
          display={{ base: "flex", md: "none" }}
          size='sm'
          aria-label='Open menu'
          fontSize='20px'
          variant='ghost'
          onClick={mobileNav.onOpen}
          icon={<HamburgerIcon />}
        />
        <MobileNavbar isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
          <Stack spacing={5}>
            <Box direction='row' align='center' justify='center'>
              <Link href='/#about' passHref>
                <ChakraLink textDecoration='none' marginRight={4}>
                  <Text
                    fontSize='lg'
                    color='brand.white'
                    transition='all ease-in-out .25s'
                    _hover={{
                      color: "brand.green",
                    }}
                  >
                    About
                  </Text>
                </ChakraLink>
              </Link>
              <Link href='/projects' passHref>
                <ChakraLink
                  // display={["none", "none", "inline-flex", "inline-flex"]}
                  textDecoration='none'
                  marginRight={4}
                >
                  <Text
                    fontSize='lg'
                    color='brand.white'
                    transition='all ease-in-out .25s'
                    textDecoration='none'
                    _hover={{
                      color: "brand.green",
                    }}
                  >
                    Projects
                  </Text>
                </ChakraLink>
              </Link>
              <Link href='#whatwedo' passHref>
                <ChakraLink
                  // display={["none", "none", "inline-flex", "inline-flex"]}
                  textDecoration='none'
                  marginRight={4}
                >
                  <Text
                    fontSize='lg'
                    color='brand.white'
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
                  // display={["none", "none", "inline-flex", "inline-flex"]}
                  textDecoration='none'
                  marginRight={4}
                >
                  <Text
                    fontSize='lg'
                    color='brand.white'
                    transition='all ease-in-out .25s'
                    _hover={{
                      color: "brand.green",
                    }}
                  >
                    Contact
                  </Text>
                </ChakraLink>
              </Link>
            </Box>
          </Stack>
        </MobileNavbar>
        <Box
          direction='row'
          align='center'
          justify='center'
          display={{ base: "none", md: "flex" }}
        >
          <Link href='/#about' passHref>
            <ChakraLink
              // display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
              marginRight={4}
            >
              <Text
                fontSize='lg'
                color='brand.white'
                transition='all ease-in-out .25s'
                _hover={{
                  color: "brand.green",
                }}
              >
                About
              </Text>
            </ChakraLink>
          </Link>
          <Link href='/projects' passHref>
            <ChakraLink
              // display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
              marginRight={4}
            >
              <Text
                fontSize='lg'
                color='brand.white'
                transition='all ease-in-out .25s'
                textDecoration='none'
                _hover={{
                  color: "brand.green",
                }}
              >
                Projects
              </Text>
            </ChakraLink>
          </Link>
          <Link href='#whatwedo' passHref>
            <ChakraLink
              // display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
              marginRight={4}
            >
              <Text
                fontSize='lg'
                color='brand.white'
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
              // display={["none", "none", "inline-flex", "inline-flex"]}
              textDecoration='none'
              marginRight={4}
            >
              <Text
                fontSize='lg'
                color='brand.white'
                transition='all ease-in-out .25s'
                _hover={{
                  color: "brand.green",
                }}
              >
                Contact
              </Text>
            </ChakraLink>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
