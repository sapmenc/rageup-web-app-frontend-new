import React, { useState } from "react";
import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TopicCard from "./components/TopicCard";
import CoursePurchaseModal from "./modals/CoursePurchase";

const CourseDetailPage = () => {
  const [isCoursePurchaseModalOpen, setIsCoursePurchaseModalOpen] =
    useState<boolean>(false);
  return (
    <>
      {isCoursePurchaseModalOpen && (
        <CoursePurchaseModal
          onClose={() => {
            setIsCoursePurchaseModalOpen(false);
          }}
        />
      )}
      <PageLayout>
        <FieldCheckLayout>
          <Flex justifyContent={"center"}>
            <Flex
              flexDirection={"column"}
              py={2}
              px={4}
              gap={4}
              w={"full"}
              maxW={"2xl"}
            >
              {/* Course Heading */}
              <Heading>Test Heading</Heading>
              <Flex flexDirection={"column"} gap={3}>
                {[1, 1, 1, 1, 1, 1].map((_, key) => {
                  return (
                    <Box
                      key={key}
                      onClick={() => {
                        setIsCoursePurchaseModalOpen(true);
                      }}
                    >
                      <TopicCard />
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </FieldCheckLayout>
      </PageLayout>
    </>
  );
};

export default CourseDetailPage;
