import {
  Box,
  Grid,
  Flex,
  Heading,
  Link as ChakraLink,
  HStack,
  SimpleGrid,
  Text,
  Button,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Project from "./Project";
import { projects } from "./_projectData";
import FormModal from "./FormModal";
import RequestUsForm from "./RequestUsForm";

const ProjectsSection = () => {
  const formModal = useDisclosure();
  return (
    <Box id='projects' as='section' background='brand.offWhite'>
      <Box
        maxW={{ base: "xl", md: "6xl" }}
        marginX='auto'
        paddingX={{ base: "6", md: "10" }}
        //   py={{ base: "12", md: "20" }}

        paddingTop={20}
        paddingBottom={20}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 24rem" }}
          gap={{ base: "8", md: "12", lg: "16" }}
          maxWidth='6xl'
          paddingX={{ base: "6", md: "8" }}
          marginX={{ base: "2", md: "auto" }}
        >
          <SimpleGrid
            marginTop={{ base: "8", md: "0" }}
            columns={{ base: 1, md: 2 }}
            spacing='10'
          >
            {projects.map((project, index) => (
              <Project
                key={index}
                logo={project.logo}
                services={project.services}
                name={project.name}
                twitter={project.twitter}
                website={project.website}
              >
                {project.description}
              </Project>
            ))}
            <Flex
              direction='column'
              backgroundColor='brand.offWhite'
              boxShadow='lg'
              rounded='lg'
              alignItems='center'
              justifyContent='center'
              display={{ base: "none", md: "flex" }}
              maxWidth={{ base: "15rem", md: "20rem" }}
            >
              <Flex
                padding={6}
                direction='column'
                alignItems='center'
                justifyContent='center'
              >
                <Flex
                  direction='column'
                  marginTop='2'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Heading
                    as='span'
                    bgGradient='linear(to-r, brand.green, brand.blue, brand.purple)'
                    bgClip='text'
                  >
                    Your DAO Project
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </SimpleGrid>
          <Flex
            direction='column'
            alignItems='center'
            justifyContent='flex-start'
          >
            <Heading
              as='h2'
              size='3xl'
              fontWeight='extrabold'
              letterSpacing='tight'
              color='gray.900'
            >
              Our Projects
            </Heading>
            <Text marginTop='4' fontSize='xl' maxW='2xl' color='blackAlpha.800'>
              YAP DAO is a community that provides public relations and
              communications support to the DeFi world. Request our services for
              your flourishing project.
            </Text>
            <ChakraLink
              isExternal
              href='https://airtable.com/shr8BREIAget4GFmr'
              _hover={{ textDecoration: "none" }}
            >
              <Button
                mt='8'
                size='lg'
                width='100%'
                fontWeight='bold'
                color='brandBlue.700'
                colorScheme='brandBlue'
                transition='all ease-in-out .25s'
                // onClick={formModal.onOpen}
              >
                Request Services
              </Button>
            </ChakraLink>
            {/* <FormModal
              title='Request Services'
              isOpen={formModal.isOpen}
              onClose={formModal.onClose}
              content={<RequestUsForm onClose={formModal.onClose} />}
            ></FormModal> */}
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
};
export default ProjectsSection;
