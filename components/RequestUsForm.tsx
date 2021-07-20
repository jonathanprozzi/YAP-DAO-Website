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

const RequestUsForm = ({ onClose }) => {
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
        title: "Request Sent",
        description: "Your request has been sent",
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
            Entry is permissioned upon meeting the following requirements:
          </Text>
          <Heading mt='4' fontWeight='extrabold'></Heading>
          <Box marginY='6'>
            YAP DAO is a community that provides public relations and
            communications support to the DeFi world. Reach out to us for Public
            Relations Services, Media Training, Content Production, and/or
            Consultancy Services.
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
              Provide your name and email address and someone on our team will
              contact you with next steps.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestUsForm;
