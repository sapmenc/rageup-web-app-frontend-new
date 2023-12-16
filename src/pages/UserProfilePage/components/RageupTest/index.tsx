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
  useToast,
} from "@chakra-ui/react";
import CardLayout from "../../../../layouts/CardLayout";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { withCookies } from "react-cookie";
import { startRageUpTest } from "../../../../api/rageUpTest";
import { useState } from "react";
import Loader from "../../../../components/Loader";

const RageupTest = (props: any) => {
  const token = props.cookies.get("authToken");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const toast = useToast();

  const handlePayment = async () => {
    setIsPaymentModalOpen(false);
    const onSuccess = () => {
      // set isRageupTestPaid = true
      // then

      toast({
        title: "Payment successful",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      testInvokation();
    };
    const onFail = () => {
      toast({
        title: "Payment failed",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    };

    const paymentStatus: boolean = true;
    if (paymentStatus) {
      onSuccess();
    } else {
      onFail();
    }
  };

  const testInvokation = async () => {
    setIsLoading(true);
    console.log(token);
    try {
      const res = await startRageUpTest({}, token);
      if (res.status === 200) {
        // redirect to test page based on test id in the response
      } else {
        toast({
          title: "Some expected error",
          description: "",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err: any) {
      if (err.response.status === 402) {
        // open payment modal
        setIsLoading(false);
        setIsPaymentModalOpen(true);
      } else {
        toast({
          title: "Error occurred! Try again.",
          description: "",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    setIsLoading(false);
  };
  interface PaymentModalProps {
    onClose: () => void;
  }
  const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
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

  return (
    <>
      {isLoading && <Loader message="Loading..." />}
      {isPaymentModalOpen && (
        <PaymentModal
          onClose={() => {
            setIsPaymentModalOpen(false);
          }}
        />
      )}
      <CardLayout heading="Rageup Test">
        <Flex flexDir={"column"} gap={8}>
          <Flex flexDir={"column"} gap={2}>
            <Text color={"#343434"} fontSize={"xs"}>
              The Rageup test is a form of evaluation that measures your
              critical thinking and problem-solving skills.
            </Text>
            <Text color={"#343434"} fontSize={"xs"}>
              Take this test to increase your chances of being hired by the best
              CA firms.
            </Text>
          </Flex>
          <Button
            alignSelf={"center"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            w="full"
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            maxW={52}
            onClick={testInvokation}
          >
            Take the test
          </Button>
        </Flex>
      </CardLayout>
    </>
  );
};

export default withCookies(RageupTest);
