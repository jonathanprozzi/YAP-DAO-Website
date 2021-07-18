import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Box minWidth='100vw' minHeight='100vh' bg='red'>
      <Hero />
    </Box>
  );
}
