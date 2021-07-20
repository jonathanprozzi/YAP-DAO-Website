import { Flex, Text } from "@chakra-ui/react";

const Copyright = ({ content = "YAP DAO" }) => (
  <Flex
    direction='row'
    alignSelf={{ base: "center", sm: "start" }}
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
