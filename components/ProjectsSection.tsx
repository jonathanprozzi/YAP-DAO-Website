import {
  Box,
  Grid,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import Project from "./Project";
import { projects } from "./_projectData";

const ProjectsSection = () => (
  <Box id='projects' as='section' background='black'>
    <Box
      maxW={{ base: "xl", md: "6xl" }}
      marginX='auto'
      paddingX={{ base: "6", md: "10" }}
      //   py={{ base: "12", md: "20" }}

      paddingTop={20}
      paddingBottom={20}
    >
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        marginBottom={{ base: "4", md: "8" }}
      >
        <Heading
          as='h2'
          size='3xl'
          fontWeight='extrabold'
          letterSpacing='tight'
          color='brand.offWhite'
        >
          Our Projects
        </Heading>
        <Text marginTop='4' fontSize='xl' maxW='2xl' color='whiteAlpha.800'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr" }}
        gap={{ base: "8", md: "12", lg: "16" }}
        maxWidth='4xl'
        paddingX={{ base: "6", md: "8" }}
        marginX={{ base: "2", md: "auto" }}
      >
        <SimpleGrid
          marginTop={{ base: "8", md: "0" }}
          columns={{ base: 1, md: 2 }}
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
      </Grid>
    </Box>
  </Box>
);

export default ProjectsSection;
