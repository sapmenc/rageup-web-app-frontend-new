import { CopyIcon } from "@chakra-ui/icons";
import { Divider, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import { RAGE_UP_RED } from "../../../../foundations/colors";

const SessionCard = () => {
  const toast = useToast();
  const isDisabled: boolean = false;
  return (
    <Flex
      color={isDisabled ? "gray.500" : "white"}
      flexDir={"column"}
      maxW={"md"}
      p={2}
      backgroundColor={RAGE_UP_RED}
      rounded={"2xl"}
      fontWeight={"semibold"}
    >
      <Flex w={"100%"} alignItems={"center"} p={2} gap={2}>
        <Text w={"100%"}>Mentor Name</Text>
        <Text textAlign={"center"} w={"100%"}>
          24/10/2023
        </Text>
        <Text textAlign={"end"} w={"100%"}>
          12:30pm
        </Text>
      </Flex>
      <Divider />
      <Flex alignItems={"center"} p={2}>
        <Text w={"100%"}>https://meet.google.com/smy-yavx-vbc</Text>

        <IconButton
          aria-label="copy-btn"
          icon={<CopyIcon />}
          backgroundColor={"transparent"}
          isDisabled={isDisabled}
          color={isDisabled ? "gray.500" : "white"}
          _hover={{
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
          onClick={() => {
            toast({
              title: "Link Copied",
              position: "top",
              status: "success",
              duration: 1000,
              isClosable: true,
              variant: "subtle",
            });
          }}
        />
      </Flex>
    </Flex>
  );
};

export default SessionCard;
