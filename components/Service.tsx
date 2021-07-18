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
    >
      <Box fontSize='6xl'>{icon}</Box>
      <Stack spacing='1'>
        <Text fontWeight='extrabold' fontSize='lg' color='brand.green'>
          {title}
        </Text>

        <Box>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default Feature;
