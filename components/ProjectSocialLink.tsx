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
      paddingY='3'
      alignItems='center'
      justifyContent='center'
      fontWeight='bold'
      fontSize='sm'
      isExternal
      href={href}
      color='gray.700'
      transition='all ease-in-out .25s'
      _hover={{ color: "brand.purple" }}
      {...rest}
    >
      <SocialIcon aria-hidden />
      <Text ms='2'>{children}</Text>
    </Link>
  );
};

export default ProjectSocialLink;
