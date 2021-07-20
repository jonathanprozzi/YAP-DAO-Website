import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='white' {...props}>
    <IconButton
      as='a'
      href='#'
      aria-label='GitHub'
      icon={<FaGithub fontSize='20px' />}
      transition='all ease-in-out .25s'
      _hover={{
        color: "brand.blue",
      }}
    />
    <IconButton
      as='a'
      href='https://twitter.com/YAPDAO_'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='20px' />}
      transition='all ease-in-out .25s'
      _hover={{
        color: "brand.blue",
      }}
    />
  </ButtonGroup>
);
export default SocialLinks;
