import { Flex, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { RAGE_UP_RED } from "../../foundations/colors";

const RefundPolicyPage = () => {
  return (
    <PageLayout>
      <Flex justifyContent={"center"} w={"full"}>
        <Flex w="full" px={20} maxW={"6xl"} flexDir={"column"} py={20} gap={10}>
          <Heading size={"2xl"} color={RAGE_UP_RED} textAlign={"center"}>
            Refund Policy
          </Heading>
          <Flex flexDir={"column"} gap={5}>
            <Text textAlign={"center"}>
              Payments for the services offered by RageUp shall be on a 100%
              advance basis. Refund, if any will be at the sole discretion of
              RageUp. RageUp offers no guarantees whatsoever for the accuracy or
              timeliness of the refunds reaching the Customers card/bank
              accounts. All is on a best effort basis and liability is limited
              to refund of amount only.
            </Text>
            <Text textAlign={"center"}>
              We do not issue refunds for non-tangible irrevocable goods
              ("digital products") once the order is confirmed and the product
              is sent.
            </Text>
            <Text textAlign={"center"}>
              We recommend contacting us for assistance if you experience any
              issues receiving or downloading our products.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default RefundPolicyPage;
