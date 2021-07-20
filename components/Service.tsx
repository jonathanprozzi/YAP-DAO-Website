import { Box, Stack, Text } from "@chakra-ui/react";

interface ServiceProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
}

const Feature = ({ title, children, icon }: ServiceProps) => {
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Box fontSize='6xl'>{icon}</Box>
      <Stack
        spacing='1'
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Text fontWeight='extrabold' fontSize='lg' color='brand.green'>
          {title}
        </Text>

        <Box maxW={{ base: "30ch", md: "80ch" }}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default Feature;
