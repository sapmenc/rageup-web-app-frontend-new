import { Button, Flex, Text } from "@chakra-ui/react";
import CardLayout from "../../../../layouts/CardLayout";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";

const RageupTest = () => {
  return (
    <>
      <CardLayout heading="Rageup Test">
        <Flex flexDir={"column"} gap={8}>
          <Flex flexDir={"column"} gap={2}>
            <Text color={"#343434"} fontSize={"xs"}>
              This test is to help the firms determine the ranking of the
              profile for the consideration of an articleship.
            </Text>
            <Text color={"#343434"} fontSize={"xs"}>
              The test can be taken once every month. In order re-take a test
              immediately, please take a subscription.
            </Text>
          </Flex>
          <Button
            alignSelf={"center"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            w="full"
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            maxW={52}
          >
            Take the test
          </Button>
        </Flex>
      </CardLayout>
    </>
  );
};

export default RageupTest;
