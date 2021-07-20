import { Box, Flex, Img, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { FaLinkedinIn, FaDesktop } from "react-icons/fa";
import ProjectSocialLink from "./ProjectSocialLink";

interface Props {
  logo: string;
  name: string;
  services: string;
  twitter?: string;
  website?: string;
  children: React.ReactNode;
}

export const Member = (props: Props) => {
  const { logo, name, services, twitter, website, children } = props;
  return (
    <Flex
      direction='column'
      bg={useColorModeValue("white", "gray.700")}
      shadow={useColorModeValue("base", "none")}
    >
      <Box p='6' flex='1'>
        <Img
          float='right'
          alt={name}
          w='16'
          h='16'
          rounded='lg'
          objectFit='cover'
          src={logo}
          zIndex='1'
        />
        <Box mt='2'>
          <Text fontWeight='bold'>{name}</Text>
          <Text
            color={useColorModeValue("gray.500", "whiteAlpha.700")}
            fontWeight='medium'
            fontSize='sm'
          >
            {services}
          </Text>
        </Box>
        <Text
          color={useColorModeValue("gray.600", "whiteAlpha.800")}
          maxW={{ base: "unset", md: "20rem" }}
          mt='6'
        >
          {children}
        </Text>
      </Box>
      <Flex align='center' spacing='5' borderTopWidth='1px'>
        <ProjectSocialLink icon={FaDesktop} href={twitter} borderEndWidth='1px'>
          Twitter
        </ProjectSocialLink>
        <ProjectSocialLink icon={FaLinkedinIn} href={website}>
          Website
        </ProjectSocialLink>
      </Flex>
    </Flex>
  );
};
