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
          >
            Take the test
          </Button>
        </Flex>
      </CardLayout>
    </>
  );
};

export default RageupTest;
