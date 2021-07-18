import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import JoinSection from "../components/JoinSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh'>
      <Hero />
      <WhatWeDoSection />
      <JoinSection />
    </Box>
  );
}
