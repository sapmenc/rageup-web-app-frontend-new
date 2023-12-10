import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";

const SpecificSubjectPage = () => {
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"} position={"relative"}>
          <Button
            display={{ lg: "none" }}
            bottom={20}
            position={"fixed"}
            zIndex={9999}
            minW={40}
            size={"lg"}
            rounded={"full"}
            fontSize={"lg"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            onClick={() => {}}
          >
            Take a Test
          </Button>
          <Flex
            flexDirection={"column"}
            pt={10}
            pb={{ base: 16, lg: 2 }}
            px={4}
            gap={4}
            w={"full"}
            maxW={"2xl"}
          >
            {/* Course Heading */}
            <Heading fontSize={"2xl"}>Course Heading</Heading>
            <Heading fontSize={"lg"}>Subject heading</Heading>
            <Flex flexDirection={"column"} gap={8}>
              {[1, 1, 1, 1].map((_, key) => {
                return <Topic />;
              })}
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} mt={4}>
              <Button
                display={{ base: "none", lg: "block" }}
                zIndex={9999}
                minW={60}
                size={"lg"}
                rounded={"full"}
                fontSize={"xl"}
                backgroundColor={RAGE_UP_RED}
                color={"white"}
                _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                onClick={() => {}}
              >
                Take a Test
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default SpecificSubjectPage;

const Topic = () => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={2}>
      <Text fontWeight={"semibold"} textAlign={"center"}>
        Introduction to Excel
      </Text>
      <Box
        rounded={"lg"}
        w={"90vw"}
        maxW={"md"}
        aspectRatio={16 / 9}
        border={"solid 1px black"}
      ></Box>
    </Flex>
  );
};
