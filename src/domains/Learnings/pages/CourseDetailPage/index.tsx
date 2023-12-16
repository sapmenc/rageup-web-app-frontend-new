import { useEffect, useState } from "react";
import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import SubjectCard from "./components/SubjectCard";
import CoursePurchaseModal from "./modals/CoursePurchase";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../../../api/course";
import { CourseType } from "../../types";

export const EMPTY_COURSE: CourseType = {
  _id: "null",
  name: null,
  subjects: [],
};

const CourseDetailPage = () => {
  const [isPurchased, setIsPurchased] = useState<boolean>(true);
  const [course, setCourse] = useState<CourseType | null>(null);
  const [isCoursePurchaseModalOpen, setIsCoursePurchaseModalOpen] =
    useState<boolean>(false);
  const toast = useToast();
  const { id } = useParams();
  const fetchCourseData = async () => {
    try {
      const res = await getCourseById(id);
      if (res.status === 200) {
        toast({
          title: "Course details fetched.",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCourse(res?.data?.data || EMPTY_COURSE);
      } else {
        // error
        toast({
          title: "Error",
          description: "Unexpected status occurred, course detail not fetched.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    } catch {
      toast({
        title: "Error",
        description: "Error in fetching course.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  };
  useEffect(() => {
    fetchCourseData();
  }, []);

  if (!course) {
    return null;
  }
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
                {course.name}
              </Heading>
              <Flex flexDirection={"column"} gap={3}>
                {course?.subjects.map((subject, _) => {
                  return (
                    <Box
                      key={subject._id}
                      onClick={() => {
                        if (!isPurchased) {
                          setIsCoursePurchaseModalOpen(true);
                        }
                      }}
                    >
                      <SubjectCard
                        isPurchased={isPurchased}
                        courseId={course?._id || ""}
                        subjectId={subject._id || ""}
                        name={subject.name || ""}
                        description={subject.description || ""}
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
