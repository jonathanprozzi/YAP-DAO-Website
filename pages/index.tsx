import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import JoinSection from "../components/JoinSection";
import RequestSection from "../components/RequestSection";
import ServicesSection from "../components/ServicesSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh'>
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <ServicesSection />
      <RequestSection />
      <JoinSection />
    </Box>
  );
}
