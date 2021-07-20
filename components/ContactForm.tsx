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
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = ({ onClose }) => {
  const [isSending, setSending] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    setSending(false);

    const res = await fetch("/api/create-contact", {
      method: "POST",
      body: JSON.stringify({
        contactName: values.name,
        contactEmail: values.email,
        contactMessage: values.message,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const apiResponse = await res.json();
    if (apiResponse) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      }),
        setSending(false);
      onClose();
    }
  }

  return (
    <Box as='section' py='12'>
      <Box
        textAlign='center'
        bg='gray.800'
        shadow='lg'
        maxW={{ base: "xl", md: "3xl" }}
        mx='auto'
        px={{ base: "6", md: "8" }}
        py='12'
        rounded='lg'
      >
        <Box maxW='md' mx='auto'>
          <Text
            color='brand.blue'
            fontWeight='bold'
            fontSize='sm'
            letterSpacing='wide'
            textTransform='uppercase'
          >
            Reach out to Yap Dao
          </Text>
          <Heading mt='4' fontWeight='extrabold'></Heading>
          <Box mt='6'>
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
                        value: 2,
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
                <FormControl isInvalid={errors.message}>
                  <FormLabel htmlFor='message'>Your Message</FormLabel>
                  <Textarea
                    marginBottom={8}
                    id='message'
                    aria-label='Enter your message'
                    placeholder='Hello YAP DAO!'
                    {...register("message", {
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 2",
                      },
                    })}
                    rounded='base'
                  />
                  <FormErrorMessage>
                    {errors.message && errors.name.message}
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
                  Contact Us Now
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
