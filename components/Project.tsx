import { Box, Flex, Img, Text, useColorModeValue } from "@chakra-ui/react";
import internal from "node:stream";
import { FaTwitter, FaDesktop } from "react-icons/fa";
import ProjectSocialLink from "./ProjectSocialLink";

interface Props {
  logo: string;
  name: string;
  services: string;
  twitter?: string;
  website?: string;
  children: React.ReactNode;
}

export const Project = (props: Props) => {
  const { logo, name, services, twitter, website, children } = props;
  return (
    <Flex
      direction='column'
      backgroundColor='brand.offWhite'
      boxShadow='lg'
      rounded='md'
      maxWidth={{ base: "15rem", md: "20rem" }}
    >
      <Box padding={6}>
        <Img
          alt={name}
          rounded='lg'
          objectFit='cover'
          src={logo}
          maxHeight='75px'
          zIndex='1'
        />
        <Box>
          <Text fontWeight='bold' color='gray.900' marginTop={4}>
            {name}
          </Text>
          <Text color='gray.900' fontWeight='medium' fontSize='sm'>
            {services}
          </Text>
        </Box>
        <Text
          color='gray.900'
          maxW={{ base: "unset", md: "40rem" }}
          marginTop='6'
        >
          {children}
        </Text>
      </Box>
      <Flex
        align='start'
        spacing='5'
        borderTop='1px solid'
        borderColor='brandPurple.50'
      >
        <ProjectSocialLink icon={FaTwitter} href={twitter} borderEndWidth='1px'>
          Twitter
        </ProjectSocialLink>
        <ProjectSocialLink icon={FaDesktop} href={website}>
          Website
        </ProjectSocialLink>
      </Flex>
    </Flex>
  );
};

export default Project;
