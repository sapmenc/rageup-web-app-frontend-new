import { useState } from "react";
import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import SubjectCard from "./components/SubjectCard";
import CoursePurchaseModal from "./modals/CoursePurchase";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";

const CourseDetailPage = () => {
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const courseId = "1";
  const subjectId = "2";
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
          <Flex justifyContent={"center"} position={"relative"}>
            {!isPurchased && (
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
                onClick={() => {
                  setIsCoursePurchaseModalOpen(true);
                }}
              >
                Purchase this Course
              </Button>
            )}
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
              <Heading fontSize={"2xl"} mb={2}>
                Course Heading
              </Heading>
              <Flex flexDirection={"column"} gap={3}>
                {[1, 1, 1, 1, 1, 1].map((_, key) => {
                  return (
                    <Box
                      key={key}
                      onClick={() => {
                        if (!isPurchased) {
                          setIsCoursePurchaseModalOpen(true);
                        }
                      }}
                    >
                      <SubjectCard
                        isPurchased={isPurchased}
                        courseId={courseId}
                        subjectId={subjectId}
                      />
                    </Box>
                  );
                })}
              </Flex>
              {/* purchase */}
              {!isPurchased && (
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
                    onClick={() => {
                      setIsCoursePurchaseModalOpen(true);
                    }}
                  >
                    Purchase this Course
                  </Button>
                </Flex>
              )}
            </Flex>
          </Flex>
        </FieldCheckLayout>
      </PageLayout>
    </>
  );
};

export default CourseDetailPage;
