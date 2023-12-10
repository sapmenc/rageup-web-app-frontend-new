import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StringInput from "../../../../../components/inputs/StringInput";
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../../foundations/colors";

interface CoursePurchaseModalProps {
  onClose: () => void;
}
const CoursePurchaseModal: React.FC<CoursePurchaseModalProps> = ({
  onClose,
}) => {
  const [subscriptionCode, setSubscriptionCode] = useState<string | null>(null);
  return (
    <Modal isOpen={true} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>MS Office Tools</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"} gap={2}>
            <Text>
              Please enter your subscription code in the box below, if any.
            </Text>
            <Flex gap={3}>
              <StringInput
                value={subscriptionCode}
                onChange={setSubscriptionCode}
                rounded={"full"}
                placeholder="Subscription Code"
              />
              <Button
                alignSelf={"center"}
                backgroundColor={RAGE_UP_RED}
                color={"white"}
                w="full"
                _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                maxW={"fit-content"}
                size={"sm"}
                rounded={"full"}
              >
                Verify
              </Button>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter py={6}>
          <Flex justifyContent={"flex-end"} gap={5} alignItems={"center"}>
            <Button
              alignSelf={"center"}
              backgroundColor={RAGE_UP_RED}
              color={"white"}
              w="full"
              _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
              maxW={"32"}
              size={"lg"}
              rounded={"full"}
            >
              Checkout
            </Button>
            <Text
              whiteSpace={"nowrap"}
              fontSize={"xl"}
              fontWeight={"bold"}
            >{`₹ ${500}`}</Text>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CoursePurchaseModal;
