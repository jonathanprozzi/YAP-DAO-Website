import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
  UnorderedList,
  ListItem,
  FormErrorMessage,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const JoinUsForm = ({ onClose }) => {
  const [isSending, setSending] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    setSending(false);

    const res = await fetch("/api/create-join-us", {
      method: "POST",
      body: JSON.stringify({
        contactName: values.name,
        contactEmail: values.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const apiResponse = await res.json();
    if (apiResponse) {
      toast({
        title: "Join Request Sent",
        description: "Your join request has been sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      }),
        setSending(false);
      onClose();
    }
  }

  return (
    <Box as='section'>
      <Box
        bg='gray.800'
        shadow='lg'
        maxW={{ base: "xl", md: "3xl" }}
        marginX='auto'
        paddingX={{ base: "6", md: "8" }}
        paddingY='6'
        rounded='lg'
      >
        <Box maxW='md' marginX='auto'>
          <Text color='brand.blue' fontWeight='bold' letterSpacing='wide'>
            Request our services for your flourishing project.
          </Text>
          <Heading mt='4' fontWeight='extrabold'></Heading>
          <Box marginY='6'>
            <UnorderedList>
              <ListItem>500 DAI membership pledge </ListItem>
              <ListItem>Shares represent ownership</ListItem>
              <ListItem>At least one of the following:</ListItem>
              <UnorderedList>
                <ListItem>PR/Comms experience</ListItem>
                <ListItem>DAO/crypto experience</ListItem>
                <ListItem>
                  Enthusiasm and a willingness to learn in either of the above
                  areas
                </ListItem>
              </UnorderedList>
            </UnorderedList>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack marginTop={6}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor='name'>First name</FormLabel>
                  <Input
                    id='name'
                    aria-label='Enter your name'
                    placeholder='Enter your name'
                    {...register("name", {
                      required: "Your name is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 2",
                      },
                    })}
                    rounded='base'
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    id='email'
                    aria-label='Enter your email'
                    placeholder='Enter your email to join'
                    {...register("email", {
                      required: "Your email is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 2",
                      },
                    })}
                    rounded='base'
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  isLoading={isSubmitting}
                  type='submit'
                  w='full'
                  colorScheme='brandGreen'
                  size='md'
                  textTransform='uppercase'
                  fontSize='sm'
                  fontWeight='bold'
                >
                  Join now
                </Button>
              </Stack>
            </form>
            <Text color='gray.400' fontSize='sm' marginTop='5'>
              <Box aria-hidden display='inline-block' fontSize='lg' />
              Potential members who don’t have the minimum financial pledge can
              work their way into the DAO via sweat equity. This will be managed
              on a case-by-base basis.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUsForm;
