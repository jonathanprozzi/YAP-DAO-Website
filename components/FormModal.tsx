import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  title: string;
  content: React.ReactElement;
  isOpen?: boolean;
  onClose?: () => void;
}

const FormModal: React.FC<Props> = (props) => {
  const { title, content, isOpen, onClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModal;
