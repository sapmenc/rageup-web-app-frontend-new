import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface PaymentModalProps {
  onClose: () => void;
}
const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const handlePayment = () => {};
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Payment required to give test.</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handlePayment}>
            Pay Rs 500
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
