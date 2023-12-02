import PageLayout from "../../../../layouts/PageLayout";
import { Avatar, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { useEffect, useState } from "react";
import PaymentModal from "./modals/PaymentModal";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import useAuth from "../../../../hooks/useAuth";

const MentorBookingPage = () => {
  useAuth();
  const [price, setPrice] = useState<number>(500);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const onProceedToPay = () => {
    setIsPaymentModalOpen(true);
  };
  useEffect(() => {
    // make query to get mentor session price
    setPrice(500);
  }, []);
  return (
    <PageLayout>
      <FieldCheckLayout>
        <>
          {isPaymentModalOpen && (
            <PaymentModal
              isOpen={isPaymentModalOpen}
              onClose={() => {
                setIsPaymentModalOpen(false);
              }}
              price={price}
            />
          )}
          <Flex
            justifyContent={"center"}
            pt={10}
            pb={{
              base: 20,
              lg: 0,
            }}
            position={"relative"}
          >
            <Flex
              flexDirection={"column"}
              py={2}
              px={4}
              gap={10}
              w={"full"}
              maxW={"2xl"}
              alignItems={"center"}
            >
              {/* mentor name */}
              <Heading size="lg" textAlign={"center"}>
                Mentor Name
              </Heading>

              <Flex
                flexDir={"column"}
                gap={14}
                alignItems={"center"}
                w={"100%"}
              >
                {/* mentor details */}
                <Flex flexDir={"column"} gap={8} alignItems={"center"}>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Flex flexDir={"column"} alignItems={"center"}>
                    <Text fontSize="md">Strategic Consulting</Text>
                    <Text fontSize="md">Valuation</Text>
                  </Flex>
                  <Flex flexDir={"column"} alignItems={"center"} gap={4}>
                    <Text textAlign={"center"}>
                      Charges per session will incur as you book a slot with
                      this mentor. Please select a specific date and time from
                      the available options to book your slot.
                    </Text>
                    <Text fontWeight={"bold"} textAlign={"center"}>
                      45 Minutes/session
                    </Text>
                  </Flex>
                </Flex>

                {/* Proceed to PAy */}
                {!isPaymentModalOpen && (
                  <Button
                    display={"flex"}
                    gap={20}
                    justifyContent={"space-between"}
                    zIndex={9999}
                    minW={"fit-content"}
                    size={"lg"}
                    rounded={"full"}
                    fontSize={"xl"}
                    backgroundColor={RAGE_UP_RED}
                    color={"white"}
                    _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                    onClick={onProceedToPay}
                  >
                    <Text>Proceed to pay</Text>
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default MentorBookingPage;
