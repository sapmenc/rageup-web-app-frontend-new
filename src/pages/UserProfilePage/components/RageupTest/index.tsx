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
import { updateUserProfile } from "../../../../api/user";
import { useNavigate } from "react-router-dom";

const RageupTest = (props: any) => {
  const navigate = useNavigate();
  const userId = props.cookies.get("user")?._id;
  const token = props.cookies.get("authToken");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const toast = useToast();

  const setRageUpTestPaid = async (isPaid: boolean): Promise<boolean> => {
    try {
      const res = await updateUserProfile(
        userId,
        { isRageUpTestPaid: isPaid },
        token
      );
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  };
  const handlePayment = async () => {
    setIsPaymentModalOpen(false);
    const onSuccess = async () => {
      toast({
        title: "Payment successful",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // set isRageupTestPaid = true
      let count = 0;
      let isUpdateSuccessful = false;

      while (!isUpdateSuccessful && count < 3) {
        isUpdateSuccessful = await setRageUpTestPaid(true);
        count++;
      }
      if (!isUpdateSuccessful) {
        toast({
          title: "Aborting Purchase",
          description: "User Rage up paid status not changing.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      } else {
        console.log("successful updation");
        testInvokation();
      }
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
        const testId = res?.data?.test?._id || "noID";
        navigate(`/rageupTest/${testId}`);
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
          <ModalHeader>Test Restricted</ModalHeader>
          <ModalCloseButton />
          <ModalBody>You can give the test once in a month.</ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={handlePayment}>
              Pay Rs 500
            </Button> */}
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
