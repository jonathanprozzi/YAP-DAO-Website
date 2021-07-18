import { Flex, Text } from "@chakra-ui/react";

interface FooterCopyrightProps {
  content?: string;
}

const FooterCopyright = ({ content = "YAP DAO" }: FooterCopyrightProps) => (
  <Flex direction='row' minWidth='100vw' width='100%' backgroundColor='black'>
    <Text bgGradient='linear(to-l, #81e6d9, #d6bcfa)' bgClip='text' as='span'>
      © {new Date().getFullYear()} {content}
    </Text>
  </Flex>
);

export default FooterCopyright;
