import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../../foundations/colors";
import { deleteArticleshipHistory } from "../../../../../api/articleshipHistory";

interface DeleteModalProps {
  historyId: any;
  token: any;
  isOpen: boolean;
  onClose: () => void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  historyId,
  token,
}) => {
  const toast = useToast();
  const handleDelete = () => {
    deleteArticleshipHistory(historyId, token)
      .then(function () {
        toast({
          title: "Articleship history delete successfully",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        onClose();
        window.location.reload();
      })
      .catch(function (error) {
        toast({
          title: "Error in Articleship history deletion",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
        onClose();
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Articleship History</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete this articleship history?
        </ModalBody>

        <ModalFooter justifyContent={"space-between"} pt={8}>
          <Button
            px={8}
            color={"white"}
            bgColor={RAGE_UP_RED}
            _hover={{
              bgColor: RAGE_UP_RED_HOVER,
            }}
            rounded={"full"}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button minW={32} variant="ghost">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
