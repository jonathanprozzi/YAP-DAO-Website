import { LinkProps, Link, Text, useColorModeValue } from "@chakra-ui/react";

interface Props extends LinkProps {
  href?: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const ProjectSocialLink = (props: Props) => {
  const { href, children, icon: SocialIcon, ...rest } = props;
  return (
    <Link
      flex='1'
      display='flex'
      py='3'
      alignItems='center'
      justifyContent='center'
      fontWeight='bold'
      fontSize='sm'
      isExternal
      color={useColorModeValue("blue.600", "blue.300")}
      href={href}
      _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
      {...rest}
    >
      <SocialIcon aria-hidden />
      <Text ms='2'>{children}</Text>
    </Link>
  );
};

export default ProjectSocialLink;
