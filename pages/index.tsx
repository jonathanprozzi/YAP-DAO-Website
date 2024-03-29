import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import JoinSection from "../components/JoinSection";
import RequestSection from "../components/RequestSection";
import ServicesSection from "../components/ServicesSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import PublicationsSection from "../components/PublicationsSection";
import Transitioning from "../components/Transitioning";

export default function Home() {
  return (
    // <Box minWidth="100vw" minHeight="100vh">
    <Box>
      <Transitioning />
      {/* <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ProjectsSection />
      <JoinSection />
      <PublicationsSection /> */}
    </Box>
  );
}
