import React from "react";
import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const SpecificSubjectPage = () => {
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"}>
          <Flex
            flexDirection={"column"}
            pt={10}
            pb={2}
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
