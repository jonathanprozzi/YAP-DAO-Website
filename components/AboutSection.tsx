import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Button,
  Img,
} from "@chakra-ui/react";

const AboutSection = () => (
  <>
    <Box
      id='about'
      as='section'
      backgroundColor='black'
      // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2376efed' fill-opacity='0.2'%3E%3Cpath opacity='.3' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      backgroundImage={`url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032c-.188-.318-.334-.665-.428-1.032zM18 4.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874c1.406-.362 2.512-1.468 2.874-2.874zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36 22.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712c.362-1.406 1.468-2.512 2.874-2.874zm-18 18V21.414L3.414 36h11.712c.362-1.406 1.468-2.512 2.874-2.874zM4.874 20h11.712L2 34.586V22.874c1.406-.362 2.512-1.468 2.874-2.874z' fill='%237e02fc' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");`}
      backgroundPosition='center'
    >
      <Box maxW='6xl' mx='auto' paddingY='8' paddingX={{ base: "6", md: "10" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX='10'
          spacingY={{ base: "8", md: "14" }}
          alignItems='center'
          justifyContent='center'
        >
          <Flex direction='column' alignItems='center' justifyContent='center'>
            <Heading
              as='h3'
              color='brand.green'
              paddingBottom={{ base: "2", md: "3" }}
            >
              About Us
            </Heading>
            <Text>
              YAP DAO is a community that provides public relations and
              communications support to the DeFi world. It is a service
              marketplace for non-technical people to get work in a technical
              field.
            </Text>
          </Flex>
          <Box flex='1' maxW='400px' h={{ base: "300px", md: "360px" }}>
            <Img
              alt=''
              w='full'
              h='full'
              objectFit='cover'
              objectPosition='center'
              src='/yap-cube.png'
            />
          </Box>
          <Box flex='1' maxW='400px' h={{ base: "300px", md: "360px" }}>
            <Img
              alt=''
              w='full'
              h='full'
              objectFit='cover'
              objectPosition='center'
              src='/yap-torus.png'
            />
          </Box>
          <Flex direction='column' alignItems='center' justifyContent='center'>
            <Heading
              as='h3'
              color='brand.green'
              paddingBottom={{ base: "2", md: "3" }}
            >
              Our Mission
            </Heading>
            <Text>
              YAP DAOs mission is to bridge the communication gap between
              emerging technology and the mainstream world.
            </Text>
            <br />
            <Text>
              YAP DAO provides essential and supportive services to help other
              DAOs tell their stories, and communicate their message on a global
              scale.
            </Text>
          </Flex>
          <Flex direction='column' alignItems='center' justifyContent='center'>
            <Heading
              as='h3'
              color='brand.green'
              paddingBottom={{ base: "2", md: "3" }}
            >
              Why YAP DAO?
            </Heading>
            <Text>
              The DeFi industry is lacking communicators, marketers, content
              creators, social media managers, designers among other
              non-technical support. Without effective communicators who can
              provide guidance on how to shape discourse in an effective and
              productive way, the DeFi ecosystem risks becoming an echo chamber.
            </Text>
          </Flex>
          <Box flex='1' maxW='400px' h={{ base: "300px", md: "360px" }}>
            <Img
              alt=''
              w='full'
              h='full'
              objectFit='cover'
              objectPosition='center'
              src='/yap-disc.png'
            />
          </Box>
          {/* <Box flex='1' maxW='400px' h={{ base: "300px", md: "360px" }}>
          <Img
            alt=''
            w='full'
            h='full'
            objectFit='cover'
            objectPosition='right'
            src='/yap-connector.png'
          />
        </Box>
        <Flex direction='column' alignItems='center' justifyContent='center'>
          <Heading as='h3'>Our Mission</Heading>
          YAP DAO provides essential and supportive services to help other DAOs
          tell their stories, and communicate their message on a global scale.
        </Flex> */}
        </SimpleGrid>
      </Box>
    </Box>
  </>
);

export default AboutSection;
