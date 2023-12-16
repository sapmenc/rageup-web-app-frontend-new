import { Button, Flex, Text } from "@chakra-ui/react";
import CardLayout from "../../../../layouts/CardLayout";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { withCookies } from "react-cookie";
import { startRageUpTest } from "../../../../api/rageUpTest";
import { toast } from "react-toastify";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
import Loader from "../../../../components/Loader";

const RageupTest = (props: any) => {
  const token = props.cookies.get("authToken");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);

  const testInvokation = async () => {
    setIsLoading(true);
    console.log(token);
    try {
      const res = await startRageUpTest({}, token);
      if (res.status === 200) {
        // redirect to test page based on test id in the response
      } else {
        toast.error("Some expected error");
      }
    } catch (err: any) {
      if (err.response.status === 402) {
        // open payment modal
        console.log("entering");
        setIsLoading(false);
        setIsPaymentModalOpen(true);
      }
      console.log(toast.error("Error occurred! Try again."));
    }
    setIsLoading(false);
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
