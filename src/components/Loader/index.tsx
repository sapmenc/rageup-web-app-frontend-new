import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface LoaderProps {
  message: string;
}
const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <Modal isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex gap={3}>
            <Spinner color="red.500" />
            <Text>{message}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Loader;
