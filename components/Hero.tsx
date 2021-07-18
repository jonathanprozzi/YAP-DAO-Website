import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface HeroProps {
  heroHeight?: string;
}

const Hero = ({ heroHeight = "100vh" }: HeroProps) => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    height='100vh'
    backgroundImage="url('/yap-hero-scaled.png')"
    backgroundPosition='50% 50%'
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
    minWidth='100vw'
  >
    <Flex direction='column' alignItems='flex-start' justifyContent='center'>
      <Box
        as='span'
        textTransform='uppercase'
        letterSpacing='wide'
        fontWeight='bold'
        fontFamily='Bebas Neue'
        fontSize='4xl'
        lineHeight='1rem'
      >
        Introducing
      </Box>
      <Heading
        fontSize='10vw'
        // bgGradient='linear(to-l, #81e6d9, #d6bcfa)'
        bgGradient='linear(to-r, #7E02FC, #23B6FF, #76EFED)'
        bgClip='text'
        textTransform='uppercase'
        paddingTop='0'
      >
        YAP DAO
      </Heading>
      <Text
        fontSize='2xl'
        lineHeight={7}
        fontWeight='bold'
        maxWidth='30ch'
        textAlign='right'
      >
        To bridge the communication gap between technology and the mainstream
        world.
      </Text>
    </Flex>
  </Flex>
);

export default Hero;
