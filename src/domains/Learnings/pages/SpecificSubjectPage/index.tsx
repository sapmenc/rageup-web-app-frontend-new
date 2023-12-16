import PageLayout from "../../../../layouts/PageLayout";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../../../api/course";
import { EMPTY_COURSE } from "../CourseDetailPage";
import { CourseType, SubjectType } from "../../types";
import VideoPlayer from "../../../../components/video_utils/VideoPlayer";
import { decrypt } from "../../../../helpers/security/encryption";

const SpecificSubjectPage = () => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [subject, setSubject] = useState<SubjectType | null>(null);

  const toast = useToast();
  const { id, sid } = useParams();
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
        const thisCourse: CourseType = res?.data?.data || EMPTY_COURSE;
        setCourse(thisCourse);
        setSubject(
          thisCourse?.subjects.find((subject) => subject._id === sid) || null
        );
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
  if (!course || !subject) {
    return null;
  }
  console.log("subject", subject);
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"} position={"relative"}>
          {/* Test */}
          {/* <Button
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
          </Button> */}
          <Flex
            flexDirection={"column"}
            pt={10}
            pb={{ base: 16, lg: 2 }}
            px={4}
            gap={6}
            w={"full"}
            maxW={"2xl"}
          >
            {/* Course Heading */}
            <Heading fontSize={"2xl"}>{course.name}</Heading>
            <Heading fontSize={"lg"}>{subject.name}</Heading>
            <Flex flexDirection={"column"} gap={20}>
              {subject.topics.map((topic, key) => {
                return (
                  <Box key={key}>
                    <Topic name={topic.name} videoLink={topic.videoLink} />
                  </Box>
                );
              })}
            </Flex>
            {/* TEST */}
            {/* <Flex alignItems={"center"} justifyContent={"center"} mt={4}>
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
            </Flex> */}
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default SpecificSubjectPage;

interface TopicProps {
  name: string | null;
  videoLink: string;
}
const Topic: React.FC<TopicProps> = ({ name, videoLink }) => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={2}>
      <Text fontWeight={"semibold"} textAlign={"center"}>
        {name}
      </Text>
      <Text></Text>
      <Flex justifyContent={"center"}>
        <VideoPlayer videoLink={decrypt(videoLink)} />
      </Flex>
    </Flex>
  );
};
