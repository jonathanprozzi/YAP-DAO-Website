import { Stack, Text, AspectRatio, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <AspectRatio maxW='50px' width='50px' height='50px' ratio={1 / 1}>
        <Image
          src='/yap-nav-logo.png'
          alt='YAPDAO Logo'
          objectFit='cover'
          width='50px'
          height='50px'
        />
      </AspectRatio>
      <Text as='span'>YAP DAO</Text>
    </Stack>
  );
};

export default Logo;
