import { Flex, Text } from "@chakra-ui/react";

interface FooterCopyrightProps {
  content?: string;
}

const Copyright = ({ content = "YAP DAO" }: FooterCopyrightProps) => (
  <Flex
    direction='row'
    alignItems='center'
    justifyContent='center'
    minWidth='100vw'
    width='100%'
    backgroundColor='black'
    paddingY={6}
  >
    <Text
      bgGradient='linear(to-l, #81e6d9, #d6bcfa)'
      bgClip='text'
      as='span'
      fontSize='lg'
    >
      © {new Date().getFullYear()} {content}
    </Text>
  </Flex>
);

export default Copyright;
