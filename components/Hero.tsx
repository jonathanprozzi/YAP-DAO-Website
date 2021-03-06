import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface HeroProps {
  heroHeight?: string;
}

const Hero = ({ heroHeight = "100vh" }: HeroProps) => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    minWidth='100vw'
    height='100vh'
    backgroundImage="url('/yap-hero-scaled.png')"
    backgroundPosition={{ base: "30% 10%", md: "50% 50%" }}
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
  >
    <Flex direction='column' alignItems='flex-start' justifyContent='center'>
      <Box
        as='span'
        textTransform='uppercase'
        letterSpacing='wider'
        fontWeight='bold'
        fontFamily='Bebas Neue'
        fontSize={["xl", "xl", "4xl", "4xl"]}
        lineHeight='1rem'
      >
        Introducing
      </Box>
      <Heading
        as='h2'
        fontSize={["20vw", "20vw", "10vw", "10vw"]}
        fontWeight='normal'
        bgGradient='linear(to-r, #23B6FF,#76EFED , #FF4AED)'
        bgClip='text'
        textTransform='uppercase'
        paddingTop='0'
      >
        YAP DAO
      </Heading>
      <Text
        fontSize={["lg", "lg", "4xl", "4xl"]}
        lineHeight={[6, 6, 9, 9]}
        letterSpacing='tighter'
        fontWeight='normal'
        maxWidth='30ch'
        textAlign='right'
      >
        Translating crypto and DeFi for the world.
      </Text>
    </Flex>
  </Flex>
);

export default Hero;
